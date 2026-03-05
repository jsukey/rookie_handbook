// --- Application State ---
let currentModuleId = 0;
let unlockedModules = [0];
let currentQuizIndex = 0; 
let audioPlayer; 

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize audio player safely after DOM load
    audioPlayer = document.getElementById('lesson-audio'); 
    if (!audioPlayer) {
        // Fallback headless audio object if the HTML tag is missing
        audioPlayer = new Audio();
    }
    
    init();
});

function init() {
    renderSidebar();
    loadModule(currentModuleId);
    
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

    // We add a quick check to make sure we don't accidentally create two buttons
    if (sidebar && !document.querySelector('.sidebar-home-btn')) {
        const homeBtn = document.createElement('a');
        homeBtn.href = '../index.html'; // Points back to the dashboard
        homeBtn.className = 'sidebar-home-btn';
        homeBtn.innerHTML = '⬅ Back to Dashboard';
        
        // Prepend puts it at the very top of the sidebar
        sidebar.prepend(homeBtn);
    }

    menuToggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('open');
        menuToggle.classList.toggle('active');
        overlay.classList.toggle('visible', isOpen);
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        menuToggle.classList.remove('active');
        overlay.classList.remove('visible');
    });

    btnNext.addEventListener('click', () => {
        if(currentModuleId < lessonData.length - 1) {
            currentModuleId++;
            
            // If they are seeing this slide for the first time, unlock it and sync!
            if (!unlockedModules.includes(currentModuleId)) {
                unlockedModules.push(currentModuleId);
                syncProgress(); // <--- This sends the data to the Google Sheet
            }
            
            loadModule(currentModuleId);
        }
    });

    btnPrev.addEventListener('click', () => {
        if(currentModuleId > 0) {
            currentModuleId--;
            loadModule(currentModuleId);
        }
    });
    
    // NOTE: The global audio error listener was removed from here. 
    // It was causing the ghost error when the module switched.
}

function renderSidebar() {
    const navLinksContainer = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    navLinksContainer.innerHTML = '';
    lessonData.forEach((mod, index) => {
        const li = document.createElement('li');
        li.className = `nav-item ${index === currentModuleId ? 'active' : ''}`;
        
        if (!unlockedModules.includes(index)) {
            li.classList.add('locked');
        } else if (unlockedModules.includes(index) && index < Math.max(...unlockedModules)) {
            li.classList.add('completed');
        }

        li.textContent = mod.title.split(':')[0] || 'Final Exam';

        li.addEventListener('click', () => {
            if (unlockedModules.includes(index)) {
                currentModuleId = index;
                loadModule(currentModuleId);
                if(window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    menuToggle.classList.remove('active');
                    overlay.classList.remove('visible');
                }
            }
        });
        navLinksContainer.appendChild(li);
    });

    const progressBar = document.getElementById('progress-bar');
    const progress = (Math.max(...unlockedModules) / (lessonData.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;
}

function loadModule(id) {
    const mod = lessonData[id];
    currentQuizIndex = 0; 
    renderSidebar();
    window.scrollTo(0, 0);

    if (audioPlayer) {
        audioPlayer.pause();
        // Fix: Use removeAttribute instead of src="" to prevent browser MediaErrors
        audioPlayer.removeAttribute('src'); 
        audioPlayer.load();
    }

    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    btnPrev.classList.toggle('hidden', id === 0);
    
    if (mod.isExam) {
        btnNext.classList.add('hidden');
        renderExam();
    } else {
        btnNext.classList.remove('hidden');
        btnNext.classList.toggle('disabled', id === Math.max(...unlockedModules));
        renderContent(mod);
    }
}

function renderContent(mod) {
    const contentWrapper = document.getElementById('content-wrapper');
    contentWrapper.innerHTML = `
        <h1 class="module-title">${mod.title}</h1>
        <div class="audio-control-container" id="audio-toggle">
            <svg class="play-icon" id="audio-icon" viewBox="0 0 24 24">
                <path id="play-path" d="M8 5v14l11-7z"/>
            </svg>
            <span class="audio-text" id="audio-status">Loading audio...</span>
        </div>
        <div class="module-text">${mod.text}</div>
        
        <div class="quiz-section" id="quiz-container">
            <h3>Quick Check</h3>
            <div id="quiz-question-wrapper"></div>
        </div>
    `;

    const audioToggle = document.getElementById('audio-toggle');
    const audioPath = document.getElementById('play-path');
    const audioStatus = document.getElementById('audio-status');

    if (audioPlayer) {
        // 1. Assign source and begin loading immediately
        audioPlayer.src = `../audio/module_${mod.id}.mp3`;
        audioPlayer.load();

        // 2. Reactive Event: Audio is successfully found and ready
        audioPlayer.oncanplay = () => {
            if (audioPlayer.paused) {
                audioStatus.textContent = "Listen to Module";
            }
            audioToggle.style.opacity = '1';
            audioToggle.style.pointerEvents = 'auto';
        };

        // 3. Reactive Event: Audio file actually does not exist
        audioPlayer.onerror = () => {
            audioStatus.textContent = "Audio Not Available";
            audioToggle.style.opacity = '0.5';
            audioToggle.style.pointerEvents = 'none'; // Disable clicking
        };

        // 4. Reactive Event: Audio finished playing
        audioPlayer.onended = () => {
            audioStatus.textContent = "Listen Again";
            audioPath.setAttribute("d", "M8 5v14l11-7z");
        };

        // 5. Click Handler
        audioToggle.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play().catch(e => console.error("Playback failed:", e));
                audioStatus.textContent = "Pause Lesson";
                audioPath.setAttribute("d", "M6 19h4V5H6v14zm8-14v14h4V5h-4z");
            } else {
                audioPlayer.pause();
                audioStatus.textContent = "Resume Lesson";
                audioPath.setAttribute("d", "M8 5v14l11-7z");
            }
        });
    }

    // Render Quiz if it exists
    if (mod.quickCheck && mod.quickCheck.length > 0) {
        displayQuizQuestion(mod);
    } else {
        // Hide quiz container if module has no questions
        document.getElementById('quiz-container').style.display = 'none';
        
        // Auto-unlock the next module since there is no test
        if (!unlockedModules.includes(mod.id + 1)) {
            unlockedModules.push(mod.id + 1);
            renderSidebar();
        }
        document.getElementById('btn-next').classList.remove('disabled');
    }
}

function displayQuizQuestion(mod) {
    const wrapper = document.getElementById('quiz-question-wrapper');
    const question = mod.quickCheck[currentQuizIndex];
    const totalQuestions = mod.quickCheck.length;

    wrapper.innerHTML = `
        <div class="quiz-question active">
            <p class="body-2" style="color: var(--text-muted); margin-bottom: 8px;">Question ${currentQuizIndex + 1} of ${totalQuestions}</p>
            <h4 style="margin-bottom: 16px;">${question.q}</h4>
            <div id="options-container" style="display: flex; flex-direction: column; gap: 12px;">
                ${question.opts.map((opt, i) => `
                    <label class="quiz-option" id="opt-label-${i}" style="padding: 12px; border: 1px solid #dadce0; border-radius: 8px; cursor: pointer; display: block;">
                        <input type="radio" name="quiz-opt" value="${i}" style="margin-right: 8px;"> ${opt}
                    </label>
                `).join('')}
            </div>
            <div id="quiz-feedback" class="feedback-banner" style="display:none; margin-top: 20px;"></div>
            <button id="next-quiz-btn" class="btn btn-primary" style="display:none; margin-top: 20px; width: 100%;">
                ${currentQuizIndex + 1 === totalQuestions ? 'Finish Module' : 'Next Question'}
            </button>
        </div>
    `;

    const options = document.querySelectorAll('input[name="quiz-opt"]');
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-quiz-btn');

    options.forEach(opt => {
        opt.addEventListener('change', (e) => {
            const selected = parseInt(e.target.value);
            const isCorrect = selected === question.ans;
            
            options.forEach(input => input.disabled = true);

            // Apply brand colors to labels
            const selectedLabel = document.getElementById(`opt-label-${selected}`);
            const correctLabel = document.getElementById(`opt-label-${question.ans}`);

            if (isCorrect) {
                selectedLabel.style.borderColor = '#1E8E3E';
                selectedLabel.style.backgroundColor = '#e6f4ea';
            } else {
                selectedLabel.style.borderColor = '#D93025';
                selectedLabel.style.backgroundColor = '#fce8e6';
                correctLabel.style.borderColor = '#1E8E3E';
                correctLabel.style.borderWidth = '2px';
            }

            // Coaching Micro-Lesson
            feedback.style.display = 'block';
            feedback.style.padding = '16px';
            feedback.style.borderRadius = '8px';
            feedback.style.borderLeft = `5px solid ${isCorrect ? '#1E8E3E' : '#D93025'}`;
            feedback.style.backgroundColor = isCorrect ? '#f1f8f3' : '#fef1f0';

            const header = isCorrect 
                ? `<span style="color: #1E8E3E; font-weight: bold;">Correct!</span>` 
                : `<span style="color: #D93025; font-weight: bold;">Not Quite.</span> The correct answer is <strong>${question.opts[question.ans]}</strong>.`;

            feedback.innerHTML = `
                <div style="margin-bottom: 8px;">${header}</div>
                <div style="font-size: 0.95rem; color: #202124;">${question.coaching || (isCorrect ? "Great job." : "")}</div>
            `;

            nextBtn.style.display = 'block';
            
            // Modern standard for smooth scrolling
            nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuizIndex + 1 < totalQuestions) {
            currentQuizIndex++;
            displayQuizQuestion(mod);
        } else {
            handleModuleComplete(mod);
        }
    });
}

function handleModuleComplete(mod) {
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-quiz-btn');
    const btnNext = document.getElementById('btn-next');

    // Fix: Explicitly reset the inline styles to a positive state
    feedback.style.borderLeft = '5px solid #1E8E3E';
    feedback.style.backgroundColor = '#f1f8f3';

    feedback.innerHTML = `<p style="color: #1E8E3E; font-weight:bold;">Module Complete!</p><p>You have unlocked the next lesson.</p>`;
    nextBtn.style.display = 'none';
    
    // Unlock next module
    if (!unlockedModules.includes(mod.id + 1)) {
        unlockedModules.push(mod.id + 1);
        renderSidebar();
    }
    btnNext.classList.remove('disabled');
}

function renderExam() {
    const contentWrapper = document.getElementById('content-wrapper');
    let html = `
        <h1 class="module-title">Final Evaluation</h1>
        <p style="margin-bottom: 2rem;">A passing score of 90% is required.</p>
        <div id="exam-container">
    `;
    examQuestions.forEach((q, index) => {
        html += `
            <div class="quiz-question">
                <h4>${index + 1}. ${q.q}</h4>
                ${q.opts.map((opt, oIndex) => `
                    <label class="quiz-option">
                        <input type="radio" name="exam_${index}" value="${oIndex}"> ${opt}
                    </label>
                `).join('')}
            </div>
        `;
    });
    html += `
        </div>
        <button id="submit-exam" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Submit Exam</button>
        <div id="exam-results" class="quiz-section hidden" style="text-align: center;"></div>
    `;
    contentWrapper.innerHTML = html;
    document.getElementById('submit-exam').addEventListener('click', evaluateExam);
}

function evaluateExam() {
    let score = 0;
    const missedModules = new Set();
    examQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="exam_${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.ans) {
            score++;
        } else {
            const qNum = index + 1;
            // Updated logic to accurately map the 30 new test questions to the correct 10 modules
            if (qNum <= 4) missedModules.add("Module 1: The Gravity Resistance System");
            else if (qNum <= 8) missedModules.add("Module 2: The Weight of the World (Loads)");
            else if (qNum <= 11) missedModules.add("Module 3: Direction and Destruction (Load Application)");
            else if (qNum <= 15) missedModules.add("Module 4: Fueling the Collapse (Fire Loads & HRR)");
            else if (qNum <= 19) missedModules.add("Module 5: The Margin of Error (Safety Factor & Composites)");
            else if (qNum <= 23) missedModules.add("Module 6: Horizontal Spans (The Physics of Beams)");
            else if (qNum <= 25) missedModules.add("Module 7: Triangulated Death Traps (Trusses)");
            else if (qNum <= 27) missedModules.add("Module 8: Vertical Supports (Columns & Walls)");
            else if (qNum <= 29) missedModules.add("Module 9: The Arch, The Frame, and The Dome");
            else missedModules.add("Module 10: The Weakest Link (Foundations & Connections)");
        }
    });

    const resultsDiv = document.getElementById('exam-results');
    resultsDiv.classList.remove('hidden');
    document.getElementById('submit-exam').classList.add('hidden');
    
    const percentage = Math.round((score / examQuestions.length) * 100);
    let feedbackHTML = `<h2>Score: ${score} / ${examQuestions.length} (${percentage}%)</h2>`;
    
    if (percentage >= 90) {
        resultsDiv.style.borderTopColor = '#1e8e3e';
        feedbackHTML += `<p style="color: #1e8e3e; font-weight: bold; margin-top: 1rem;">PASS</p>
                         <p>Excellent work. You have mastered the core structural concepts of Chapter 2.</p>`;
    } else {
        resultsDiv.style.borderTopColor = '#d93025';
        feedbackHTML += `<p style="color: #d93025; font-weight: bold; margin-top: 1rem;">FAIL - Re-test Required</p>
                         <p>Review the following modules before your second attempt:</p>
                         <ul style="text-align: left; display: inline-block; margin-top: 1rem;">`;
        missedModules.forEach(m => feedbackHTML += `<li>${m}</li>`);
        feedbackHTML += `</ul>`;
    }
    resultsDiv.innerHTML = feedbackHTML;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// --- DATABASE SYNC LOGIC ---
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwCAzBmW3amcvETJFzKvUH_i-Oi5ZBXnGmwLHOmjue9gwQk8CeGMxf85aFeNZXOXGpDig/exec'; 

function syncProgress() {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (!activeUser || typeof currentLessonName === 'undefined') return;

    // Calculate completion percentage
    const maxUnlocked = Math.max(...unlockedModules);
    const totalSlides = lessonData.length - 1;
    let percentage = Math.round((maxUnlocked / totalSlides) * 100);
    
    if (percentage > 100) percentage = 100;

    // 1. Update localStorage instantly so the Dashboard is accurate immediately
    let userProgress = JSON.parse(localStorage.getItem('userProgress')) || [];
    let moduleFound = false;
    userProgress.forEach(p => {
        if (p.module === currentLessonName) {
            p.completion = percentage;
            moduleFound = true;
        }
    });
    if (!moduleFound) {
        userProgress.push({ module: currentLessonName, completion: percentage });
    }
    localStorage.setItem('userProgress', JSON.stringify(userProgress));

    // 2. Silently fire the payload to Google Sheets in the background
    fetch(WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify({
            action: 'updateProgress',
            studentId: activeUser.id,
            moduleName: currentLessonName,
            completionPercentage: percentage
        })
    }).catch(error => console.error("Sync Error:", error));
}

