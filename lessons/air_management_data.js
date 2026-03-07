const currentLessonName = "Air Management";
const lessonData = [
    {
        id: 0,
        title: "Module 0: Air Management Policy & Standards",
        text: `
            <p>Welcome to the module on Air Management Policy and Standards. The Rule of Air Management (ROAM) involves three key issues: know how much air you have used, manage the amount of air you have left in your cylinder, and exit the Hazard Zone before your SCBA low air alarm and other alerts activate.</p>
            <h3>Air Supply Breakdown</h3>
            <p>Think of your cylinder in thirds. The initial 66% of the air supply is for working and exiting. The last 33% of the air supply in an SCBA is the emergency reserve. Members must have a minimum of 5000 psi in their cylinder in order to make entry into a hazardous atmosphere or Hazard Zone.</p>
            <h3>Alerts and Communication</h3>
            <p>When the first member of the company or crew gets a 50% HUD light activation (two flashing amber lights), the officer or team leader must alert their Supervisor via radio that the company or crew is at the 50% air level. If a firefighter works into their reserve air and their low air alarm begins to activate in the Hazard Zone, the officer must alert their Supervisor over the radio.</p>
            <h3>Time and Urgency</h3>
            <p>Crews working in the Hazard Zone will be notified when they have reached approximately 10 minutes by the incident commander, the Accountability Officer, or their Supervisor. This creates a two-cylinder rotation for firefighters, after which the firefighter MUST go to rehab. If members hear a low air alarm ringing in the Hazard Zone and there is no immediate radio report from the team whose bell is ringing, that bell should be considered an emergency alarm. This shall be treated with the same urgency as a Mayday.</p>
        `,
        quickCheck: [
            { 
                q: "What is the minimum psi required in a cylinder to make entry into a hazardous atmosphere?", 
                opts: ["4000 psi", "4500 psi", "5000 psi", "5500 psi"], 
                ans: 2,
                coaching: "Members must have a minimum of 5000 psi in their cylinder in order to make entry into a hazardous atmosphere or Hazard Zone."
            },
            { 
                q: "What percentage of the SCBA air supply is considered the emergency reserve?", 
                opts: ["10%", "25%", "33%", "50%"], 
                ans: 2,
                coaching: "The last 33% of the air supply in an SCBA is the emergency reserve."
            },
            { 
                q: "How should an immediate low air alarm ringing in the Hazard Zone with no radio report be treated?", 
                opts: ["As a mechanical failure", "As a normal operational alert", "With the same urgency as a Mayday", "As a signal to change strategy"], 
                ans: 2,
                coaching: "If members hear a low air alarm ringing with no immediate radio report, it shall be treated with the same urgency as a Mayday."
            },
            { 
                q: "What does a 50% HUD light activation consist of?", 
                opts: ["One flashing red light", "Two flashing amber lights", "Three solid green lights", "One solid red light"], 
                ans: 1,
                coaching: "A 50% HUD light activation is indicated by two flashing amber lights."
            }
        ]
    },
    {
        id: 1,
        title: "Module 1: Respiratory Protection & Equipment Use",
        text: `
            <p>Let us cover respiratory protection and equipment use. Members using respiratory protection shall ensure that they have no facial hair between the sealing surface of the facepiece and the face that could interfere with the seal or the valve function. Members shall perform a user seal check each time they put on the respirators.</p>
            <h3>Equipment Limitations</h3>
            <p>Self-contained breathing apparatus (SCBA) shall be used when entering an atmosphere that may be IDLH. Full-face respirators shall not be used when there is a potential for an oxygen-deficient atmosphere. For other mask types, cartridge respirator filters shall be replaced whenever the wearer begins to smell, taste, or be irritated by a contaminant. N95 masks protect against particulate contaminants that are 0.3 microns or larger. N95 masks are not suitable in an oxygen-deficient atmosphere or where an unsafe level of carbon monoxide exists.</p>
            <h3>Fit Testing and Medical Evaluations</h3>
            <p>Each new department member required to use SCBAs shall be quantitatively fit tested before being permitted to use SCBAs in a hazardous atmosphere and annually thereafter. Fit testing is to be done only in a negative-pressure mode. All members who are required to use respiratory protection must complete a medical evaluation questionnaire upon initial fit testing and annually thereafter. The questionnaires will be reviewed by a Physician or Licensed Health Care Professional (PLHCP) selected by the Department.</p>
        `,
        quickCheck: [
            { 
                q: "When are N95 masks NOT suitable for use?", 
                opts: ["Where fluid resistance is a priority", "In an oxygen-deficient atmosphere", "Against particulate contaminants 0.3 microns or larger", "During patient transport"], 
                ans: 1,
                coaching: "N95 masks are not suitable in an oxygen-deficient atmosphere or where an unsafe level of carbon monoxide exists."
            },
            { 
                q: "How often must a department member required to use SCBAs be quantitatively fit tested?", 
                opts: ["Before initial use and every 6 months thereafter", "Before initial use and annually thereafter", "Before initial use and every 5 years thereafter", "Only upon initial hire"], 
                ans: 1,
                coaching: "Each new department member required to use SCBAs shall be quantitatively fit tested before use and annually thereafter."
            },
            { 
                q: "In what mode must fit testing be done?", 
                opts: ["Positive-pressure mode", "Negative-pressure mode", "Neutral-pressure mode", "Static-pressure mode"], 
                ans: 1,
                coaching: "Fit testing is to be done only in a negative-pressure mode."
            },
            { 
                q: "When should cartridge respirator filters be replaced?", 
                opts: ["After 30 minutes of use", "When the wearer begins to smell or taste a contaminant", "At the end of every shift", "Before initial fit testing"], 
                ans: 1,
                coaching: "Cartridge respirator filters shall be replaced whenever the wearer begins to smell, taste, or be irritated by a contaminant."
            }
        ]
    },
    {
        id: 2,
        title: "Module 2: SCBA Inspection, Maintenance, and Storage",
        text: `
            <p>Your equipment must be ready to deploy. Prior to each shift, members are required to physically inspect and operate all SCBA and respirators which are on frontline fire apparatus. If the equipment is not in daily use, it should be inspected at least once a week and after each cleaning. The Captain assigned to Number 3 Fire Station shall be in charge of this department's SCBA program, inspection, inventory and repair.</p>
            <h3>Cleaning and Servicing</h3>
            <p>Members should thoroughly clean and sanitize all SCBA and respirators after each use. Every SCBA shall be inspected and serviced on an annual basis by individuals who have been trained and certified by the SCBA manufacturer to perform such annual servicing. The Department shall conduct annual flow testing on all SCBA. All annual flow testing must be performed by a certified SCBA technician.</p>
            <h3>Storage Requirements</h3>
            <p>Respirators in storage shall be protected against dust, sunlight, heat, extreme cold, excessive moisture, and damaging chemicals. Respirators shall not be stored in lockers or vehicles unless the respirators are stored in individual containers and are protected from damage.</p>
        `,
        quickCheck: [
            { 
                q: "How frequently are members required to physically inspect SCBA on frontline fire apparatus?", 
                opts: ["Prior to each shift", "Once a week", "Monthly", "Annually"], 
                ans: 0,
                coaching: "Prior to each shift, members are required to physically inspect and operate all SCBA and respirators on frontline fire apparatus."
            },
            { 
                q: "Who is in charge of the department's SCBA program, inspection, inventory, and repair?", 
                opts: ["The Training Officer", "The Captain assigned to Number 3 Fire Station", "The Incident Commander", "The Fire Chief"], 
                ans: 1,
                coaching: "The Captain assigned to Number 3 Fire Station shall be in charge of this department's SCBA program, inspection, inventory and repair."
            },
            { 
                q: "Who must perform all annual flow testing on SCBA?", 
                opts: ["Any company officer", "A certified SCBA technician", "The Training Officer", "The apparatus operator"], 
                ans: 1,
                coaching: "All annual flow testing must be performed by a certified SCBA technician."
            },
            { 
                q: "Under what condition can respirators be stored in lockers or vehicles?", 
                opts: ["If they are wrapped in a towel", "If they are stored in individual containers and protected from damage", "If they are inspected weekly", "If they are frontline apparatus spares"], 
                ans: 1,
                coaching: "Respirators shall not be stored in lockers or vehicles unless the respirators are stored in individual containers and are protected from damage."
            }
        ]
    },
    { id: 3, title: "Final Evaluation", isExam: true }
];

const examQuestions = [
    { q: "What percentage of the SCBA air supply is designated for working and exiting?", opts: ["33%", "50%", "66%", "75%"], ans: 2, coaching: "The initial 66% of the air supply is for working and exiting.", topic: "Air Managment"},
    { q: "What is the minimum cylinder pressure required to enter a hazardous atmosphere?", opts: ["4000 psi", "4500 psi", "5000 psi", "5500 psi"], ans: 2, coaching: "Members must have a minimum of 5000 psi in their cylinder in order to make entry into a hazardous atmosphere.", topic: "Air Managment" },
    { q: "What HUD light activation prompts an officer to alert the Supervisor that the crew is at 50% air level?", opts: ["One solid green light", "Two flashing amber lights", "One flashing red light", "Three solid amber lights"], ans: 1, coaching: "When the first member gets a 50% HUD light activation (two flashing amber lights), the officer must alert the Supervisor." , topic: "Air Managment"},
    { q: "At approximately what time interval will crews working in the Hazard Zone be notified by command or accountability?", opts: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"], ans: 1, coaching: "Crews working in the Hazard Zone will be notified when they have reached approximately 10 minutes.", topic: "Air Managment" },
    { q: "After how many cylinders must a firefighter go to rehab?", opts: ["One cylinder", "Two cylinders", "Three cylinders", "Four cylinders"], ans: 1, coaching: "This creates a two-cylinder rotation for firefighters, after which the firefighter MUST go to rehab.", topic: "Air Managment" },
    { q: "How should an unaccompanied ringing low air alarm in the Hazard Zone be treated?", opts: ["With routine caution", "As a standard exit reminder", "With the same urgency as a Mayday", "As an equipment malfunction"], ans: 2, coaching: "That bell should be considered an emergency alarm and treated with the same urgency as a Mayday.", topic: "Air Managment" },
    { q: "What is the rule regarding facial hair and respiratory protection?", opts: ["It must be trimmed to less than 1/4 inch", "No facial hair is allowed between the sealing surface and the face", "Mustaches are strictly prohibited", "Facial hair is acceptable if petroleum jelly is used"], ans: 1, coaching: "Members shall ensure that they have no facial hair between the sealing surface of the facepiece and the face.", topic: "Air Managment" },
    { q: "When is the use of a full-face respirator prohibited?", opts: ["During wildland fires", "During vehicle extrication", "When there is a potential for an oxygen-deficient atmosphere", "When bloodborne pathogens are suspected"], ans: 2, coaching: "Full-face respirators shall not be used when there is a potential for an oxygen-deficient atmosphere.", topic: "Air Managment" },
    { q: "When must cartridge respirator filters be replaced?", opts: ["When the wearer begins to smell, taste, or be irritated by a contaminant", "At the beginning of every operational period", "After 1 hour of continuous use", "When the humidity exceeds 80%"], ans: 0, coaching: "Cartridge respirator filters shall be replaced whenever the wearer begins to smell, taste, or be irritated by a contaminant.", topic: "Air Managment" },
    { q: "What size particulate contaminants do N95 masks protect against?", opts: ["0.1 microns or larger", "0.3 microns or larger", "0.5 microns or larger", "1.0 microns or larger"], ans: 1, coaching: "N95 masks protect against particulate contaminants that are 0.3 microns or larger.", topic: "Air Managment" },
    { q: "How often must SCBA fit testing be repeated after the initial test?", opts: ["Every 6 months", "Annually", "Every 2 years", "Every 3 years"], ans: 1, coaching: "SCBAs shall be quantitatively fit tested before use and annually thereafter.", topic: "Air Managment" },
    { q: "In what pressure mode must fit testing be done?", opts: ["Positive-pressure mode", "Negative-pressure mode", "Neutral-pressure mode", "Variable-pressure mode"], ans: 1, coaching: "Fit testing is to be done only in a negative-pressure mode.", topic: "Air Managment" },
    { q: "Who reviews the respirator medical evaluation questionnaires?", opts: ["The Training Officer", "The Fire Chief", "A Physician or Licensed Health Care Professional (PLHCP)", "The Company Officer"], ans: 2, coaching: "The questionnaires will be reviewed by a PLHCP selected by the Department.", topic: "Air Managment" },
    { q: "How often must frontline SCBA be physically inspected?", opts: ["Prior to each shift", "Once a week", "Once a month", "After each alarm"], ans: 0, coaching: "Prior to each shift, members are required to physically inspect and operate all SCBA and respirators.", topic: "Air Managment" },
    { q: "If SCBA equipment is not in daily use, how often should it be inspected?", opts: ["At least once a week", "Once every two weeks", "Monthly", "Annually"], ans: 0, coaching: "If the equipment is not in daily use, it should be inspected at least once a week and after each cleaning.", topic: "Air Managment" },
    { q: "Who is in charge of the department's SCBA program?", opts: ["The Shift Commander", "The Captain assigned to Number 3 Fire Station", "The designated Safety Officer", "The Training Division"], ans: 1, coaching: "The Captain assigned to Number 3 Fire Station shall be in charge of this department's SCBA program.", topic: "Air Managment" },
    { q: "When should members clean and sanitize SCBA and respirators?", opts: ["After each use", "Once a week", "During the annual service", "Only when visibly soiled"], ans: 0, coaching: "Members should thoroughly clean and sanitize all SCBA and respirators after each use.", topic: "Air Managment" },
    { q: "Who must perform the annual SCBA service and inspection?", opts: ["Any company officer", "Individuals trained and certified by the SCBA manufacturer", "The apparatus operator", "The Training Officer"], ans: 1, coaching: "Every SCBA shall be inspected and serviced on an annual basis by individuals who have been trained and certified by the SCBA manufacturer.", topic: "Air Managment" },
    { q: "Respirators must not be stored in lockers or vehicles unless what condition is met?", opts: ["They are inspected daily", "They are stored in individual containers and protected from damage", "They are kept in a temperature-controlled cab", "They are assigned to a chief officer"], ans: 1, coaching: "Respirators shall not be stored in lockers or vehicles unless the respirators are stored in individual containers and are protected from damage.", topic: "Air Managment" },
    { q: "Who must perform the annual SCBA flow testing?", opts: ["A certified SCBA technician", "The station captain", "The safety officer", "A designated senior firefighter"], ans: 0, coaching: "All annual flow testing must be performed by a certified SCBA technician.", topic: "Air Managment"}
];
