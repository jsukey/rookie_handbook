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
            
            <h3>The Forces of Destruction</h3>
            <p>To read a building, you must first understand the four invisible forces tearing at it:</p>
            <ul>
                <li><strong>Compression:</strong> A crushing force. Imagine the weight of a heavy rooftop AC unit pushing straight down on a concrete pillar. The pillar is being squeezed.</li>
                <li><strong>Tension:</strong> A stretching force. Think of a crane's cable lifting a steel beam, or the bottom edge of a loaded floor joist bowing downward. It is being pulled apart.</li>
                <li><strong>Shear:</strong> A tearing or slicing force acting in opposite directions. Imagine a heavy beam resting on a brick wall; the weight of the beam wants to slide down, while the wall pushes up. The connection point is under shear stress.</li>
                <li><strong>Torsion:</strong> A twisting force. Picture a large billboard on a single steel pole during a windstorm. The wind pushes the sign, twisting the pole.</li>
            </ul>
            <img src="images/forces.png" alt="Compression, Tension, Shear, and Torsion" class="instructive-image">

            <h3>Stress and Strain: The Material Response</h3>
            <p>While forces act <em>on</em> a building, <strong>Stress</strong> and <strong>Strain</strong> happen <em>inside</em> the materials themselves.</p>
            <p><strong>Stress</strong> is the internal resistance of a material to an external force. It is measured as force per unit area. Think of it as how hard the atoms of a steel beam are "fighting back" to stay together when a load is applied. When heat from a fire weakens these atomic bonds, the material's ability to resist stress drops significantly.</p>
            <p><strong>Strain</strong> is the actual physical deformation or change in shape that occurs because of stress. If you see a steel beam sagging (deflecting) or a wooden floor joist bowing, you are looking at <strong>Strain</strong>. If the strain exceeds the material's elastic limit, the deformation becomes permanent, leading to failure.</p>
        `,
        quickCheck: [
            { 
                q: "You notice a heavy steel beam bowing in the middle under the weight of the floor above. The bottom of that beam is being stretched. What force is acting on the bottom of the beam?", 
                opts: ["Compression", "Tension", "Torsion"], 
                ans: 1,
                coaching: "It isn't Compression (which is a crushing force) or Torsion (which is twisting). In a loaded beam, the top 'crushes' together while the bottom stretches. That stretching force is <strong>Tension</strong>."
            },
            { 
                q: "A fire burns through a critical wooden column in the basement, causing the first floor to drop. What system just failed?", 
                opts: ["The lateral stability matrix", "The composite transmission path", "The gravity resistance system"], 
                ans: 2,
                coaching: "While lateral stability handles wind, the <strong>Gravity Resistance System</strong> is the specific network of columns and beams that fights the constant downward pull of the earth. When a column goes, the path to the ground is broken."
            },
            { 
                q: "You observe a steel I-beam in the fire building that is visibly sagging but has not yet snapped. This visible 'sag' or change in shape is known as:", 
                opts: ["Internal Stress", "Structural Strain", "Torsional Shear"], 
                ans: 1,
                coaching: "Stress is the invisible 'fight' happening inside the atoms of the steel. <strong>Strain</strong> is the physical, visible result of that fight. If you can see the sag with your eyes, you are looking at Strain."
            },
            { 
                q: "As a fire increases the temperature of a structural member, what happens to its internal ability to resist stress?", 
                opts: ["It increases as the material expands.", "It remains constant until the melting point.", "It decreases as molecular bonds are weakened by heat."], 
                ans: 2,
                coaching: "Heat doesn't have to melt steel to kill it. As the temperature rises, molecular bonds vibrate and loosen. This rapidly <strong>decreases</strong> the material's internal resistance to stress, leading to collapse long before the melting point."
            }
        ]
    },{
        id: 1,
        title: "Module 2: The Weight of the World (Loads)",
        text: `
            <p>Forces don't happen in a vacuum. They are created by <strong>loads</strong>. A load is simply any weight or force that the building must support.</p>
            
            <h3>Dead Loads: The Building's Self-Weight</h3>
            <p>First, the building has to support itself. This is the <strong>Dead Load</strong>. It is static, permanent, and unchanging. The steel beams, the concrete floors, the roof decking, and that massive HVAC unit bolted to the roof—these are all dead loads. Buildings are engineered to carry a specific dead load. A major hazard we face is when older buildings are renovated—like adding a new heavy roof directly over an old one—which dangerously maxes out the original dead load capacity.</p>
            
            <h3>Live Loads: The Transient Weights</h3>
            <p>Buildings aren't empty. Think of the commercial structures over by Midway Mall. Tenants move in, bring heavy safes, stack inventory to the ceiling, and park vehicles inside. Mother nature adds snow to the roof. These transient, changing weights are <strong>Live Loads</strong>.</p>
            <p>As firefighters, we are a massive live load. When we stretch a line and open a 1000-gpm master stream, we are adding over 4 tons of water weight to that structure <em>every single minute</em>. That water doesn't disappear; it pools and soaks into materials, drastically increasing the live load on a fire-weakened floor.</p>
            
            <h3>Impact Loads: Sudden Violence</h3>
            <p><strong>Impact Loads</strong> are violent, sudden forces delivered in a short time. A car crashing into a load-bearing wall, or a partial collapse where a roof falls onto the floor below. Impact loads cause disastrously high stresses because the building doesn't have time to distribute the force evenly, often leading to rapid progressive collapse. Even the force of a solid master stream striking a brick wall is a localized impact load.</p>

            <h3>Lateral Loads: The Sideways Push</h3>
            <p>Gravity pulls straight down, but buildings also have to fight sideways forces known as <strong>Lateral Loads</strong>. High winds pushing against the broad side of a structure, seismic activity, or even the soil pressing against a basement foundation wall are all lateral loads. If a fire destroys a building's lateral stability (the internal bracing and connections), the building will rack sideways and collapse like a house of cards.</p>
            
            <img src="images/loads.jpg" alt="Dead, Live, Impact, and Lateral Loads diagram" class="instructive-image">
        `,
        quickCheck: [
            { 
                q: "A crew is flowing a master stream onto a flat commercial roof. What type of load is rapidly accumulating?", 
                opts: ["Dead Load", "Live Load", "Impact Load"], 
                ans: 1,
                coaching: "Dead loads are permanent parts of the building, and impact loads are sudden violent strikes. Water accumulating on a roof is a massive, shifting <strong>Live Load</strong> that the roof was likely never designed to hold."
            },
            { 
                q: "A commercial building undergoes a renovation, and a massive new air conditioning chiller is permanently installed on the roof. This increases the structure's:", 
                opts: ["Dead Load", "Live Load", "Torsional Load"], 
                ans: 0,
                coaching: "Because the chiller is permanently bolted to the structure, it becomes part of the building's self-weight, making it a <strong>Dead Load</strong>. Live loads are movable, and torsion is a twisting force, not a weight category."
            },
            { 
                q: "During a severe storm, high winds push violently against the broad side of a multi-story apartment building. This sideways force is an example of what type of load?", 
                opts: ["Axial Load", "Lateral Load", "Concentrated Dead Load"], 
                ans: 1,
                coaching: "Wind, seismic activity, and soil pressure push sideways, creating <strong>Lateral Loads</strong>. An axial load pushes straight down through the center of a column, and dead loads are the static weight of the building itself."
            },
            { 
                q: "While fighting a commercial fire, a heavy rooftop AC unit plunges through the weakened roof and crashes onto the second floor. What type of load did the second floor just experience?", 
                opts: ["Impact Load", "Suspended Dead Load", "Distributed Live Load"], 
                ans: 0,
                coaching: "When a heavy object falls and strikes a surface, it delivers its energy in a fraction of a second, creating a massive <strong>Impact Load</strong>. The floor might have held the unit's static weight if placed gently, but the sudden kinetic energy of the impact causes failure."
            }
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
            { 
                q: "A heavy steel beam rests on the very edge of a concrete pillar, rather than the center, causing the pillar to bend outward slightly. What type of load application is this?", 
                opts: ["Axial Load", "Eccentric Load", "Torsional Load"], 
                ans: 1,
                coaching: "Axial loads go straight down the center, and torsional loads involve twisting. Because this weight sits off-center and induces a bending stress, it is an <strong>Eccentric Load</strong>."
            },
            { 
                q: "What happens to a structural member when an eccentric load is applied?", 
                opts: ["It experiences only compression.", "It experiences bending, causing compression on one side and tension on the other.", "It distributes the weight perfectly evenly."], 
                ans: 1,
                coaching: "An eccentric load pushes down unevenly. This forces the member to bend, which crushes (<strong>compression</strong>) the loaded side while stretching (<strong>tension</strong>) the opposite side, rapidly weakening the structural integrity."
            }
        ]
    },
    {
        id: 3,
        title: "Module 4: Fueling the Collapse (Fire Loads & HRR)",
        text: `
            <p>When a building is combustible, the building itself is a load—a <strong>Fire Load</strong>. The fire load represents the total amount of potential energy (heat) available to burn in a given space.</p>
            
            <h3>Potential Energy vs. Rate of Release</h3>
            <p>Understanding the difference between total Fire Load and <strong>Heat Release Rate (HRR)</strong> is critical for survival. Fire load is the total fuel available, usually measured in British thermal units (BTUs). HRR is the <em>speed</em> at which that energy is released, measured in Kilowatts (KW) or Megawatts (MW).</p>
            <p>Think of it like a vehicle's fuel tank. A 20-gallon tank of gas holds a massive amount of potential energy (Fire Load). If you run the engine at idle, the energy is released slowly. If you cut the fuel line and ignite it all at once, the total energy is exactly the same, but the massive <em>rate of release</em> (HRR) creates a disastrous explosion.</p>
            
            <h3>Material Chemistry: Wood vs. Plastics</h3>
            <p>Not all fire loads are created equal. Ordinary combustibles like wood and paper hold approximately 8,000 BTUs per pound. Modern plastics, polyurethane foams, and combustible liquids hold roughly <strong>16,000 BTUs per pound</strong>. A living room full of synthetic furniture doesn't just burn differently; it physically contains double the potential energy per pound compared to a legacy room filled with solid wood furniture.</p>
            
            <h3>Surface Area and HRR</h3>
            <p>The physical shape of the fuel drastically alters the HRR. A 5-pound chunk of solid heavy timber will burn slowly because only the outer surface is exposed to oxygen. If you take that exact same 5 pounds of wood and turn it into thin wood paneling or wood chips, the total fire load (BTUs) remains identical. However, the massive increase in surface area means the material will burn exponentially faster, producing a severely high Heat Release Rate.</p>
            <p>The widespread use of modern plastics combined with lightweight, high-surface-area building materials guarantees an aggressively high HRR, drastically reducing the time we have before flashover or structural collapse.</p>
            <img src="images/hrr_graph.jpg" alt="Heat Release Rate: Modern vs Legacy" class="instructive-image">
        `,
        quickCheck: [
            { 
                q: "What does the term 'Fire Load' represent?", 
                opts: ["The weight of water applied by master streams.", "The total amount of potential energy (heat) available to burn.", "The rate at which a fire spreads across a ceiling."], 
                ans: 1, 
                coaching: "While water weight is a live load, the <strong>Fire Load</strong> specifically refers to the total amount of combustible potential energy in the space, including both the contents and the building materials themselves."
            },
            { 
                q: "Why is Heat Release Rate (HRR) more critical to predicting flashover than just calculating the total weight of the fuel?", 
                opts: ["It measures the rate at which energy is released, driving rapid temperature rise.", "It calculates the dead load of the smoke.", "It determines the safety factor of the building materials."], 
                ans: 0, 
                coaching: "Two rooms can have the exact same total weight of fuel, but if one room is filled with high-surface-area materials that release energy rapidly (<strong>high HRR</strong>), that room will flash over much faster."
            },
            {
                q: "If you compare 10 pounds of ordinary solid wood furniture to 10 pounds of modern polyurethane foam and plastics, how do their potential heat yields compare?",
                opts: ["The wood yields twice as much heat.", "They yield the exact same amount of heat because they weigh the same.", "The plastics yield roughly double the amount of heat (BTUs)."],
                ans: 2,
                coaching: "Modern plastics and combustible liquids hold roughly 16,000 Btu/lb, which is <strong>double</strong> the 8,000 Btu/lb found in ordinary wood and paper."
            },
            {
                q: "Why does a 10-pound sheet of thin plywood burn significantly faster than a 10-pound solid block of heavy timber?",
                opts: ["The plywood is an impact load.", "The plywood has significantly more surface area exposed to oxygen.", "The heavy timber contains more BTUs per pound."],
                ans: 1,
                coaching: "Both have the same total fire load (BTUs), but the thin plywood has vastly more <strong>surface area</strong>. More surface area exposed to oxygen leads to a drastically higher Heat Release Rate."
            }
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
let currentQuizIndex = 0; 
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
    
    audioPlayer.addEventListener('error', () => {
        const audioStatus = document.getElementById('audio-status');
        if (audioPlayer.src && !audioPlayer.src.endsWith('/')) {
            if (audioStatus) audioStatus.textContent = "Error: File Not Found";
        }
    }, true);
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

    audioPlayer.pause();
    audioPlayer.src = ""; 

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
        
        <div class="quiz-section" id="quiz-container">
            <h3>Quick Check</h3>
            <div id="quiz-question-wrapper"></div>
        </div>
    `;

    const audioToggle = document.getElementById('audio-toggle');
    const audioPath = document.getElementById('play-path');
    const audioStatus = document.getElementById('audio-status');

    audioToggle.addEventListener('click', () => {
        const audioUrl = `audio/module_${mod.id}.mp3`;

        if (!audioPlayer.src.includes(audioUrl)) {
            audioPlayer.src = audioUrl;
        }
        
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

    audioPlayer.onended = () => {
        audioStatus.textContent = "Listen Again";
        audioPath.setAttribute("d", "M8 5v14l11-7z");
    };

    displayQuizQuestion(mod);
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

            feedback.style.display = 'block';
            feedback.style.padding = '16px';
            feedback.style.borderRadius = '8px';
            feedback.style.borderLeft = `5px solid ${isCorrect ? '#1E8E3E' : '#D93025'}`;
            feedback.style.backgroundColor = isCorrect ? '#f1f8f3' : '#fef1f0';

            const header = isCorrect 
                ? `<span style="color: #1E8E3E; font-weight: bold;">✅ Correct!</span>` 
                : `<span style="color: #D93025; font-weight: bold;">❌ Not Quite.</span> The correct answer is <strong>${question.opts[question.ans]}</strong>.`;

            feedback.innerHTML = `
                <div style="margin-bottom: 8px;">${header}</div>
                <div style="font-size: 0.95rem; color: #202124;">${question.coaching || (isCorrect ? "Great job." : "")}</div>
            `;

            nextBtn.style.display = 'block';
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

    feedback.innerHTML = `<p style="color: #1E8E3E; font-weight:bold;">✅ Module Complete!</p><p>You have unlocked the next lesson.</p>`;
    nextBtn.style.display = 'none';
    
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
                <div style="font-size: 0.95rem; color: #202124;">${question.coaching}</div>
            `;

            nextBtn.style.display = 'block';
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

    feedback.innerHTML = `<p><strong>Module Complete!</strong> You have unlocked the next lesson.</p>`;
    nextBtn.style.display = 'none';
    
    // Unlock next module
    if (!unlockedModules.includes(mod.id + 1)) {
        unlockedModules.push(mod.id + 1);
        renderSidebar();
    }
    btnNext.classList.remove('disabled');
}

init();
