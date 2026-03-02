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

        <!-- Embedded Animated SVG Graphic -->
        <style>
            .forces-anim-container {
                --anim-dur: 16s; /* Total 16s cycle = 4s per force phase */
                width: 100%;
                max-width: 500px;
                background-color: #ffffff;
                border-radius: 16px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
                padding: 20px;
                box-sizing: border-box;
                position: relative;
                margin: 2.5rem auto; /* Centers the graphic block with spacing */
            }

            .forces-anim-container svg {
                width: 100%;
                height: auto;
                display: block;
            }

            /* -------------------------------------------
               MASTER MEMBER DEFORMATION
            ------------------------------------------- */
            #columnGroup {
                transform-origin: 200px 400px; /* Origin at the bottom fixed base */
                animation: masterDeform var(--anim-dur) ease-in-out infinite;
            }

            @keyframes masterDeform {
                /* 1. COMPRESSION (0% - 25%) */
                0%, 5% { transform: scale(1, 1) skewX(0); }
                10%, 15% { transform: scale(1.05, 0.9) skewX(0); } /* Squish down */
                20%, 25% { transform: scale(1, 1) skewX(0); }
                
                /* 2. TENSION (25% - 50%) */
                25%, 30% { transform: scale(1, 1) skewX(0); }
                35%, 40% { transform: scale(0.9, 1.15) skewX(0); } /* Stretch up */
                45%, 50% { transform: scale(1, 1) skewX(0); }

                /* 3. SHEAR (50% - 75%) */
                50%, 55% { transform: scale(1, 1) skewX(0); }
                60%, 65% { transform: scale(1, 1) skewX(-15deg); } /* Skew right */
                70%, 75% { transform: scale(1, 1) skewX(0); }

                /* 4. TORSION (75% - 100%) */
                75%, 80% { transform: scale(1, 1) skewX(0); }
                85%, 90% { transform: scale(0.92, 1) skewX(0); } /* Pinch width slightly to sell the 3D twist */
                95%, 100% { transform: scale(1, 1) skewX(0); }
            }

            /* -------------------------------------------
               INTERNAL GRID LINES & TOP CAP (TORSION)
            ------------------------------------------- */
            .internal-lines {
                transform-origin: 200px 400px; /* Anchor lines at the bottom base */
                animation: twistLines var(--anim-dur) ease-in-out infinite;
            }
            
            @keyframes twistLines {
                0%, 80% { transform: skewX(0); opacity: 0.6; }
                /* Skewing the lines creates a realistic 3D surface helix */
                85%, 90% { transform: skewX(-25deg); opacity: 0.8; }
                95%, 100% { transform: skewX(0); opacity: 0.6; }
            }

            .top-cap {
                transform-origin: 200px 195px;
                animation: capTwist var(--anim-dur) ease-in-out infinite;
            }

            @keyframes capTwist {
                0%, 80% { transform: rotate(0) scaleX(1); }
                /* Cap rotates slightly and narrows to sell the 3D perspective */
                85%, 90% { transform: rotate(5deg) scaleX(0.95); } 
                95%, 100% { transform: rotate(0) scaleX(1); }
            }

            /* -------------------------------------------
               VISIBILITY CONTROLS (Fade in/out elements)
            ------------------------------------------- */
            .vis-comp { animation: showComp var(--anim-dur) ease-in-out infinite; }
            .vis-tens { animation: showTens var(--anim-dur) ease-in-out infinite; }
            .vis-shear { animation: showShear var(--anim-dur) ease-in-out infinite; }
            .vis-tors { animation: showTors var(--anim-dur) ease-in-out infinite; }

            @keyframes showComp { 0%, 23% {opacity: 1;} 25%, 98% {opacity: 0;} 100% {opacity: 1;} }
            @keyframes showTens { 0%, 22% {opacity: 0;} 25%, 48% {opacity: 1;} 50%, 100% {opacity: 0;} }
            @keyframes showShear { 0%, 47% {opacity: 0;} 50%, 73% {opacity: 1;} 75%, 100% {opacity: 0;} }
            @keyframes showTors { 0%, 72% {opacity: 0;} 75%, 98% {opacity: 1;} 100% {opacity: 0;} }

            /* -------------------------------------------
               ARROW MOVEMENTS
            ------------------------------------------- */
            .arrow-comp { animation: moveComp var(--anim-dur) ease-in-out infinite; }
            @keyframes moveComp {
                0%, 5%, 20%, 100% { transform: translateY(0); }
                10%, 15% { transform: translateY(21px); } /* Tracks squish */
            }

            .arrow-tens { animation: moveTens var(--anim-dur) ease-in-out infinite; }
            @keyframes moveTens {
                0%, 30%, 45%, 100% { transform: translateY(0); }
                35%, 40% { transform: translateY(-30px); } /* Pulls Up by 30px */
            }

            .arrow-shear { animation: moveShear var(--anim-dur) ease-in-out infinite; }
            @keyframes moveShear {
                0%, 55%, 70%, 100% { transform: translateX(0); }
                60%, 65% { transform: translateX(53px); } /* Math: 200px height * tan(15deg) skew = ~53.5px shift right */
            }

            .arrow-tors { 
                transform-origin: 200px 195px; 
                animation: moveTors var(--anim-dur) ease-in-out infinite; 
            }
            @keyframes moveTors {
                0%, 80%, 95%, 100% { transform: scale(1) translateY(0); }
                85%, 90% { transform: scale(1.02) translateY(3px); } 
            }

            /* Draw the torsion arrow dynamically */
            .torsion-path {
                stroke-dasharray: 250;
                animation: drawTors var(--anim-dur) ease-in-out infinite;
            }
            @keyframes drawTors {
                0%, 80% { stroke-dashoffset: 250; }
                85%, 90% { stroke-dashoffset: 0; }
                95%, 100% { stroke-dashoffset: 250; }
            }
        </style>

        <div class="forces-anim-container">
            <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <!-- Member Gradient -->
                    <linearGradient id="colGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#cbd5e1"/>
                        <stop offset="25%" stop-color="#f1f5f9"/>
                        <stop offset="75%" stop-color="#94a3b8"/>
                        <stop offset="100%" stop-color="#64748b"/>
                    </linearGradient>
                    
                    <!-- Force Gradients -->
                    <linearGradient id="compGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#b91c1c"/>
                    </linearGradient>
                    <linearGradient id="tensGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/>
                    </linearGradient>
                    <linearGradient id="shearGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#b45309"/>
                    </linearGradient>
                    <linearGradient id="torsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#6b21a8"/>
                    </linearGradient>

                    <!-- Clip path to keep skewed lines strictly inside the column -->
                    <clipPath id="columnClip">
                        <rect x="161" y="201" width="78" height="198" />
                    </clipPath>
                </defs>

                <!-- Foundation / Ground -->
                <line x1="30" y1="410" x2="370" y2="410" stroke="#cbd5e1" stroke-width="20" stroke-linecap="round"/>
                <rect x="130" y="400" width="140" height="10" fill="#475569" rx="3"/>

                <!-- MAIN STRUCTURAL MEMBER -->
                <g id="columnGroup">
                    <!-- Main Column Body -->
                    <rect x="160" y="200" width="80" height="200" fill="url(#colGrad)" stroke="#334155" stroke-width="2"/>
                    
                    <!-- Dynamic Grid Lines Masked to the Column -->
                    <g clip-path="url(#columnClip)">
                        <g class="internal-lines" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" fill="none">
                            <line x1="120" y1="200" x2="120" y2="400" />
                            <line x1="140" y1="200" x2="140" y2="400" />
                            <line x1="160" y1="200" x2="160" y2="400" />
                            <line x1="180" y1="200" x2="180" y2="400" />
                            <line x1="200" y1="200" x2="200" y2="400" />
                            <line x1="220" y1="200" x2="220" y2="400" />
                            <line x1="240" y1="200" x2="240" y2="400" />
                            <line x1="260" y1="200" x2="260" y2="400" />
                            <line x1="280" y1="200" x2="280" y2="400" />
                        </g>
                    </g>

                    <!-- Top Cap -->
                    <rect class="top-cap" x="145" y="190" width="110" height="10" fill="#475569" rx="3"/>
                </g>

                <!-- LABELS (Centered at top, fading in and out) -->
                <g class="vis-comp">
                    <rect x="135" y="15" width="130" height="30" rx="15" fill="#fee2e2" stroke="#fca5a5" stroke-width="2"/>
                    <text x="200" y="36" text-anchor="middle" fill="#b91c1c" font-weight="700" font-size="14" letter-spacing="1">COMPRESSION</text>
                </g>
                <g class="vis-tens">
                    <rect x="135" y="15" width="130" height="30" rx="15" fill="#e0e7ff" stroke="#a5b4fc" stroke-width="2"/>
                    <text x="200" y="36" text-anchor="middle" fill="#4338ca" font-weight="700" font-size="14" letter-spacing="1">TENSION</text>
                </g>
                <g class="vis-shear">
                    <rect x="135" y="15" width="130" height="30" rx="15" fill="#fef08a" stroke="#fde047" stroke-width="2"/>
                    <text x="200" y="36" text-anchor="middle" fill="#a16207" font-weight="700" font-size="14" letter-spacing="1">SHEAR</text>
                </g>
                <g class="vis-tors">
                    <rect x="135" y="15" width="130" height="30" rx="15" fill="#f3e8ff" stroke="#d8b4fe" stroke-width="2"/>
                    <text x="200" y="36" text-anchor="middle" fill="#7e22ce" font-weight="700" font-size="14" letter-spacing="1">TORSION</text>
                </g>

                <!-- DYNAMIC FORCE ARROWS -->
                
                <!-- 1. Compression Arrow -->
                <g class="vis-comp">
                    <g class="arrow-comp">
                        <rect x="185" y="70" width="30" height="90" fill="url(#compGrad)"/>
                        <polygon points="170,160 230,160 200,190" fill="#b91c1c"/>
                    </g>
                </g>

                <!-- 2. Tension Arrow -->
                <g class="vis-tens">
                    <g class="arrow-tens">
                        <rect x="185" y="80" width="30" height="110" fill="url(#tensGrad)"/>
                        <polygon points="170,80 230,80 200,50" fill="#1d4ed8"/>
                    </g>
                </g>

                <!-- 3. Shear Arrow -->
                <g class="vis-shear">
                    <g class="arrow-shear">
                        <rect x="60" y="180" width="80" height="30" fill="url(#shearGrad)"/>
                        <polygon points="140,165 140,225 170,195" fill="#b45309"/>
                    </g>
                </g>

                <!-- 4. Torsion Arrow -->
                <g class="vis-tors">
                    <g class="arrow-tors">
                        <path class="torsion-path" d="M 130 195 A 90 25 0 1 1 270 195" fill="none" stroke="url(#torsGrad)" stroke-width="12" stroke-linecap="round"/>
                    </g>
                </g>

            </svg>
        </div>

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
        },
    {
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
            
            <img src="../images/loads.png" alt="Dead, Live, Impact, and Lateral Loads diagram" class="instructive-image">
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
            <img src=../images/axial_eccentric.jpg" alt="Axial Load versus Eccentric Load" class="instructive-image">
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
            },
            { 
                q: "What type of load causes a force to pass straight through the centroid of the material, distributing the stress evenly. ", 
                opts: ["An Eccentric Load", "An Impact Load.", "A Lateral Load.", "An Axial Load."], 
                ans: 3,
                coaching: "Because the force passes perfectly down the center of the supporting member, it distributes the weight evenly. This is an <strong>Axial Load</strong>."
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
            <img src=../images/hrr_graph.jpg" alt="Heat Release Rate: Modern vs Legacy" class="instructive-image">
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
            <p>Engineers do not build structures to perfectly match the loads they are expected to carry; they build in a buffer. This buffer is called the <strong>Safety Factor</strong>. It is the ratio between the ultimate strength of a material (the exact point it breaks) and its safe working stress.</p>
            
            <h3>The Measure of the Unknown</h3>
            <p>The safety factor represents a measure of what is <em>not</em> known about a material. Manufactured materials produced under strictly controlled factory conditions, like structural steel, have highly predictable strengths and usually carry a lower safety factor (e.g., 2). This means the steel is designed to handle twice the load it will actually carry.</p>
            <p>In contrast, materials built on-site, like masonry, have many unknown variables. The quality of the mortar, the skill of the bricklayer, and the weather that day all affect the final strength. Because there are more unknowns, field-constructed masonry requires a much higher safety factor (e.g., 10). The design load is only one-tenth of the tested strength.</p>
            
            <h3>Fire Consumes the Margin</h3>
            <p>Reductions in the safety factor might survive normal daily loading, but fire changes the math. <em>Fire rapidly consumes the safety factor margin.</em> As heat raises the temperature of a structural member, its ultimate strength plummets, rapidly closing the gap between the working load and catastrophic failure. For example, temporary steel bracing used in construction has a highly reduced safety factor; if a fire breaks out in an unfinished building, that steel will fail much sooner than the permanent structural steel.</p>
            
            <h3>Composite Materials and Elements</h3>
            <p>To get the best of both worlds, builders frequently combine materials. Concrete is relatively inexpensive and incredibly strong in compression, but it is highly vulnerable to tension (stretching). Steel is strong in both, but expensive. By embedding steel rebar at the specific locations where tensile stresses develop, you create <strong>Reinforced Concrete</strong>.</p>
            <p>We also see <strong>Composite Structural Elements</strong>. A classic example is a <strong>Flitch plate girder</strong>, which is made by sandwiching a heavy piece of steel (or plywood) between two wooden beams. It gives the massive strength of steel but can be installed by workers using ordinary carpentry tools.</p>
            <p><strong>The Golden Rule of Composites:</strong> All elements of a composite material must react together to carry the load. If fire or heat causes the materials to separate (e.g., the wood burns away from the flitch plate, or heat shears the studs connecting a steel beam to a concrete floor), the composite no longer exists. The materials separately will be unable to carry the load, and the system will fail.</p>
            <img src=../images/rebar.jpg" alt="Reinforced Concrete Structure" class="instructive-image">
        `,
        quickCheck: [
            { 
                q: "Why does field-constructed masonry require a much higher safety factor (e.g., 10) than factory-produced steel (e.g., 2)?", 
                opts: ["Masonry is naturally heavier and increases the dead load.", "There are significantly more unknown variables in field construction.", "Steel is completely fireproof, so it doesn't need a high safety factor."], 
                ans: 1, 
                coaching: "Steel is manufactured under strict factory conditions, making its strength highly predictable. Field-built masonry has many unknown variables (weather, mortar mix, workmanship), so engineers require a much larger <strong>Safety Factor</strong> to account for what they don't know."
            },
            { 
                q: "What happens to a structural element's safety factor during a working fire?", 
                opts: ["It rapidly decreases as heat weakens the material's ultimate strength.", "It remains the same until the material physically melts.", "It increases due to the thermal expansion of the materials."], 
                ans: 0, 
                coaching: "Fire rapidly consumes the safety factor margin. As heat weakens the internal molecular bonds, the material's 'ultimate strength' drops dramatically, quickly closing the gap between the working load and structural failure."
            },
            { 
                q: "In reinforced concrete, what specific weakness of the concrete is the steel rebar designed to compensate for?", 
                opts: ["Weakness in Compression", "Weakness in Tension", "Vulnerability to Shear forces"], 
                ans: 1, 
                coaching: "Concrete is incredibly strong against crushing (compression), but very weak against stretching (<strong>tension</strong>). The steel rebar is placed specifically where the material will be pulled apart, creating a composite that resists both forces."
            },
            { 
                q: "You encounter a floor girder that has a thick steel plate sandwiched securely between two wooden beams. What is this called, and what is its primary weakness in a fire?", 
                opts: ["A Flitch plate girder; if the materials separate, the entire unit fails.", "A Bar-joist truss; the steel expands and pushes the wood apart.", "A Diaphragm floor; the wood burns faster than the steel."], 
                ans: 0, 
                coaching: "This is a <strong>Flitch plate girder</strong>. The critical rule for composite materials is that they must act together. If fire destroys the bolts or burns away the wood, the elements separate, the composite ceases to exist, and the load cannot be supported."
            }
        ]
    },
    {
        id: 5,
        title: "Module 6: Horizontal Spans (The Physics of Beams)",
        text: `
            <p>A <strong>Beam</strong> is one of the oldest and most fundamental structural members. Its primary job is to receive a load, turn that force laterally (perpendicular to the load), and deliver it to the reaction points (the supports or columns).</p>
            
            <h3>Deflection: The Tug-of-War Inside a Beam</h3>
            <p>When a simple beam (supported at both ends) is loaded from above, it deflects, or bends downward. This bending creates a dangerous tug-of-war inside the material.</p>
            <ul>
                <li><strong>The Top:</strong> The material at the top of the beam shortens and squeezes together. It is in <strong>Compression</strong>.</li>
                <li><strong>The Bottom:</strong> The material at the bottom of the beam elongates and is pulled apart. It is in <strong>Tension</strong>.</li>
                <li><strong>The Neutral Axis:</strong> The line right down the middle where the length doesn't change and the material is doing the least amount of work.</li>
            </ul>
            
            <h3>Carrying Capacity: Depth vs. Width</h3>
            <p>Why are floor joists tall and narrow instead of wide and flat? It comes down to physics. The load-carrying capacity of a beam increases only in direct proportion to its width, but it increases by the <strong>square of its depth</strong>.</p>
            <p>If you take a 2x4 wooden beam and put a second 2x4 right next to it (doubling the width), you double the carrying capacity. However, if you take the same amount of wood and make a single 2x8 beam (doubling the depth), the carrying capacity increases by a factor of four. Deeper beams are significantly stronger, but they create larger void spaces for fire and combustible gases to accumulate.</p>

            <h3>Dangerous Beam Types on the Fireground</h3>
            <p>Not all beams are supported equally. Recognizing these two types can save your life:</p>
            <p><strong>Cantilever Beams:</strong> A cantilever is supported and rigidly held at only <em>one</em> end (like a diving board or an exterior balcony). Because it projects out into space, the forces are reversed: the tension is on the top, and the compression is on the bottom. Cantilevers are highly unstable in a fire. If the single connection point at the wall fails, the entire projecting section acts as a lever and drops, often pulling the exterior wall down with it.</p>
            <p><strong>Suspended Beams:</strong> Think of a heavy theater marquee hanging over a sidewalk. It is a simple beam where one or both ends are suspended by a tension member (like a chain, cable, or steel rod) anchored back into the building. If a fire in the attic or cockloft destroys that anchor point, the beam instantly becomes an un-designed cantilever. The sudden shift in forces causes catastrophic collapse.</p>
            <img src=../images/deflection.jpg" alt="Simple vs Cantilever Deflection" class="instructive-image">
        `,
        quickCheck: [
            { 
                q: "When a simple floor beam is loaded from above by the weight of the roof, what internal forces are acting on the top and bottom of that beam?", 
                opts: ["Top is in Tension; Bottom is in Compression", "Top is in Compression; Bottom is in Tension", "Both are under Shear stress"], 
                ans: 1, 
                coaching: "When a simple beam deflects downward, the top crushes together (<strong>Compression</strong>) while the bottom edge is stretched apart (<strong>Tension</strong>)."
            },
            { 
                q: "A contractor decides to double the depth of a solid wooden floor beam (e.g., upgrading from a 2x4 to a 2x8). How does this affect the beam's load-carrying capacity?", 
                opts: ["It doubles the capacity.", "It increases the capacity by a factor of four.", "It cuts the capacity in half due to the added dead load."], 
                ans: 1, 
                coaching: "A beam's strength increases by the <strong>square of its depth</strong>. Doubling the depth (2 squared) increases the carrying capacity by 4 times, which is why floor joists are tall rather than wide."
            },
            { 
                q: "You are operating under an exterior apartment balcony. You recognize it is supported at only one end, projecting out from the building. What type of beam is this?", 
                opts: ["A Continuous Beam", "A Suspended Beam", "A Cantilever Beam"], 
                ans: 2, 
                coaching: "A beam supported at only one end is a <strong>Cantilever</strong>. These are particularly dangerous because if the single connection point to the building fails, the entire structure drops."
            },
            { 
                q: "During a fire in an old theater, the roof structure is heavily compromised. Why does this pose a severe, immediate collapse hazard to the heavy marquee over the front sidewalk?", 
                opts: ["The marquee is a Suspended Beam, and its supporting tension cables are anchored in the burning roof structure.", "The marquee will absorb the heat and melt the masonry wall.", "The marquee is an Axial Load that will crush the sidewalk."], 
                ans: 0, 
                coaching: "Marquees are often <strong>Suspended Beams</strong> held up by chains or rods anchored in the roof/attic. If fire destroys that anchor, the marquee loses its support and collapses, often pulling the front wall down with it."
            }
        ]
    },
    {
        id: 6,
        title: "Module 7: Triangulated Death Traps (Trusses)",
        text: `
            <p>A <strong>Truss</strong> is a specialized type of beam. It is a framed structure consisting of a group of triangles arranged in a single plane. The genius—and the danger—of a truss lies in its geometry: only one triangle can be formed from any three lines, making the triangle inherently rigid and stable.</p>
            
            <h3>The Anatomy of a Truss</h3>
            <p>Trusses are highly engineered to separate forces, allowing builders to use a minimum amount of material to span massive distances. You must know the terminology:</p>
            <ul>
                <li><strong>Top Chord:</strong> The top member of the truss, which is in <strong>Compression</strong>. It acts exactly like a column laid on its side.</li>
                <li><strong>Bottom Chord:</strong> The bottom member of the truss, which is in <strong>Tension</strong>. It acts like a chain pulling the walls together.</li>
                <li><strong>The Web:</strong> The internal network of struts (compression) and ties (tension) that connect the top and bottom chords.</li>
                <li><strong>Panel Points:</strong> The vital connections where the web members meet the chords.</li>
            </ul>
            
            <h3>The Fatal Flaw of Efficiency</h3>
            <p>Because trusses use the absolute minimum amount of material necessary to carry the design load, there is almost zero "fat" to burn. In a solid wood beam, the loss of some outer material is not immediately fatal. In a truss, <strong>if any single component fails, the entire truss fails.</strong></p>
            <p>Consider the top chord (compression). If a panel point fails, a 5-foot section of the top chord suddenly becomes an unsupported 10-foot section. According to the laws of columns, doubling the length reduces its carrying capacity to just 25%, causing immediate crushing failure.</p>

            <h3>The Danger of the Gusset Plate</h3>
            <p>Modern lightweight wooden trusses are held together by metal <strong>Gusset Plates</strong> (gang nails). These are thin pieces of galvanized sheet steel with 3/8-inch teeth punched into the wood. In a fire, the metal plate acts as a heat collector. It absorbs the heat and drives it into the wood fibers gripping the shallow teeth.</p>
            <p>This heat causes <strong>pyrolytic decomposition</strong> (chemical breakdown by heat) of the wood fibers. The wood literally turns to charcoal around the teeth, and the tension of the bottom chord violently pulls the plates out. The truss fails catastrophically long before the wood is actually burned away by flame.</p>
            <img src=../images/gusset_failure.jpg" alt="Gusset Plate Failure" class="instructive-image">
        `,
        quickCheck: [
            { 
                q: "What forces are acting on the Top Chord and the Bottom Chord of a standard roof truss?", 
                opts: ["Top is in Tension; Bottom is in Compression", "Top is in Compression; Bottom is in Tension", "Both chords are in Shear"], 
                ans: 1, 
                coaching: "Just like a simple beam, when a truss deflects downward, the Top Chord crushes together (<strong>Compression</strong>) and the Bottom Chord stretches apart (<strong>Tension</strong>)."
            },
            { 
                q: "Why is the failure of a single panel point in a truss's top chord so disastrous?", 
                opts: ["It immediately increases the dead load.", "It doubles the length of the unsupported 'column', reducing its carrying capacity to 25%.", "It reverses the forces, putting the top chord into tension."], 
                ans: 1, 
                coaching: "The top chord is under compression and acts like a column. If a connection fails and a 5-foot section becomes a 10-foot section, the math is brutal: doubling the length cuts the strength to <strong>one-quarter</strong> of its original capacity, causing instant collapse."
            },
            { 
                q: "You are ventilating a roof supported by lightweight wood trusses with metal gusset plates. What hidden process causes these plates to fail prematurely?", 
                opts: ["The metal plates expand and snap the wood.", "The plates act as heat collectors, causing pyrolytic decomposition of the wood fibers gripping the teeth.", "The galvanized steel melts at extremely low temperatures."], 
                ans: 1, 
                coaching: "The plates don't melt; they absorb heat and cook the wood around the shallow 3/8-inch teeth (<strong>pyrolytic decomposition</strong>). Once the wood turns to charcoal, the tension of the bottom chord rips the plates right out."
            },
            { 
                q: "Compared to a solid sawn wood beam, why is a lightweight wooden truss inherently more dangerous in a fire?", 
                opts: ["Trusses use minimal material and rely entirely on every single piece; if one part fails, the whole system fails.", "Trusses are built with more heavy timber.", "Solid beams use gusset plates which are stronger."], 
                ans: 0, 
                coaching: "A solid beam has mass and can lose outer layers to fire while surviving. A truss has no extra mass; it is a <strong>highly interdependent system</strong>. The failure of one tie, strut, or plate brings the whole thing down."
            }
        ]
    },   
    {
        id: 7,
        title: "Module 8: Vertical Supports (Columns & Walls)",
        text: `
            <p>While beams handle horizontal spans, <strong>Columns</strong> and <strong>Walls</strong> are the vertical workhorses of the gravity resistance system. Their primary job is to transmit compressive forces down to the foundation.</p>
            
            <h3>Columns and Euler's Law</h3>
            <p>A column transmits a compressive force along a straight path. But columns don't fail the same way beams do. While a beam loses strength proportionately as it gets longer, a column loses strength by the <strong>square of its change in length</strong>.</p>
            <p>This brings us to <strong>Euler's Law</strong> for long, slender columns. If a tall column is rigidly braced at its midpoint, its "effective length" is cut in half, which actually <em>quadruples</em> its load-carrying capacity. However, the reverse is equally true—and deadly on the fireground. If a fire destroys a mid-point brace, the column's effective length doubles, and its load-carrying capacity instantly drops to just 25%. The addition of a single pound over that new critical load will cause the column to suddenly buckle into an "S" shape and collapse.</p>
            <p><em>Terminology Note:</em> Firefighters must use correct terminology. Steel beams are "I-shaped" because depth gives them strength. Steel columns are "H-shaped" or box-shaped because the most efficient shape for compression is one that distributes material equally away from the center.</p>

            <h3>Walls: The Wide Columns</h3>
            <p>A wall is essentially a wide, slender column. Walls are divided into two main categories:</p>
            <ul>
                <li><strong>Load-Bearing Walls:</strong> These carry the weight of the structure above them in addition to their own dead weight. Surprisingly, a load-bearing wall is actually <em>more stable</em> against wind and lateral forces than an identical non-load-bearing wall. Think of a stack of books: it is easy to push over from the side, but if you press down hard on the top (the superimposed load), it becomes very difficult to knock over.</li>
                <li><strong>Non-Load-Bearing Walls:</strong> These support only their own weight. A prime example is a <strong>Veneer Wall</strong>. Brick veneer is a single vertical thickness of masonry designed purely for appearance. It totally depends on the underlying wood or steel frame for stability, connected only by thin metal ties. If fire destroys those ties, the heavy brick face peels off and collapses catastrophically.</li>
            </ul>

            <h3>Cantilever Walls (Tilt-Slab)</h3>
            <p>A high, freestanding masonry wall acts as a vertical cantilever beam (supported only at the bottom) against the wind. In modern precast concrete <strong>tilt-slab</strong> construction, the massive wall slabs are erected and held temporarily by bracing poles. Once the <strong>roof</strong> is built, it provides the permanent bracing. If a fire destroys the roof structure, those massive concrete walls instantly revert to un-designed, unsupported vertical cantilevers and are highly prone to toppling outward.</p>
            <img src=../images/arch_thrust.jpg" alt="Column Buckling and Wall Types" class="instructive-image">
        `,
        quickCheck: [
            { 
                q: "During a fire, a wooden brace supporting the midpoint of a tall steel column burns away, effectively doubling the column's unsupported length. According to Euler's Law, what happens to the column's load-carrying capacity?", 
                opts: ["It is reduced by half (50%).", "It is reduced to one-quarter (25%) of its original capacity.", "It remains the same as long as the steel hasn't melted."], 
                ans: 1, 
                coaching: "A column loses strength by the <strong>square of its length</strong>. If you double the unsupported length, you must divide the carrying capacity by 4 (two squared). The capacity drops to just <strong>25%</strong>, often leading to sudden buckling."
            },
            { 
                q: "Why is a load-bearing masonry wall actually more stable against lateral forces (like wind or hose streams) than a non-load-bearing wall of the exact same construction?", 
                opts: ["The superimposed weight pushing down on the load-bearing wall increases its overall stability.", "Load-bearing walls are built with steel rebar.", "Non-load-bearing walls are purely decorative."], 
                ans: 0, 
                coaching: "Just like pressing down on a stack of books, the <strong>superimposed load</strong> (the weight of the roof/floors) pushing straight down heavily stabilizes the masonry against sideways (lateral) forces."
            },
            { 
                q: "You are conducting a 360 size-up on a wood-frame residential fire and notice a brick exterior. What is the primary collapse hazard of a brick veneer wall?", 
                opts: ["It will expand and crush the foundation.", "It is a composite wall that will cause the roof to fail.", "It relies entirely on metal ties to the wood frame; if the ties fail, the brick will peel away and collapse outward."], 
                ans: 2, 
                coaching: "Veneer walls only support their own weight and are purely cosmetic. They rely totally on the underlying wall for stability. If the <strong>metal ties</strong> heat up or the wood frame burns, the heavy veneer will detach and fall."
            },
            { 
                q: "In a modern precast concrete tilt-slab building, what structural component provides the permanent bracing that stops the exterior walls from falling outward like giant cantilevers?", 
                opts: ["The flying buttresses.", "The roof structure.", "The concrete foundation slab."], 
                ans: 1, 
                coaching: "Tilt-slab walls act as highly unstable vertical cantilevers until the <strong>roof</strong> is tied into them. If a fire burns away the roof, the walls lose their top bracing and are in severe danger of falling outward."
            }
        ]
    },
    {
        id: 8,
        title: "Module 9: The Arch, The Frame, and The Dome",
        text: `
            <p>While beams handle horizontal spans by bending, the <strong>Arch</strong> combines the functions of the beam and the column. The Romans perfected the arch, allowing them to span wide openings using materials (like stone) that have virtually zero tensile strength.</p>
            
            <h3>The Physics of the Arch</h3>
            <p>An arch is under <strong>compression</strong> along its entire length. Because the arch is constantly squeezing together, its weight and the load it carries are pushed down the curve. However, this creates a massive <strong>outward thrust</strong> at the base.</p>
            <p>Because the base of an arch wants to kick outward, it must be restrained. Historically, this was done with heavy masonry blocks called <strong>buttresses</strong> built on the outside of the wall. When arches fail, or in modern designs, they are often held together with <strong>steel tie-rods</strong> spanning across the bottom.</p>
            <p><em>Terminology Note:</em> A bowstring-truss roof is often incorrectly called an "arched truss." Remember, a truss acts as a beam, and its thrust goes straight down into the walls. A true arch thrusts outward. This is a critical distinction when predicting wall collapse.</p>

            <h3>Rigid Frames: The Arch's Cousin</h3>
            <p>The <strong>Rigid Frame</strong> is derived directly from the arch and is widely used in commercial buildings, hangars, and churches to create massive clear spaces. Just like the arch, the rigid frame creates an enormous outward thrust at its base.</p>
            <p>To resist this, the bases of the frame are usually tied together with steel reinforcing rods hidden <em>inside the concrete floor</em>. The floor itself is structurally necessary to hold the building together. If a contractor unknowingly cuts a trench into the floor and severs that tie-rod, or if a basement fire destroys a wooden floor void housing a tie-rod, the frame will kick outward and the building will collapse.</p>

            <h3>Shells and Domes</h3>
            <p>A <strong>Shell</strong> is a thin, curved plate (often built of concrete) that can span wide areas despite being less than 2 inches thick. It works by transmitting loads evenly along the entire curved surface to the supports. A <strong>Dome</strong> is essentially a three-dimensional arch or shell. <strong>Geodesic domes</strong> take this further by utilizing a large number of triangles to provide massive volume with very little dead weight.</p>
            <img src=../images/arch_thrust.jpg" alt="Arch and Rigid Frame Outward Thrust" class="instructive-image">
        `,
        quickCheck: [
            { 
                q: "Unlike a simple beam that experiences both tension and compression, a true arch operates entirely under what force?", 
                opts: ["Tension", "Compression", "Torsion"], 
                ans: 1, 
                coaching: "An arch is entirely under <strong>Compression</strong>. The stones or materials are constantly squeezing together, pushing the load down the curve to the base."
            },
            { 
                q: "What is the fundamental structural difference between how a bowstring truss and a true arch deliver their loads to the supporting walls?", 
                opts: ["A truss pushes outward, an arch pushes straight down.", "A truss pushes straight down, an arch pushes outward at the base.", "Both push outward, but the truss requires buttresses."], 
                ans: 1, 
                coaching: "A truss acts as a beam, meaning its thrust goes <strong>straight down</strong> the wall or column. A true arch pushes <strong>outward</strong> at the base, which is why arches must be tied or buttressed to prevent the walls from blowing out."
            },
            { 
                q: "You are operating at a fire in a modern church built with massive wooden rigid frames. What hidden component, if compromised by fire in the basement void space, could cause the entire frame to collapse?", 
                opts: ["The flying buttresses.", "The metal gusset plates at the peak.", "The steel tie-rods connecting the bases of the frame across the floor."], 
                ans: 2, 
                coaching: "Rigid frames thrust outward at the base. They are often held together by <strong>tie-rods</strong> buried in or running under the floor. If a basement fire destroys those ties, the base kicks out and the frame collapses."
            },
            { 
                q: "Which structural element can be best described as a three-dimensional arch that transmits loads along its curved surface?", 
                opts: ["A Dome", "A Flitch Plate Girder", "A Cantilever Beam"], 
                ans: 0, 
                coaching: "A <strong>Dome</strong> (or shell) is a three-dimensional arch. Much like an eggshell, it is incredibly strong for its weight because it distributes the forces evenly across its curved surface."
            }
        ]
    },
    {
        id: 9,
        title: "Module 10: The Weakest Link (Foundations & Connections)",
        text: `
            <p>Every load placed on a building must be transmitted continuously to the ground. If there is a single failure of continuity in this transmission path, you will have a partial or total collapse. Ultimately, all loads are delivered to the ground through the <strong>Foundation</strong>. But how do those forces get there? Through connections.</p>
            
            <h3>Connections: The True Point of Failure</h3>
            <p>Except for the simplest structures, a building's gravity resistance system is only as strong as its weakest link: the connections. A building on fire is essentially a building under demolition. In the vast majority of cases, structural failure is actually connection failure.</p>
            <ul>
                <li><strong>Pinned vs. Rigid Connections:</strong> Pinned connections (simple bolts or rivets) usually cannot reroute forces if a structural member is removed. Rigid connections (like a monolithic poured concrete frame) can sometimes redistribute loads to prevent immediate collapse.</li>
                <li><strong>Shear vs. Moment Connections:</strong> A simple bolted steel connection is a <em>shear connection</em>; it stops the beam from sliding down the column. If the beam is both bolted <em>and</em> welded, it becomes a <em>moment connection</em>, which also prevents the beam from rotating or bending at the joint.</li>
            </ul>

            <h3>Designed to Fail: Fire Cuts and Gravity Fits</h3>
            <p>In older masonry buildings, you will often find <strong>Fire Cut</strong> joists. The ends of the wood joists are cut at a steep angle before being placed into the wall pockets. Why? So that if the floor burns and collapses, the joist acts like a lever and slips right out of the pocket without pulling the massive masonry wall down onto the street. It sacrifices the floor to save the wall.</p>
            <p>Similarly, older heavy timber buildings feature self-releasing floors with anchor boxes, and many cast-iron columns rely entirely on <strong>Gravity Connections</strong> (the sheer weight of the building holding them in place). If a floor shifts or sags, a gravity-fit column can easily kick out.</p>

            <h3>The Threat to Steel Connections</h3>
            <p>Steel is frequently used to tie buildings together, but it is highly vulnerable to heat. <strong>Unprotected steel heated to 1000°F (538°C) elongates 9.5 inches per 100 feet of length.</strong> If a steel girder is tightly restrained in a masonry wall and begins to expand, that massive force will push the exterior walls outward, dropping the floors. Conversely, steel tie-rods and tension cables used to hold arches or failing buildings together will fail entirely at just 800°F (427°C).</p>
            
            <h3>The Danger of Water Weight</h3>
            <p>The continuous transmission of loads is strained by the fire, but it is often broken by the fire department. A 1000-gpm master stream isn't just putting out fire; it is adding <strong>over 8,000 pounds (4 tons) of water weight</strong> to the structure <em>every single minute</em>. That water pools on flat roofs and is absorbed by materials like paper and fabric, drastically increasing the live load on weakened connections.</p>
            <img src=../images/rebar.jpg" alt="Steel and Concrete Connections" class="instructive-image">
        `,
        quickCheck: [
            { 
                q: "At what temperature does unprotected structural steel begin to elongate significantly (9.5 inches per 100 feet), potentially pushing exterior walls outward?", 
                opts: ["800°F (427°C)", "1000°F (538°C)", "1500°F (815°C)"], 
                ans: 1, 
                coaching: "At <strong>1000°F</strong>, steel elongates 9.5 inches per 100 feet. If the beam is restrained in the walls, this massive expansion force will overturn the walls or drop its load of joists. Note: Steel tie-rods/cables fail even lower, at 800°F."
            },
            { 
                q: "What is the specific architectural purpose of 'fire cut' wood joists in older masonry buildings?", 
                opts: ["To make the wood more resistant to pyrolytic decomposition.", "To provide a tighter friction fit inside the brick wall pocket.", "To allow a burning floor to collapse and slip out without pulling the exterior wall down."], 
                ans: 2, 
                coaching: "A <strong>fire cut</strong> is an angled cut on the end of a joist. It is intentionally designed to fail—allowing the burning floor to slip cleanly out of the wall pocket so the heavy masonry wall doesn't collapse onto firefighters operating outside."
            },
            { 
                q: "In steel-frame construction, a beam that is both bolted AND welded to a column prevents the beam from sliding AND rotating. What is this rigid connection called?", 
                opts: ["A Pinned Connection", "A Shear Connection", "A Moment Connection"], 
                ans: 2, 
                coaching: "A <strong>Moment Connection</strong> is rigid (bolted and welded) and resists the bending/rotational 'moment'. A simple shear connection is only bolted and cannot reroute forces effectively if the structure begins to fail."
            },
            { 
                q: "A crew is conducting a defensive attack on a commercial building using a 1000-gpm master stream. Roughly how much live load (water weight) is being added to the structure every minute?", 
                opts: ["1,000 pounds", "4,000 pounds", "Over 8,000 pounds (4 tons)"], 
                ans: 2, 
                coaching: "Water weighs 8.34 lbs per gallon. A 1000-gpm master stream adds <strong>over 8,000 lbs (4 tons)</strong> of live and impact load to a weakened structure *every single minute*, drastically increasing collapse potential."
            }
        ]
    },
    { id: 10, title: "Final Evaluation", isExam: true }
];

const examQuestions = [
    { q: "What system forms a continuous path to transfer a building's weight safely to the ground?", opts: ["The composite transmission path", "The lateral stability matrix", "The gravity resistance system", "The dead load network"], ans: 2 },
    { q: "Which invisible force acts as a tearing or slicing force in opposite directions?", opts: ["Shear", "Compression", "Torsion", "Tension"], ans: 0 },
    { q: "What is the internal resistance of a material to an external force called?", opts: ["Strain", "Deflection", "Shear", "Stress"], ans: 3 },
    { q: "When a wooden floor joist bows, the actual physical, visible deformation is known as:", opts: ["Torsion", "Strain", "Stress", "Shear"], ans: 1 },
    { q: "A massive HVAC unit permanently bolted to a roof is an example of what type of load?", opts: ["Dead Load", "Live Load", "Impact Load", "Lateral Load"], ans: 0 },
    { q: "When a master stream adds over 4 tons of water weight per minute to a structure, this rapidly accumulating weight is a:", opts: ["Live Load", "Dead Load", "Impact Load", "Lateral Load"], ans: 0 },
    { q: "High winds pushing against the broad side of a structure create what type of load?", opts: ["Axial Load", "Live Load", "Impact Load", "Lateral Load"], ans: 3 },
    { q: "A sudden, violent force delivered in a short time, such as a partial roof collapse onto a lower floor, is a(n):", opts: ["Eccentric Load", "Impact Load", "Lateral Load", "Concentrated Dead Load"], ans: 1 },
    { q: "A force that passes straight through the centroid of a material, distributing stress evenly, is an:", opts: ["Axial Load", "Eccentric Load", "Impact Load", "Torsional Load"], ans: 0 },
    { q: "A weight placed off-center on a pillar, which induces a bending stress, is called an:", opts: ["Axial Load", "Concentrated Load", "Eccentric Load", "Uniformly Distributed Load"], ans: 2 },
    { q: "Water sitting evenly across a flat roof is an example of what type of load application?", opts: ["Concentrated Load", "Eccentric Load", "Axial Load", "Uniformly Distributed Load"], ans: 3 },
    { q: "What term represents the total amount of potential energy (heat) available to burn in a given space?", opts: ["Heat Release Rate", "Fire Load", "Safety Factor", "Live Load"], ans: 1 },
    { q: "Modern plastics and polyurethane foams contain approximately how many BTUs per pound?", opts: ["8,000", "12,000", "16,000", "24,000"], ans: 2 },
    { q: "If 5 pounds of solid heavy timber is turned into thin wood chips, what changes drastically?", opts: ["The dead load of the material", "The total Fire Load (BTUs)", "The safety factor of the wood", "The Heat Release Rate (HRR)"], ans: 3 },
    { q: "Ordinary combustibles like wood and paper hold approximately how many BTUs per pound?", opts: ["8,000", "16,000", "24,000", "32,000"], ans: 0 },
    { q: "The built-in buffer that is the ratio between a material's ultimate breaking strength and its safe working stress is the:", opts: ["Elastic limit", "Safety Factor", "Heat Release Rate", "Torsional threshold"], ans: 1 },
    { q: "Why does field-constructed masonry require a much higher safety factor (e.g., 10) than factory-produced steel (e.g., 2)?", opts: ["It is inherently heavier.", "It has a lower melting point.", "It has significantly more unknown variables.", "It lacks compression strength."], ans: 2 },
    { q: "In reinforced concrete, what specific weakness of the concrete is the embedded steel rebar designed to compensate for?", opts: ["Concrete's weakness in compression", "Concrete's vulnerability to shear forces", "Concrete's high safety factor", "Concrete's weakness in tension"], ans: 3 },
    { q: "What is the golden rule of composite structural elements like a Flitch plate girder?", opts: ["All elements of a composite material must react together to carry the load.", "The steel must always bear the tension.", "The safety factor must be reduced in a fire.", "They are immune to pyrolytic decomposition."], ans: 0 },
    { q: "The load-carrying capacity of a beam increases by the square of its:", opts: ["Width", "Length", "Depth", "Weight"], ans: 2 },
    { q: "When a simple beam deflects downward under a load, the material at the bottom of the beam is elongating and is in:", opts: ["Tension", "Compression", "Torsion", "Shear"], ans: 0 },
    { q: "A beam that is supported and rigidly held at only one end, projecting out into space like an exterior balcony, is a:", opts: ["Continuous Beam", "Suspended Beam", "Simple Beam", "Cantilever Beam"], ans: 3 },
    { q: "If fire destroys the roof anchor point of a suspended beam (like a heavy theater marquee), it instantly reverts to a highly unstable:", opts: ["Axial column", "Un-designed cantilever", "Rigid connection", "Uniformly distributed load"], ans: 1 },
    { q: "In a standard roof truss, the top chord acts like a column laid on its side and is entirely under:", opts: ["Tension", "Compression", "Torsion", "Shear"], ans: 1 },
    { q: "What hidden, heat-driven process causes wood fibers to turn to charcoal and release metal gusset plates prematurely?", opts: ["Elongation", "Shear deflection", "Pyrolytic decomposition", "Thermal expansion"], ans: 2 },
    { q: "According to Euler's Law, if a tall column loses its mid-point brace and its effective length doubles, its load-carrying capacity instantly drops to:", opts: ["50%", "33%", "25%", "10%"], ans: 2 },
    { q: "In modern precast concrete tilt-slab construction, what provides the permanent bracing that stops the exterior walls from toppling outward?", opts: ["The foundation", "The roof structure", "The steel tie-rods", "The floor system"], ans: 1 },
    { q: "Unlike a simple beam that experiences both tension and compression, a true arch operates entirely under what force?", opts: ["Compression", "Tension", "Torsion", "Shear"], ans: 0 },
    { q: "Rigid frames create an enormous outward thrust at their base, which is usually resisted by what hidden component?", opts: ["Fire cut wall pockets", "Metal gusset plates", "Flying buttresses", "Steel tie-rods hidden inside the concrete floor"], ans: 3 },
    { q: "At what temperature does unprotected structural steel elongate 9.5 inches per 100 feet of length?", opts: ["800°F (427°C)", "1000°F (538°C)", "1200°F (649°C)", "1500°F (815°C)"], ans: 1 }
];
