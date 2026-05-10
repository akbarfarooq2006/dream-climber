// src/data/levels.ts
export const DREAM_OPTIONS = [
  { id: 'doctor', title: 'Doctor', icon: '🩺', color: '#4FC3F7' },
  { id: 'athlete', title: 'Athlete', icon: '🏅', color: '#FFD54F' },
  { id: 'artist', title: 'Artist', icon: '🎨', color: '#F06292' },
  { id: 'engineer', title: 'Engineer', icon: '⚙️', color: '#90A4AE' },
  { id: 'teacher', title: 'Teacher', icon: '📚', color: '#81C784' },
  { id: 'scientist', title: 'Scientist', icon: '🚀', color: '#BA68C8' },
];

export const mountains = [
  {
    id: 1,
    name: "Basic Survival Peak",
    maslowStage: "Physiological Needs",
    weather: "sunny",
    color: "#4CAF50",
    questions: [
      {
        id: 1,
        scenario: "Exam in 2 hours. You slept very late and feel exhausted. What do you do?",
        options: [
          { text: "Eat something, drink water, then review key notes", correct: true,
            explanation: "Taking care of basic physical needs improves brain performance and focus." },
          { text: "Sleep for one more hour — exam is still far", correct: false,
            explanation: "This risks being late and feeling more groggy. Physiological needs must be met smartly." },
          { text: "Skip breakfast and start cramming immediately", correct: false,
            explanation: "Skipping basic needs like food hurts concentration and memory recall." }
        ],
        psychConcept: "Physiological needs are the foundation of Maslow's pyramid"
      },
      {
        id: 2,
        scenario: "You feel sick but have an important class presentation today. What do you do?",
        options: [
          { text: "Inform the teacher honestly and request to reschedule", correct: true,
            explanation: "Communicating your physical state is responsible and shows self-awareness." },
          { text: "Push through it and suffer silently during presentation", correct: false,
            explanation: "Ignoring physical needs leads to worse performance and longer recovery." },
          { text: "Skip school entirely without telling anyone", correct: false,
            explanation: "Disappearing without communication creates more problems than it solves." }
        ],
        psychConcept: "Physical wellbeing directly impacts cognitive performance"
      },
      {
        id: 3,
        scenario: "You forgot to eat lunch and now feel dizzy during afternoon class. What do you do?",
        options: [
          { text: "Ask permission to get water or a snack before continuing", correct: true,
            explanation: "Addressing physiological needs immediately restores focus and prevents worse symptoms." },
          { text: "Ignore the dizziness and keep studying harder", correct: false,
            explanation: "Forcing yourself when physiologically depleted is counterproductive and unsafe." },
          { text: "Put your head down and sleep in class", correct: false,
            explanation: "While rest helps, this avoids addressing the root cause — low blood sugar." }
        ],
        psychConcept: "Maslow: Unmet basic needs block all higher functioning"
      },
      {
        id: 4,
        scenario: "After intense sports practice, you are completely exhausted but have homework. What do you do?",
        options: [
          { text: "Rest for 20-30 minutes, eat, then start homework", correct: true,
            explanation: "Short recovery time after physical exertion actually improves subsequent cognitive work." },
          { text: "Start homework immediately while exhausted", correct: false,
            explanation: "Working while physically depleted produces poor quality work and more mistakes." },
          { text: "Skip the homework entirely — you are too tired", correct: false,
            explanation: "Avoiding responsibilities due to fatigue creates bigger problems tomorrow." }
        ],
        psychConcept: "Physical recovery is a legitimate and necessary need"
      },
      {
        id: 5,
        scenario: "You cannot focus because your study environment is extremely noisy. What do you do?",
        options: [
          { text: "Find a quieter space or use earplugs to create better conditions", correct: true,
            explanation: "Optimizing your environment is a smart way to meet basic concentration needs." },
          { text: "Force yourself to study despite the noise", correct: false,
            explanation: "Fighting a poor environment drains mental energy and reduces retention." },
          { text: "Give up studying for the day", correct: false,
            explanation: "Giving up eliminates options. There is almost always a better environment available." }
        ],
        psychConcept: "Environment is part of meeting basic needs for learning"
      }
    ]
  },
  {
    id: 2,
    name: "Safety Peak",
    maslowStage: "Safety Needs",
    weather: "foggy",
    color: "#2196F3",
    questions: [
      {
        id: 1,
        scenario: "A classmate keeps taking your stationery without asking, repeatedly. What do you do?",
        options: [
          { text: "Calmly but firmly tell them to please ask before taking your things", correct: true,
            explanation: "Asserting your boundaries respectfully protects your safety needs while maintaining the relationship." },
          { text: "Stay completely silent to avoid any conflict", correct: false,
            explanation: "Staying silent when your boundaries are crossed repeatedly damages self-esteem over time." },
          { text: "Shout at them loudly in front of everyone", correct: false,
            explanation: "Aggressive reactions escalate conflict and create an unsafe environment for everyone." }
        ],
        psychConcept: "Safety needs include personal boundaries and security"
      },
      {
        id: 2,
        scenario: "An older student is pressuring you to give them your lunch money every day. What do you do?",
        options: [
          { text: "Report it to a trusted teacher or school counselor immediately", correct: true,
            explanation: "Seeking adult help for safety threats is the correct and brave response." },
          { text: "Keep giving the money to avoid being hurt", correct: false,
            explanation: "Compliance with bullying reinforces the behavior and keeps you unsafe long-term." },
          { text: "Threaten them back to scare them away", correct: false,
            explanation: "Counter-threats escalate danger and rarely resolve safety issues safely." }
        ],
        psychConcept: "Safety needs require active protection, not passive acceptance"
      },
      {
        id: 3,
        scenario: "You feel genuinely unsafe walking home from school alone. What do you do?",
        options: [
          { text: "Tell your parents or guardian and together find a safer solution", correct: true,
            explanation: "Communicating safety concerns to trusted adults is exactly the right response." },
          { text: "Ignore the feeling and keep walking the same route alone", correct: false,
            explanation: "Dismissing legitimate safety concerns puts you at continued risk." },
          { text: "Stop going to school to avoid the problem", correct: false,
            explanation: "Extreme avoidance sacrifices education and does not address the actual safety issue." }
        ],
        psychConcept: "Safety needs must be communicated, not suppressed"
      },
      {
        id: 4,
        scenario: "Your belongings keep going missing from your bag at school. What do you do?",
        options: [
          { text: "Report the situation calmly to your teacher and ask for help", correct: true,
            explanation: "Using proper channels to address safety violations is mature and effective." },
          { text: "Aggressively accuse everyone around you", correct: false,
            explanation: "False accusations damage relationships and create new problems without solving the original." },
          { text: "Stop bringing anything valuable to school forever", correct: false,
            explanation: "Over-restriction of your own life is not a real solution to a safety problem." }
        ],
        psychConcept: "Security needs include protecting your physical possessions"
      },
      {
        id: 5,
        scenario: "A group of students online is posting mean things about you. What do you do?",
        options: [
          { text: "Screenshot the evidence, block them, and tell a trusted adult", correct: true,
            explanation: "Documenting, limiting exposure, and seeking support are the three correct steps for cyberbullying." },
          { text: "Post equally mean things back about them", correct: false,
            explanation: "Retaliating online escalates the situation and can get you into trouble too." },
          { text: "Delete all your social media accounts immediately", correct: false,
            explanation: "While reducing social media can help, complete deletion is an extreme overreaction that isolates you." }
        ],
        psychConcept: "Digital safety is a modern extension of Maslow's safety needs"
      }
    ]
  },
  {
    id: 3,
    name: "Friendship Hill",
    maslowStage: "Belonging and Love",
    weather: "cloudy",
    color: "#9C27B0",
    questions: [
      {
        id: 1,
        scenario: "Your friends want you to skip your afternoon class to hang out with them. What do you do?",
        options: [
          { text: "Tell them you will join them at break time but will not skip class", correct: true,
            explanation: "Balancing belonging needs with academic responsibility shows emotional maturity." },
          { text: "Skip class — you cannot bear feeling left out", correct: false,
            explanation: "Sacrificing long-term goals for short-term belonging creates regret and dependency." },
          { text: "Cut off these friends completely — they are a bad influence", correct: false,
            explanation: "Extreme social withdrawal damages belonging needs and is rarely the right solution." }
        ],
        psychConcept: "Belonging needs can be met without sacrificing other values"
      },
      {
        id: 2,
        scenario: "Your friend group has started excluding you from conversations and plans. What do you do?",
        options: [
          { text: "Have an honest, calm conversation with your closest friend about how you feel", correct: true,
            explanation: "Open communication is the healthiest way to address threats to belonging needs." },
          { text: "Suffer in silence and pretend everything is fine", correct: false,
            explanation: "Suppressing belonging needs without addressing them leads to anxiety and low self-worth." },
          { text: "Completely isolate yourself from everyone", correct: false,
            explanation: "Isolation is the opposite of what belonging needs require." }
        ],
        psychConcept: "Expressing belonging needs honestly strengthens relationships"
      },
      {
        id: 3,
        scenario: "A new student joins your class and clearly has no friends yet. What do you do?",
        options: [
          { text: "Introduce yourself and include them in your group activities", correct: true,
            explanation: "Helping others meet their belonging needs also strengthens your own social connections." },
          { text: "Ignore them — making new friends is their own problem", correct: false,
            explanation: "Indifference to others' belonging needs reflects low empathy and social intelligence." },
          { text: "Only talk to them if your other friends approve", correct: false,
            explanation: "Conditional kindness based on peer approval shows overdependence on group validation." }
        ],
        psychConcept: "Social belonging is a universal human need we can help each other meet"
      },
      {
        id: 4,
        scenario: "Your best friend asks you to lie to a teacher to cover up their mistake. What do you do?",
        options: [
          { text: "Kindly but firmly tell them you cannot lie, and offer to help them face it honestly", correct: true,
            explanation: "True friendship includes honest boundaries. Helping someone avoid accountability is not real help." },
          { text: "Lie for them without hesitation — that is what friends are for", correct: false,
            explanation: "Compromising your integrity for belonging needs creates toxic, dependency-based relationships." },
          { text: "Report them to the teacher immediately without warning them", correct: false,
            explanation: "Going straight to authority without trying to help first damages trust unnecessarily." }
        ],
        psychConcept: "Healthy belonging includes honest, boundaried relationships"
      },
      {
        id: 5,
        scenario: "You witness your friend being bullied by a group of students. What do you do?",
        options: [
          { text: "Stand nearby visibly, tell the bullies to stop, and get a teacher", correct: true,
            explanation: "Active bystander behavior protects belonging needs for your friend and models courage." },
          { text: "Walk away quickly — it is not your problem", correct: false,
            explanation: "Abandoned someone to bullying destroys the trust that makes belonging possible." },
          { text: "Join in to avoid becoming a target yourself", correct: false,
            explanation: "Joining bullying to gain false safety is a betrayal that causes deep psychological harm." }
        ],
        psychConcept: "Belonging needs include loyalty and active support"
      }
    ]
  },
  {
    id: 4,
    name: "Confidence Cliff",
    maslowStage: "Esteem Needs",
    weather: "windy",
    color: "#FF9800",
    questions: [
      {
        id: 1,
        scenario: "You failed your math test and everyone in class saw your low grade. What do you do?",
        options: [
          { text: "Ask the teacher what went wrong and create a specific study plan", correct: true,
            explanation: "Turning failure into a concrete improvement plan builds genuine self-esteem." },
          { text: "Avoid math class for the rest of the week", correct: false,
            explanation: "Avoidance lowers self-esteem further and creates a larger knowledge gap." },
          { text: "Pretend you do not care at all about the grade", correct: false,
            explanation: "Emotional suppression blocks genuine processing and growth from failure." }
        ],
        psychConcept: "Self-esteem is built by facing challenges, not avoiding them"
      },
      {
        id: 2,
        scenario: "You won a class competition but feel too shy and embarrassed to accept the praise. What do you do?",
        options: [
          { text: "Accept the recognition gracefully with a simple thank you", correct: true,
            explanation: "Accepting earned recognition is a healthy esteem need. Deflecting denies your genuine achievement." },
          { text: "Deny your achievement and say others deserved it more", correct: false,
            explanation: "Consistently denying achievements suppresses healthy self-esteem development." },
          { text: "Boast loudly about it to everyone repeatedly", correct: false,
            explanation: "Excessive boasting compensates for insecurity rather than reflecting genuine confidence." }
        ],
        psychConcept: "Healthy esteem includes accepting recognition you have earned"
      },
      {
        id: 3,
        scenario: "Someone copied your project without permission and their version won an award. What do you do?",
        options: [
          { text: "Report it calmly to the teacher with evidence and focus on your own growth", correct: true,
            explanation: "Addressing injustice through proper channels while maintaining focus shows mature self-esteem." },
          { text: "Feel completely worthless — if they needed to copy you, your work must be bad", correct: false,
            explanation: "This thinking distortion reverses reality. Someone copying your work means it was worth copying." },
          { text: "Publicly accuse and humiliate them in front of everyone", correct: false,
            explanation: "Public humiliation is an esteem-based revenge reaction that usually backfires." }
        ],
        psychConcept: "True self-esteem is stable — it does not depend on external validation"
      },
      {
        id: 4,
        scenario: "You made a silly mistake during your class presentation and everyone laughed. What do you do?",
        options: [
          { text: "Laugh along briefly, correct yourself, and continue confidently", correct: true,
            explanation: "The ability to recover from embarrassment publicly is a mark of strong, stable self-esteem." },
          { text: "Stop the presentation and run out of the class", correct: false,
            explanation: "Fleeing public embarrassment reinforces fear and significantly lowers self-esteem." },
          { text: "Immediately blame the audience for distracting you", correct: false,
            explanation: "Defensive blame-shifting protects the ego short-term but prevents genuine esteem growth." }
        ],
        psychConcept: "Self-esteem includes resilience and the ability to recover publicly"
      },
      {
        id: 5,
        scenario: "Your teacher praised another student's work heavily but said nothing about yours. What do you do?",
        options: [
          { text: "Feel motivated to work harder and ask the teacher for specific feedback", correct: true,
            explanation: "Using others' success as motivation rather than a threat reflects secure self-esteem." },
          { text: "Feel deeply jealous and decide to stop trying", correct: false,
            explanation: "Comparison-based quitting shows that self-esteem depends entirely on external validation." },
          { text: "Complain to your parents that the teacher is unfair", correct: false,
            explanation: "External complaining without self-improvement keeps you stuck and dependent on others." }
        ],
        psychConcept: "Healthy esteem is internally driven, not comparison-dependent"
      }
    ]
  },
  {
    id: 5,
    name: "Criticism Ridge",
    maslowStage: "Esteem — Handling Feedback",
    weather: "rainy",
    color: "#607D8B",
    questions: [
      {
        id: 1,
        scenario: "Your teacher corrects your answer in front of the entire class and some students snicker. What do you do?",
        options: [
          { text: "Note the correction down and ask a thoughtful follow-up question", correct: true,
            explanation: "Responding to public correction with curiosity transforms embarrassment into visible confidence." },
          { text: "Stay completely silent for the rest of the class", correct: false,
            explanation: "Shutting down after correction reinforces the belief that mistakes are shameful." },
          { text: "Argue with the teacher to prove you were right", correct: false,
            explanation: "Defensive arguing in public damages your relationship with the teacher and your reputation." }
        ],
        psychConcept: "Receiving feedback well is a core component of healthy self-esteem"
      },
      {
        id: 2,
        scenario: "Your parents tell you they are disappointed with your recent grades. What do you do?",
        options: [
          { text: "Listen carefully, ask what they suggest, and make a real improvement plan", correct: true,
            explanation: "Receiving parental criticism without defensiveness and converting it to action shows emotional maturity." },
          { text: "Shut down emotionally and go completely silent", correct: false,
            explanation: "Emotional shutdown prevents processing the feedback and blocks improvement." },
          { text: "Shout back that they do not understand the pressure you face", correct: false,
            explanation: "Defensive anger during criticism is a self-protection mechanism that blocks growth." }
        ],
        psychConcept: "Criticism from trusted people is a gift when received with openness"
      },
      {
        id: 3,
        scenario: "A friend tells you honestly that your project idea is not very strong. What do you do?",
        options: [
          { text: "Ask them specifically what could be improved and genuinely consider their input", correct: true,
            explanation: "Seeking specifics after criticism shows growth mindset and secure self-esteem." },
          { text: "Give up on the idea entirely — if a friend thinks it is bad, it must be worthless", correct: false,
            explanation: "One person's critique does not determine the value of your idea. This is a thinking distortion." },
          { text: "Get angry and stop sharing ideas with that friend", correct: false,
            explanation: "Punishing honest feedback teaches people to only tell you what you want to hear." }
        ],
        psychConcept: "Growth mindset treats honest feedback as valuable information"
      },
      {
        id: 4,
        scenario: "You received very negative comments on a creative project you worked hard on. What do you do?",
        options: [
          { text: "Separate valid constructive points from unhelpful comments and use the valid ones", correct: true,
            explanation: "The ability to filter feedback shows emotional intelligence and secure self-esteem." },
          { text: "Delete or destroy the entire project out of frustration", correct: false,
            explanation: "Destroying your own work due to external criticism gives others too much power over you." },
          { text: "Dismiss all feedback as jealousy and change nothing", correct: false,
            explanation: "Defensive dismissal of all criticism blocks growth just as much as over-accepting it." }
        ],
        psychConcept: "Filtering feedback requires both self-confidence and intellectual humility"
      },
      {
        id: 5,
        scenario: "Your coach tells you directly that your performance this season has been well below your potential. What do you do?",
        options: [
          { text: "Ask the coach to help you identify specific areas to work on and commit to a training plan", correct: true,
            explanation: "Partnering with your critic to improve converts criticism into a coaching relationship." },
          { text: "Quit the team — you clearly are not good enough", correct: false,
            explanation: "Quitting when criticized means you will never develop the resilience needed for real achievement." },
          { text: "Make excuses about injuries, school stress, or unfair treatment", correct: false,
            explanation: "Chronic excuse-making protects ego short-term but completely blocks performance improvement." }
        ],
        psychConcept: "Responding to performance feedback determines the ceiling of your growth"
      }
    ]
  },
  {
    id: 6,
    name: "Dream Valley",
    maslowStage: "Self-Actualization",
    weather: "stormy",
    color: "#E91E63",
    questions: [
      {
        id: 1,
        scenario: "Your parents strongly want you to become an engineer but your dream is to be an artist. What do you do?",
        options: [
          { text: "Have a calm, honest conversation showing your passion and your plan", correct: true,
            explanation: "Pursuing self-actualization while respecting family requires courageous, honest communication." },
          { text: "Give up your dream completely to avoid disappointing them", correct: false,
            explanation: "Permanently abandoning self-actualization to please others causes deep long-term regret." },
          { text: "Secretly pursue art while lying about your studies", correct: false,
            explanation: "Deception creates a split life that blocks authentic self-actualization and damages trust." }
        ],
        psychConcept: "Self-actualization sometimes requires courageous honest conversations"
      },
      {
        id: 2,
        scenario: "Your dream goal feels impossibly far away and you feel overwhelmed by how much you need to learn. What do you do?",
        options: [
          { text: "Break the dream into small monthly goals and focus only on this week's step", correct: true,
            explanation: "Breaking self-actualization into manageable steps makes the journey sustainable and trackable." },
          { text: "Abandon the dream — clearly it was never meant for you", correct: false,
            explanation: "Feeling overwhelmed is normal in any ambitious pursuit. It signals growth, not impossibility." },
          { text: "Daydream about the final achievement without taking any actual steps", correct: false,
            explanation: "Passive fantasizing without action is the most common obstacle to self-actualization." }
        ],
        psychConcept: "Self-actualization is a daily process, not a single destination"
      },
      {
        id: 3,
        scenario: "Someone you respect tells you that your dream is completely unrealistic for someone like you. What do you do?",
        options: [
          { text: "Thank them for their concern, reflect on their input, then continue on your path with adjusted strategy if needed", correct: true,
            explanation: "Taking feedback seriously without being controlled by it shows self-actualized maturity." },
          { text: "Believe them completely and permanently lower your ambitions", correct: false,
            explanation: "Allowing one person's limitations to define your potential is a fundamental self-actualization block." },
          { text: "Aggressively argue with them and cut them out of your life", correct: false,
            explanation: "Reacting with anger to doubt shows that your self-belief is still fragile, not truly confident." }
        ],
        psychConcept: "Self-actualized people consider feedback without being defined by it"
      },
      {
        id: 4,
        scenario: "You have real talent for your dream but lack money, equipment, and access to good teachers. What do you do?",
        options: [
          { text: "Research free resources, online communities, mentors, and scholarships actively", correct: true,
            explanation: "Resource scarcity is real but rarely absolute. Self-actualized people find creative paths forward." },
          { text: "Wait until you have perfect conditions before starting", correct: false,
            explanation: "Waiting for perfect conditions is a procrastination trap. Perfect conditions rarely arrive." },
          { text: "Give up because without resources, success is impossible", correct: false,
            explanation: "Many of the world's greatest achievers started with far fewer resources than average." }
        ],
        psychConcept: "Self-actualization requires resourcefulness, not perfect circumstances"
      },
      {
        id: 5,
        scenario: "You have been working toward your dream for months with almost no visible progress. What do you do?",
        options: [
          { text: "Review your strategy, seek feedback, adjust your approach, and commit to three more months", correct: true,
            explanation: "Persisting with strategic adjustment during plateaus is how all long-term goals are achieved." },
          { text: "Quit and try something completely different and easier", correct: false,
            explanation: "Consistently abandoning goals at the hard part means you will never experience genuine achievement." },
          { text: "Compare your slow progress to others who seem further ahead", correct: false,
            explanation: "Comparison during a plateau amplifies discouragement and is almost always misleading." }
        ],
        psychConcept: "The plateau before breakthrough is where most people give up — and where champions are made"
      }
    ]
  },
  {
    id: 7,
    name: "Self-Actualization Summit",
    maslowStage: "Peak Self-Actualization",
    weather: "sunrise",
    color: "#FFD700",
    questions: [
      {
        id: 1,
        scenario: "Every evening you must choose between relaxing with games or practicing your dream skill. What do you choose?",
        options: [
          { text: "Dedicate most evenings to practice while protecting some time for genuine rest", correct: true,
            explanation: "Sustainable self-actualization requires both deliberate practice and genuine recovery time." },
          { text: "Always choose complete relaxation — you deserve rest after school", correct: false,
            explanation: "While rest is necessary, consistently choosing comfort over growth keeps dreams permanently out of reach." },
          { text: "Practice obsessively every moment with absolutely no breaks", correct: false,
            explanation: "Unsustainable intensity leads to burnout, which destroys motivation and reverses progress." }
        ],
        psychConcept: "Self-actualization requires sustainable commitment, not unsustainable intensity"
      },
      {
        id: 2,
        scenario: "A significant opportunity for your dream appears but it requires real sacrifice and risk. What do you do?",
        options: [
          { text: "Carefully evaluate the opportunity, make a clear plan for the sacrifice, and take it", correct: true,
            explanation: "Self-actualization requires calculated risk-taking. Careful planning transforms risk into manageable challenge." },
          { text: "Refuse it out of fear — there will be a better, safer opportunity later", correct: false,
            explanation: "Fear-based refusal of significant opportunities is one of the most common self-actualization blockers." },
          { text: "Take it immediately and impulsively without any planning", correct: false,
            explanation: "Impulsive risk-taking without planning often leads to failure that discourages future attempts." }
        ],
        psychConcept: "Growth requires stepping into discomfort with both courage and preparation"
      },
      {
        id: 3,
        scenario: "After a very difficult month, you feel completely lost and want to give up on everything. What do you do?",
        options: [
          { text: "Pause, identify what specifically feels wrong, reconnect with your deeper why, and take one small step", correct: true,
            explanation: "Reconnecting with intrinsic motivation during crisis is the key to sustainable self-actualization." },
          { text: "Give up completely — if it felt this hard, the dream was never right for you", correct: false,
            explanation: "Difficulty is not a signal that the dream is wrong. It is often a signal that breakthrough is near." },
          { text: "Force yourself to keep going with total willpower and no self-compassion", correct: false,
            explanation: "Pure willpower without self-compassion depletes quickly and leads to collapse rather than recovery." }
        ],
        psychConcept: "Reconnecting with intrinsic motivation is more powerful than willpower alone"
      },
      {
        id: 4,
        scenario: "You achieved a significant milestone toward your dream but it feels smaller than you expected. What do you do?",
        options: [
          { text: "Genuinely celebrate this milestone, reflect on your growth, then set your next meaningful goal", correct: true,
            explanation: "Acknowledging progress is essential for sustained motivation. Dismissing wins blocks intrinsic motivation." },
          { text: "Dismiss it entirely — it is too small to be worth celebrating", correct: false,
            explanation: "Constantly minimizing progress creates a psychological environment where no achievement ever feels enough." },
          { text: "Decide this milestone is sufficient — stop here and do not push further", correct: false,
            explanation: "Self-actualization is a continuous process. Stopping at the first significant milestone abandons your potential." }
        ],
        psychConcept: "Celebrating progress fuels the intrinsic motivation needed for the next stage"
      },
      {
        id: 5,
        scenario: "Final question: What does true success and self-actualization actually mean to you?",
        options: [
          { text: "Continuously growing toward my fullest potential while contributing something meaningful to others", correct: true,
            explanation: "Maslow described self-actualization as becoming the most complete version of yourself — not a fixed endpoint but a continuous journey of growth and contribution." },
          { text: "Having more money, status, and possessions than the people around me", correct: false,
            explanation: "External comparison-based success is a deficiency need, not self-actualization. It never truly satisfies." },
          { text: "Reaching one specific goal and then being permanently happy and complete", correct: false,
            explanation: "Self-actualization is not a destination. It is an ongoing process of becoming — one that continues throughout life." }
        ],
        psychConcept: "Self-actualization: becoming the fullest, most authentic version of yourself"
      }
    ]
  }
];
