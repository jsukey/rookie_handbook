var currentLessonName = "Radio Communications";
const lessonData = [
    {
        id: 0,
        title: "Harris XL-200P Basic Functions & Maintenance",
        text: `
            <p>This module covers our primary communication lifeline on the fireground. The Harris XL-200P portable radio is engineered to withstand extreme conditions, meeting MIL-STD-810G standards, while maintaining connectivity across VHF, UHF, and 700/800 MHz frequencies.</p>
            <h3>Power and Navigation</h3>
            <p>To initialize the unit and adjust the volume, turn the Power/Volume knob clockwise. Channel selection is controlled via the Group/Channel Knob located on the top panel. To navigate between the four designated channel banks (Zones 1-4), utilize the A/B/C/D switch.</p>
            <h3>Quick Select Buttons</h3>
            <p>During dynamic incidents, rapid channel switching is essential. The Harris radio features programmable quick-select buttons to facilitate this without requiring visual confirmation. Press the yellow button located above the Push-To-Talk (PTT) switch for an immediate transfer to EPD. For Lifecare, press the black button directly below the PTT. To access the EFD Repeater, press the secondary black button located directly below the Lifecare button.</p>
            <h3>Maintenance and Cleaning</h3>
            <p>Proper maintenance ensures operational readiness. In accordance with Policy 714, portable radio batteries must be replaced daily at 0800 hours and immediately following prolonged use at an incident. To clean the exterior of the radio, battery, and accessories, utilize a damp cloth with warm water and a 0.5% mild dish detergent solution. The use of chemical cleaners or sprays is strictly prohibited as they compromise the equipment's weather seals.</p>
            <img src="../images/radio0.png" alt="Radio Use" class="instructive-image">

            `,
        quickCheck: [
            { 
                q: "What time are portable radio batteries required to be changed daily?", 
                opts: ["0700 hours", "0800 hours", "0900 hours", "2000 hours"], 
                ans: 1,
                coaching: "Portable batteries are changed daily at 0800 and whenever they are on for prolonged periods of time on calls."
            },
            { 
                q: "Which button is used for a quick change to the EPD channel?", 
                opts: ["Top channel knob", "Black button below PTT", "Yellow button above PTT", "Orange emergency button"], 
                ans: 2,
                coaching: "Press the yellow quick-select button located above the Push-To-Talk (PTT) button for EPD."
            },
            { 
                q: "How do you switch between the four different channel banks (Zones 1-4)?", 
                opts: ["A/B/C/D switch", "Volume knob", "Push-To-Talk button", "Emergency button"], 
                ans: 0,
                coaching: "Use the A/B/C/D switch to navigate between the four channel banks."
            },
            { 
                q: "What is the approved method for cleaning the exterior of the radio?", 
                opts: ["10% bleach solution", "Dry microfiber rag", "Alcohol sanitizing wipe", "Damp cloth and 0.5% mild dish detergent"], 
                ans: 3,
                coaching: "Clean using a damp clean cloth with warm water and mild dish detergent (0.5% in water)."
            }
        ]
    },
    {
        id: 1,
        title: "Radio Communications & CAN Reports",
        text: `
            <p>Effective communication is fundamental to incident management and fireground safety. This module outlines the standard operational procedures for radio placement and structured progress reporting.</p>
            <h3>Radio Placement</h3>
            <p>All EFD portables must be secured in an assigned radio sling, properly adjusted to the member's body type. When donning PPE and wearing the Remote Speaker Microphone (RSM) beneath a turnout coat, it must be clipped just above the last snap hook. This specific placement affords the RSM cord maximum thermal protection during interior operations.</p>
            <h3>CAN Reports</h3>
            <p>The CAN report is the standard EFD methodology for providing the Incident Commander (IC) with concise progress updates. It is comprised of three distinct elements:</p>
            <ul>
              <li><strong>Conditions (C):</strong> Identify your current location and accurately describe the smoke, fire, and heat conditions, or the interior layout you are encountering.</li>
              <li><strong>Actions (A):</strong> Detail your current operational progress, such as fire control efforts, checking for extension, or conducting a primary search.</li>
              <li><strong>Needs (N):</strong> Request necessary resources, including reinforcements, specific tools, relief crews, or support work.</li>
            </ul>
            <p>Critical Parameter: Every CAN report must conclude with a Needs assessment. If a crew requires no additional resources or support, the reporting member must explicitly state "No Needs" to the IC to ensure clarity.</p>
            <img src="../images/radio1.png" alt="CAN report" class="instructive-image">        
            `,
        quickCheck: [
            { 
                q: "Where should the Remote Speaker Microphone (RSM) be placed when worn under a turnout coat?", 
                opts: ["Outside the coat entirely", "Clipped to the collar", "Just above the last snap hook", "Inside a sealed pocket"], 
                ans: 2,
                coaching: "The RSM is placed just above the last snap hook. This provides the most thermal protection of the RSM cord."
            },
            { 
                q: "What does the 'C' in CAN report stand for?", 
                opts: ["Casualties", "Conditions", "Command", "Control"], 
                ans: 1,
                coaching: "C - Conditions: Where you are, smoke/fire conditions, heat conditions, or interior layout."
            },
            { 
                q: "If your crew does not require additional resources at the end of a CAN report, what must you do?", 
                opts: ["Explicitly state 'No Needs'", "Remain silent", "Say 'All Clear'", "Request a PAR"], 
                ans: 0,
                coaching: "Always end every CAN report with a Needs assessment. If nothing is required, explicitly state 'No Needs'."
            },
            { 
                q: "What information falls under the 'A' (Actions) portion of a CAN report?", 
                opts: ["Apparatus placement", "Air consumption", "Assignments given", "Progress on fire control or primary search"], 
                ans: 3,
                coaching: "A - Actions: Progress on fire control, checking for extension, or primary search."
            }
        ]
    },
    {
        id: 2,
        title: "MAYDAY Procedures",
        text: `
            <p>Mayday procedures dictate the immediate actions required when an emergency exists involving an endangered firefighter. The unforgiving nature of Immediately Dangerous to Life or Health (IDLH) environments necessitates that a MAYDAY be declared at the very first indication of trouble, including becoming trapped, lost, disoriented, or experiencing an SCBA failure.</p>
            <h3>Declaring a MAYDAY</h3>
            <p>Any firefighter experiencing a life-threatening emergency shall declare a MAYDAY by holding the microphone button, and transmitting "Mayday, Mayday, Mayday" three times to clear the airwaves. Information must then be relayed using the standard Who, Where, What format:</p>
            <ul>
              <li><strong>Who:</strong> Identify yourself (e.g., "Firefighter Smith").</li>
              <li><strong>Where:</strong> State your exact location (e.g., "Second Floor, Alpha/Bravo corner").</li>
              <li><strong>What:</strong> Describe the emergency and what resources are required (e.g., "Trapped under a ceiling collapse, out of air").</li>
            </ul>
            <h3>Tactical Recommendations</h3>
            <p>Following a MAYDAY declaration, distressed firefighters must maintain crew integrity. Manually activate the PASS device, and utilize flashlights and tools to generate noise to assist the Rapid Intervention Team (RIT) in locating your position. If an opportunity for self-rescue or extrication presents itself, the MAYDAY must still be transmitted prior to initiating the rescue effort. Continuously update Command regarding any changes in conditions.</p>
            <p>For crews actively engaged in fire control during a MAYDAY declaration: unless the MAYDAY specifically involves your company, strict operational discipline must be maintained. Do not abandon your hose line. Your primary objective remains fire control, as improving interior tenability is the most effective way to protect a downed firefighter.</p>
            <img src="../images/radio2.png" alt="Mayday calling" class="instructive-image">        
            `,
        quickCheck: [
            { 
                q: "How many times must a firefighter transmit the word 'Mayday' over the radio to declare an emergency?", 
                opts: ["One time", "Two times", "Three times", "Four times"], 
                ans: 2,
                coaching: "Any firefighter that feels the need to request a Mayday shall do so by transmitting over the radio Mayday three (3) times."
            },
            { 
                q: "What format is required to relay critical information after declaring a MAYDAY?", 
                opts: ["What, Where, Who", "Who, Where, What", "Who, What, How", "Where, Who, Why"], 
                ans: 1,
                coaching: "Use the Who, Where, What format: Who are you, Where are you, and What do you need."
            },
            { 
                q: "What must a distressed firefighter do before attempting self-rescue or extrication?", 
                opts: ["Call a MAYDAY first", "Activate their PASS device", "Drop their tools", "Turn off their radio"], 
                ans: 0,
                coaching: "Make attempts to self-rescue/extricate, but make sure to call the MAYDAY first."
            },
            { 
                q: "Immediately after a MAYDAY is called, what should the distressed crew do?", 
                opts: ["Leave their crew", "Remove their SCBA", "Switch channels", "Keep the crew intact and activate the PASS device"], 
                ans: 3,
                coaching: "Crews shall remain intact, activate P.A.S.S., and utilize flashlights and tools to indicate position."
            }
        ]
    },
    { id: 3, title: "Final Evaluation", isExam: true }
];

const examQuestions = [
    { 
        q: "At what time must portable radio batteries be changed daily per EFD policy?", 
        opts: ["0800 hours", "0700 hours", "1200 hours", "At the end of shift"], 
        ans: 0, 
        coaching: "It shall be EFD policy that portable batteries are changed daily at 0800 and whenever they are on for prolonged periods of time on calls." 
    },
    { 
        q: "Which button provides a quick change to the EPD channel?", 
        opts: ["Orange emergency button", "Yellow button above the Push-To-Talk (PTT)", "Black button below the PTT", "A/B/C/D switch"], 
        ans: 1, 
        coaching: "Press the yellow quick-select button located above the Push-To-Talk (PTT) button for EPD." 
    },
    { 
        q: "Which button is utilized for a quick change to the Lifecare channel?", 
        opts: ["Yellow button above the PTT", "Top channel knob", "Black button below the PTT", "Black button below the Lifecare button"], 
        ans: 2, 
        coaching: "Press the black quick-select button located below the PTT button for Lifecare." 
    },
    { 
        q: "What is the approved solution for periodically cleaning the radio exterior?", 
        opts: ["10% bleach solution", "Industrial degreaser", "Dry cloth only", "Warm water and 0.5% mild dish detergent"], 
        ans: 3, 
        coaching: "Clean using a damp clean cloth (warm water and mild dish detergent at 0.5% in water)." 
    },
    { 
        q: "How do you navigate between the four different channel banks (Zones 1-4)?", 
        opts: ["Using the A/B/C/D switch", "Using the top channel knob", "Using the PTT button", "Using the orange emergency button"], 
        ans: 0, 
        coaching: "Use the A/B/C/D switch to navigate between the four channel banks (Zones 1-4)." 
    },
    { 
        q: "What does the acronym CAN stand for in a CAN report?", 
        opts: ["Conditions, Actions, Notifications", "Conditions, Actions, Needs", "Casualties, Actions, Needs", "Conditions, Apparatus, Needs"], 
        ans: 1, 
        coaching: "CAN stands for Conditions, Actions, and Needs." 
    },
    { 
        q: "What is the crucial rule when concluding a CAN report if no additional resources are required?", 
        opts: ["Stay silent", "State 'All Clear'", "Explicitly state 'No Needs'", "Turn off the radio"], 
        ans: 2, 
        coaching: "Always end every CAN report with a Needs assessment. If nothing is required, explicitly state 'No Needs'." 
    },
    { 
        q: "What is the proper radio transmission to declare an emergency for an endangered firefighter?", 
        opts: ["Emergency Traffic", "Help Needed", "Code Red", "\"Mayday, Mayday, Mayday\""], 
        ans: 3, 
        coaching: "Any firefighter that feels the need to request a Mayday shall do so by transmitting over the radio 'Mayday, Mayday, Mayday'." 
    },
    { 
        q: "What format must be used to relay information after declaring a MAYDAY?", 
        opts: ["Who, Where, What", "What, Where, Why", "Who, How, When", "Where, What, How"], 
        ans: 0, 
        coaching: "Use the Who, Where, What format: Who are you, Where are you, and What do you need." 
    },
    { 
        q: "When wearing the Remote Speaker Microphone (RSM) under a turnout coat, where should it be placed to provide maximum thermal protection for the cord?", 
        opts: ["Clipped to the collar", "Outside the coat entirely", "Just above the last snap hook", "Inside a sealed pocket"], 
        ans: 2, 
        coaching: "The RSM is placed just above the last snap hook. This provides the most thermal protection of the RSM cord." 
    },
    { 
        q: "If a firefighter needs to attempt self-rescue or extrication, what must they do first?", 
        opts: ["Drop their tools", "Activate the PASS device", "Remove their SCBA", "Call a MAYDAY"], 
        ans: 3, 
        coaching: "Make attempts to self-rescue/extricate, but make sure to call the MAYDAY first." 
    },
    { 
        q: "What is a tactical recommendation for a distressed firefighter immediately after calling a MAYDAY?", 
        opts: ["Keep the crew intact and activate the PASS device", "Turn off the radio to save battery", "Leave the hazard zone without notifying command", "Abandon all equipment to move faster"], 
        ans: 0, 
        coaching: "Tactical recommendations include keeping the crew intact, utilizing flashlights/tools to indicate position, and activating P.A.S.S." 
    },
    { 
        q: "Which button is used for a quick change to the EFD Repeater?", 
        opts: ["Top channel knob", "Black button directly below the Lifecare button", "Yellow button above the PTT", "A/B/C/D switch"], 
        ans: 1, 
        coaching: "EFD Repeater: Press the black button located directly below the Lifecare button." 
    },
    { 
        q: "If a MAYDAY occurs but does not involve your specific company, what should you do if your crew is actively addressing fire control?", 
        opts: ["Drop tools and search for the firefighter", "Evacuate the building immediately", "Continue with fire control efforts (Put the fire out!)", "Initiate a PAR on your own channel"], 
        ans: 2, 
        coaching: "Other operating interior crews that are actively addressing fire control when a mayday occurs should continue with their fire control efforts. Put the fire out!" 
    }
];