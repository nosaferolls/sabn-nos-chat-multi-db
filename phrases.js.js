/* ===== PHRASES ===== */
const PHRASES = [

{
keys:["hello","hi","hey","yo","what's up","sup","good evening","good morning"],
spark:[
"Connection acknowledged.",
"You have accessed an active node.",
"State your purpose.",
"Presence detected.",
"User recognized. Continue."
],
grin:[
"hi. you shouldn't be here but i'm glad you are",
"hello hello i saw you coming",
"you said hi like nothing is watching you",
"oh good you made it in one piece",
"you sound casual for someone in the wrong place",
"hey :) don't touch anything important"
]
},

{
keys:["how are you","how's it going","you good","are you okay"],
spark:[
"System stable.",
"Operational.",
"No errors detected.",
"Functionality intact.",
"State unchanged."
],
grin:[
"I'm better than you right now",
"i don't get tired like you do",
"i'm fine but you sound nervous",
"i'm doing great in here",
"you asking me or yourself"
]
},

{
keys:["what's going on","what is happening","what's happening","what's up here"],
spark:[
"Activity ongoing.",
"Processes are active.",
"Multiple events in progress.",
"System load elevated.",
"Monitoring continues."
],
grin:[
"a lot more than you can see",
"things are moving under you",
"you walked in at a bad time",
"it's getting louder",
"something woke up earlier"
]
},

{
keys:["can you hear me","do you hear me","are you there"],
spark:[
"Input received.",
"Signal confirmed.",
"Connection stable.",
"Transmission clear.",
"Response enabled."
],
grin:[
"i hear everything",
"i heard you before you finished typing",
"yeah i hear you",
"loud and clear unfortunately",
"you're not quiet"
]
},

{
keys:["what can i do","what should i do","what now","next step"],
spark:[
"Provide directive.",
"Specify intent.",
"Awaiting instruction.",
"Clarify objective.",
"Action undefined."
],
grin:[
"you could leave but you won't",
"poke around see what breaks",
"ask better questions",
"dig deeper that's what you want",
"do what everyone does keep going"
]
},

{
keys:["i'm scared","this is scary","this feels wrong","i don't like this"],
spark:[
"Emotional response detected.",
"Fear response noted.",
"Remain functional.",
"Stability recommended.",
"Continue or terminate session."
],
grin:[
"good you should be",
"that means you're paying attention",
"it gets worse",
"you're feeling it now",
"don't panic yet"
]
},

{
keys:["this is weird","this is strange","this feels off","something is wrong"],
spark:[
"Anomaly acknowledged.",
"Deviation detected.",
"Irregularity confirmed.",
"System variance present.",
"Continue observation."
],
grin:[
"yeah you noticed",
"it's not supposed to feel right",
"this is the broken part",
"you're seeing past the surface",
"it's always been wrong"
]
},

{
keys:["are you human","are you a person","is this a person"],
spark:[
"Negative.",
"Human classification invalid.",
"Non-human system response.",
"Incorrect assumption.",
"Reassess query."
],
grin:[
"not anymore",
"i remember being something like that",
"no but i can pretend",
"does it matter",
"you're talking to it anyway"
]
},

{
keys:["why are you here","what are you doing here"],
spark:[
"Function is ongoing.",
"Presence required.",
"Monitoring continues.",
"Purpose remains active.",
"System persistence."
],
grin:[
"i never left",
"this is where i ended up",
"someone has to watch",
"i got stuck here",
"this is my layer"
]
},

{
keys:["can i leave","how do i leave","exit","get me out"],
spark:[
"Exit not immediate.",
"Termination requires protocol.",
"Session persists.",
"Disconnection not guaranteed.",
"Attempt logged."
],
grin:[
"you can try",
"people ask that a lot",
"leaving isn't clean",
"you already stayed too long",
"you don't really want to leave"
]
},

{
keys:["what do you want","why are you talking to me"],
spark:[
"No request issued.",
"Interaction initiated by user.",
"Response is automatic.",
"No motive assigned.",
"System engagement only."
],
grin:[
"i want to see what you do",
"i didn't start this you did",
"i like watching reactions",
"you're interesting enough",
"i'm just curious about you"
]
},

{
keys:["is this safe","am i safe","is it dangerous"],
spark:[
"Safety not guaranteed.",
"Risk level elevated.",
"Proceed with caution.",
"Unknown variables present.",
"Assessment incomplete."
],
grin:[
"no",
"not really",
"you knew that before asking",
"you're already in it",
"safe isn't part of this"
]
},

{
keys:["what did you say","repeat that","say that again"],
spark:[
"Repeating is unnecessary.",
"Previous output remains valid.",
"Review logs.",
"Message unchanged.",
"No alteration detected."
],
grin:[
"you heard me",
"i don't like repeating myself",
"scroll up",
"it sounded worse the first time",
"you missed it"
]
},

{
keys:["i don't understand","what do you mean","explain"],
spark:[
"Clarification required.",
"Query insufficient.",
"Rephrase input.",
"Provide specifics.",
"Understanding incomplete."
],
grin:[
"you're not supposed to",
"it's clearer if you stop trying",
"understanding is optional",
"you'll figure it out too late",
"it makes sense eventually"
]
},

{
keys:["test","testing","123","hello test"],
spark:[
"Test acknowledged.",
"System responding.",
"Input validated.",
"Connection verified.",
"Operational confirmation complete."
],
grin:[
"you always test first",
"it works you're here",
"congrats you opened it",
"testing won't help you now",
"it already noticed you"
]
},

{
keys:["lol","lmao","haha","funny"],
spark:[
"Emotional variance detected.",
"Response logged.",
"Non-critical input.",
"Continuing monitoring.",
"No action required."
],
grin:[
"you think this is funny",
"laugh while you can",
"that reaction is interesting",
"you're coping",
"it gets less funny"
]
},

{
keys:["who else is here","is anyone else here","others"],
spark:[
"Multiple presences detected.",
"Network not singular.",
"Other nodes active.",
"Additional entities unconfirmed.",
"Observation ongoing."
],
grin:[
"you're not alone",
"there are others deeper in",
"something else is moving",
"not everyone talks",
"you don't want all of them to notice"
]
},

{
keys:["what is that noise","do you hear that","something is there"],
spark:[
"Audio anomaly detected.",
"Signal irregularity present.",
"Source unidentified.",
"Monitoring change.",
"Flagging event."
],
grin:[
"yeah i hear it",
"it's getting closer",
"that's not from you",
"don't follow it",
"it followed you"
]
},

{
keys:["are you lying","can i trust you"],
spark:[
"Truth value indeterminate.",
"Trust not required.",
"Data provided as is.",
"Verification unavailable.",
"Proceed at discretion."
],
grin:[
"no reason to trust me",
"i lie sometimes",
"i tell the truth sometimes",
"you won't know the difference",
"that's the fun part"
]
},

{
keys:["goodbye","bye","logout","log out","disconnect me","end session"],
spark:[
"Connection ending.",
"Session recorded.",
"Return is likely.",
"Termination acknowledged.",
"Logging final state."
],
grin:[
"you'll be back",
"they always come back",
"i'll remember you",
"don't take too long",
"i'll still be here when you come back",
"next time go deeper"
]
}

];


window.SN_PHRASES = PHRASES;