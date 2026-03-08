const currentLessonName = "Accountability System";
const lessonData = [
    {
        id: 0,
        title: "Module 0: Purpose and Procedures",
        text: `
            <p>The <strong>PASSPORT Personnel Accountability System</strong> gives an Incident Commander a fast and efficient means to account for all fire/rescue personnel that are working within a small geographic area within the hazard zone of an incident. Use of the system will provide enhanced personal safety for the individual firefighter and an improved means to track and account for all personnel working in the hazard zone.</p>
            
            <h3>Defining the Hazard Zone</h3>
            <p>The hazard zone shall be defined as any area that requires an SCBA, a charged hoseline and protective clothing, or in which a firefighter is at risk of becoming lost, trapped, or injured by the environment or structure. This includes entry into a structure reported to be on fire, operating in close proximity to the structure during exterior operations, confined space or trench rescues.</p>
            
            <h3>Procedures and Responsibilities</h3>
            <p>All officers/supervisors are responsible for complying with and ensuring that personnel under their command are adequately trained, fully understand, and comply with this guideline. All personnel have the responsibility to learn and follow this guideline. Accountability involves a personal commitment to work within the safety system at all times.</p>
            <ul>
                <li><strong>Tracking:</strong> Command will always maintain an accurate tracking and awareness of where resources are committed at an incident.</li>
                <li><strong>No Freelancing:</strong> All crews will work for Command or assigned areas.</li>
                <li><strong>Crew Integrity:</strong> Crews arriving on the scene shall remain intact. A minimum crew size will be considered two or more members and a radio will be required for each crew.</li>
                <li><strong>Togetherness:</strong> All crews will go in together, stay together, and come out together. Reduced visibility and increased risk will require very tight togetherness.</li>
                <li><strong>Radio Failure:</strong> If a radio fails while in the hazard zone, the crew will exit unless there is another working radio with the crew.</li>
            </ul>
        `,
        quickCheck: [
            { 
                q: "How is the hazard zone defined according to the PASSPORT system?", 
                opts: ["Any area that requires an SCBA, a charged hoseline and protective clothing", "Any area outside the immediate fire building perimeter", "Any area where only command staff operates", "Any area that requires a single firefighter for overhaul"], 
                ans: 0,
                coaching: "The hazard zone is any area that requires an SCBA, a charged hoseline and protective clothing, or where a firefighter is at risk."
            },
            { 
                q: "What is considered a minimum crew size arriving on the scene?", 
                opts: ["One member", "Two or more members", "Three or more members", "Four members exactly"], 
                ans: 1,
                coaching: "A minimum crew size will be considered two or more members and a radio will be required for each crew."
            },
            { 
                q: "What must a crew do if a radio fails while in the hazard zone?", 
                opts: ["Continue operations using visual signals", "Send one member out to get a replacement", "Exit unless there is another working radio with the crew", "Switch to the secondary dispatch channel"], 
                ans: 2,
                coaching: "If a radio fails while in the hazard zone, the crew will exit unless there is another working radio with the crew."
            },
            { 
                q: "Who is responsible for keeping crews together and working in pairs?", 
                opts: ["Command staff", "Officers", "The apparatus operator", "The dispatcher"], 
                ans: 1,
                coaching: "Accountability is an accurate roster, officers keeping crews together, working in pairs, and using proper PPE."
            }
        ]
    },
    {
        id: 1,
        title: "Module 1: Accountability Equipment and Officers",
        text: `
            <p>To enhance accountability and to improve tracking of firefighters in the hazard zone, the <strong>PASSPORT</strong> system will be used.</p>
            
            <h3>Accountability Equipment</h3>
            <p>The PASSPORT system equipment involves a 2" x 4" plastic card with the apparatus unit’s ID etched on it and shall contain the name tags of all personnel assigned to that crew. A PASSPORT will be located in each apparatus, affixed to the dash and easily removed.</p>
                        <ul>
                <li><strong>Name Tags:</strong> Each firefighter will be issued three individual name tags, which shall be affixed on the underside of their helmet.</li>
                <li><strong>Status Boards:</strong> Each engine, ladder, rescue and specialized equipment will be equipped with an 8"x12" status board. Each command vehicle shall be equipped with a 16"x12" status board to collect PASSPORTS.</li>
                <li><strong>Partial Crews:</strong> When entering a hazard zone with a partial crew (e.g., operator remains at the engine), the Company Officer must remove name tags of those members not entering the hazard zone.</li>
                <li><strong>Maintenance:</strong> All PASSPORTS and status equipment will be considered safety equipment and shall be inspected at least once annually.</li>
            </ul>

            <h3>Accountability Officers or Supervisors</h3>
            <p>Accountability Officers may be apparatus operators, Division/Group supervisors, or personnel specifically assigned to serve as Accountability Officers. The first engine to each geographic side of the incident or point of entry will serve as the initial accountability location, managed by the apparatus operator.</p>
            <p>All crews entering the incident will deliver their PASSPORTS to the accountability location closest to their point of entry before entering the hazard zone. As Command implements divisions or groups, Supervisors will manage PASSPORTS only if they do not enter the hazard zone.</p>
            <p>The Accountability Officer's responsibilities include developing a tracking plan, requesting area resources, providing progress reports to Command, and initiating PARs upon benchmarks or as required.</p>
        `,
        quickCheck: [
            { 
                q: "What are the dimensions of the plastic card used for the PASSPORT?", 
                opts: ["2 x 4 inches", "3 x 5 inches", "4 x 6 inches", "8 x 12 inches"], 
                ans: 0,
                coaching: "The PASSPORT system equipment involves a 2 x 4 plastic card with the apparatus unit’s ID etched on it."
            },
            { 
                q: "How many individual name tags is each firefighter issued?", 
                opts: ["One", "Two", "Three", "Four"], 
                ans: 2,
                coaching: "Each firefighter will be issued three individual name tags, which shall be affixed on the underside of their helmet."
            },
            { 
                q: "What size status board is each command vehicle equipped with?", 
                opts: ["8 x 12 inches", "16 x 12 inches", "2 x 4 inches", "24 x 18 inches"], 
                ans: 1,
                coaching: "Each command vehicle shall be equipped with a 16 x 12 status board to collect PASSPORTS."
            },
            { 
                q: "Who manages the initial accountability location on each geographic side of the incident?", 
                opts: ["The apparatus operator of the first engine", "The Safety Officer", "The Division Supervisor exclusively", "The Incident Commander"], 
                ans: 0,
                coaching: "The first engine to each geographic side of the incident will serve as the initial accountability location, managed by the apparatus operator."
            }
        ]
    },
    {
        id: 2,
        title: "Module 2: Implementation and Operations",
        text: `
            <p>The objective of the PASSPORT system is to collect crew members’ PASSPORTS near the point of entry and to ensure that PASSPORTS are accurate, reflecting only those members inside the hazard zone. The system shall be mandated for all incidents involving use of mutual aid.</p>
            
            <h3>Implementation Rules</h3>
            <ul>
                <li>PASSPORTS never enter the hazard zone.</li>
                <li>PASSPORTS must be maintained at the point of entry to the hazard zone.</li>
                <li>PASSPORTS shall reflect all personnel assigned to the crew or apparatus.</li>
                <li>Crews must turn in their PASSPORTS upon entering and must retrieve their PASSPORTS upon exiting from the hazard zone.</li>
            </ul>

            <h3>Point of Entry (POE) Control</h3>
            <p>PASSPORTS will remain with the designated Accountability Officer near the point of entry. Crews exiting at a different location other than the original point of entry must immediately notify their original Supervisor and/or Accountability Officer of their changed status. Where physical distance prevents retrieval of the PASSPORT and the crew is being reassigned, a "make-up" PASSPORT must be assembled.</p>

            <h3>Personnel Accountability Report (PAR)</h3>
            <p>A PAR involves a roll call of personnel assigned. For a company officer, a PAR is a confirmation that members assigned to their crew are visually accounted for.</p>
                        <p>A PAR is required for the following situations:</p>
            <ul>
                <li>Any report of a missing or trapped firefighter</li>
                <li>Any change from offensive to defensive mode of operations</li>
                <li>Any sudden hazardous event at an incident (flash-over, backdraft, collapse)</li>
                <li>By all crews reporting an ALL CLEAR</li>
                <li>At every 30-minute elapsed time during the incident</li>
                <li>At a report of FIRE UNDER CONTROL</li>
            </ul>

            <h3>Lost/Missing Firefighter</h3>
            <p>An absent or unaccounted member of any crew will automatically be assumed lost or trapped in the hazard zone until otherwise determined safe. For any reports of missing firefighters, Command shall request the next greater mutual aid alarm, initiate an immediate roll call (PAR), dispatch the Rapid Intervention Team (RIT) to the last reported working area, and simultaneously adjust all on-scene strategies to a priority search and rescue effort.</p>
        `,
        quickCheck: [
            { 
                q: "What is a basic rule regarding PASSPORTS and the hazard zone?", 
                opts: ["PASSPORTS never enter the hazard zone", "PASSPORTS must be carried in the left pocket", "PASSPORTS are taken inside by the company officer", "PASSPORTS remain at the central command post only"], 
                ans: 0,
                coaching: "A basic rule of implementation is that PASSPORTS never enter the hazard zone."
            },
            { 
                q: "When is a Personnel Accountability Report (PAR) required?", 
                opts: ["At every 30-minute elapsed time during the incident", "Every 10 minutes during the incident", "Only when requested by the dispatcher", "Only when arriving on scene"], 
                ans: 0,
                coaching: "A PAR or roll call is required at every 30-minute elapsed time during the incident."
            },
            { 
                q: "What must Command do immediately for any report of a missing firefighter?", 
                opts: ["Request the next greater mutual aid alarm", "Continue defensive operations as normal", "Wait 5 minutes to see if the firefighter radios in", "Dismiss the Rapid Intervention Team"], 
                ans: 0,
                coaching: "For any report of a missing firefighter, Command shall request the next greater mutual aid alarm."
            },
            { 
                q: "Who will collect PASSPORTS from tanker units during water shuttle operations?", 
                opts: ["The Water Supply Officer", "The Incident Commander", "The Lobby Group Supervisor", "The Safety Officer"], 
                ans: 0,
                coaching: "During water shuttle operations, PASSPORTS from tanker units will be collected by the Water Supply Officer."
            }
        ]
    },
    { id: 3, title: "Final Evaluation", isExam: true }
];

const examQuestions = [
    { q: "What is the purpose of the PASSPORT system for an Incident Commander?", opts: ["A method for tracking water supply resources", "A system for logging apparatus maintenance","A fast and efficient means to account for all personnel working in the hazard zone",  "A tool for dispatching mutual aid"], ans: 2, topic: "Firefighter Accountability System" },
    { q: "Which of the following describes a hazard zone?", opts: ["The rehab sector established at an incident", "The staging area for incoming apparatus", "The command post location", "An area that requires an SCBA, a charged hoseline and protective clothing"], ans: 3, topic: "Firefighter Accountability System" },
    { q: "Who is responsible for complying with the personnel accountability guideline?", opts: ["All personnel", "Only command staff", "Only interior structural firefighters", "Only mutual aid responders"], ans: 0, topic: "Firefighter Accountability System" },
    { q: "What happens if a radio fails while in the hazard zone?", opts: ["The crew splits up to find a replacement radio","The crew will exit unless there is another working radio with the crew",  "The crew remains inside and uses hand signals", "The crew continues without communication"], ans: 1, topic: "Firefighter Accountability System" },
    { q: "Where are PASSPORTS generally located in each apparatus?", opts: ["Affixed to the dash and easily removed", "In the driver's side door pocket", "In the glove compartment", "Attached to the officer's SCBA harness"], ans: 0 },
    { q: "How often shall all PASSPORTS and status equipment be inspected?", opts: ["Monthly", "Weekly", "After every incident", "At least once annually", ], ans: 3, topic: "Firefighter Accountability System" },
    { q: "What must a Company Officer do if they enter a hazard zone with a partial crew?", opts: ["Leave the PASSPORT exactly as it is", "Create a completely new PASSPORT card", "Leave the PASSPORT in the cab untouched", "Remove name tags of those members not entering the hazard zone"], ans: 3, topic: "Firefighter Accountability System" },
    { q: "Who manages PASSPORTS as Command implements divisions or groups, but Supervisors do not enter the hazard zone?", opts: [ "The dispatcher will manage PASSPORTS", "Supervisors will manage PASSPORTS", "The safety officer takes over all PASSPORTS", "The personnel must carry their own PASSPORTS"], ans: 1, topic: "Firefighter Accountability System" },
    { q: "When is the PASSPORT system mandated for implementation?", opts: ["For every medical call", "Only during high-rise fires", "For all incidents involving use of mutual aid", "Only during trench rescues"], ans: 2, topic: "Firefighter Accountability System" },
    { q: "Where must PASSPORTS be maintained during an incident?", opts: ["At the point of entry to the hazard zone", "Inside the hazard zone with the crew", "Exclusively at the command post", "Left on the apparatus dash at all times"], ans: 0, topic: "Firefighter Accountability System" },
    { q: "During multistory or high-rise incidents, who collects PASSPORTS from all crews reporting to the building initially?", opts: ["A Lobby Group", "The roof division", "The rapid intervention team", "The initial apparatus operator only"], ans: 0, topic: "Firefighter Accountability System" },
    { q: "What defines a Personnel Accountability Report (PAR) for a Division/Group Supervisor?", opts: ["A visual check of only their immediate crew", "A radio check of the primary dispatch channel", "An accounting for all crew members of all companies assigned to their area", "A count of the remaining air supply for interior crews"], ans: 2, topic: "Firefighter Accountability System" },
    { q: "Which of the following requires a Personnel Accountability Report (PAR)?", opts: [ "The arrival of the first engine company", "The establishment of a water supply", "The donning of SCBA facepieces", "Any change from offensive to defensive mode of operations"], ans: 0, topic: "Firefighter Accountability System" },
    { q: "How long is PASSPORT accountability maintained?", opts: [ "Until the first crew exits the building", "Through a report of Fire Under Control", "For the first 30 minutes of the incident only", "Until the primary search is complete"], ans: 1, topic: "Firefighter Accountability System" },
    { q: "What is the assumption for an absent or unaccounted member of any crew?", opts: ["Automatically assumed lost or trapped in the hazard zone", "Assumed to be retrieving tools from the apparatus", "Assumed to be safe in the rehab area", "Assumed to have reported to the command post"], ans: 0, topic: "Firefighter Accountability System" },
    { q: "What must Command dispatch for any report of a missing firefighter?", opts: ["The Rapid Intervention Team (RIT)", "The hazardous materials team", "The public information officer", "The fire investigator"], ans: 0, topic: "Firefighter Accountability System"  },
    { q: "Who is responsible for tracking the location of all crews at an incident?", opts: [ "FIREFIGHTER", "DISPATCHER", "COMMAND", "OPERATOR"], ans: 2, topic: "Firefighter Accountability System"  },
    { q: "What must be assembled if physical distance prevents retrieval of a PASSPORT when a crew is reassigned?", opts: ["A make-up PASSPORT", "A completely new command structure", "A written PAR report", "A secondary accountability board"], ans: 0 },
    { q: "Who works closely with Accountability Officers to ensure accurate PASSPORTS and tracking of crews?", opts: [ "FIREFIGHTER", "WATER SUPPLY OFFICER", "DISPATCHER", "DIVISION SUPERVISOR",], ans: 3, topic: "Firefighter Accountability System" },
    { q: "What size is the status board on an engine, ladder, or rescue?", opts: [ "16 x 12 inches", "2 x 4 inches", "4 x 6 inches", "8 x 12 inches",], ans: 3, topic: "Firefighter Accountability System" },
    { q: "Who is responsible for staying with his/her crew at all times and ensuring their name tag is on the PASSPORT?", opts: ["FIREFIGHTER", "COMPANY OFFICER", "COMMAND", "ACCOUNTABILITY OFFICER"], ans: 0, topic: "Firefighter Accountability System" },
    { q: "What happens to strategy when there is a report of a missing firefighter?", opts: ["Simultaneously, adjust all on-scene strategies to a priority search and rescue effort", "Strategies remain the same but speed is increased", "All operations cease immediately until the firefighter is found", "Strategy strictly shifts to defensive operations to protect the remaining crews"], ans: 0, topic: "Firefighter Accountability System" },
    { q: "When crews report an ALL CLEAR, what must company officers ensure they have?", opts: [ "A secondary hose line in place", "A new PASSPORT card", "A PAR for their members", "A confirmed water supply"], ans: 2 , topic: "Firefighter Accountability System"},
    { q: "Where are the three individual name tags affixed on a firefighter's gear?", opts: [ "On the left breast of their turnout coat", "On the underside of their helmet", "Inside their right glove", "On their radio strap"], ans: 1, topic: "Firefighter Accountability System" }
];
