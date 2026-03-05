const lessonData = [
    {
        id: 0,
        title: "Module 0: Purpose & Hazard Zone Definition",
        text: `
            <p>The PASSPORT Personnel Accountability System gives an Incident Commander a fast and efficient means to account for all fire/rescue personnel working within the hazard zone. Accountability involves a personal commitment to work within the safety system at all times through accurate rosters, crew integrity, and proper PPE.</p>
            <h3>The Hazard Zone</h3>
            <p>The Hazard Zone is defined as any area that requires an SCBA, a charged hoseline and protective clothing, or in which a firefighter is at risk of becoming lost, trapped, or injured by the environment or structure. This includes interior structural firefighting, exterior operations in close proximity to the building, and specialized rescues like trench or confined space.</p>
            <h3>Crew Integrity</h3>
            <p>Crews must arrive on scene and remain intact. A minimum crew size is considered two or more members, and a radio is required for each crew. All crews will go in together, stay together, and come out together. If a radio fails while in the hazard zone, the entire crew must exit immediately unless another working radio is present within that crew.</p>
        `,
        quickCheck: [
            { 
                q: "What is the minimum crew size required to enter a hazard zone?", 
                opts: ["1 member", "2 members", "3 members", "4 members"], 
                ans: 1,
                coaching: "A minimum crew size will be considered two or more members and a radio will be required for each crew."
            },
            { 
                q: "What happens if a radio fails while a crew is in the hazard zone?", 
                opts: ["Continue the task", "The individual exits alone", "The entire crew exits", "Wait for a runner"], 
                ans: 2,
                coaching: "If a radio fails while in the hazard zone, the crew will exit unless there is another working radio with the crew."
            },
            { 
                q: "Which of the following defines the 'Hazard Zone'?", 
                opts: ["Any area outside the command post", "Any area requiring SCBA and a charged hoseline", "The staging area", "The rehab sector"], 
                ans: 1,
                coaching: "The hazard zone is defined as any area that requires an SCBA, a charged hoseline and protective clothing, or where a risk of injury exists."
            }
        ]
    },
    {
        id: 1,
        title: "Module 1: Accountability Equipment",
        text: `
            <p>To track firefighters effectively, the department utilizes specific hardware that must be maintained and updated constantly during an incident.</p>
            <h3>The PASSPORT and Name Tags</h3>
            <p>The PASSPORT is a 2" x 4" plastic card with the apparatus unit’s ID etched on it. It contains the name tags of all personnel currently assigned to that crew. Each firefighter is issued three individual name tags, which are affixed to the underside of their helmet for storage and quick access.</p>
            <h3>Status Boards</h3>
            <p>Each engine, ladder, and rescue is equipped with an 8"x12" status board. Command vehicles utilize a larger 16"x12" board. These boards are used to collect and organize the PASSPORTs of crews operating in the hazard zone.</p>
            <h3>Roster Accuracy</h3>
            <p>The Company Officer is responsible for ensuring the PASSPORT only reflects personnel entering the hazard zone. For example, if the operator remains at the engine to pump lines, their name tag must be removed from the PASSPORT before the crew enters the building.</p>
        `,
        quickCheck: [
            { 
                q: "Where should a firefighter's name tags be stored when not on a PASSPORT?", 
                opts: ["In a coat pocket", "On the apparatus dash", "Underside of the helmet", "Inside the SCBA mask"], 
                ans: 2,
                coaching: "Each firefighter will be issued three individual name tags, which shall be affixed on the underside of their helmet."
            },
            { 
                q: "What are the dimensions of the plastic PASSPORT card?", 
                opts: ["2x4 inches", "3x5 inches", "4x6 inches", "5x7 inches"], 
                ans: 0,
                coaching: "The PASSPORT system equipment involves a 2\" x 4\" plastic card with the apparatus unit’s ID etched on it."
            },
            { 
                q: "Who is responsible for removing the pump operator's tag before entry?", 
                opts: ["The operator", "The Incident Commander", "The Company Officer", "The Accountability Officer"], 
                ans: 2,
                coaching: "When entering with a partial crew, the Company Officer must remove name tags of those members not entering the hazard zone."
            }
        ]
    },
    {
        id: 2,
        title: "Module 2: Implementation & Movement",
        text: `
            <p>Accountability levels change based on the complexity of the scene. The objective is to keep PASSPORTs near the point of entry (POE) at all times.</p>
            <h3>Level I and Level II Accountability</h3>
            <p>Level I is used for single-company incidents; the PASSPORT remains on the apparatus dash. Level II is mandated for all mutual aid incidents. The first engine to each geographic side of the incident becomes the initial accountability location managed by that apparatus operator.</p>
            <h3>Point of Entry (POE) Control</h3>
            <p>PASSPORTs never enter the hazard zone. They must be maintained at the point of entry. Crews turn in their PASSPORT upon entering and <strong>must retrieve</strong> their PASSPORT upon exiting. If a crew exits at a different location, they must notify their original supervisor immediately and retrieve their card before reassignment.</p>
            <h3>Multi-story Operations</h3>
            <p>In high-rise or multi-story buildings, a Lobby Group is established. All crews reporting to the building deliver their PASSPORTs to the Lobby Group before moving to fire combat positions.</p>
        `,
        quickCheck: [
            { 
                q: "When is Level II accountability mandated?", 
                opts: ["On every medical call", "For all incidents involving mutual aid", "Only during high-rise fires", "When the Chief arrives"], 
                ans: 1,
                coaching: "The PASSPORT system shall be mandated for all incidents involving use of mutual aid (Level II)."
            },
            { 
                q: "True or False: PASSPORTs should be carried by the crew into the hazard zone.", 
                opts: ["True", "False"], 
                ans: 1,
                coaching: "Basic Rule: PASSPORTs never enter the hazard zone. They remain at the point of entry."
            },
            { 
                q: "Who is the initial accountability location for a geographic side of a building?", 
                opts: ["The first arriving Chief", "The first engine to that side", "The staging officer", "The safety officer"], 
                ans: 1,
                coaching: "The first engine to each geographic side of the incident or point of entry will serve as the initial accountability location."
            }
        ]
    },
    { id: 3, title: "Final Evaluation", isExam: true }
];

const examQuestions = [
    { q: "What is the minimum crew size to enter a hazard zone?", opts: ["1", "2", "3", "4"], ans: 1, coaching: "A minimum crew size will be considered two or more members." },
    { q: "What is the dimension of the standard PASSPORT card?", opts: ["1x3", "2x4", "3x5", "4x6"], ans: 1, coaching: "The PASSPORT is a 2\" x 4\" plastic card." },
    { q: "Where are a firefighter's spare name tags kept?", opts: ["Inside gear pocket", "In the tool box", "Underside of helmet", "At the station"], ans: 2, coaching: "Tags are affixed on the underside of their helmet." },
    { q: "Where does the PASSPORT stay during Level I accountability?", opts: ["With the Chief", "At the point of entry", "On the apparatus dash", "In the officer's pocket"], ans: 2, coaching: "For Level I, the PASSPORT remains on the apparatus dash." },
    { q: "What action is required if a crew's radio fails in the hazard zone?", opts: ["Continue working", "Stay with the crew and exit", "Wait for help", "Call for a runner"], ans: 1, coaching: "If a radio fails, the crew will exit." },
    { q: "What must a crew do with their PASSPORT upon exiting the hazard zone?", opts: ["Leave it for the next crew", "Retrieve it immediately", "Mail it to command", "Discard it"], ans: 1, coaching: "Crews must retrieve their PASSPORTS upon exiting from the hazard zone." },
    { q: "How often should a PAR be conducted during an incident?", opts: ["Every 10 minutes", "Every 20 minutes", "Every 30 minutes", "Only when requested"], ans: 2, coaching: "A PAR or roll call will be required at every 30-minute elapsed time." },
    { q: "Which event triggers an immediate mandatory PAR?", opts: ["Water supply established", "Changing from offensive to defensive", "Arrival of the second engine", "End of shift"], ans: 1, coaching: "A PAR is required for any change from offensive to defensive mode of operations." },
    { q: "How should an unaccompanied ringing low air alarm be treated?", opts: ["As a routine alert", "As a Mayday/Emergency", "As a mechanical error", "Ignored"], ans: 1, coaching: "A ringing bell with no radio report shall be treated with the same urgency as a Mayday." },
    { q: "What group manages accountability at a high-rise incident entry point?", opts: ["Ventilation Group", "Lobby Group", "Search Group", "RIT"], ans: 1, coaching: "A Lobby Group shall be established and collect the PASSPORTS of crews reporting to the building." },
    { q: "Who handles the PASSPORTs for a geographic side in Level II accountability?", opts: ["Lobby officer", "Safety officer", "First engine apparatus operator", "Staging officer"], ans: 2, coaching: "The apparatus operator of the first engine to each geographic side becomes the initial Accountability Officer." },
    { q: "If a crew exits at a different location than they entered, what is their first priority?", opts: ["Go to rehab", "Notify their supervisor/Accountability Officer", "Change air cylinders", "Report to staging"], ans: 1, coaching: "Crews exiting at a different location must immediately notify their original Supervisor and/or Accountability Officer." },
    { q: "What happens to the pump operator's name tag during an interior attack?", opts: ["It stays on the PASSPORT", "It is removed by the officer", "It is given to the Chief", "It is put on the dash"], ans: 1, coaching: "The Company Officer must remove name tags of those members not entering the hazard zone." },
    { q: "What is the status of a firefighter who is unaccounted for?", opts: ["In rehab", "Lost or trapped", "Freelancing", "At the pump"], ans: 1, coaching: "An absent or unaccounted member will automatically be assumed lost or trapped until determined safe." },
    { q: "What size is the status board on a standard engine?", opts: ["4x6", "8x12", "16x12", "20x30"], ans: 1, coaching: "Each engine, ladder, rescue... will be equipped with an 8\"x12\" status board." },
    { q: "At what benchmark is the PASSPORT system typically terminated?", opts: ["Primary search complete", "Fire under control", "All clear", "After overhaul"], ans: 1, coaching: "Accountability will be maintained through a report of 'Fire Under Control'." },
    { q: "Who is responsible for ensuring the unit roster is current on the PASSPORT?", opts: ["The operator", "The firefighter", "The Company Officer", "The dispatcher"], ans: 2, coaching: "Company officers are responsible for ensuring that the PASSPORTS, unit roster, and helmet ID's always remain current." },
    { q: "What is required for a PAR report from a Company Officer?", opts: ["Radio confirmation of location", "Visual accounting of all crew members", "Listing of air pressures", "Confirming tool assignment"], ans: 1, coaching: "For a company officer, a PAR is a confirmation that members assigned to their crew are visually accounted for." },
    { q: "Under Level II, where do tankers deliver PASSPORTs during water shuttle?", opts: ["Incident Commander", "Water Supply Officer", "Safety Officer", "Staging"], ans: 1, coaching: "PASSPORTS from tanker units will be collected by the Water Supply Officer." },
    { q: "A PAR is required when search/rescue crews report what benchmark?", opts: ["Entry", "Primary search in progress", "All Clear", "Secondary search started"], ans: 2, coaching: "Company officers in search/rescue will ensure they have a PAR at the time they report an 'All clear'." }
];
