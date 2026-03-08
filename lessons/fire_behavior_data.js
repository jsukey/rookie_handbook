const currentLessonName = "Fire Behavior";
const lessonData = [
    {
    id: 0,
    title: "Module 0: The Basics of Fire and Heat Transfer",
    text: `
        <h3>The Basics of Fire</h3>
        <p>Fire is a rapid oxidation (chemical) reaction that produces heat and visible light.</p>
        <p>Four essential elements are necessary to have a fire:</p>
        <ul>
            <li><strong>Fuel:</strong> a material that will sustain combustion, also known as a reducing agent.</li>
            <li><strong>Oxidizing agent:</strong> normally atmospheric oxygen, but may also be chemical compounds known as oxidizers.</li>
            <li><strong>Heat:</strong> a form of energy that is the source of ignition.</li>
            <li><strong>Uninhibited chemical chain reaction:</strong> a sustained oxidation reaction that produces sufficient excess heat to continue heating unburned fuel.</li>
        </ul>
        
        <h3>Heat Transfer</h3>
        <p>Heat transfer dictates how a fire spreads. There are three primary methods of heat transfer:</p>
        <ul>
            <li><strong>Conduction:</strong> the transfer of heat within an object or between objects through direct contact.</li>
            <li><strong>Convection:</strong> the transfer of heat through circulation within a medium such as a gas or a liquid.</li>
            <li><strong>Radiation:</strong> the transfer of heat through electromagnetic waves.</li>
        </ul>
        

[Image of methods of heat transfer: conduction, convection, radiation]

        <p>Large quantities of radiant heat can cause autoignition, a phenomenon in which a combustible material ignites spontaneously without the application of a flame or spark. In contrast, piloted ignition occurs when a heated combustible material ignites from an applied flame or spark.</p>
        <p>Autoexposure describes the vertical spread of fire on the exterior of a multistory building, from one floor to the floor above, driven by radiation and convection.</p>
    `,
        quickCheck: [
            { 
                q: "Which component of the fire tetrahedron is also known as a reducing agent?", 
                opts: ["Fuel", "Oxidizing agent", "Heat", "Uninhibited chemical chain reaction"], 
                ans: 0,
                coaching: "Fuel is defined as a material that will sustain combustion, also known as a reducing agent."
            },
            { 
                q: "Which method of heat transfer occurs through circulation within a medium such as a gas or liquid?", 
                opts: ["Convection", "Conduction", "Radiation", "Autoexposure"], 
                ans: 0,
                coaching: "Convection is the transfer of heat through circulation within a medium such as a gas or a liquid."
            },
            { 
                q: "What term describes a combustible material igniting spontaneously without the application of a flame or spark?", 
                opts: ["Autoignition", "Piloted ignition", "Autoexposure", "Conduction"], 
                ans: 0,
                coaching: "Autoignition is a phenomenon in which a combustible material ignites spontaneously without the application of a flame or spark."
            },
            { 
                q: "What does the term autoexposure describe?", 
                opts: ["The vertical spread of fire on the exterior of a multistory building", "The transfer of heat through direct contact", "The ignition of a material when a flame is applied", "A sustained oxidation reaction producing excess heat"], 
                ans: 0,
                coaching: "Autoexposure describes the vertical spread of fire on the exterior of a multistory building, from one floor to the floor(s) above."
            }
        ]
    },
    {
        id: 1,
        title: "Module 1: Compartment Fires and Flow Paths",
        text: `
            <h3>Compartment Fires</h3>
            <p>A compartment is the enclosure around a fire. If not ventilation-limited, a fire will pass through four stages:</p>
            <ul>
                <li><strong>Incipient:</strong> the initial stage after ignition involving a small number of combustibles.</li>
                <li><strong>Free burning:</strong> the secondary stage where fire spreads to adjacent combustible materials.</li>
                <li><strong>Flashover:</strong> a transition stage in which exposed surfaces ignite simultaneously, resulting in full room involvement.</li>
                <li><strong>Smoldering/decay:</strong> glowing combustion without flame, typically occurring when the oxygen supply is limited.</li>
            </ul>
            
            <p>Key elements of a compartment fire include the fire plume (column of flames, smoke, and heated gases), the ceiling layer (hot gases collecting at the top of a room), and the neutral plane (interface between the hot ceiling layer and cooler air flowing in).</p>
            <p>Bi-directional flow is the movement of cooler air into the room and hot gases leaving. Fresh air drawn into the fire is known as entrainment.</p>
            <p>Flameover (or rollover) occurs when hot unburned fuel gases at the ceiling layer suddenly ignite. Overwhelming radiant heat from the ceiling layer eventually drives the room toward flashover.</p>
            <h3>Backdraft and Flow Paths</h3>
            <p>Backdraft occurs when heated gaseous products of combustion burn with explosive force when oxygen is introduced into an oxygen-depleted environment.</p>
            <p>Flow paths describe the movement of hot fire gases and smoke from areas of high pressure to low pressure. Providing flow paths by opening doors or windows allows oxygen into the compartment and products of combustion to exit, causing the fire to rapidly grow in size.</p>
            
        `,
        quickCheck: [
            { 
                q: "Which stage of a compartment fire is a transition stage where exposed surfaces ignite simultaneously?", 
                opts: ["Flashover", "Incipient", "Free burning", "Smoldering/decay"], 
                ans: 0,
                coaching: "Flashover is a transition stage in which exposed surfaces within the compartment ignite simultaneously resulting in full room involvement."
            },
            { 
                q: "What is the interface between the hot ceiling layer and the cooler air flowing into the compartment called?", 
                opts: ["Neutral plane", "Fire plume", "Bi-directional flow", "Entrainment"], 
                ans: 0,
                coaching: "The neutral plane is the interface between the hot ceiling layer and the cooler air flowing into the compartment."
            },
            { 
                q: "What phenomenon occurs when oxygen is introduced into an oxygen-depleted environment filled with heated fire gases?", 
                opts: ["Backdraft", "Flameover", "Entrainment", "Autoignition"], 
                ans: 0,
                coaching: "Backdraft occurs when heated gaseous products of combustion burn when oxygen is introduced into an environment in which the oxygen supply has been depleted."
            },
            { 
                q: "What dictates the movement of hot fire gases and smoke in a flow path?", 
                opts: ["Movement from areas of high pressure to low pressure", "Movement from areas of low pressure to high pressure", "Movement restricted entirely to the neutral plane", "Movement driven solely by radiant heat"], 
                ans: 0,
                coaching: "Flow paths are described as the movement of hot fire gases and smoke from areas of high pressure to low pressure."
            }
        ]
    },
    {
        id: 2,
        title: "Module 2: Building Materials, Interior Finishes, and Smoke",
        text: `
            <h3>Interior Finishes and Building Hazards</h3>
            <p>Fire growth is heavily influenced by building construction and interior finishes. Materials like low-density fiberboard, combustible acoustical tile, adhesives, and foamed-plastic insulation can dramatically increase surface flame spread, add fuel contributing to flashover, and generate toxic smoke.</p>
            <p>Remodeling can create dangerous hidden void spaces. For example, when a new fire-rated ceiling is installed directly below an older combustible ceiling, it creates a concealed space where explosive gases can accumulate and fire can burn undetected before bursting downward.</p>
            
            <h3>Smoke and Toxic Gases</h3>
            <p>Smoke is the generic term for the airborne solid and liquid particulates and gases produced by a fire. Solid particulates, typically carbon, give smoke its opaqueness. Smoke gases can paralyze or slow the ability to escape.</p>
            <ul>
                <li><strong>Carbon Monoxide (CO):</strong> the most prevalent toxic fire gas. CO is also highly flammable and can accumulate in enclosed areas to ignite or explode.</li>
                <li><strong>Hydrogen Cyanide (HCN):</strong> another highly toxic gas prevalent in modern fires.</li>
            </ul>
            <p>Toxicity is a product of concentration and exposure time. Haber’s rule states that any exposure in which the concentration (in parts per million [ppm]) multiplied by minutes exposed equals 33,000 is likely to be dangerous.</p>
            <p>Modern building materials introduce additional toxic hazards. Polyvinyl chloride (PVC), a common electrical insulator, emits highly toxic gases when burned. Polychlorinated biphenyls (PCBs), historically used as nonflammable coolants in electrical transformers, can release highly toxic and difficult-to-clean by-products when heated or cracked during a fire.</p>
        `,
        quickCheck: [
            { 
                q: "What is a major hazard created when a new ceiling is installed below an older combustible ceiling?", 
                opts: ["It creates a dangerous hidden void space where fire can burn undetected", "It immediately overloads the structural floor joists", "It restricts the flow path causing an immediate backdraft", "It prevents carbon monoxide from stratifying"], 
                ans: 0,
                coaching: "When a new ceiling is installed below the old ceiling, the dangerous combustible ceiling is left above, creating a void."
            },
            { 
                q: "What gives smoke its characteristic opaqueness?", 
                opts: ["Solid particulates, typically carbon", "Liquid particulates, typically halogen acids", "Carbon monoxide gas", "Hydrogen cyanide gas"], 
                ans: 0,
                coaching: "The solid particulates—typically carbon—give smoke its opaqueness."
            },
            { 
                q: "According to Haber's rule, an exposure is likely to be dangerous when the concentration (in ppm) multiplied by minutes exposed equals what number?", 
                opts: ["33,000", "12,500", "3,500", "10,000"], 
                ans: 0,
                coaching: "Haber’s rule states that any exposure in which the concentration (in ppm) × minutes exposed equals 33,000 is likely to be dangerous."
            },
            { 
                q: "What highly toxic chemical was historically used as a nonflammable coolant in electrical transformers?", 
                opts: ["Polychlorinated biphenyls (PCBs)", "Polyvinyl chloride (PVC)", "Nitrous oxide", "Hydrogen cyanide (HCN)"], 
                ans: 0,
                coaching: "PCBs were used as nonflammable coolants in transformers and can release toxic by-products during a fire."
            }
        ]
    },
    { id: 3, title: "Final Evaluation", isExam: true }
];

const examQuestions = [
    { q: "What defines a rapid oxidation chemical reaction that produces heat and visible light?", opts: [ "Convection", "Entrainment", "Radiation", "Fire"], ans: 3, coaching: "Fire can be defined simply as a rapid oxidation (chemical) reaction that produces heat and visible light.", topic: "Fire Behavior" },
    { q: "Which element of the fire tetrahedron is normally atmospheric oxygen?", opts: [ "Fuel", "Heat", "Oxidizing agent", "Uninhibited chemical chain reaction"], ans: 2, coaching: "The oxidizing agent is normally atmospheric oxygen, but may also be chemical compounds known as oxidizers.", topic: "Fire Behavior" },
    { q: "What method of heat transfer occurs through electromagnetic waves?", opts: [ "Conduction", "Radiation", "Convection", "Bi-directional flow"], ans: 1, coaching: "Radiation is the transfer of heat through electromagnetic waves.", topic: "Fire Behavior" },
    { q: "Which of the following describes heat moving through direct contact within an object or between objects?", opts: [ "Convection", "Conduction", "Radiation", "Autoexposure"], ans: 1, coaching: "Conduction is the transfer of heat within an object or between objects through direct contact.", topic: "Fire Behavior" },
    { q: "What phenomenon occurs when a heated combustible material ignites from an applied flame or spark?", opts: [ "Autoignition", "Piloted ignition", "Flameover", "Backdraft"], ans: 1, coaching: "Piloted ignition is the ignition of a heated combustible material when a flame or spark is applied.", topic: "Fire Behavior" },
    { q: "What term describes the vertical spread of fire on the exterior of a multistory building?", opts: ["Autoexposure", "Entrainment", "Rollover", "Conduction"], ans: 0, coaching: "Autoexposure describes the vertical spread of fire on the exterior of a multistory building, from one floor to the floor above.", topic: "Fire Behavior" },
    { q: "Which stage of a compartment fire is the initial stage following ignition, usually involving a small number of combustibles?", opts: [ "Free burning", "Flashover", "Smoldering/decay", "Incipient" ], ans: 3, coaching: "Incipient is the initial stage of a fire after ignition, usually involving a single or small number of combustibles.", topic: "Fire Behavior" },
    { q: "In what stage of a fire does glowing combustion take place without flame due to limited oxygen?", opts: [ "Incipient", "Free burning", "Flashover", "Smoldering/decay"], ans: 3, coaching: "Smoldering/decay is a stage in which glowing combustion takes place, without flame, often when oxygen is limited.", topic: "Fire Behavior" },
    { q: "What term describes fresh air being drawn into the fire from the doorway?", opts: ["Entrainment", "Flameover", "Conduction", "Flashover"], ans: 0, coaching: "Fresh air is drawn into the fire from the doorway and is drawn into the fire itself; this is known as entrainment.", topic: "Fire Behavior" },
    { q: "What defines the interface between the hot ceiling layer and the cooler air flowing into the compartment?", opts: [ "Fire plume", "Neutral plane", "Flow path", "Bi-directional flow"], ans: 1, coaching: "The neutral plane is the interface between the hot ceiling layer and the cooler air flowing into the compartment.", topic: "Fire Behavior" },
    { q: "When hot unburned fuel gases gather at the ceiling layer and suddenly ignite, what has occurred?", opts: ["Flameover (Rollover)", "Backdraft", "Autoexposure", "Convection"], ans: 0, coaching: "In flameover (or rollover), hot unburned fuel gases at the ceiling layer suddenly ignite.", topic: "Fire Behavior" },
    { q: "What describes the movement of hot fire gases and smoke from areas of high pressure to low pressure?", opts: ["Flow path", "Neutral plane", "Conduction", "Entrainment"], ans: 0, coaching: "Flow paths are the movement of hot fire gases/smoke from areas of high pressure to low pressure.", topic: "Fire Behavior" },
    { q: "What occurs when oxygen is introduced to a fire environment where the oxygen supply was previously depleted?", opts: [ "Autoignition", "Flameover", "Bi-directional flow", "Backdraft"], ans: 3, coaching: "Backdraft occurs when heated gaseous products of combustion burn when oxygen is introduced into an oxygen-depleted environment.", topic: "Fire Behavior" },
    { q: "How can interior finishes increase the fire hazard in a building?", opts: ["They can add fuel to the fire, contributing to flashover", "They absorb all radiant heat, preventing autoexposure", "They restrict the flow path of hot gases", "They eliminate the neutral plane"], ans: 0, coaching: "Interior finishes may increase the fire hazard by increasing surface flame spread, generating toxic gases, and adding fuel to the fire contributing to flashover.", topic: "Fire Behavior" },
    { q: "What specific hazard is created when remodeling a building by installing a new dropped ceiling below an older combustible ceiling?", opts: ["A dangerous concealed void space is created where fire can burn undetected", "The neutral plane is permanently lowered", "The fire plume is restricted from vertical movement", "Carbon monoxide is prevented from stratifying"], ans: 0, coaching: "When the new fire-rated ceiling is installed below the old ceiling, the dangerous combustible ceiling is left above, creating a concealed void where fire can burst down.", topic: "Fire Behavior" },
    { q: "What gives smoke its characteristic opaqueness?", opts: [ "Colorless carbon monoxide gas", "Vaporized unburned fuel gases", "Solid particulates, primarily carbon", "Atmospheric oxygen"], ans: 2, coaching: "The solid particulates—typically carbon—give smoke its opaqueness.", topic: "Fire Behavior" },
    { q: "Which toxic fire gas is also highly flammable and can accumulate in confined areas to ignite or explode?", opts: [ "Nitrous Oxide", "Polychlorinated biphenyl (PCB)", "Carbon Monoxide (CO)", "Polyvinyl chloride (PVC)"], ans: 2, coaching: "CO is the most prevalent toxic fire gas, and it is also a flammable gas that can ignite or explode in confined areas.", topic: "Fire Behavior" },
    { q: "Which of the following describes Haber’s rule for toxic exposure?", opts: ["Concentration (in ppm) multiplied by minutes exposed equals 33,000 is likely to be dangerous", "10-minute exposure to 3500 ppm of CO is standard and safe", "Toxicity decreases as the temperature of the fire plume increases", "Carbon monoxide stratifies only above the neutral plane"], ans: 0, coaching: "Haber’s rule states that any exposure in which the concentration (in ppm) × minutes exposed equals 33,000 is likely to be dangerous.", topic: "Fire Behavior" },
    { q: "What contemporary material, commonly used as an electrical insulator, emits highly toxic gases when it burns?", opts: ["Polyvinyl chloride (PVC)", "Low-density fiberboard", "Combustible acoustical tile", "Glass fiber insulation"], ans: 0, coaching: "Polyvinyl chloride (PVC) is an effective electrical insulator... When it burns, however, it emits toxic gases.", topic: "Fire Behavior" },
    { q: "What toxic chemicals were historically used as nonflammable coolants in electrical transformers and pose a massive hazard if released during a fire?", opts: [ "Hydrogen Cyanide (HCN)", "Nitrous Oxide", "Carbon Dioxide (CO2)", "Polychlorinated biphenyls (PCBs)" ], ans: 3, coaching: "PCBs were used as nonflammable coolants in transformers. They release toxic by-products into the atmosphere when exposed to fire.", topic: "Fire Behavior" }
];
