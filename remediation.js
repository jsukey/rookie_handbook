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
// REMEDIATION DECK: DYNAMIC DATA AGGREGATOR
// ==========================================

const MODULE_DATA_REGISTRY = {
  "Department Orientation": "departmentOrientationData",
  "Accountability System": "firefighterAccountabilitySystemData",
  "Building Construction": "buildingConstructionData",
  "Fire Behavior": "fireBehaviorData",
  "Air Management": "airManagementData",
  "ems operations": "emsOperationsData", // Matches your DB exactly
  "PPE": "ppeData",
  "SCBA": "scbaData",
  "RIT": "ritData",
  "Radio Communications": "radioCommunicationsData",
  "Self Rescue": "selfRescueData",
  "Apparatus Familiarization": "apparatusFamiliarizationData",
  "Forcible Entry": "forcibleEntryData",
  "Tools and Equipment": "toolsAndEquipmentData",
  "Search": "searchData",
  "Engine Company Operations": "engineCompanyOperationsData"
};

function buildMasterQuestionPool() {
  window.allModuleQuestions = [];
  
  const rawData = localStorage.getItem('userProgress');
  const userProgress = JSON.parse(rawData) || [];

  userProgress.forEach(record => {
    const score = parseFloat(record.completion);
    
    // If module is 100% complete
    if (score >= 100 || score === 1 || record.completion === "100%") {
      
      const varName = MODULE_DATA_REGISTRY[record.module];
      
      // DYNAMIC FETCH: Look for the variable name directly in the browser's window object
      if (varName && window[varName] && Array.isArray(window[varName])) {
        const taggedQuestions = window[varName].map(q => {
          return { ...q, topic: record.module };
        });
        window.allModuleQuestions = window.allModuleQuestions.concat(taggedQuestions);
      } else {
        console.warn(`Could not load array for: ${record.module}. Variable ${varName} missing or empty.`);
      }
    }
  });

  console.log(`Master pool dynamically built! Questions: ${window.allModuleQuestions.length}`);
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

// ==========================================
// FETCH EXAM HISTORY FROM DATABASE
// ==========================================

function fetchExamHistory() {
  // 1. Paste your Google Apps Script Webhook URL here
  const API_URL = "'https://script.google.com/macros/s/AKfycbwCAzBmW3amcvETJFzKvUH_i-Oi5ZBXnGmwLHOmjue9gwQk8CeGMxf85aFeNZXOXGpDig/exec'; "; 
  
  const userString = localStorage.getItem('activeUser');
  if (!userString) return; // Not logged in
  
  const activeUser = JSON.parse(userString);

  // 2. Fetch the data from your Code.gs getDashboardData route
  fetch(`${API_URL}?action=getDashboardData`)
    .then(response => response.json())
    .then(data => {
      if (data && data.testScores) {
        // Filter the database so it only holds THIS recruit's test scores
        window.currentStudentTestScores = data.testScores.filter(t => String(t.studentId) === String(activeUser.id));
        
        console.log(`Loaded ${window.currentStudentTestScores.length} past exams for priority routing.`);
        
        // Silently build the pool now that we have the data, updating the "0 High Priority" text
        buildMasterQuestionPool();
        generateFlashcardPool(); 
      }
    })
    .catch(err => console.error("Error fetching exam history:", err));
}

// 3. Trigger this fetch silently in the background as soon as the dashboard loads
document.addEventListener("DOMContentLoaded", () => {
  fetchExamHistory();
});