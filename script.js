// --- Lesson Data Structure ---
const lessonData = [
    {
        id: 0,
        title: "Module 1: The Gravity Resistance System",
        text: `
            <p>Look up at the ceiling of the apparatus bay. What is keeping that roof from crushing the rigs? It isn't magic; it is the <strong>gravity resistance system</strong>. Every building is in a constant, invisible battle against the earth's pull. Structural elements and their connections form a continuous path that transfers weight safely to the ground.</p>
            <p>When a structure catches fire, it is not just burning; it is losing its ability to fight gravity. When the gravity resistance system is compromised, gravity wins.</p>
            <p>To read a building, you must first understand the four invisible forces tearing at it:</p>
            <ul>
                <li><strong>Compression:</strong> A crushing force. Imagine the weight of a heavy rooftop AC unit pushing straight down on a concrete pillar.</li>
                <li><strong>Tension:</strong> A stretching force. Think of a crane's cable lifting a steel beam, or the bottom edge of a loaded floor joist bowing downward.</li>
                <li><strong>Shear:</strong> A tearing or slicing force acting in opposite directions. Imagine a heavy beam resting on a brick wall; the weight of the beam wants to slide down, while the wall pushes up.</li>
                <li><strong>Torsion:</strong> A twisting force. Picture a large billboard on a single steel pole during a windstorm.</li>
            </ul>
            <div class="instructive-image">[Image of compression, tension, shear, and torsion forces acting on structural members]</div>
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
            <div class="instructive-image">[Image of dead, live, and impact loads acting on a building structure]</div>
        `,
        quickCheck: [
            { q: "A crew is flowing a master stream onto a flat commercial roof. What type of load is rapidly accumulating?", opts: ["Dead Load", "Live Load", "Impact Load"], ans: 1 },
            { q: "A commercial building undergoes a renovation, and a massive new air conditioning chiller is permanently installed on the roof. This increases the structure's:", opts: ["Dead Load", "Live Load", "Torsional Load"], ans: 0 }
        ]
    },
    {
        id: 2,
        title: "Module 3: Direction and Destruction",
        text: `
            <p>It is not just <em>how much</em> weight a building is holding; it is <em>how</em> that weight is applied.</p>
            <p>When a load is placed squarely in the center of a supporting member, it is an <strong>Axial Load</strong>. The force passes straight through the centroid of the material, distributing the stress evenly. This is the strongest and most efficient way to load a building.</p>
            <div class="instructive-image">[Image of axial load versus eccentric load on a structural column]</div>
            <p>However, loads are often imperfect. An <strong>Eccentric Load</strong> is a force that is applied perpendicular to the plane of the section, but concentrated to one side of the center. Imagine standing a ladder straight up and pushing down on the very top of one side rail instead of the center. The ladder will want to bend. This introduces bending stress (compression on one side, tension on the other) to a column or wall.</p>
            <p>Loads can also be grouped by concentration. A <strong>Concentrated Load</strong> is a heavy weight located at one specific point. A <strong>Uniformly Distributed Load</strong> is spread evenly over an area (like a 3-inch layer of water sitting evenly across a flat roof).</p>
        `,
        quickCheck: [
            { q: "A heavy steel beam rests on the very edge of a concrete pillar, rather than the center, causing the pillar to bend outward slightly. What type of load application is this?", opts: ["Axial Load", "Eccentric Load", "Torsional Load"], ans: 1 },
            { q: "What happens to a structural member when an eccentric load is applied?", opts: ["It experiences only compression.", "It experiences bending, causing compression on one side and tension on the other.", "It distributes the weight perfectly evenly."], ans: 1 }
        ]
    },
    {
        id: 3,
        title: "Module 4: Fueling the Collapse",
        text: `
            <p>When a building is combustible, the building itself is a load—a <strong>Fire Load</strong>.</p>
            <p>Fire load represents the total amount of potential energy (heat) available to burn. However, not all fuels burn the same way. Five pounds of solid oak burns much slower than five pounds of crushed wood chips.</p>
            <div class="instructive-image">[Image of a graph comparing the heat release rate of modern polyurethane foam versus legacy wood furnishings]</div>
            <p>Because of this, modern fire protection relies on the <strong>Heat Release Rate (HRR)</strong>. HRR is the <em>rate</em> at which the potential energy is released, typically measured in Kilowatts (KW) or Megawatts (MW). The HRR dictates how fast the fire will grow and whether a room will reach flashover.</p>
            <p>The widespread use of modern plastics and polyurethane foams means that today's fire loads have exceptionally high Heat Release Rates compared to legacy wood furnishings. High HRR means a faster attack on the gravity resistance system.</p>
        `,
        quickCheck: [
            { q: "What does the term 'Fire Load' represent?", opts: ["The weight of the water applied.", "The total amount of potential energy available to burn.", "The amount of structural members resisting gravity."], ans: 1 },
            { q: "Why is Heat Release Rate (HRR) more critical than total weight?", opts: ["It measures the rate at which energy is released.", "It calculates the dead load of the smoke.", "It determines the safety factor of materials."], ans: 0 }
        ]
    },
    {
        id: 4,
        title: "Module 5: The Margin of Error",
        text: `
            <p>Engineers use a <strong>Safety Factor</strong> to account for unknown material flaws or unexpected extreme loads.</p>
            <p>The safety factor is the ratio between the ultimate strength of a material and its safe working stress. Manufactured materials like steel have lower safety factors (e.g., 2). Materials built on-site, like masonry, require higher safety factors (e.g., 10). <em>Fire destroys the safety factor.</em> As heat degrades the material, that margin of error vanishes.</p>
            <div class="instructive-image">[Image of steel rebar placed within a reinforced concrete beam]</div>
            <p>To get the best of both worlds, builders use <strong>Composite Materials</strong>. Concrete is incredible at compression, but terrible at tension. If you embed steel rebar (highly resistant to tension) inside the concrete, you create <strong>Reinforced Concrete</strong>. A <strong>Flitch Plate Girder</strong> does the same thing, sandwiching steel between wooden beams.</p>
        `,
        quickCheck: [
            { q: "What does fire do to a building's safety factor?", opts: ["Increases it.", "Rapidly consumes it.", "Has no effect."], ans: 1 },
            { q: "Why is steel rebar added to concrete?", opts: ["Concrete is weak in compression.", "Concrete is weak in tension, and steel provides tensile strength.", "To lower the dead load."], ans: 1 }
        ]
    },
    {
        id: 5,
        title: "Module 6: Horizontal Spans",
        text: `
            <p><strong>Beams</strong> transmit forces perpendicular to the load. When a simple beam is loaded from above, the <em>top</em> is squeezing together (Compression) and the <em>bottom</em> is stretching out (Tension).</p>
            <div class="instructive-image">[Image of deflection in a simply supported beam versus a cantilever beam]</div>
            <p>A <strong>cantilever beam</strong> is supported on only one end—like a diving board. If the single connection point fails, the entire beam drops.</p>
            <p><strong>Trusses</strong> are specialized triangulated beams. The top chord acts like a continuous column (compression), while the bottom chord is under tension. <em>If any single component fails, the entire truss fails.</em></p>
            <div class="instructive-image">[Image of a gang nail gusset plate separating from a lightweight wood truss during a fire]</div>
            <p>Metal gusset plates (gang nails) penetrate lightweight wood by only 3/8". As wood heats up, pyrolytic decomposition releases the metal teeth, causing catastrophic failure long before the wood burns away.</p>
        `,
        quickCheck: [
            { q: "In a standard loaded beam, what force is acting on the very top edge?", opts: ["Tension", "Compression", "Shear"], ans: 1 },
            { q: "Why are lightweight wood trusses with metal gusset plates hazardous in fires?", opts: ["The metal adds dead load.", "Pyrolytic decomposition releases the shallow metal teeth.", "The plates snap the wood."], ans: 1 }
        ]
    },
    {
        id: 6,
        title: "Module 7: Vertical Supports",
        text: `
            <p><strong>Columns</strong> transmit compressive forces straight down. If a column fails, the entire building above it collapses. Columns lose strength rapidly if their length is increased.</p>
            <p><strong>Walls</strong> are wide, slender columns. A <strong>Load-Bearing Wall</strong> carries the weight of the structure above it. A <strong>Non-Load-Bearing Wall</strong> (like a partition or veneer wall) supports only its own weight.</p>
            <div class="instructive-image">[Image of a tied arch roof showing downward and outward thrust]</div>
            <p>An <strong>Arch</strong> combines the beam and column, remaining under compression. However, the base pushes <em>outward</em>. If this lateral thrust is not restrained (by buttresses or tie-rods), the arch will push outward and collapse.</p>
        `,
        quickCheck: [
            { q: "A wall that carries the weight of the roof above it is classified as a:", opts: ["Curtain wall", "Veneer wall", "Load-bearing wall"], ans: 2 },
            { q: "What is the fundamental danger of a non-restrained arch?", opts: ["No compressive strength.", "The base pushes outward, requiring restraint.", "It operates purely in tension."], ans: 1 }
        ]
    },
    {
        id: 7,
        title: "Module 8: The Weakest Link",
        text: `
            <p>A building is only as strong as its connections. All loads must be <strong>transmitted</strong> continuously to the foundation. Any failure of continuity leads to collapse.</p>
            <p>Connections are often the weakest point in a fire. Unprotected steel bolts elongate and fail at 1000°F to 1100°F, dropping beams that still have structural integrity.</p>
            <div class="instructive-image">[Image of a heavy timber floor joist sitting on a cast iron gravity connection]</div>
            <p>Some older structures use <strong>Gravity Connections</strong>, sitting in sockets with no bolts. A slight lateral shift can kick the column out. Furthermore, old masonry often used <strong>sand-lime mortar</strong>, which is water-soluble. A heavy hose stream can wash the mortar out from between the bricks, causing delayed collapse.</p>
        `,
        quickCheck: [
            { q: "Why is sand-lime mortar a specific hazard?", opts: ["It is flammable.", "It is water-soluble and can be washed away by hose streams.", "It produces toxic gases."], ans: 1 },
            { q: "At what temperature does unprotected structural steel typically elongate and fail?", opts: ["400°F - 500°F", "1000°F - 1100°F", "2000°F - 2500°F"], ans: 1 }
        ]
    },
    {
        id: 8,
        title: "Final Exam",
        isExam: true
    }
];

// --- Final Exam Data ---
const examQuestions = [
    { q: "The invisible system of structural elements and connections that supports a building is known as the:", opts: ["Lateral stability matrix", "Gravity resistance system", "Load-bearing network", "Structural distribution path"], ans: 1 },
    { q: "A force that squeezes a structural member is called:", opts: ["Tension", "Torsion", "Shear", "Compression"], ans: 3 },
    { q: "A force that stretches a structural member is called:", opts: ["Tension", "Compression", "Shear", "Torsion"], ans: 0 },
    { q: "A force that pulls a structural member in opposite, parallel directions (like slicing) is called:", opts: ["Compression", "Tension", "Shear", "Torsion"], ans: 2 },
    { q: "The static, unchanging weight of a building and its permanent components is the:", opts: ["Live Load", "Impact Load", "Dead Load", "Eccentric Load"], ans: 2 },
    { q: "Which of the following is an example of a Dead Load?", opts: ["A large safe moved into an office", "Heavy snow accumulation on a roof", "A built-in concrete roof deck", "Firefighters conducting a primary search"], ans: 2 },
    { q: "Transient, changing weights placed inside or on a structure are known as:", opts: ["Dead Loads", "Live Loads", "Impact Loads", "Axial Loads"], ans: 1 },
    { q: "A 1000-gpm master stream flowing into a structure adds tremendous weight. This is classified as a:", opts: ["Dead Load", "Live Load", "Safety Factor", "Torsional Load"], ans: 1 },
    { q: "A sudden, violent force, such as a vehicle striking a wall, is classified as an:", opts: ["Impact Load", "Axial Load", "Dead Load", "Eccentric Load"], ans: 0 },
    { q: "A load that passes straight through the center of a supporting member, distributing stress evenly, is an:", opts: ["Eccentric load", "Torsional load", "Axial load", "Impact load"], ans: 2 },
    { q: "A load that is applied perpendicular to the plane of the section but concentrated to one side of the center is an:", opts: ["Axial load", "Eccentric load", "Uniformly distributed load", "Live load"], ans: 1 },
    { q: "The total amount of potential energy available to burn in a building is the:", opts: ["Dead Load", "Heat Release Rate", "Fire Load", "Torsional Load"], ans: 2 },
    { q: "The rate at which potential energy in a fuel is released, determining how fast a fire will grow, is the:", opts: ["Safety Factor", "Heat Release Rate (HRR)", "Live Load", "Axial limit"], ans: 1 },
    { q: "The ratio of a material's ultimate strength to its safe working stress is its:", opts: ["Load limit", "Safety factor", "Failure point", "Composite ratio"], ans: 1 },
    { q: "What effect does fire have on a building's safety factor?", opts: ["It slowly increases it as materials harden.", "It has no effect until global collapse.", "It rapidly consumes the safety factor margin.", "It only affects the safety factor of dead loads."], ans: 2 },
    { q: "Combining two materials to take advantage of the best characteristics of each creates a:", opts: ["Homogeneous material", "Composite material", "Unified structure", "Redundant assembly"], ans: 1 },
    { q: "In reinforced concrete, what is the primary purpose of the steel rebar?", opts: ["To increase compressive strength.", "To provide necessary tensile strength.", "To lower the overall dead load.", "To prevent spalling."], ans: 1 },
    { q: "When a simple horizontal beam is loaded from above, the bottom of the beam is subjected to:", opts: ["Compression", "Shear", "Tension", "Torsion"], ans: 2 },
    { q: "A beam that is supported at only one end (like a balcony) is a:", opts: ["Lintel", "Cantilever beam", "Simple beam", "Flitch plate girder"], ans: 1 },
    { q: "What is the fundamental danger of a truss assembly?", opts: ["They are inherently heavier than solid beams.", "If any single component fails, the entire truss fails.", "They cannot be made of composite materials.", "They only support dead loads."], ans: 1 },
    { q: "Vertical members that transmit compressive forces to the foundation are:", opts: ["Beams", "Lintels", "Columns", "Arches"], ans: 2 },
    { q: "A wall that carries the weight of the structure above it is a:", opts: ["Curtain wall", "Non-load-bearing wall", "Veneer wall", "Load-bearing wall"], ans: 3 },
    { q: "A single vertical thickness of masonry designed simply to improve exterior appearance, completely relying on the wall behind it, is a:", opts: ["Fire wall", "Veneer wall", "Party wall", "Load-bearing wall"], ans: 1 },
    { q: "An arch combines the function of the beam and column but poses a specific danger. If not properly restrained, the base of the arch will:", opts: ["Push inward", "Push outward", "Twist torsionally", "Shrink rapidly"], ans: 1 },
    { q: "The manner in which a load is spread from the point of application down to the ground is known as:", opts: ["Reaction", "Transmission", "Deflection", "Pyrolysis"], ans: 1 },
    { q: "Structural connections are critical because:", opts: ["They dictate aesthetic design.", "All loads must be transmitted continuously; a broken connection leads to collapse.", "They reduce live load.", "They increase the safety factor."], ans: 1 },
    { q: "At temperatures between 1000°F and 1100°F, unprotected structural steel will:", opts: ["Contract and snap", "Elongate and fail",
