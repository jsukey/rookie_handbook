/**
 * Chapter 2: Building Construction - Elyria FD Training
 * Immersive "Learn Your Way" Educational Platform
 */

const lessonData = [
    {
        id: 0,
        title: "Module 1: The Gravity Resistance System",
        text: `
            <p>Look up at the ceiling of the apparatus bay. What is keeping that roof from crushing the rigs? It isn't magic; it is the <strong>gravity resistance system</strong>. Every building is in a constant, invisible battle against the earth's pull. Structural elements and their connections form a continuous path that transfers weight safely to the ground.</p>
            <p>When a structure catches fire, it is not just burning; it is losing its ability to fight gravity. When the gravity resistance system is compromised, gravity wins.</p>
            <p>To read a building, you must first understand the four invisible forces tearing at it:</p>
            <ul>
                <li><strong>Compression:</strong> A crushing force. Imagine the weight of a heavy rooftop AC unit pushing straight down on a concrete pillar. The pillar is being squeezed.</li>
                <li><strong>Tension:</strong> A stretching force. Think of a crane's cable lifting a steel beam, or the bottom edge of a loaded floor joist bowing downward. It is being pulled apart.</li>
                <li><strong>Shear:</strong> A tearing or slicing force acting in opposite directions. Imagine a heavy beam resting on a brick wall; the weight of the beam wants to slide down, while the wall pushes up. The connection point is under shear stress.</li>
                <li><strong>Torsion:</strong> A twisting force. Picture a large billboard on a single steel pole during a windstorm. The wind pushes the sign, twisting the pole.</li>
            </ul>
            <img src="images/forces.jpg" alt="Compression, Tension, Shear, and Torsion" class="instructive-image">
        `,
        quickCheck: [
            { q: "You notice a heavy steel beam bowing in the middle under the weight of the floor above. The bottom of that beam is being stretched. What force is acting on the bottom of the beam?", opts: ["Compression", "Tension", "Torsion"], ans: 1 },
            { q: "A fire burns through a critical wooden column in the basement, causing the first floor to drop. What system just failed?", opts: ["The lateral stability matrix", "The composite transmission path", "The gravity resistance system"], ans: 2 }
        ]
    },
    {
        id: 1,
        title: "Module 2: The Weight of the World (Loads)",
        text: `
            <p>Forces don't happen in a vacuum. They are created by <strong>loads</strong>. A load is simply any weight that the building must support.</p>
            <p>First, the building has to support itself. This is the <strong>Dead Load</strong> (or self-weight). It is static, permanent, and unchanging. The steel beams, the concrete floors, the roof decking, and that massive HVAC unit bolted to the roof—these are all dead loads.</p>
            <p>But buildings aren't empty. People move in, bring heavy safes, stack inventory to the ceiling, and park vehicles inside. Mother nature adds snow to the roof. These transient, changing weights are <strong>Live Loads</strong>. As firefighters, we are a massive live load. When we stretch a line and open a 1000-gpm master stream, we are adding over 4 tons of water weight to that structure <em>every single minute</em>.</p>
            <p>Finally, there are <strong>Impact Loads</strong>. These are violent, sudden forces delivered in a short time. A car crashing into a load-bearing wall, or an explosion inside a structure. Impact loads cause disastrously high stresses because the building doesn't have time to distribute the force evenly, often leading to progressive collapse.</p>
            <img src="images/loads.jpg" alt="Dead, Live, and Impact Loads" class="instructive-image">
        `,
        quickCheck: [
            { q: "A crew is flowing a master stream onto a flat commercial roof. What type of load is rapidly accumulating?", opts: ["Dead Load", "Live Load", "Impact Load"], ans: 1 },
            { q: "A commercial building undergoes a renovation, and a massive new air conditioning chiller is permanently installed on the roof. This increases the structure's:", opts: ["Dead Load", "Live Load", "Torsional Load"], ans: 0 }
        ]
    },
    {
        id: 2,
        title: "Module 3: Direction and Destruction (Load Application)",
        text: `
            <p>It is not just <em>how much</em> weight a building is holding; it is <em>how</em> that weight is applied.</p>
            <p>When a load is placed squarely in the center of a supporting member, it is an <strong>Axial Load</strong>. The force passes straight through the centroid of the material, distributing the stress evenly. This is the strongest and most efficient way to load a building.</p>
            <img src="images/axial_eccentric.jpg" alt="Axial Load versus Eccentric Load" class="instructive-image">
            <p>However, loads are often imperfect. An <strong>Eccentric Load</strong> is a force that is applied perpendicular to the plane of the section, but concentrated to one side of the center. This introduces bending stress (compression on one side, tension on the other) to a column or wall.</p>
            <p>Loads can also be grouped by concentration. A <strong>Concentrated Load</strong> is a heavy weight located at one specific point. A <strong>Uniformly Distributed Load</strong> is spread evenly over an area (like water sitting evenly across a flat roof).</p>
        `,
        quickCheck: [
            { q: "A heavy steel beam rests on the very edge of a concrete pillar, rather than the center, causing the pillar to bend outward slightly. What type of load application is this?", opts: ["Axial Load", "Eccentric Load", "Torsional Load"], ans: 1 },
            { q: "What happens to a structural member when an eccentric load is applied?", opts: ["It experiences only compression.", "It experiences bending, causing compression on one side and tension on the other.", "It distributes the weight perfectly evenly."], ans: 1 }
        ]
    },
    {
        id: 3,
        title: "Module 4: Fueling the Collapse (Fire Loads & HRR)",
        text: `
            <p>When a building is combustible, the building itself is a load—a <strong>Fire Load</strong>. This represents the total amount of potential energy (heat) available to burn.</p>
            <p>Modern fire protection relies on the <strong>Heat Release Rate (HRR)</strong>. HRR is the <em>rate</em> at which the potential energy is released, typically measured in Kilowatts (KW) or Megawatts (MW). The HRR dictates how fast the fire will grow and whether a room will reach flashover.</p>
            <img src="images/hrr_graph.jpg" alt="Heat Release Rate: Modern vs Legacy" class="instructive-image">
            <p>The widespread use of modern plastics and polyurethane foams means that today's fire loads have exceptionally high Heat Release Rates compared to legacy wood furnishings. High HRR means a faster attack on the gravity resistance system.</p>
        `,
        quickCheck: [
            { q: "What does the term 'Fire Load' represent?", opts: ["The weight of water applied.", "The total amount of potential energy available to burn.", "The amount of structural members resisting gravity."], ans: 1 },
            { q: "Why is Heat Release Rate (HRR) more critical to fire growth than just total fuel weight?", opts: ["It measures the rate at which energy is released.", "It calculates the dead load of the smoke.", "It determines the safety factor of materials."], ans: 0 }
        ]
    },
    {
        id: 4,
        title: "Module 5: The Margin of Error (Safety Factor & Composites)",
        text: `
            <p>Engineers use a <strong>Safety Factor</strong> to account for unknown material flaws or unexpected extreme loads. The safety factor is the ratio between the ultimate strength of a material and its safe working stress.</p>
            <p>Manufactured materials like steel have lower safety factors (e.g., 2). Materials built on-site, like masonry, require higher safety factors (e.g., 10). <em>Fire rapidly consumes the safety factor margin.</em></p>
            <p>To get the best of both worlds, builders use <strong>Composite Materials</strong>. Concrete handles compression well but is weak in tension. By embedding steel rebar (highly resistant to tension) inside the concrete, you create <strong>Reinforced Concrete</strong>.</p>
            <img src="images/rebar.jpg" alt="Reinforced Concrete Structure" class="instructive-image">
        `,
        quickCheck: [
            { q: "What does fire do to a building's safety factor?", opts: ["Increases it.", "Rapidly consumes it.", "Has no effect."], ans: 1 },
            { q: "Why is steel rebar added to concrete?", opts: ["Concrete is weak in compression.", "Concrete is weak in tension, and steel provides necessary strength.", "To lower the dead load."], ans: 1 }
        ]
    },
    {
        id: 5,
        title: "Module 6: Horizontal Spans (Beams & Trusses)",
        text: `
            <p><strong>Beams</strong> transmit forces perpendicular to the load. When a simple beam is loaded from above, the <em>top</em> is in Compression and the <em>bottom</em> is in Tension.</p>
            <img src="images/deflection.jpg" alt="Simple vs Cantilever Deflection" class="instructive-image">
            <p>A <strong>cantilever beam</strong> is supported at only one end. If the single connection point fails, the entire beam drops.</p>
            <p><strong>Trusses</strong> are triangulated beams. If any single component fails, the entire truss fails. In fire, metal gusset plates (gang nails) release their 3/8-inch teeth due to pyrolytic decomposition of the wood, causing catastrophic failure long before the wood burns away.</p>
            <img src="images/gusset_failure.jpg" alt="Gusset Plate Failure" class="instructive-image">
        `,
        quickCheck: [
            { q: "In a standard loaded beam, what force is acting on the top edge?", opts: ["Tension", "Compression", "Shear"], ans: 1 },
            { q: "Why are lightweight wood trusses with gusset plates hazardous in fires?", opts: ["The plates add dead load.", "Pyrolytic decomposition releases the teeth.", "The plates snap the wood."], ans: 1 }
        ]
    },
    {
        id: 6,
        title: "Module 7: Vertical Supports (Columns, Walls & Arches)",
        text: `
            <p><strong>Columns</strong> transmit compressive forces down to the foundation. If a column fails, the entire building above it collapses. Columns lose strength rapidly if their length is increased.</p>
            <p><strong>Load-Bearing Walls</strong> carry the weight of the structure above them. <strong>Veneer walls</strong> are for appearance only and rely on the wall behind them for stability.</p>
            <p>An <strong>Arch</strong> remains under compression, but the base pushes <em>outward</em>. This lateral thrust must be restrained by buttresses or tie-rods to prevent collapse.</p>
            <img src="images/arch_thrust.jpg" alt="Arch Thrust Forces" class="instructive-image">
        `,
        quickCheck: [
            { q: "A wall that carries the weight of the roof above it is a:", opts: ["Curtain wall", "Veneer wall", "Load-bearing wall"], ans: 2 },
            { q: "What is the fundamental danger of a non-restrained arch?", opts: ["No compressive strength.", "The base pushes outward.", "It operates purely in tension."], ans: 1 }
        ]
    },
    {
        id: 7,
        title: "Module 8: The Weakest Link (Transmission & Connections)",
        text: `
            <p>All loads must be <strong>transmitted</strong> continuously to the foundation. Connections are often the weakest point in a fire.</p>
            <p>Unprotected steel bolts elongate and fail at 1000°F to 1100°F. Older <strong>Gravity Connections</strong> sit in sockets without bolts; a slight lateral shift can kick them out.</p>
            <img src="images/gravity_connection.jpg" alt="Gravity Connection Hazard" class="instructive-image">
            <p>Older masonry often used <strong>sand-lime mortar</strong>, which is water-soluble. Heavy hose streams can wash it away, causing delayed collapse.</p>
        `,
        quickCheck: [
            { q: "Why is sand-lime mortar a specific hazard during overhaul?", opts: ["It is flammable.", "It is water-soluble.", "It produces toxic gases."], ans: 1 },
            { q: "At what temperature does unprotected structural steel typically fail?", opts: ["400°F - 500°F", "1000°F - 1100°F", "2000°F - 2500°F"], ans: 1 }
        ]
    },
    { id: 8, title: "Final Evaluation", isExam: true }
];

const examQuestions = [
    { q: "The invisible system that supports a building is the:", opts: ["Lateral matrix", "Gravity resistance system", "Load network", "Structural path"], ans: 1 },
    { q: "A force that squeezes a structural member is:", opts: ["Tension", "Torsion", "Shear", "Compression"], ans: 3 },
    { q: "A force that stretches a structural member is:", opts: ["Tension", "Compression", "Shear", "Torsion"], ans: 0 },
    { q: "A force that pulls in opposite, parallel directions is:", opts: ["Compression", "Tension", "Shear", "Torsion"], ans: 2 },
    { q: "The static, permanent weight of a building is the:", opts: ["Live Load", "Impact Load", "Dead Load", "Eccentric Load"], ans: 2 },
    { q: "Which is a Dead Load?", opts: ["A safe", "Snow", "Built-in roof deck", "Firefighters"], ans: 2 },
    { q: "Transient, changing weights in a structure are:", opts: ["Dead Loads", "Live Loads", "Impact Loads", "Axial Loads"], ans: 1 },
    { q: "A 1000-gpm stream applied to a building is a:", opts: ["Dead Load", "Live Load", "Safety Factor", "Torsional Load"], ans: 1 },
    { q: "A vehicle striking a wall is classified as an:", opts: ["Impact Load", "Axial Load", "Dead Load", "Eccentric Load"], ans: 0 },
    { q: "A load passing straight through the centroid is an:", opts: ["Eccentric load", "Torsional load", "Axial load", "Impact load"], ans: 2 },
    { q: "A load concentrated to one side of the center is an:", opts: ["Axial load", "Eccentric load", "Uniform load", "Live load"], ans: 1 },
    { q: "The total potential energy available to burn is the:", opts: ["Dead Load", "Heat Release Rate", "Fire Load", "Torsional Load"], ans: 2 },
    { q: "The rate at which fuel energy is released is the:", opts: ["Safety Factor", "Heat Release Rate (HRR)", "Live Load", "Axial limit"], ans: 1 },
    { q: "The ratio of ultimate strength to safe working stress is:", opts: ["Load limit", "Safety factor", "Failure point", "Composite ratio"], ans: 1 },
    { q: "Fire does what to a building's safety factor?", opts: ["Increases it", "Has no effect", "Rapidly consumes it", "Hardens it"], ans: 2 },
    { q: "Combining two materials for best traits creates a:", opts: ["Homogeneous material", "Composite material", "Unified structure", "Redundant assembly"], ans: 1 },
    { q: "Steel rebar is added to concrete primarily for:", opts: ["Compressive strength", "Tensile strength", "Lowering dead load", "Spalling prevention"], ans: 1 },
    { q: "The bottom of a simple loaded beam is in:", opts: ["Compression", "Shear", "Tension", "Torsion"], ans: 2 },
    { q: "A beam supported at only one end is a:", opts: ["Lintel", "Cantilever beam", "Simple beam", "Flitch plate"], ans: 1 },
    { q: "What is the fundamental danger of a truss?", opts: ["They are too heavy", "Single component failure = total failure", "No composites allowed", "Only support dead loads"], ans: 1 },
    { q: "Vertical members transmitting forces to the foundation:", opts: ["Beams", "Lintels", "Columns", "Arches"], ans: 2 },
    { q: "A wall carrying the weight of the structure above is:", opts: ["Curtain wall", "Partition", "Veneer wall", "Load-bearing wall"], ans: 3 },
    { q: "A masonry wall used only for exterior appearance is a:", opts: ["Fire wall", "Veneer wall", "Party wall", "Load-bearing wall"], ans: 1 },
    { q: "If not restrained, the base of an arch will:", opts: ["Push inward", "Push outward", "Twist", "Shrink"], ans: 1 },
    { q: "The spread of load from application to ground is:", opts: ["Reaction", "Transmission", "Deflection", "Pyrolysis"], ans: 1 },
    { q: "A broken structural connection typically leads to:", opts: ["Increased safety factor", "Partial or total collapse", "Reduced live load", "Aesthetic change"], ans: 1 },
    { q: "Unprotected structural steel elongates and fails at:", opts: ["400°F", "1000°F - 1100°F", "2500°F", "5000°F"], ans: 1 },
    { q: "Gusset plates fail in fire because of:", opts: ["Melting at 400°F", "Too much dead load", "Pyrolytic decomposition of wood", "Metal expansion"], ans: 2 },
    { q: "Sand-lime mortar hazard in old buildings:", opts: ["Highly flammable", "Reacts with CO", "Water-soluble/washable", "Explosive"], ans: 2 }
];

// --- Application State ---
let currentModuleId = 0;
let unlockedModules = [0];
const audioPlayer = document.getElementById('lesson-audio');

// --- Initialization ---
function init() {
    renderSidebar();
    loadModule(currentModuleId);
    
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

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
            loadModule(currentModuleId);
        }
    });

    btnPrev.addEventListener('click', () => {
        if(currentModuleId > 0) {
            currentModuleId--;
            loadModule(currentModuleId);
        }
    });
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
    renderSidebar();
    window.scrollTo(0,0);

    audioPlayer.pause();
    audioPlayer.currentTime = 0;

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
            <span class="audio-text" id="audio-status">Listen to Module</span>
        </div>
        <div class="module-text">${mod.text}</div>
        <div class="quiz-section" id="quick-check-container">
            <h3>Quick Check</h3>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">Answer to unlock progress.</p>
            <div id="qc-questions"></div>
            <div id="qc-feedback" class="feedback-banner"></div>
        </div>
    `;

    const audioToggle = document.getElementById('audio-toggle');
    const audioPath = document.getElementById('play-path');
    const audioStatus = document.getElementById('audio-status');

    audioToggle.addEventListener('click', () => {
        if (!audioPlayer.src.includes(`module_${mod.id}.mp3`)) {
            audioPlayer.src = `audio/module_${mod.id}.mp3`;
        }
        if (audioPlayer.paused) {
            audioPlayer.play();
            audioStatus.textContent = "Pause Lesson";
            audioPath.setAttribute("d", "M6 19h4V5H6v14zm8-14v14h4V5h-4z");
        } else {
            audioPlayer.pause();
            audioStatus.textContent = "Resume Lesson";
            audioPath.setAttribute("d", "M8 5v14l11-7z");
        }
    });

    audioPlayer.onended = () => {
        audioStatus.textContent = "Listen Again";
        audioPath.setAttribute("d", "M8 5v14l11-7z");
    };

    const qcContainer = document.getElementById('qc-questions');
    mod.quickCheck.forEach((q, qIndex) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'quiz-question';
        qDiv.innerHTML = `<h4>${qIndex + 1}. ${q.q}</h4>`;
        q.opts.forEach((opt, oIndex) => {
            const label = document.createElement('label');
            label.className = 'quiz-option';
            label.innerHTML = `<input type="radio" name="qc_${mod.id}_${qIndex}" value="${oIndex}"> ${opt}`;
            label.addEventListener('change', () => evaluateQuickCheck(mod));
            qDiv.appendChild(label);
        });
        qcContainer.appendChild(qDiv);
    });
}

function evaluateQuickCheck(mod) {
    let allCorrect = true;
    let allAnswered = true;
    const btnNext = document.getElementById('btn-next');

    mod.quickCheck.forEach((q, qIndex) => {
        const selected = document.querySelector(`input[name="qc_${mod.id}_${qIndex}"]:checked`);
        const options = document.querySelectorAll(`input[name="qc_${mod.id}_${qIndex}"]`);
        if (!selected) { allAnswered = false; return; }
        options.forEach(opt => {
            opt.parentElement.classList.remove('correct', 'incorrect');
            if (opt.checked) {
                if (parseInt(opt.value) === q.ans) opt.parentElement.classList.add('correct');
                else { opt.parentElement.classList.add('incorrect'); allCorrect = false; }
            }
        });
    });

    const feedback = document.getElementById('qc-feedback');
    if (allAnswered) {
        feedback.style.display = 'block';
        if (allCorrect) {
            feedback.style.backgroundColor = '#e6f4ea';
            feedback.style.color = '#1e8e3e';
            feedback.textContent = 'Correct! Next module unlocked.';
            btnNext.classList.remove('disabled');
            if (!unlockedModules.includes(mod.id + 1)) {
                unlockedModules.push(mod.id + 1);
                renderSidebar();
            }
        } else {
            feedback.style.backgroundColor = '#fce8e6';
            feedback.style.color = '#d93025';
            feedback.textContent = 'Review and try again.';
            btnNext.classList.add('disabled');
        }
    }
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
        if (selected && parseInt(selected.value) === q.ans) score++;
        else {
            const qNum = index + 1;
            if(qNum <= 4) missedModules.add("Module 1: Forces");
            else if(qNum <= 9) missedModules.add("Module 2: Loads");
            else if(qNum <= 13) missedModules.add("Modules 3 & 4: Application/Fire Loads");
            else if(qNum <= 17) missedModules.add("Module 5: Safety Factor");
            else if(qNum <= 21) missedModules.add("Module 6: Horizontal Spans");
            else if(qNum <= 25) missedModules.add("Module 7: Vertical Supports");
            else missedModules.add("Module 8: Connections");
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

init();
