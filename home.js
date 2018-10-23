// Global variables
var vidrecorder;
var page_num = 1;
var userData = {};
var wikiText = "The MIT Media Lab is an antidisciplinary research laboratory at the Massachusetts Institute of Technology, growing out of MIT's Architecture Machine Group in the School of Architecture. Its research does not restrict to fixed academic disciplines, but draws from technology, media, science, art and design. As of 2014, Media Lab's research groups include neurobiology, biologically inspired fabrication, socially engaging robots, emotive computing, bionics, and hyperinstruments. The Media Lab was founded in 1985 by Nicholas Negroponte and former MIT President Jerome Wiesner, and is housed in the Wiesner Building (designed by I. M. Pei), also known as Building E15. The Lab has been written about in the popular press since 1988, when Stewart Brand published The Media Lab: Inventing the Future at M.I.T., and its work was a regular feature of technology journals in the 1990s. In 2009, it expanded into a second building. The founding director of the lab was Nicholas Negroponte, who directed it until 2000. Later directors were Walter Bender (2000–2006), Frank Moss (2006–2011), and Joi Ito (2011-present). As of 2014, the Media Lab had roughly 70 administrative and support staff members. Associate Directors of the Lab were Hiroshi Ishii and Andrew Lippman. Pattie Maes and Mitchel Resnick were co-heads of the Program in Media Arts and Sciences, and the Lab's Chief Knowledge Officer was Henry Holtzman. The Media Lab has at times had regional branches in other parts of the world, such as Media Lab Europe and Media Lab Asia, each with their own staff and governing bodies. The Lab's primary funding comes from corporate sponsorship. Rather than accepting funding on a per-project or per-group basis, the Lab asks sponsors to fund general themes; sponsors can then connect with Media Lab research. Specific projects and researchers are also funded more traditionally through government institutions including the NIH, NSF, and DARPA. Also, consortia with other schools or other departments at MIT are often able to have money that does not enter into the common pool. Companies sponsoring the Lab can share in the Lab’s intellectual property without paying license fees or royalties. Non-sponsors cannot make use of Media Lab developments for two years after technical disclosure is made to MIT and Media Lab sponsors. The Media Lab generates approximately 20 new patents every year. Some recurring themes of work at the Media Lab include human adaptability, human computer interaction, education and communication, artistic creation and visualization, and designing technology for the developing world. Other research focus includes machines with common sense, sociable robots, prosthetics, sensor networks, musical devices, city design, and public health. Research programs all include iterative development of prototypes which are tested and displayed for visitors. Each of these areas of research may incorporate others. Interaction design research includes designing intelligent objects and environments. Educational research has also included integrating more computation into learning activities - including software for learning, programmable toys, and artistic or musical instruments. Examples include Lego Mindstorms, the PicoCricket, and One Laptop per Child. The Media Arts and Sciences program is a part of MIT's School of Architecture and Planning, and includes three levels of study: a doctoral program, a master's of science program, and a program that offers an alternative to the standard MIT freshman year as well as a set of undergraduate subjects that may form the basis for a future joint major. All graduate students are fully supported (tuition plus a stipend) from the outset, normally by appointments as research assistants at the Media Laboratory, where they work on research programs and faculty projects, including assisting with courses. These research activities typically take up about half of a student’s time in the degree program. In addition to the Media Lab, the combined original Wiesner building (E15) and new (E14) buildings also host the List Visual Arts Center, the School of Architecture and Planning's Program in Art, Culture and Technology (ACT), and MIT's Program in Comparative Media Studies.The Media Arts and Sciences academic program have a close relationship with the Media Lab. Most Media Lab faculty are professors of Media Arts and Sciences. Students who earn a degree in Media Arts and Sciences have been predominantly in residence at the Media Lab, taking classes and doing research. Some students from other programs at MIT, such as Mechanical Engineering, or Electrical Engineering and Computer Science, do their research at the Media Lab, working with a Media Lab/Media Arts and Sciences faculty advisor, but earn their degrees (such as MEng or an MS in EECS) from other departments. In 2009, the Media Lab expanded into a new building designed by Pritzker Prize-winning Japanese architect Fumihiko Maki. The local architect of record was Leers Weinzapfel Associates, of Boston. The Maki building has predominantly glass walls, with long lines of sight through the building, making ongoing research visible and encouraging connections and collaboration. Media Arts and Sciences faculty and academic research staff are principal investigators/heads of the Media Lab's various research groups. They also advise Media Arts and Sciences graduate students and mentor MIT undergraduates. \"Most departments accept grad students based on their prospects for academic success; the Media Lab attempts to select ones that will best be able to help with some of the ongoing projects.\" As of 2014, there are more than 25 faculty and academic research staff members, including a dozen named professorships. A full list of Media Lab faculty and academic research staff, with bios and other information, is available via the Media Lab Website.";
var passage = [];
var speed = 0.7;
var title ="textsample";
passage = wikiText.split(" ");

var corpus = {
	// two stories: one with a buildup and another with linear emotions
	// how bucket of meaning of story gets filled
    // "Masterpiece": "In the summer after my father died, I found myself unable to speak. He had died in an unexplained accident, a rupture of some vein in a place they couldn’t quite see. I’d found him curled into himself as if he were asleep. In the same way a small child drifts as their mother lays a hand on their head, he held a paintbrush in his hand, the bristles curling underneath the scruff of his cheek. 
    //      As they wheeled him out, I sat at our kitchen table, a cup of cold coffee in my hands. I could nearly see him hunched over the easel at the window in our kitchen, paintbrushes clattering, muttering to himself softly. I rubbed at bits of clay lodged in the table cracks, hearing his soft confessions as he bent a sculpture into shape; heard his consistent encouragements to me as his fingers pressed against the top of mine: The foundation will be what matters most. He told me that, in the same way some speak to unfurling flowers, the most beautiful art is the art you speak to- breathe it into fruition.  
    //      Despite his love for slick oils, thick acrylics, his love for the feel of clay beneath his fingers, he’d always said that I was his greatest masterpiece. When I first asked why, unlike all of my friends, I didn’t have a mother, he told me he sculpted me himself; pinched my nose until it was thin and upturned, spun my hair from a golden fleece, looked for the brightest jewels to push into my eyes. That, to make my voice, he had combed through dark ocean, scooped out the blubber of a whale’s sonar, and combined it with a songbird’s carved out throat. So when he died, each of my limbs felt like an amputees, ghosts of what they were made to be. And my voice was stolen away with him, raw from all the things I never got to say. 
    //       In late July, I saw a field that my father used to take me to and teach me about the stars. I pulled over on the side of the road, the engine shuddering and clicking off. I sat there stagnant with the stickiness and the hollow hum of cicadas, watching the repeating swell of headlights in the night. I looked to the sky, where I knew Corvus, Pictor, and Sculptoris all rested. In a stumbling motion, I pulled a napkin from the glovebox of my car, and began to draw. I began to whisper to the crinkle of paper: carved and set like stone into the sky, into my heart. The wound of my throat was cauterized by what I imagined he’d look like in the midst of the constellations: shining like wet paint, an astronomical renaissance.",
    // "Another Day at War": "The fear and anxiety begin shortly before the battle.  I tremble, and a nervous sweat trickles down my brow. Self-doubt plagues my thoughts. My heart races. I ponder upon the consequences should I lose, and the spoils should I win.  If I should fail, all my men would fall; I would be humiliated, and worst of all, my rightful place as king would be stolen from me.  If I win, the glory will be all mine.  I stand at the back of my army.  All of my men are at my sides and in front of me."
    // "Diner on Main": "I hate this old diner on Main Street. I hate the stained red and white booths that remind me of expired peppermints. I hate the stench of greasy hot dogs, sickly sweet soda, and old people. Old people everywhere. I can picture them here fifty years ago, wearing their varsity jackets and flirty floral dresses. I think they must be pretty bored with their lives to keep coming here week after week. I stroll up to the counter in my leather jacket and ruby lipstick, thinking I am way too good for this place. I order the usual—a root beer float for me and a strawberry milkshake for Henry—and flash a teasing wink at the cashier I recognize from somewhere, but then I remember that Henry and I are Facebook official now and that means he probably wouldn’t approve of me flirting with a random guy. Dating is hard. I grab our drinks and spin to return to my seat, bumping into an older man with grey hair and pale innocent eyes. This is the kind of man that has probably lived here his entire life and never skips a service on Sunday.
    //       I order one of their famous hot dogs at the register, my mouth watering at the thought of that all-too-familiar taste. The first time I came to this diner, I was on a date with a young woman named Jane who I had met in biology class my first year of junior high. I remember her bouncy chocolate curls and crimson headband. She was the new kid in town. We rarely got new people in town. We shared a strawberry milkshake and sat across from each other at that booth next to the door. Or maybe it was that booth across from the register. The memory feels faded now, peeling at the edges like an old photograph.
    //       I plop down across from Henry and get to business. Last weekend, I finished my float in five minutes. This time, Henry bets me five dollars I can’t drink it in three without throwing up. Challenge accepted. I set a timer on my phone. Slurping up my float, I have no choice but to breathe through my nose and welcome the wafts of greasy french fries and mothballs. I notice that the cute cashier has clocked out. Ten seconds left. Henry looks amused as ever. 3, 2, 1. I advertise the empty cup to my challenger and soak in the glory of victory. Mission accomplished.
    //       I recall one particularly special evening here in this room. The football team had just won the state tournament. We crammed into the backs of trucks and made our way here, buzzing with pride and elation. It felt as if we were kings, sprawled upon red and white thrones, elegantly devouring the best milkshakes in all the land. Jane sat next to me, nestled underneath the shell of my varsity jacket. I return to the booth in the corner and reclaim the throne of my glory days. But now I sit alone, and it is no longer a throne but simply a ketchup-stained cushion to rest my tired bones. 
    //       I feel sick after inhaling that float and begin to question whether I made a mistake, but then again the misery is half of the fun. Every week, we come here and slump down at this table by the window. I drain a root beer float in record-breaking time and then we debate over the newest political scandal or rant about the latest biology test. I don’t know what invisible force draws people back each week. For most routine customers, it’s the heavenly ice cream. I can understand why. There’s something else about this place too. Maybe it’s the wads of used gum decorating the bottoms of tables. Or perhaps the annoying bell that chimes every time a customer enters. No, it must be the subtle sense of deterioration and decay. As the door opens, that shrill splitting sound pulls me out of my trance.
    //       I often recall coming here on Sunday afternoons with my mother. She always loved the ice cream. I would bring it to her in pints when she had a bad day at work. She swore to me that ice cream had healing powers, so when Jane got sick I brought her a pint every week. By that time her hazelnut hair had faded to a soft silver. The strawberry ice cream wasn't enough to heal her, but I like to think that it ease the pain in those last few painful months. Now, I bring that frozen delicacy to our grandchildren on Sunday nights as a special treat before they begin a new week of schooling. I hope that they will come here on Friday nights and after their graduations and on visits home from college. I can’t imagine a better place to feel as though you are a part of something.
    //       It’s getting late now and my curfew is in one hour, so we decide to leave for the night, but we will be back again soon. I catch a glimpse of the old man I ran into earlier. He’s staring at me with a distant look in his glassy eyes. That’s creepy. He’s sitting alone. I wonder if he has a special someone or if he is one of those lonely old men who spends their days playing golf and going to the movie theater alone. I hope he’s happy.
    //       Across the diner, I catch the glance of a young girl with ocean blue eyes and freckles peppering her face. She is with her boyfriend. I watch her grab his hand and pull him out into the cool night air. Her confident gait and shiny brown hair remind me of Jane. I wonder if that’s what we looked like. I wonder if the young woman is the new kid in town. I hope they come again soon.",
    // "Talk": "Here in the town of Fallingwood, we believe everyone’s got their own special Talk.   My grandma explained this to me when I was six years old, that every person had a Talk of their own, from the littlest child to the oldest senior citizen.   It’s what made people distinctive in conversation, she claimed.  I had no idea what that meant, so I told her she was crazy and tried to run off, but she pulled my braids and made me sit down and listen.
    // 		“You’ll need to know this stuff, girlie,” she opined as she husked corn for grilling, “for when you figure out what your Talk is.”
    // 		Your Talk is really a simple concept when you get right down to it.   It’s sort of in the way you say things, the words you use and how you speak them.   For example, my mom Talks like a good kitchen knife- quick bursts of rapid-fire dialogue, chopping words like vegetables.   My dad could Talk a statue out of a marble block- his Talk’s more of a hammer and chisel, wielded by the precise hands of an artist.  Dad hammers his words out of the air, refining them carefully before using them, and when he’s through, he’s crafted a Venus De Milo of an argument.  I suppose that’s what makes him such a good lawyer.
    // 		Grandma’s Talk is like an old car engine that won’t start properly.   Sometimes it putters along like it should, other times it stalls and spits so that you almost want to kick it to get it going again.   When her talk starts stalling, it’s torture to listen to it.   I asked her once why her Talk wasn’t as pretty as Dad’s- she is his mother after all- and she got all quiet.
   	//  		“Your grandfather’s Talk was like an auto mechanic, girlie.  He’s been gone ten years now, since before you were even a thought.   Can’t help it if I’ve missed a few tune-ups on account of that.”
    // 		After that, she shooed me away, claiming I was tiring her out with all my questions.   I had no idea what she meant at the time, but eventually I came to realize the truth about Talks- the ones belonging to people who were meant to stick together tended to be related somehow.    Grandma Talked like a vintage car and Grandpa had Talked like fixing them.   My sister Grace Talked like butterflies and when she brought home her boyfriend, we all knew he was going to be her fiance someday because he Talked like flowers.   That was Rodney Prewett, and he married Grace last summer.
    // 		Mom and Dad’s Talks were completely unrelated, and they divorced before I was old enough to understand why.   Mom’s word-chopping and Dad’s word statues didn’t fit together- in fact, the had a way of mangling each other.   You can’t make chopped vegetables into a statue any more than you can julienne slice marble with a kitchen knife, and although they tried their best, it just didn’t work.   Now Mom’s remarried to the greengrocer and he Talks like an apple peeler, slicing away the skin around his words to get to the fruit of what he’s saying.   I think that marriage is probably going to last.
    // 		Dad never remarried.   Although he tried to meet people and even attempted online dating- to Grandma’s disapproval- his heart was still hung up on Mom.   Although their Talks were totally incompatible, he couldn’t get over her.   Sometimes I’d catch him trying to imitate her Talk when he thought no one was around, hoping against hope that maybe if he learned to make his words sharp and quick like a kitchen knife, she’d come back to him.   Grandma would watch him from her armchair and shake her head.
    // 		“Be careful, girlie, and see you don’t end up like your father.”   Her Talk stalled for a moment, but she recovered quickly.   “If the Talks don’t fit, the people don’t fit.   You can’t force a square peg in a round hole, eventually you’re gonna break either the peg or the hole or both.  All that comes of trying it is hurt.”
    // 		While Grandma’s Talk was stalling worse every day, Dad was trying to change his, Mom’s was hacking at everything, Rodney’s was blossoming prettily, and Grace’s was fluttering all over the damn place, I was getting into my teenage years and still had no idea what mine was.   Sometimes, I sounded like Dad and could Talk a pretty decent clay pot even if I was no Michaelangelo.   Other times, I diced my words like Mom or puttered on like Grandma.   I could even bloom and grow like Rodney or fly around like Grace.   And it wasn’t just those- I could Talk like people I’d only spoken to once or twice as well.   My Talk couldn’t seem to decide what it was, and this vexed Grandma like you wouldn’t believe.
    // 		“You need to settle down and stop imitating everyone, girlie,” she spluttered indignantly one autumn evening when I went to visit her in the nursing home.    We had to put her in there eventually, Dad wasn’t aware enough of reality to take proper care of her and both of them were totally against me dropping out of school to take up the responsibility.   “You’re never gonna find your Talk if you keep this up.”
    // 		She stalled then and didn’t start again.  Grandma started stalling longer and longer towards the end.   A few weeks later, she stalled and rather than recovering, the engine of her Talk finally quit.  We buried her next to Grandpa like she’d always wanted, out behind the old house.  It wasn’t until after the funeral, when I was sitting on the back porch and watching them lower her casket into the ground that I finally figured it out.
    // 		I Talk like a mirror.",
    "Questions": "I used to ask a lot of questions. Every kid does, you know? I drove my parents nuts. I questioned everything, everything I saw or heard about. Why is the sky blue? Why is grass green? Why does soap smell good but taste bad? I would do that thing that kids do all the time. You know that thing, when they ask questions that just lead to more and more questions in this big chain? Yeah, I was real bad about that. I’d see a woodpecker bashing its face into a tree and say, “What’s that bird?” My old man would respond, “That’s a woodpecker, Joey.” I’d follow with, “What’s a woodpecker?” He’d answer, “It’s a kind of bird that drills into trees to find bugs to eat.” I’d think about that for a second and then ask, “What’s a drill?” And so on and so on.
				That was the thing about my old man, though. He’d always answer my questions, no matter how many I had. He’d answer them correctly, too. He was a smart guy, a professor of biology at this university, and I guess it made him happy that his son was curious about the natural world. I always wanted to try and stump him, though. Just to see if I could. I’d try to find really big questions, really profound stuff. Picture me, at six years old, going on to Google, searching for “really hard questions”, and then waddling over to my old man and asking “What’s the meaning of life?” The old biologist was quick, and without batting an eye he’d respond, “To reproduce.” That led to a fun series of questions that I’d rather not recount.
				One summer, my old man got a grant from the university to study migratory patterns of gazelle in the Serengeti, and he took me and my mom with him. On one of the outings, I saw a cheetah tear a Thomson’s gazelle to shreds. I turned to my old man, and asked him “Why did the cheetah kill the gazelle?” He said, “The cheetah has to eat, Joey. It’s sad, but it’s just a part of life. We have to kill to eat, and we have to eat to live.”
				My mother died the next year. Car crash. Unpredictable, unavoidable. I asked Dad, “why do things die?” Scientist that he was, he answered, “Well, Joey, if things didn’t die, then there wouldn’t be any room for new things.” I asked him, “So Mama died to make room for something new?” He was silent. I told him, “I don’t want something new; I want Mama.” He was silent. I asked him if he was going to die. I asked him if I was going to die. If a cheetah was going to eat me. If a car was going to hit me. If lighting was going to explode our car on the drive home from the funeral. If I was going to get sick. If I was going to get attacked, or stabbed, or shot, over and over I battered my grieving father with question after question about hypothetical death, all the many ways a kid could imagine his life ending. He just looked at me, with the eyes of a mauled gazelle that had accepted his fate. He started crying. He cried for hours, and I just stood there. I don’t ask questions much anymore. I don’t want to know the answers I’ll get.",
	"Shaving Cream": "In the morning I watch Baba’s slow limp to the bathroom. Both he and the door creak as he heaves it open, and he stumbles as his foot catches on the lip of the threshold. For a moment, I consider the bruise that will spread across his shin like an amoeba, before it yellows, shrivels, and fades, but he does not fall. Baba pulls his other leg over the ledge, and the door clicks shut by itself.
    				I go to the window and yank at the blinds. They catch on their rusty hinges and hang stubbornly, half-drawn. Stark sunlight crawls into the room, but it seems too weary to reach into the far corners. Shadows roil in the deep creases of the sheets rumpled on the hospital bed. I notice, not for the first time, that there are whorls of fingerprints and strands of hair trapped in the plastered walls. The stench of ammonia lances up my forehead, and I pinch at the bridge of my nose until the headache reduces to a dull thrum between my eyes; smells in the hospital room come in waves like the patients, crumbling away without notice, then returning with different names and faces and unchanging symptoms — old age, failing organs, persistent melanoma.
    				Turning, I remember that the nurse said to me yesterday to check on Baba more often, so I tap on the bathroom door with two knuckles. Then, I remind myself he’s hard of hearing, so I call out, “Baba?”
    				There’s no reply.
    				I push the door open anyway and find Baba standing at the sink, his eyes purple and baggy, his cheeks covered in shaving cream. He turns the faucet on and lets the water run until it’s warm. His nose dangles like a lump of melting candle wax when he hunkers over.
    				“Have you used the toilet, Baba?” I ask him.
    				“Yes,” he says, squinting at the mirror as he brings a razor up to his face.
    				The toilet has not been flushed. I push down the handle, and it wheezes, swallows, and spits back up.
    				“Do you want me to help?” I hold my hand out for the razor.
    				Baba doesn’t move. “No.” he says. The razor makes its shaky journey down the snow-covered slope.
    				I watch him tremble as he shaves stroke by stroke, the razor rasping from his cheekbone to his gulping Adam’s apple. Baba nicks himself a few times, but he doesn’t bother to rinse the cuts. His blood turns the shaving cream pink, like the frosting on a birthday cake.
    				Baba's gaze wanders once he’s halfway done, drops from the mirror to the counter of the sink, where there’s a paper cup with two toothbrushes, a tube of travel size toothpaste, a bar of soap, and the old picture frame. The frame is three by four, the size of Baba’s heart, and it holds a grainy photo of him and my mother on their third wedding anniversary. I’m not yet born, and they hold champagne glasses, laughing. My mother, dressed in royal blue, has her pinky finger sticking out.
    				Baba picks up the photograph, and I watch in the mirror as the blue films around his irises seem to expand, as if he’s aging before my eyes. I’m not sure how long he stands over the sink gripping the picture in his left hand and his razor in the right, looking like a retiring Santa Claus with his half-beard of shaving cream, but when I step forward and tug the razor from his hand, it falls away without protest.
    				“The nurse will be around soon, Baba,” I say, shaving his other cheek clean. “You’ll want to be ready.”
    				The photograph lays flat in both of his palms. He does not cry, and he carries it back to his bed.",
    "Death Buys A Coffee": " Death goes to buy a coffee, but inside the café, everyone is too preoccupied to notice. At the doorway, he leaves his scythe propped up against the wall and drapes his cobwebbed cloak over the coat hanger.
            He eyes the menu scrawled overhead with chalk, the frame of his jaw parted in perpetual uncertainty. The barista taps her foot from behind the counter and makes a face.
            “Sir, are you ready to order? We have customers waiting, you know,” she huffs. Death glances over his shoulder to meet the glare of a wrinkly-eyed woman.
            “Ah–my bad. Just give me a moment.” He pauses. “I’d like a regular, hot, organic caramel latte with mocha drizzle–oh, and make it gluten-free, please.”
            “Your name?”
            “Death,” says Death. He reaches into his pocket for spare change, though it’s mostly made up of wadded five-dollar bills and quarters. He makes sure to drop a dime into the tip jar as he nods sheepishly at the barista. She rolls her eyes.
            “That’ll be $4.39.”
            Another worker slides his mug down the countertop, and Death curls his bony fingers around it, taking a whiff. It’s sweet. Perhaps a bit too much for his taste.
            He wanders into the back of the room, searching for a vacant seat. Somewhere there is a vinyl record player oozing out a man’s low humming of a familiar song. Death sings along, finding an armchair near a window overlooking the street. From outside, figures dart down the sidewalk with faces tucked into mufflers. A red-nosed woman passes and catches him staring. Death smiles, but she turns away.
            As he is settling in, the door springs open and wind rushes in. He spills a bit of latte.
            Death winces, then glances up at a little girl with a wide, toothy grin.
            “Hi!” she says. “I saw you through the window. I like your costume!” She takes a seat next to Death, waving at her mother who’s ordering at the front. A woman with worn lines etched into her skin looks back, her expression vacant. Absent of contentment. If anything, she could appear no less unconcerned about her daughter making conversation with a peculiar, darkly-clothed entity. Instead, the air around her is reminiscent of fresh grief.
            The girl continues to beam at Death, half-expecting a response. He clears his throat.
            “Really,” Death muses. “Shouldn’t you be in school?”
            The little girl frowns. “I would be, but Mama’s going to see Kitty at the vet’s next door.”
            “Kitty?”
            “That’s our cat. She’s being put down today.”
            Death takes a slow sip. “Is that so?”
            “Yeah. Mama says that means everything is going to be okay again. You see, Kitty’s been sick for a while.”
            He sets his mug down, watching the steam spin into sinewy tendrils. Death tilts his head to the side and peers at his scythe, still balanced against the wall undisturbed. He ruffles the hair of the little girl and she giggles. A sad smile creeps onto his face.
            “…I see.”"
	};

function split(corpus) {
    for (var title in corpus){
        corpus[title] = corpus[title].split(" ");
    }};

//return a 15-digit number representing current time
function timestamp(raw=false) {
    var d = new Date();
    if (raw) {
        return d.getTime();
    }
    
    var year = d.getFullYear()+"/";
    var month = d.getMonth()+1;
    if (month<10) {month="0"+month;}
    month += "/";
    var date = d.getDate();
    if (date<10) {date="0"+date;}
    date += "/";
    var hour = d.getHours();
    if (hour<10) {hour="0"+hour;}
    hour += ":";
    var minute = d.getMinutes();
    if (minute<10) {minute="0"+minute;}
    minute += ":";
    var sec = d.getSeconds();
    if (sec<10) {sec="0"+sec;}
    sec += ":";
    var msec = d.getMilliseconds();
    if (msec<10) {msec="0"+msec;}
    if (msec<100) {msec="0"+msec;}
    return [year+month+date+hour+minute+sec+msec, d];
}

$(document).ready(function(){
    $.getJSON('sample.json', function(data){
        console.log("sample.json Read");
        sampletitles = Object.keys(data);
        s = sampletitles[Math.floor(Math.random() * sampletitles.length)];
        passage = data[s];
        userData["textsample"] = [];
        flashText();
        $('input[type=radio][name=speed]').change(function(){
            speedLevel = this.value;
            if (speedLevel == "low") {
                console.log("Speed changed to low");
                speed = 0.7;
            }else if (speedLevel == "med") {
                console.log("Speed changed to median");
                speed = 0.4;
            }else if (speedLevel == "high") {
                console.log("Speed changed to high");
                speed = 0.25;
            }else{
                console.log("No change applied: "+speedLevel);
            }});
        $.getJSON('corpus.json', function(data){
            $("#btn-go").click(function(){
                corpus = data;
                var inputname = document.getElementById("name");
                if(inputname.reportValidity()){
                    $('input[type=radio][name=speed]').attr("disabled", "disabled");
                    titles = Object.keys(corpus);
                    title = titles[Math.floor(Math.random() * titles.length)];
                    temp = corpus[title];
                    temp.unshift("Story: "+title);
                    passage = temp;
                    userData["name"] = $("#name").val();
                    console.log("Name: "+userData["name"]);
                    userData[title] = [];
                    $("#btn-go").attr("disabled","disabled");
                }
            });
        });
    });
});

function flashText(){
    //speed = letter/sec (global variable)
    var word = passage.shift();
    $("#p-text").html(word);
    var wordStamp = {
    	"word": word,
    	"time": timestamp()[0],
    	"machine_time": timestamp()[1]
    };
    if (title!="textsample") {
    	userData[title].push(wordStamp);
    }
    nletter = word.length;
    if(passage.length > 0){
        setTimeout(function(){
            flashText();
            console.log("nletter "+nletter+"at speed "+speed);
        },nletter*speed*100);
    } else {
        $.post(userData["name"]+'.json', JSON.stringify(userData, null, 4), function(){
            console.log("Post "+ userData["name"]+'.json successfully');
        });
    }
}

// post video
function postFiles() {
    var blob = vidrecorder.getBlob();
    // getting unique identifier for the file name
    var fileName = userData['fileName'] + '.webm';
    var file = new File([blob], fileName, { type: 'video/webm' });
    xhr('/uploadFile', file, function(responseText) {
        var fileURL = JSON.parse(responseText).fileURL;
        $('#presult-video').html('Video successfully saved under '+fileName);
    });
}

// XHR2/FormData
function xhr(url, data, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        }
    };
    request.open('POST', url);
    var formData = new FormData();
    formData.append('file', data);
    request.send(formData);
}
