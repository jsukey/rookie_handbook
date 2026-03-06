// admin.js - Training Officer Dashboard Logic

// ==========================================
// ⚠️ PASTE YOUR APPS SCRIPT WEBHOOK URL BELOW
// ==========================================
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwCAzBmW3amcvETJFzKvUH_i-Oi5ZBXnGmwLHOmjue9gwQk8CeGMxf85aFeNZXOXGpDig/exec'; 


// Initialize dashboard when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadAdminDashboard);

/**
 * Fetches the roster from the Google Sheet via the Apps Script GET route
 * and dynamically populates the HTML table.
 */
async function loadAdminDashboard() {
    const loadingDiv = document.getElementById('loading');
    const tableSection = document.getElementById('admin-table-section');
    const tbody = document.getElementById('roster-body');
    
    // Show loading text, hide the table card
    loadingDiv.style.display = 'block';
    tableSection.style.display = 'none';

    try {
        // Fetch data using the GET method query parameter we set up in Code.gs
        const response = await fetch(`${WEBHOOK_URL}?action=getAdminRoster`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const roster = await response.json();
        tbody.innerHTML = ''; // Clear previous entries

        roster.forEach(student => {
            const tr = document.createElement('tr');
            
            // --- Phase 2 Cell Logic ---
            let p2Cell = '';
            if (student.phase2Unlocked) {
                p2Cell = `<span class="status-unlocked">✓ Unlocked</span>`;
            } else if (student.phase2Eligible) {
                // Uses your style.css .btn class
                p2Cell = `<button class="btn" onclick="unlockPhase('${student.studentId}', 2)">Unlock Phase 2</button>`;
            } else {
                p2Cell = `<span class="status-locked">🔒 Time Locked</span>`;
            }

            // --- Phase 3 Cell Logic ---
            let p3Cell = '';
            if (student.phase3Unlocked) {
                p3Cell = `<span class="status-unlocked">✓ Unlocked</span>`;
            } else if (student.phase3Eligible) {
                if (student.phase2Unlocked) {
                    p3Cell = `<button class="btn" onclick="unlockPhase('${student.studentId}', 3)">Unlock Phase 3</button>`;
                } else {
                    p3Cell = `<span class="status-dependent">🔒 P2 Must Be Unlocked First</span>`;
                }
            } else {
                p3Cell = `<span class="status-locked">🔒 Time Locked</span>`;
            }

            // Format start date
            const startDateStr = new Date(student.startDate).toLocaleDateString();

            // Build the row
            tr.innerHTML = `
                <td>
                    <strong>${student.name}</strong><br>
                    <small style="color: #666;">ID: ${student.studentId}</small>
                </td>
                <td>${startDateStr}</td>
                <td>${p2Cell}</td>
                <td>${p3Cell}</td>
            `;
            tbody.appendChild(tr);
        });

        // Hide loading text, reveal the table card
        loadingDiv.style.display = 'none';
        tableSection.style.display = 'block';

    } catch (error) {
        console.error("Error fetching roster:", error);
        loadingDiv.innerHTML = `<p style="color: red; font-weight: bold;">Error loading data. Check your Webhook URL or network connection.</p>`;
    }
}

/**
 * Sends a POST request to Apps Script to update the Phase lock status in the database.
 * @param {string} studentId - The ID of the recruit.
 * @param {number} phase - The phase number to unlock (2 or 3).
 */
async function unlockPhase(studentId, phase) {
    const confirmMsg = `Are you sure you want to unlock Phase ${phase} for Student ${studentId}?\n\nEnsure all competencies and evaluations are complete before proceeding.`;
    
    if (confirm(confirmMsg)) {
        try {
            // Send POST request to your GAS Webhook
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({ 
                    action: 'unlockPhase', 
                    studentId: studentId, 
                    phase: phase 
                })
            });

            const result = await response.json();
            
            if (result.success) {
                alert(`Success: Phase ${phase} has been unlocked.`);
                // Refresh table to show the new 'Unlocked' status
                loadAdminDashboard(); 
            } else {
                alert(`Error: ${result.message}`);
            }

        } catch (error) {
            console.error("Error unlocking phase:", error);
            alert("A network error occurred while trying to unlock the phase.");
        }
    }
}