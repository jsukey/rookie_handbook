// ==========================================
// REMEDIATION DECK: 7-DAY HALF-LIFE ENGINE
// ==========================================

let currentFlashcardBatch = [];
let currentCardIndex = 0;

/**
 * Calculates priority based on total misses and 7-day time decay.
 */
function calculateQuestionPriority(questionId, testScores) {
  let baseScore = 0;
  let latestMissDate = null;

  // 1. Calculate Base Score and find the most recent miss
  testScores.forEach(test => {
    try {
      const missedArray = JSON.parse(test.missedQuestionsData || "[]");
      const missedItem = missedArray.find(q => String(q.id) === String(questionId));
      
      if (missedItem) {
        baseScore += 1; // Add a point for every time they missed it
        const testDate = new Date(test.dateAdministered);
        if (!latestMissDate || testDate > latestMissDate) {
          latestMissDate = testDate;
        }
      }
    } catch(e) { console.error("Error parsing missed questions", e); }
  });

  // 2. If never missed, priority is 0
  if (baseScore === 0 || !latestMissDate) return 0;

  // 3. Apply 7-Day Half-Life Formula
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - latestMissDate);
  const daysElapsed = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
  const HALF_LIFE_DAYS = 7;
  const currentPriority = baseScore * Math.pow(0.5, (daysElapsed / HALF_LIFE_DAYS));
  
  return currentPriority;
}

/**
 * Builds the deck, sorts by priority, and prepares the 10-card batch.
 */
function generateFlashcardPool() {
  // NOTE: Replace `window.allModuleQuestions` with how you currently 
  // aggregate your [module]_data.js arrays in engine.js
  let activePool = [...window.allModuleQuestions]; 
  
  const testScores = window.currentStudentTestScores || [];

  // 1. Assign priority scores to all active questions
  activePool.forEach(question => {
    question.priorityScore = calculateQuestionPriority(question.id, testScores);
  });

  // 2. Sort the array (Highest priority first)
  activePool.sort((a, b) => {
    // If scores are equal (e.g., both 0), randomize them
    if (a.priorityScore === b.priorityScore) {
       return 0.5 - Math.random(); 
    }
    return b.priorityScore - a.priorityScore;
  });

  // 3. Slice the top 10 for the current drill
  currentFlashcardBatch = activePool.slice(0, 10);
  
  // Update Dashboard UI
  const pendingHighPriority = activePool.filter(q => q.priorityScore > 0.5).length;
  document.getElementById('deck-status').innerText = `You have ${pendingHighPriority} high-priority concepts requiring review.`;
}
// ==========================================
// REMEDIATION DECK: DATA AGGREGATOR
// ==========================================

window.allModuleQuestions = [];

/**
 * Maps the Database Module Names to the client-side array variables
 * Update the `arrayVariable` names to match exactly what you named 
 * the arrays inside your respective [module]_data.js files.
 */
const MODULE_DATA_REGISTRY = {
  "Department Orientation": { arrayVariable: window.departmentOrientationData },
  "Firefighter Accountability System": { arrayVariable: window.firefighterAccountabilitySystemData },
  "Building Construction": { arrayVariable: window.buildingConstructionData },
  "Fire Behavior": { arrayVariable: window.fireBehaviorData },
  "Air Management": { arrayVariable: window.airManagementData },
  "EMS Operations": { arrayVariable: window.emsOperationsData },
  "PPE": { arrayVariable: window.ppeData },
  "SCBA": { arrayVariable: window.scbaData },
  "RIT": { arrayVariable: window.ritData },
  "Radio Communications": { arrayVariable: window.radioCommunicationsData },
  "Self Rescue": { arrayVariable: window.selfRescueData },
  "Apparatus Familiarization": { arrayVariable: window.apparatusFamiliarizationData },
  "Forcible Entry": {arrayVariable: window.forcibleEntryData },
  "Tools and Equipment": {arrayVariable: window.toolsAndEquipmentData },
  "Search": {arrayVariable: window.searchData},
  "Engine Company Operations": {arrayVariable: window.engineCompanyOperationsData}
};

/**
 * Sweeps the user's progress and builds the master question pool.
 * Only includes questions from modules where completion == 100.
 */
function buildMasterQuestionPool() {
  // Clear the array to prevent duplication if called multiple times
  window.allModuleQuestions = [];
  
  // 1. Get the current user's progress from localStorage or your global state
  // (Adjust this variable to match how you currently store the logged-in user's progress)
  const userProgress = JSON.parse(localStorage.getItem('userProgress')) || [];

  // 2. Loop through progress, find completed modules, and concatenate their data
  userProgress.forEach(record => {
    // Only pull questions if they have fully completed the module
    if (parseFloat(record.completion) >= 100) {
      
      const moduleName = record.module; // e.g., "Fire Behavior"
      const mappedModule = MODULE_DATA_REGISTRY[moduleName];

      if (mappedModule && mappedModule.arrayVariable) {
        // Tag each question with its parent module name for the UI, then push to the master pool
        const taggedQuestions = mappedModule.arrayVariable.map(q => {
          return {
            ...q,
            topic: moduleName // Injects the topic string so the flashcard knows what category it is
          };
        });
        
        window.allModuleQuestions = window.allModuleQuestions.concat(taggedQuestions);
      } else {
        console.warn(`Could not find data array for completed module: ${moduleName}`);
      }
    }
  });

  console.log(`Master pool built. Total available questions: ${window.allModuleQuestions.length}`);
}

// ==========================================
// FLASHCARD UI CONTROLS
// ==========================================

function startFlashcardSession() {
  generateFlashcardPool();
  if (currentFlashcardBatch.length === 0) {
    alert("No active questions available. Complete a module first.");
    return;
  }
  
  currentCardIndex = 0;
  document.getElementById('flashcard-modal').style.display = 'flex';
  renderCurrentCard();
}

function renderCurrentCard() {
  const card = currentFlashcardBatch[currentCardIndex];
  
  // Reset Flip State
  document.getElementById('active-flashcard').classList.remove('flipped');
  document.getElementById('btn-next-card').disabled = true;

  // Populate Data
  document.getElementById('card-topic-display').innerText = card.topic || "General Review";
  document.getElementById('card-question-display').innerText = card.question;
  document.getElementById('card-answer-display').innerText = card.correctAnswer;
  document.getElementById('card-coaching-display').innerText = card.coachingNote || "Review standard operating guidelines.";
}

function flipCard() {
  document.getElementById('active-flashcard').classList.add('flipped');
  // Unlock the Next button only after they read the back
  document.getElementById('btn-next-card').disabled = false; 
}

function nextCard() {
  currentCardIndex++;
  
  if (currentCardIndex >= currentFlashcardBatch.length) {
    alert("Batch Complete! Great work. Take a breather.");
    closeFlashcards();
    generateFlashcardPool(); // Recalculate for the next batch
  } else {
    renderCurrentCard();
  }
}

function closeFlashcards() {
  document.getElementById('flashcard-modal').style.display = 'none';
}