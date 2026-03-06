const currentLessonName = "Department Orientation";
const lessonData = [
    {
        id: 0,
        title: "Module 0: Expectations and The Rookie Mentality",
        text: `
            <h3>Welcome and Fire Chief Expectations</h3>
            <p>Welcome to the Elyria Fire Department! You are now a member of an elite team of professionals, dedicated to providing the very best in emergency services to our community.</p>
            <p>As the Fire Chief of this amazing organization, it is my responsibility to provide our community with the highest level of emergency response capability as we can. Just as important to me is that EVERYONE GOES HOME when they get off shift. Keeping this in mind, I am outlining my expectations of you below:</p>
            <ul>
                <li><strong>BE ON TIME!</strong> Timeliness is critical in the fire service. People are counting on you every day, to include your fellow Firefighters. Be on time and ready to work when roll call happens. No one should have to cover for you because you were late to work! Know your schedule – on time means being early!</li>
                <li><strong>LOOK LIKE A PROFESSIONAL!</strong> You don't just represent the Elyria Fire Department. You also represent the City of Elyria to your community! Don't disrespect the firefighters who have come before you because you are too lazy to wear your uniform correctly.</li>
                <li><strong>ACT LIKE A PROFESSIONAL!</strong> The chain of command exists for many reasons, and you are expected to respect it, and use it. Communicate with your supervisor often – let them know when you have issues – let them know as soon as you know! Train every day as though your life depends on it – because it does! Being a good Firefighter is your responsibility. Take your training and development seriously. Work diligently on your Rookie Book. Be quiet and listen to those around you who have gone before you. Soak in the knowledge and experiences from the things they tell you. Your job as a Firefighter is deadly serious! Give 100% in everything you do. Discrimination of any kind, sexual harassment, and violence in the workplace are fast ways to not be a part of this organization any longer. THESE ACTIONS WILL NOT BE TOLERATED.</li>
                <li><strong>GO HOME AT THE END OF YOUR SHIFT!</strong> Pay attention to detail. Pay attention to what you are doing. Listen to your trainers, your crew, and your superiors. Use the safety gear given to you – EVERY TIME. It will literally save your life one day.</li>
            </ul>
            <p>My door is always open. If you have any questions or concerns, do not hesitate to ask. Just remember that my first question will always be, have you talked with your supervision about your concerns?</p>
            
            <h3>The Rookie Mentality of the Elyria Firefighter</h3>
            <p>At some point, all of us walked into the fire station for the first time as a firefighter. The vast majority of firefighters would tell you that they did whatever it took to break through to the other side; the land of being full-fledged, one-of-the-guys. This meant showing up an hour before they had to, scrubbing the station on hands and knees, devouring food in seconds like a starved animal so that no one else could get to the dishes first, being the first to volunteer (even after hours of grueling hands-on training); literally, whatever it took. That is the "rookie mentality!"</p>
            <p>There is no place for an attitude of entitlement in the fire service. Hard work and whole-hearted effort are among the necessary traits to being successful. Those who forget this are likely just buying time until they harm a citizen that they are supposed to protect, a fellow brother, and/or themselves.</p>
            <ul>
                <li><strong>Eagerness to learn the job:</strong> This entails academics, hands-on training, Q&A sessions, call responses, etc. We are a people in a continuously changing environment. As a result, we must rise to the occasion.</li>
                <li><strong>Support the crew:</strong> When it comes down to it, we should be seeking opportunities to be there for those we work with. Each of us will notice little things that can be accomplished throughout the day. Take the few minutes to see some of them through to completion. This could mean putting away a few dishes, washing off that spot under the apparatus where oil inevitably drips, cleaning out the compartment in the truck that is continually overlooked, etc.</li>
                <li><strong>Enjoy your time at the station:</strong> This really is the greatest profession around. By showing up to the station, each of us has the opportunity to spend time with a family who is there to support us, laugh with us, work with us, and live life by our side.</li>
            </ul>
        `,
        quickCheck: [
            { 
                q: "According to the Fire Chief's expectations, what does 'on time' mean?", 
                opts: ["Being early", "Arriving exactly at 0800", "Being in the building before the bell rings", "Arriving within 5 minutes of roll call"], 
                ans: 0,
                coaching: "Know your schedule – on time means being early!"
            },
            { 
                q: "What is the first question the Fire Chief will ask if you come to their door with concerns?", 
                opts: ["Have you talked with your supervision about your concerns?", "Have you documented this in writing?", "Did you bring this up at roll call?", "Who else is involved in this issue?"], 
                ans: 0,
                coaching: "Just remember that my first question will always be, have you talked with your supervision about your concerns?"
            },
            { 
                q: "What attitude has no place in the fire service?", 
                opts: ["An attitude of entitlement", "An attitude of eagerness", "An attitude of service", "An attitude of confidence"], 
                ans: 0,
                coaching: "There is no place for an attitude of entitlement in the fire service."
            },
            { 
                q: "How should you act when experienced firefighters are telling stories?", 
                opts: ["Be quiet and listen to those around you who have gone before you.", "Interrupt to share a similar experience you had.", "Take notes in your Rookie Book.", "Ask immediately if it relates to a daily detail."], 
                ans: 0,
                coaching: "Be quiet and listen to those around you who have gone before you. Soak in the knowledge and experiences from the things they tell you."
            }
        ]
    },
    {
        id: 1,
        title: "Module 1: Daily Station Life and Duties",
        text: `
            <h3>Welcome To Our House...</h3>
            <p>Congratulations, you have been hired at the Firehouse fulltime. Believe it or not that was the easy part. Now you need to prove to everyone that you deserve to be here. We are not impressed with your talk. We are not impressed with stories from your other departments. Prove it to us that you deserve this job through your actions.</p>
            <ul>
                <li><strong>Introduce yourself to EVERYONE. EVERYDAY.</strong> You're new and we forget you.</li>
                <li><strong>Make coffee.</strong> Have a pot ready in the morning. When low, brew another.</li>
                <li><strong>Stage your gear.</strong> Roll call is @ 0800. Your gear should be at your rig, by your seat position checked and ready to go so you can take over immediately.</li>
                <li><strong>Stop and listen.</strong> Mornings at the fire station can be busy. Listen to stories from runs past and learn what you can. Don't be too eager to compare every story told to something familiar that you did at your last job or what you would have done.</li>
                <li><strong>Roll Call.</strong> This is your final opportunity for introductions. Make them BEFORE roll call starts at 0800. Once roll call starts, shut up. Stand for roll call and pay attention. Do NOT have your phone out or even on. Place it on silent or vibrate.</li>
                <li><strong>Rig checks.</strong> Immediately after roll call you need to check the rigs. Have it ready to go then get with the driver and go over the rig. Every compartment. Every tool. All medical equipment. You should be the first into the bays and the last out during rig checks.</li>
                <li><strong>Know your role.</strong> During rig checks you need to talk with your crew. Find out what tools for what calls are needed, what EMS equipment you should be grabbing on every run and how best benefit the crew.</li>
                <li><strong>Daily details.</strong> Mop floors, clean bathrooms. These are responsibilities that must be taken care of. You are the lowest on the totem pole. Take that mop from the senior firefighter. Clean the toilets, don't make the senior firefighters do the details no one likes to do.</li>
                <li><strong>Daily tasking.</strong> Whatever task you are doing, take something from it. Building inspections, learn the building number and layout. Extinguisher inspections, learn their locations, type and use.</li>
                <li><strong>Down time.</strong> Guess what, you get none. Put your phone away and study. You should be in a book. Not Facebook, get off it. If no one is up for teaching, go out into the bays and go through the rigs. When you are tired of that and need a break, study your district maps and learn all the policies and procedures.</li>
                <li><strong>Meals.</strong> Get in on meals with the crew. Offer to help cook and clean as the meal prep progresses. If they don't cook together, finish first and still offer to wash the dishes. Not by sitting in your seat and asking. Go to the sink and take it from them when they are done.</li>
                <li><strong>Station drills/Crew drills/classes.</strong> Be upfront. Be involved and pay attention. You should do these drills until you can't do them wrong. Give the instructors your full attention, they deserve it from you and you will learn from them.</li>
                <li><strong>Own your mistakes.</strong>You're new.  You're going to screw up.  <strong>Do Not</strong> make excuses or blame others.  Own the mistakes fully.  That is how you tell us that you will fix them.  That is how you build trust, not by being perfect, but by being accountable.</li>
                <li><strong>Evening rest.</strong> Keep yourself available for anything leftover that needs done. You should be the first up for any detail of the day that was missed. Don't be the first to go to bed. Wait it out until most of the crew does. Make your bed early though so you aren't making a bunch of commotion while others are trying to rest.</li>
                <li><strong>The next morning.</strong> You should be up before 0700. Not waking up at 0700. You should be out of your room, in uniform starting the morning details. Start the coffee again, clean any dishes left out from the midnight snackers. Clean the bathrooms if needed, wipe down the counters in the kitchen, take out the trash.</li>
            </ul>
        `,
        quickCheck: [
            { 
                q: "What time does roll call start?", 
                opts: ["0800", "0700", "0600", "0830"], 
                ans: 0,
                coaching: "Roll call is @ 0800. Your gear should be at your rig, by your seat position checked and ready to go."
            },
            { 
                q: "What is the expectation regarding your cell phone during roll call?", 
                opts: ["Do NOT have your phone out or even on; place it on silent or vibrate.", "Keep it in your hand in case the chief calls.", "Leave it in your personal vehicle.", "Use it only to take notes on daily details."], 
                ans: 0,
                coaching: "Do NOT have your phone out or even on. Place it on silent or vibrate. We don't want to hear it going off all day and distracting you."
            },
            { 
                q: "What should you do regarding daily details such as mopping floors and cleaning bathrooms?", 
                opts: ["Take the mop from the senior firefighter; you are the lowest on the totem pole.", "Wait to be explicitly assigned the task by the company officer.", "Only complete the details you were assigned at roll call.", "Leave the bathrooms for the evening shift to clean."], 
                ans: 0,
                coaching: "You are the lowest on the totem pole. Take that mop from the senior firefighter. Clean the toilets, don't make the senior firefighters do the details no one likes to do."
            },
            { 
                q: "What is expected of you the next morning before 0700?", 
                opts: ["You should be out of your room, in uniform starting the morning details.", "You should be waking up to get ready for roll call.", "You should be making your bed and packing your bags.", "You should be doing a final rig check before shift change."], 
                ans: 0,
                coaching: "You should be up before 0700. Not waking up at 0700. You should be out of your room, in uniform starting the morning details."
            }
        ]
    },
    {
        id: 2,
        title: "Module 2: The Probationary Journey",
        text: `
            <h3>What to Expect This Year</h3>
            <p>Welcome to the next twelve months of your career. Your probationary year is a structured, intense period designed to build a safe, competent, and reliable firefighter. You aren't just here to pass tests; you are here to prove you belong on this team.</p>
            
            <h3>Your Daily Routine</h3>
            <p>Consistency is key. Every single day, you are expected to execute the following routine without being reminded:</p>
            <ul>
                <li><strong>Check your email daily:</strong> Communication is critical. Stay on top of department memos, training updates, and schedule changes.</li>
                <li><strong>Report to your officer:</strong> Check in with your company officer first thing to get your daily tasks and expectations.</li>
                <li><strong>Check the Dashboard:</strong> Log into this Elyria FD Training Dashboard every shift to review your daily assignments and track your progress.</li>
            </ul>

            <h3>The Training Loop</h3>
            <p>We use a specific cycle to ensure you actually absorb the material. You will complete the assigned <strong>self-learning</strong> for a topic, followed by hands-on <strong>in-person learning</strong> with your crew. After that, you'll complete an <strong>evaluation</strong>. If you struggle, you will go through <strong>remediation training</strong> until you master it. We won't let you fail, but you have to put in the work.</p>

            <h3>Phases and Attitude</h3>
            <p>Your rookie year is broken down into three distinct phases, each lasting 4 months. Each phase builds directly on the previous one, meaning your early learning lays the foundation for the entire program. Do not slack off. Falling behind early makes it exponentially harder to catch up later.</p>
            <p>Finally, remember this: You are being evaluated on much more than just your performance and book knowledge. We are constantly evaluating your <strong>attitude</strong>. Show us that you want to be here. Be coachable, stay humble, operate ethically, and show empathy to both the public and your crew.</p>
        `,
        quickCheck: [
            { 
                q: "How often should you check your department email and the training dashboard?", 
                opts: ["Once a week", "Every shift/daily", "Only when an officer tells you to", "At the end of each 4-month phase"], 
                ans: 1,
                coaching: "Communication is critical. You are expected to check your email and the training dashboard daily."
            },
            { 
                q: "What is the correct sequence for the training loop?", 
                opts: ["Evaluation, in-person learning, self-learning, remediation", "In-person learning, evaluation, self-learning, remediation", "Self-learning, in-person learning, evaluation, remediation", "Remediation, self-learning, evaluation, in-person learning"], 
                ans: 2,
                coaching: "You will complete the assigned self-learning, attend in-person learning, complete the evaluation, and then complete remediation if necessary."
            },
            { 
                q: "How is the probationary training timeline structured?", 
                opts: ["Two phases lasting 6 months each", "Three phases lasting 4 months each", "Four phases lasting 3 months each", "A single 12-month continuous phase"], 
                ans: 1,
                coaching: "Your rookie year is broken down into three distinct phases, each lasting 4 months."
            },
            { 
                q: "Besides performance and book knowledge, what critical trait are you constantly being evaluated on?", 
                opts: ["Your driving ability", "Your attitude (coachable, humble, ethical, empathetic)", "Your cooking skills", "Your physical lifting capacity"], 
                ans: 1,
                coaching: "We are constantly evaluating your attitude. Show us that you want to be here, be coachable, stay humble, operate ethically, and show empathy."
            }
        ]
    },
    {
        id: 3,
        title: "Module 3: Department Policies and General Regulations",
        text: `
            <h3>The Spirit of the Rules</h3>
            <p>We have a thick policy manual, and yes, you are expected to read it in its entirety. However, these rules aren't designed to turn you into a robot or limit your common sense. They exist to keep you safe and maintain order. In extraordinary situations, you are still expected to use the judgment of a reasonable firefighter.</p>
            
            <h3>Communication and Accountability</h3>
            <p>Let's talk about basic administration. You have a department email. Use it professionally and review it as part of your normal duties. Remember, under the Ohio Public Records Act, your emails are public record—don't put anything in writing you wouldn't want on the front page of the paper.</p>
            <p>On the fireground and in the station, the <strong>chain of command</strong> is how we operate efficiently. Use it. Insubordination at any level is completely unacceptable and will not be tolerated. If you have an issue, follow the chain to get it resolved.</p>

            <h3>Readiness and Responsibility</h3>
            <p>When you walk through the doors, you need to be fit for duty. If you are taking any medication—prescription or over-the-counter—that might slow your mental or physical reaction times, you must report it to your supervisor immediately.</p>
            <p>Take pride in the gear the department provides. You are personally responsible for the property issued to you. If you destroy or lose equipment through carelessness or neglect, you may be replacing it out of your own pocket.</p>

            <h3>Integrity and Trust</h3>
            <p>You have been given a position of immense public trust. Treat the official business of the Elyria Fire Department as confidential. What happens on a medical run stays on a medical run; protect patient privacy at all costs in accordance with federal law.</p>
            <p>Never leave quarters for personal reasons without getting your supervisor's permission first. Never buy anything in the department's name without the Fire Chief's explicit permission. And finally, never ask for or accept tips, fees, or "thank you" money from citizens for doing your job. Your paycheck from the City of Elyria is your compensation.</p>
        `,
        quickCheck: [
            { 
                q: "Elyria Fire Department members must use email in accordance with City of Elyria policy and what current law?", 
                opts: ["Ohio Public Records Act", "Freedom of Information Act", "Federal Communications Act", "State Employee Electronics Act"], 
                ans: 0,
                coaching: "Elyria Fire Department members shall use email in a professional manner in accordance with City of Elyria policy and current law (Ohio Public Records Act)."
            },
            { 
                q: "What must members do if reporting for duty under the influence of medication that may impede reaction?", 
                opts: ["Report that information to their supervisor", "Call out sick for the remainder of the shift", "Log the medication in the station daybook", "Stay off of riding apparatus for the first 12 hours"], 
                ans: 0,
                coaching: "Members reporting for duty under the influence of any medication... must report that information to their supervisor."
            },
            { 
                q: "Who must grant permission before a member can make any purchase or incur liability in the name of the Elyria Fire Department?", 
                opts: ["The Chief or Acting Chief", "The shift commander", "The company officer", "The quartermaster"], 
                ans: 0,
                coaching: "No member shall make any purchase... without the permission of the Chief or Acting Chief in Chiefs absence."
            },
            { 
                q: "What happens if a member loses or damages Department property through abuse, carelessness, or neglect?", 
                opts: ["It may be replaced at the expense of the member to who said equipment was issued", "The department's insurance will cover the cost of replacement completely", "The member faces mandatory 3-day suspension without pay", "The member will be issued older, reserve equipment as a replacement"], 
                ans: 0,
                coaching: "Any property which may be lost or damaged through abuse, carelessness, or neglect may be replaced at the expense of the member to who said equipment was issued."
            }
        ]
    },
    {
        id: 4,
        title: "Module 4: Operational Rules and Prohibited Activities",
        text: `
            <h3>Station Life Boundaries</h3>
            <p>Living at the firehouse requires mutual respect and strict boundaries. Show up clean-shaven and in a proper, well-maintained uniform. Your first priority is ensuring the cleanliness of your assigned apparatus and the station.</p>
            <p>Beds are off-limits between the hours of 0700 and 2100 unless the officer in charge gives you permission. Similarly, don't go clanging weights in the gym between 2200 and 0700 while the rest of the crew is trying to sleep, unless the officer approves it.</p>
            <p>Communication is the lifeblood of our shift work. Every morning, you must have a face-to-face pass-on with the off-going crew to discuss the apparatus status, ongoing problems, and station facilities.</p>

            <h3>The Zero Tolerance List</h3>
            <p>There are some absolute hard lines in the fire service. Crossing them will cost you your career:</p>
            <ul>
                <li><strong>No Discrimination:</strong> We do not tolerate discriminatory or abusive behavior regarding race, sex, religion, age, sexual preference, ethnicity, or union membership.</li>
                <li><strong>No Falsifying Records:</strong> Integrity is everything. Never knowingly falsify a department record.</li>
                <li><strong>No Station Shenanigans:</strong> Gambling for money on duty is strictly prohibited. Engaging in any sexual activity while on duty is prohibited. Do not tamper with or damage another member's personal property or city property.</li>
                <li><strong>No Firearms:</strong> Leave your personal weapons at home. Possessing a firearm or ammunition on Elyria Fire Department property or apparatus is strictly prohibited.</li>
            </ul>

            <h3>Safety First, Always</h3>
            <p>When the tones drop, adrenaline spikes, but safety protocols don't go out the window. If you are driving an apparatus, <strong>do not move the vehicle</strong> until every single member is seated and actively wearing their seatbelt. No exceptions.</p>
            <p>Finally, keep your head in the game. Personal cell phones, electronics, and music devices are completely prohibited when you are driving the apparatus, responding to or returning from calls, conducting public relations, training, or doing inspections. Your focus belongs entirely on the job and your crew.</p>
        `,
        quickCheck: [
            { 
                q: "Between what hours are beds generally prohibited from being occupied without permission?", 
                opts: ["0700 and 2100", "0600 and 2000", "0800 and 2200", "0700 and 1700"], 
                ans: 0,
                coaching: "Beds may not be occupied between the hours of 0700 and 2100 except with the permission of the officer in charge of the station."
            },
            { 
                q: "When are apparatus and vehicle operators permitted to leave quarters or a parked position?", 
                opts: ["When ALL members are seated and belted in", "When the officer says they are responding", "When the bay doors are fully open", "When the dispatcher acknowledges their response"], 
                ans: 0,
                coaching: "Apparatus and vehicle operators SHALL NOT leave quarters or a parked position until ALL members are seated and belted in."
            },
            { 
                q: "What is the policy regarding firearms and ammunition?", 
                opts: ["Carrying or possessing them on or within FD property, facilities or equipment is specifically prohibited", "They are permitted only if locked securely in a personal vehicle", "They are permitted if the member holds a valid concealed carry permit", "They are permitted only with written permission from the shift commander"], 
                ans: 0,
                coaching: "The carrying or possessing of a fire arm or ammunition on or within Elyria Fire Department property, facilities or equipment, at any time is specifically prohibited."
            },
            { 
                q: "When are personal cell phones prohibited from being used?", 
                opts: ["Driving apparatus, responding, returning, public relations, training, inspections, and FD duties", "Only while actively responding to an emergency call", "Only during public relations events and station tours", "Between the hours of 0700 and 1700"], 
                ans: 0,
                coaching: "Use of personal cell phones... may not be used when: Driving apparatus, responding, returning, public relations, training, inspections, and FD duties."
            }
        ]
    },
    { id: 5, title: "Final Evaluation", isExam: true }
];

const examQuestions = [
    { q: "Besides the Elyria Fire Department, who else do you represent when in uniform?", opts: ["The City of Elyria", "The entire state fire marshal office", "The IAFF local union", "Only yourself and your assigned station"], ans: 0, coaching: "You don't just represent the Elyria Fire Department. You also represent the City of Elyria to your community!" },
    { q: "What behaviors does the Fire Chief say are 'fast ways to not be a part of this organization any longer'?", opts: ["Discrimination of any kind, sexual harassment, and violence in the workplace", "Being late for roll call twice in a month", "Failing a physical fitness assessment", "Sleeping past 0700 on a duty day"], ans: 0, coaching: "Discrimination of any kind, sexual harassment, and violence in the workplace are fast ways to not be a part of this organization any longer." },
    { q: "According to the rookie mentality, what should you be doing regarding your downtime at the station?", opts: ["You get none; put your phone away and study in a book.", "Use the time to catch up on sleep.", "Spend time on social media to decompress.", "Wait in the dayroom for the next call."], ans: 0, coaching: "Down time. Guess what, you get none. Put your phone away and study. You should be in a book." },
    { q: "How should a rookie approach small tasks like washing off an oil drip under the apparatus?", opts: ["Seek opportunities to be there for the crew and see small tasks through to completion", "Leave them for the station janitor to handle", "Document them in the logbook for the oncoming shift to handle", "Only do them if directly ordered by an officer"], ans: 0, coaching: "We should be seeking opportunities to be there for those we work with... washing off that spot under the apparatus where oil inevitably drips..." },
    { q: "Where should your gear be staged prior to the 0800 roll call?", opts: ["At your rig, by your seat position checked and ready to go", "In your personal locker", "Hanging on the turnout rack", "In the back of your personal vehicle"], ans: 0, coaching: "Your gear should be at your rig, by your seat position checked and ready to go so you can take over immediately." },
    { q: "Who should be the first into the bays and the last out during rig checks?", opts: ["The rookie", "The company officer", "The apparatus driver/operator", "The senior firefighter"], ans: 0, coaching: "You should be the first into the bays and the last out during rig checks." },
    { q: "What is expected of you the next morning before 0700?", opts: ["You should be out of your room, in uniform starting the morning details", "You should be waking up to get ready for 0800 shift change", "You should be making your bed and packing your bags", "You should be doing a final rig check before shift change"], ans: 0, coaching: "You should be up before 0700. Not waking up at 0700. You should be out of your room, in uniform starting the morning details." },
    { q: "What should you do regarding dishes if you finish your meal first?", opts: ["Go to the sink and take the dishes from the crew when they are done", "Sit in your seat and ask if anyone needs help", "Go to your room and start studying", "Only wash your own dishes to keep things fair"], ans: 0, coaching: "If they don't cook together, finish first and still offer to wash the dishes. Not by sitting in your seat and asking. Go to the sink and take it from them when they are done." },
    { q: "How often should Elyria Fire Department members use/review department email?", opts: ["As part of their normal duties", "Only at the beginning of their shift", "Once per week on training days", "Only when directed by a chief officer"], ans: 0, coaching: "Elyria Fire Department members shall use/review department email as part of their normal duties." },
    { q: "Are the rules and regulations designed to limit a member's judgment in extraordinary situations?", opts: ["No, they are not designed nor intended to limit judgment or initiative", "Yes, they must be followed strictly without exception", "Yes, only chief officers can exercise judgment outside the rules", "No, unless the situation involves hazardous materials"], ans: 0, coaching: "Rules and regulations are not designed, nor intended, to limit any member in the exercising of his/her judgment or initiative in taking the action that a reasonable person would take in extraordinary situations." },
    { q: "What is the department's policy regarding insubordination?", opts: ["Insubordination at any level is not acceptable and will not be tolerated", "It is acceptable only during non-emergency activities", "It is tolerated if the member is acting for safety reasons", "It requires a written warning before any disciplinary action"], ans: 0, coaching: "Insubordination at any level is not acceptable and will not be tolerated." },
    { q: "What is required before a member can leave quarters for a personal reason?", opts: ["Notifying a supervisor and gaining his/her permission", "Signing out in the station logbook", "Having another member cover their riding position", "Leaving their radio on and staying within the district"], ans: 0, coaching: "Members shall not leave quarters for personal reason without first notifying a supervisor and gaining his/her permission." },
    { q: "How should members handle the official business of the Fire Department regarding confidentiality?", opts: ["They shall not impart or discuss with anyone any matters, except to officers of the Elyria FD or under process of the law", "They can discuss it freely with their immediate family members", "They can discuss it with other city employees, but not the general public", "They can only discuss it during approved union meetings"], ans: 0, coaching: "All members will treat as confidential, the official business... They shall not impart or discuss with anyone any matters... except to officers of the Elyria Fire Department or under process of the law." },
    { q: "What is the rule regarding receiving fees or soliciting pay for services rendered in performance of duty?", opts: ["No member shall receive any fee or solicit pay, except their salary paid by the City", "Members may accept tips or gifts as long as they are under $50", "Members may receive fees only for off-duty details", "Members may accept donations on behalf of the station fund"], ans: 0, coaching: "No member shall receive any fee nor solicit, demand, or suggest... pay for services rendered in performance of duty, except their salary as paid by the City of Elyria." },
    { q: "What is the appearance standard for members reporting for duty and while on-duty?", opts: ["Clean shaven and neatly dressed in a proper and well-maintained uniform", "Wearing whatever uniform is comfortable for station duties", "Clean shaven, but uniforms are optional until 0800", "Neatly dressed, with facial hair neatly trimmed to a quarter-inch"], ans: 0, coaching: "All members reporting for duty and while on-duty shall be clean shaven and neatly dressed in a proper and well-maintained uniform." },
    { q: "During what hours are physical fitness/weight room activities normally prohibited in the station without officer approval?", opts: ["2200-0700", "2100-0600", "0700-1700", "2300-0500"], ans: 0, coaching: "Physical Fitness/weight room activities shall not take place in the station between the hours 2200-07:00, unless officer in charge approves." },
    { q: "Who must give permission for someone who is not a member of the fire department to ride upon any fire department vehicle?", opts: ["The fire chief", "The company officer", "The shift commander", "The city mayor"], ans: 0, coaching: "Members shall not permit those not a member of the fire department to ride upon any fire department vehicle without permission from the fire chief." },
    { q: "What is the policy regarding gambling while on duty?", opts: ["No member shall participate in any form of gambling for money or any article of value while on duty", "Gambling is allowed only during evening rest hours after 2100", "Gambling is permitted as long as the stakes do not exceed $10", "Only station-sanctioned lottery pools are permitted"], ans: 0, coaching: "No member shall participate in any form of gambling for money or any article of value while on duty." },
    { q: "How should the on-coming officer and off-going officer communicate daily to insure a smooth transfer of information?", opts: ["Face to face communication", "Via the department electronic mail system", "By writing notes in the apparatus logbook", "Over the station intercom system"], ans: 0, coaching: "Face to face communication between the on-coming officer and the off-going officer of each apparatus to insure a smooth transfer of information shall be done daily." },
    { q: "What is the department policy on sexual activity while on duty?", opts: ["Members shall not engage in any sexual activity while on duty", "It is permitted only between married department members", "It is prohibited only if it interferes with response times", "It is permitted in private quarters after 2100"], ans: 0, coaching: "Members shall not engage in any sexual activity while on duty." },
    { q: "What is the rule regarding the falsification of Fire Department records?", opts: ["Members shall not knowingly falsify any Fire Department record", "Records can be altered if approved by the shift commander", "Falsification is permitted only for protecting patient privacy", "Records can be altered up to 24 hours after the incident"], ans: 0, coaching: "Members shall not knowingly falsify any Fire Department record." },
    { q: "Discriminatory or abusive behavior pertaining to which of the following is explicitly prohibited by the rules while on duty?", opts: ["Politics, sex, religion, age, sexual preference, diversity, ethnicity, or labor union membership", "Only race, religion, and national origin", "Only gender and age", "Only political affiliation and religion"], ans: 0, coaching: "No member shall display discriminatory or abusive behavior pertaining to politics, sex, religion, age, sexual preference, diversity, ethnicity, or labor union membership while on duty..." },
    { q: "When are personal cell phones explicitly prohibited from being used?", opts: ["Driving apparatus, responding, returning, public relations, training, inspections, and FD duties", "During any hours between 0700 and 1700", "Only while driving the apparatus or returning from a call", "Only during formal training classes"], ans: 0, coaching: "Use of personal cell phones... may not be used when: Driving apparatus, responding, returning, public relations, training, inspections, and FD duties." },
    { q: "What must members NOT do with advertising matter, posters, or for sale signs?", opts: ["Post or permit them on Fire Department property or apparatus without Fire Department approval", "Place them in the day room without the station captain's verbal consent", "Post them on the exterior bay doors", "Distribute them to the public while on duty"], ans: 0, coaching: "No advertising matter, posters, for sale signs, private notices, or other disfigurements shall be posted or permitted on Fire Department property or apparatus without Fire Department approval." }
];
