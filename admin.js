// admin.js - Training Officer Dashboard Logic

// ==========================================
// ⚠️ PASTE YOUR APPS SCRIPT WEBHOOK URL BELOW
// ==========================================
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwCAzBmW3amcvETJFzKvUH_i-Oi5ZBXnGmwLHOmjue9gwQk8CeGMxf85aFeNZXOXGpDig/exec'; 

let globalRosterData = []; // Store data globally for search filtering

document.addEventListener("DOMContentLoaded", () => {
    loadAdminDashboard();

    // Attach search listener
    document.getElementById('searchBar').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = globalRosterData.filter(student => 
            student.name.toLowerCase().includes(searchTerm) || 
            student.studentId.toString().toLowerCase().includes(searchTerm)
        );
        renderTable(filteredData);
    });
});

/**
 * Handles Tab Switching in the Admin UI
 */
function switchTab(tabId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });
    // Remove active state from all tabs
    document.querySelectorAll('.nav-tab').forEach(el => {
        el.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(tabId);
    if(targetView) {
        targetView.style.display = 'block';
        targetView.classList.add('active');
    }

    // Highlight selected tab (find the one that triggered the click based on onclick text)
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        if(tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(tabId)) {
            tab.classList.add('active');
        }
    });
}

/**
 * Fetches the roster from the Google Sheet and updates the dashboard.
 */
async function loadAdminDashboard() {
    const loadingDiv = document.getElementById('loading');
    const rosterView = document.getElementById('view-roster');
    
    loadingDiv.style.display = 'block';
    rosterView.style.display = 'none'; // Hide table while loading

    try {
        const response = await fetch(`${WEBHOOK_URL}?action=getAdminRoster`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        globalRosterData = await response.json();
        
        updateSummaryStats(globalRosterData);
        renderTable(globalRosterData);

        loadingDiv.style.display = 'none';
        rosterView.style.display = 'block';

    } catch (error) {
        console.error("Error fetching roster:", error);
        loadingDiv.innerHTML = `<p style="color: var(--error); font-weight: bold;">Error loading data. Check your Webhook URL or network connection.</p>`;
    }
}

/**
 * Updates the Top Dashboard Stat Cards
 */
function updateSummaryStats(data) {
    let p2EligibleCount = 0;
    let p3EligibleCount = 0;

    data.forEach(student => {
        if(student.phase2Eligible && !student.phase2Unlocked) p2EligibleCount++;
        if(student.phase3Eligible && !student.phase3Unlocked) p3EligibleCount++;
    });

    document.getElementById('stat-total').innerText = data.length;
    document.getElementById('stat-p2').innerText = p2EligibleCount;
    document.getElementById('stat-p3').innerText = p3EligibleCount;
}

/**
 * Renders the HTML table rows based on provided data array
 */
function renderTable(data) {
    const tbody = document.getElementById('roster-body');
    tbody.innerHTML = ''; 

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 2rem; color: #666;">No recruits found matching your search.</td></tr>`;
        return;
    }

    data.forEach(student => {
        const tr = document.createElement('tr');
        
        // --- Progress Calculation Mockup ---
        // If your Google Sheet provides an 'overallProgress' percentage, use it. 
        // Otherwise, this defaults to 0 for the UI visualization.
        const progressVal = student.overallProgress || 0; 
        const progressClass = progressVal >= 100 ? 'complete' : '';

        // --- Phase 2 Cell Logic ---
        let p2Cell = '';
        if (student.phase2Unlocked) {
            p2Cell = `<span class="status-unlocked">✓ Unlocked</span>`;
        } else if (student.phase2Eligible) {
            p2Cell = `<button class="btn btn-primary btn-small" onclick="unlockPhase('${student.studentId}', 2)">Unlock Ph 2</button>`;
        } else {
            p2Cell = `<span class="status-locked">🔒 Time Locked</span>`;
        }

        // --- Phase 3 Cell Logic ---
        let p3Cell = '';
        if (student.phase3Unlocked) {
            p3Cell = `<span class="status-unlocked">✓ Unlocked</span>`;
        } else if (student.phase3Eligible) {
            if (student.phase2Unlocked) {
                p3Cell = `<button class="btn btn-primary btn-small" onclick="unlockPhase('${student.studentId}', 3)">Unlock Ph 3</button>`;
            } else {
                p3Cell = `<span class="status-dependent">🔒 P2 Required</span>`;
            }
        } else {
            p3Cell = `<span class="status-locked">🔒 Time Locked</span>`;
        }

        // Format start date safely
        let startDateStr = 'N/A';
        if (student.startDate) {
            startDateStr = new Date(student.startDate).toLocaleDateString();
        }

        // Build the row
        tr.innerHTML = `
            <td>
                <strong style="color: var(--secondary); font-size: 1.05rem;">${student.name}</strong><br>
                <small style="color: var(--text-muted);">ID: ${student.studentId}</small>
            </td>
            <td>${startDateStr}</td>
            <td>
                <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 2px;">${progressVal}%</div>
                <div class="mini-progress-bg">
                    <div class="mini-progress-fill ${progressClass}" style="width: ${progressVal}%;"></div>
                </div>
            </td>
            <td>${p2Cell}</td>
            <td>${p3Cell}</td>
        `;
        tbody.appendChild(tr);
    });
}

/**
 * Sends a POST request to Apps Script to update Phase lock status
 */
async function unlockPhase(studentId, phase) {
    const confirmMsg = `Are you sure you want to unlock Phase ${phase} for Student ID: ${studentId}?\n\nEnsure all competencies are complete.`;
    
    if (confirm(confirmMsg)) {
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ 
                    action: 'unlockPhase', 
                    studentId: studentId, 
                    phase: phase 
                })
            });

            const result = await response.json();
            
            if (result.success) {
                alert(`Success: Phase ${phase} has been unlocked.`);
                loadAdminDashboard(); // Refresh data to update UI
            } else {
                alert(`Error: ${result.message}`);
            }

        } catch (error) {
            console.error("Error unlocking phase:", error);
            alert("A network error occurred while trying to unlock the phase.");
        }
    }

    // Add these global variables at the top of admin.js
let globalTestData = []; 
let myChart = null; // Holds the Chart.js instance

// 1. Update your loadAdminDashboard function to pull the new data
async function loadAdminDashboard() {
    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'block';

    try {
        // Fetch ALL dashboard data (Roster + Test Scores) in one call
        const response = await fetch(`${WEBHOOK_URL}?action=getDashboardData`);
        const result = await response.json();
        
        globalRosterData = result.roster;
        globalTestData = result.testScores;
        
        updateSummaryStats(globalRosterData);
        renderTable(globalRosterData);
        renderGlobalAnalytics(); // Render the Chart

        loadingDiv.style.display = 'none';
        switchTab('view-roster');

    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        loadingDiv.innerHTML = `<p style="color: red;">Error loading data.</p>`;
    }
}

// 2. Add the Student Profile View Logic
function viewStudentProfile(studentId) {
    const student = globalRosterData.find(s => s.studentId == studentId);
    if (!student) return;

    // Populate Header
    document.getElementById('detail-name').innerText = `${student.name}`;
    document.getElementById('detail-id').innerText = student.studentId;
    document.getElementById('detail-cohort').innerText = student.assignedCohort || 'N/A';

    // Find their exams
    const studentExams = globalTestData.filter(test => test.studentId == studentId);
    const historyContainer = document.getElementById('exam-history-container');
    historyContainer.innerHTML = '';

    if (studentExams.length === 0) {
        historyContainer.innerHTML = '<p>No exam data found for this student.</p>';
    } else {
        studentExams.forEach(exam => {
            // Parse the JSON string we saved in Column G
            const missedQuestions = JSON.parse(exam.missedQuestionsData || "[]");
            
            let html = `
                <div class="summary-card" style="margin-bottom: 1rem; border-left-color: ${exam.passFail ? 'var(--success)' : 'var(--error)'}">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <strong>${exam.assessmentName}</strong>
                        <span>Score: ${exam.score}% (${exam.passFail ? 'PASS' : 'FAIL'})</span>
                    </div>
                    <p style="font-size: 0.85rem; color: #666;">Date: ${exam.dateAdministered}</p>
            `;

            if (missedQuestions.length > 0) {
                html += `<hr style="border: 0; border-top: 1px solid #eee; margin: 10px 0;">
                         <h4 style="font-size: 0.9rem; margin-bottom: 8px;">Questions Missed:</h4>
                         <ul style="font-size: 0.85rem; padding-left: 20px;">`;
                missedQuestions.forEach(mq => {
                    html += `<li style="margin-bottom: 6px;">
                                <strong>Q${mq.qNum}:</strong> ${mq.qText}<br>
                                <span style="color: var(--error);">Answered: ${mq.studentAnswer}</span><br>
                                <span style="color: var(--success);">Correct: ${mq.correctAnswer}</span>
                             </li>`;
                });
                html += `</ul>`;
            }
            html += `</div>`;
            historyContainer.innerHTML += html;
        });
    }

    switchTab('view-student-detail');
}

// 3. Add the Chart.js Logic for Global Analytics
function renderGlobalAnalytics() {
    const ctx = document.getElementById('missedQuestionsChart').getContext('2d');
    
    // Tally up the missed questions
    const questionTallies = {};
    
    globalTestData.forEach(exam => {
        const missedQuestions = JSON.parse(exam.missedQuestionsData || "[]");
        missedQuestions.forEach(mq => {
            // Group by Lesson + Question Number to keep it readable
            const label = `${exam.assessmentName.replace(" Final Exam", "")} - Q${mq.qNum}`;
            questionTallies[label] = (questionTallies[label] || 0) + 1;
        });
    });

    // Sort to find the most frequently missed
    const sortedData = Object.entries(questionTallies)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10); // Top 10 worst questions

    const labels = sortedData.map(item => item[0]);
    const values = sortedData.map(item => item[1]);

    if(myChart) myChart.destroy(); // Clear old chart on refresh

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Times Missed',
                data: values,
                backgroundColor: 'rgba(211, 47, 47, 0.7)', // EFD Red
                borderColor: 'rgba(211, 47, 47, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, ticks: { stepSize: 1 } }
            }
        }
    });
}
}