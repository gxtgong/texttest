// Webcam set up
function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}

// Global variables
var vidrecorder;

var page_num = 1;
var test_count = 0;
var record = '';

var userData = {};

var wikiText = "The MIT Media Lab is an antidisciplinary research laboratory at the Massachusetts Institute of Technology, growing out of MIT's Architecture Machine Group in the School of Architecture. Its research does not restrict to fixed academic disciplines, but draws from technology, media, science, art and design. As of 2014, Media Lab's research groups include neurobiology, biologically inspired fabrication, socially engaging robots, emotive computing, bionics, and hyperinstruments. The Media Lab was founded in 1985 by Nicholas Negroponte and former MIT President Jerome Wiesner, and is housed in the Wiesner Building (designed by I. M. Pei), also known as Building E15. The Lab has been written about in the popular press since 1988, when Stewart Brand published The Media Lab: Inventing the Future at M.I.T., and its work was a regular feature of technology journals in the 1990s. In 2009, it expanded into a second building. The founding director of the lab was Nicholas Negroponte, who directed it until 2000. Later directors were Walter Bender (2000–2006), Frank Moss (2006–2011), and Joi Ito (2011-present). As of 2014, the Media Lab had roughly 70 administrative and support staff members. Associate Directors of the Lab were Hiroshi Ishii and Andrew Lippman. Pattie Maes and Mitchel Resnick were co-heads of the Program in Media Arts and Sciences, and the Lab's Chief Knowledge Officer was Henry Holtzman. The Media Lab has at times had regional branches in other parts of the world, such as Media Lab Europe and Media Lab Asia, each with their own staff and governing bodies. The Lab's primary funding comes from corporate sponsorship. Rather than accepting funding on a per-project or per-group basis, the Lab asks sponsors to fund general themes; sponsors can then connect with Media Lab research. Specific projects and researchers are also funded more traditionally through government institutions including the NIH, NSF, and DARPA. Also, consortia with other schools or other departments at MIT are often able to have money that does not enter into the common pool. Companies sponsoring the Lab can share in the Lab’s intellectual property without paying license fees or royalties. Non-sponsors cannot make use of Media Lab developments for two years after technical disclosure is made to MIT and Media Lab sponsors. The Media Lab generates approximately 20 new patents every year. Some recurring themes of work at the Media Lab include human adaptability, human computer interaction, education and communication, artistic creation and visualization, and designing technology for the developing world. Other research focus includes machines with common sense, sociable robots, prosthetics, sensor networks, musical devices, city design, and public health. Research programs all include iterative development of prototypes which are tested and displayed for visitors. Each of these areas of research may incorporate others. Interaction design research includes designing intelligent objects and environments. Educational research has also included integrating more computation into learning activities - including software for learning, programmable toys, and artistic or musical instruments. Examples include Lego Mindstorms, the PicoCricket, and One Laptop per Child. The Media Arts and Sciences program is a part of MIT's School of Architecture and Planning, and includes three levels of study: a doctoral program, a master's of science program, and a program that offers an alternative to the standard MIT freshman year as well as a set of undergraduate subjects that may form the basis for a future joint major. All graduate students are fully supported (tuition plus a stipend) from the outset, normally by appointments as research assistants at the Media Laboratory, where they work on research programs and faculty projects, including assisting with courses. These research activities typically take up about half of a student’s time in the degree program. In addition to the Media Lab, the combined original Wiesner building (E15) and new (E14) buildings also host the List Visual Arts Center, the School of Architecture and Planning's Program in Art, Culture and Technology (ACT), and MIT's Program in Comparative Media Studies.The Media Arts and Sciences academic program have a close relationship with the Media Lab. Most Media Lab faculty are professors of Media Arts and Sciences. Students who earn a degree in Media Arts and Sciences have been predominantly in residence at the Media Lab, taking classes and doing research. Some students from other programs at MIT, such as Mechanical Engineering, or Electrical Engineering and Computer Science, do their research at the Media Lab, working with a Media Lab/Media Arts and Sciences faculty advisor, but earn their degrees (such as MEng or an MS in EECS) from other departments. In 2009, the Media Lab expanded into a new building designed by Pritzker Prize-winning Japanese architect Fumihiko Maki. The local architect of record was Leers Weinzapfel Associates, of Boston. The Maki building has predominantly glass walls, with long lines of sight through the building, making ongoing research visible and encouraging connections and collaboration. Media Arts and Sciences faculty and academic research staff are principal investigators/heads of the Media Lab's various research groups. They also advise Media Arts and Sciences graduate students and mentor MIT undergraduates. \"Most departments accept grad students based on their prospects for academic success; the Media Lab attempts to select ones that will best be able to help with some of the ongoing projects.\" As of 2014, there are more than 25 faculty and academic research staff members, including a dozen named professorships. A full list of Media Lab faculty and academic research staff, with bios and other information, is available via the Media Lab Website.";

var passage = [];
passage = wikiText.split(" ");
var speed = 0.8;

var userData = {};
var title ="wiki";


var corpus = {
    "Between the Lines": " “What?” I’m kicking myself as he looks straight into my eyes. My ears stopped working as soon as I saw his face. His eyes are the same hue of the hot cocoa you hold tight between yourhands while you sit by the fire, and they’re splintered with the very green that decorates all the most exquisite trees on this earth. His skin is clearer than the sky or my head have ever been. My brain is flooded in the split second I meet his gaze before I have to look away to avoid combustion. “Can I sit here?” he repeats without a trace of irritation. I realize I might have just avoided blowing another one of my social nine lives, which is a relief because I’m pretty sure I’ve exhausted my last one a thousand times by now. “Yeah.” That’s it? This jaw-dropping, thought-penetrating being wants to sit next to me and that’s all I could eek out? Another social suicide. I scoot right up to the window, putting as much space between us as possible, which is exactly the opposite of what I want. I grip the leathery skin of the bus seat below me and my knuckles lose color. I’m hoping it isn’t feasible for people to float away when their heads begin to inflate as they fill with too many thoughts. “Thanks.” He shoves his backpack under the seat in front of us. I’m the one that should be thanking him, but not a word escapes the cage of my lips. My whole body shivers and I’m sure he can feel it through the seat. I stare at my corduroy pants, concluding that they were a doltish mistake for the first day of sophomore year. I can already hear Ricky McFarland snarking about me to his posse: “Dude, the lines on his pants are straighter than he is!” I’m sure the boy next to me is thinking the same thing, but I’m not taking a chance on trying to sneak a glance. Instead, I try to convince the tremble in my hands to move to my head to shake the thought, but I don’t think that’s how it works. A shriek from the bus brakes brings me back to reality as they wail against the asphalt. I look out the window at uninviting Gates of Hell, and as I step off the bus, as he turns to go, he says one thing: “I like your pants.”",
    "Unbreakable Mind": "The smell of sterilized equipment and the sound of feet scuffling across the floor prevent me from my repeated attempts to escape the reality of my situation. That, and the small hand clasped in mine. My palm grows sweaty and my legs try to keep a pace faster than those trodding next to me but I do not dare let go. As we turn the corner on the second floor my heartbeat quickens and I notice a tear fall on my mother’s cheek; I lace my empty fingers with hers and the three of us make our way down the cold white hall to the last room on the right. It stills takes me a minute to register that the man lying on the hospital bed is my father, the same man that would carry me on his shoulders through Disneyland and never missed a taco Tuesday. Less than a decade, and it seems he has aged a hundred years. The nurse informs us that he has spent most of the day sleeping, and he may not wake up enough to speak with. He hasn’t eaten today, but she managed to coax a few sips of juice into him. Despite this news, the little hand in mine let’s go, and my wishful little sister makes her way to our dad’s bed and climbs up next to him. She begins to tell him all about her first week of first grade; her favorite subject, her new best friend, her teacher’s kindness and her gross school lunch that convinced her to pack her lunch everyday just like her big sister. Dad only stirs in his sleep, but my young little warrior simply continues her stories. I have never met a person with as much character as Aster, and she is only seven. I remember holding her for the first time, I had never seen a baby with such bright blue eyes and platinum blonde hair. Regardless of our eight and a half year age difference, we have been best friends since that day. At twelve months she would always say my name, “Kai Kai Kai”. Dad told me that since she said my name first, I got the honor of diaper duty. As I watched Aster grow, I also watched Dad decay. At first he couldn’t remember his keys, then my birthday, then the dog’s name, and then my name. In the early stages, no one thought it might be so serious, a man trying to juggle a full time job and raise a family tends to forget things every now and then right? Well one day on his way to work, dad got lost. He had been driving the short three miles to Jacobsen’s middle school for ten years and suddenly he could not find his way. After this incident mom convinced dad to see a doctor, and that’s when we first heard the news. Dad never acted worried in front of Aster or me, but one night after he had recently learned the truth about his memory problems, I woke up and I could hear him quietly sobbing in his room with my mother trying to console him. He did not seem to change much in the beginning, but his progression over just a few years caused our family to rely on a home health nurse. Mom had to continue going to work to support our family and to pay the medical bills, and Aster and I had to go to school. Once things progressed even further, Dad was moved out of the home to help give him the best care and to help protect Aster and me from seeing our dad in such a pathetic condition. Tonight I stand here and try to picture the man that took me out for ice cream after I scored the winning goal in my soccer game. Dark shaggy hair covering his head and a smile that stretched across his freckled face. Now his face was pale and lifeless, his body was weak. His hair was gray and his smile had faded long ago. I sit down next to Aster on Dad’s bed, and grab his hand. I pay attention to his thin, bony fingers, and remember the strong hands that would carry me to bed when I fell asleep in the car. Aster leans against me and I kiss the top of her head, mom’s out speaking with the nurse in the hallway. Mom returns to the room and gives dad a kiss on the cheek. She takes Aster’s hand and signals that it is time to go. I lean in and kiss dad on the forehead. “I love you dad”, I whisper, a tear rolling down my cheek.Then dad slowly opens his eyes, I watch as his mouth slowly turns up at the corners, and he  whispers to me, “I love you Kai”. His eyes close again, and he falls back asleep.",
    "Another Day at War": "The fear and anxiety begin shortly before the battle.  I tremble, and a nervous sweat trickles down my brow. Self-doubt plagues my thoughts. My heart races. I ponder upon the consequences should I lose, and the spoils should I win.  If I should fail, all my men would fall; I would be humiliated, and worst of all, my rightful place as king would be stolen from me.  If I win, the glory will be all mine.  I stand at the back of my army.  All of my men are at my sides and in front of me. Every soldier able to fight has come prepared to lay down his life for me and they will protect me to their death.  My wife is at my side. I did not protest when she requested to accompany me. I was glad.  She is my most trusted advisor and my deadliest assassin. She clutches my hand and my racing heart relaxes.  I am the king of this army and our great nation. Although the circumstances that brought us together as a nation are unknown to us now, we stand united by our cause: to defeat our adversary. We march onward toward the spot for battle.  Over the hills, I spy a glance of the enemy, and my heart begins to pound again. As we approach the shadow of the adversary, the presence of our enemy looms over us like a torrential storm cloud waiting to burst.  The enemy has the same formation as my own forces, as if mimicking us.  The only seeming difference is their skin, not a colored man among them.  The entirety of their army is white, as if the soldiers were made from snow. Their goal is the same as ours, to eliminate us and topple me.  The long march to the battlefield has not prepared the men, nor myself, for this moment.  I make eye contact with the lord of the other kingdom. He stares at me with eyes cold enough to freeze hell over.  The enemy beings to chant cries of war.  My men have no such attitude about them. Although the lump in my throat and the shaking of my legs protest, I must speak to my men.  I stride to the front of the line and begin my speech. “Men!” I shout. Even the other side quiets down. The entirety of the world centers on me as I speak. I clear my throat and proceed. “The enemy will not overtake us today, nor any other day.  They will come for your wives, your lives, your children!  They will stop at nothing to outwit and outman you.  We will not let that happen.  We will fight not as individuals today, but as a nation; a nation of brothers, sisters, fathers, and mothers.  A nation that will not concede. A nation that will rise up when called upon to defeat any threat to our lives and our peace.  And we…will…win!” The men erupt in shouts of approval and instantly their moral is boosted.  I step behind my men into my proper place and adjust the crown on top of my head.  The enemy gives no warning nor reaction to my speech.  Instead, a foot soldier responds, marching straight toward my army. His white skin crawls as he strides confidently towards us. My hand shakes as I beckon my soldier to meet him.  The two size each other up, but do not engage in combat. Another foot soldier joins his white comrade.  This time instead of biding his time, my soldier strikes down the enemy, quick and painless.  The enemy attempts a flank and my forces counter by positioning knights in the center of the battlefield.  The fight is just beginning.  The battle is long and painful.  The men have not yelled, nor screamed, nor chanted since it began.  The battle is fought in almost complete silence.  Only the occasional death of a soldier results in a brief clash of armor, and then it is over almost as soon as it began.  Eventually, the enemy appears to be beating us.  Nearly all my men have been killed, and even our religious leaders have been slain.  Our causalities are many, but we have put up resistance.  The enemy has lost a considerable amount of foot soldiers and half of their legion of knights has been defeated. We enter deeper into the battle and my nerves get worse.  My wife has not yet left my side but now she departs, running straight across the battlefield to save a foot soldier.  The battle draws on until it feels like it may never end.  An enemy’s group of foot soldiers strike down my castle, the only protection my army had left. My Queen turns and faces me. My wife looks me inthe eyes; she knows what she needs to do.  She crosses the battlefield in a slow, rhythmic motion.  Her final dance as Queen of my kingdom.  The enemy sees the opportunity and strikes without a second thought. The enemy’s castle fires a shot from a ballista directly in front of where my Queen is standing. She goes down, her head on the other end of a stake.  I do not sink to my knees, nor do I mourn for her, for because of her, victory is now inevitable. My heart flutters, as this will finally be the end of the conflict.  I will be a renown king.  The spoils will be all mine.  With the battle closing, I think about the sacrifices that have been made in my honor. Men, Horses, and most importantly my wife have laid down their lives for me.  They will never be forgotten. It is time to end this.  My knights, clad in armor as black as night,  trot into position, trapping the enemy King where he cannot escape, assuring his death. I adjust my glasses after letting go of the piece, and look up from the board.  “Checkmate,” I murmur to my opponent."
};

function split(corpus) {
    for (var title in corpus){
        corpus[title] = corpus[title].split(" ");
    }
    console.log(corpus);
};


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
    return year+month+date+hour+minute+sec+msec;
}

$(document).ready(function(){
    /*captureCamera(function(camera) {
        setSrcObject(camera, vidresult);
        //vidresult.play();
        vidrecorder = RecordRTC(camera, {
            type: 'video',
            width: 1280,
            height: 720
        });
        vidrecorder.startRecording();
        vidrecorder.camera = camera;
    });
    userData.startTime = timestamp();*/

    $.getJSON('testp.json', function(data){

        console.log("testp.json Read");
        //passage = data["passage"];
        
        //load?
        
    });
    split(corpus);
    userData["wiki"] = [];
    flashText();
    $('input[type=radio][name=speed]').change(function(){
        speedLevel = this.value;
        if (speedLevel == "low") {
            console.log("Speed changed to low");
            speed = 0.8;
        }else if (speedLevel == "med") {
            console.log("Speed changed to median");
            speed = 0.5;
        }else if (speedLevel == "high") {
            console.log("Speed changed to high");
            speed = 0.3;
        }else{
            console.log("No change applied: "+speedLevel);
        }
    });
    $("#btn-go").click(function(){
        var inputname = document.getElementById("name");
        if(inputname.reportValidity()){
            $('input[type=radio][name=speed]').attr("disabled", "disabled");
            titles = Object.keys(corpus);
            title = titles[Math.floor(Math.random() * titles.length)];
            temp = corpus[title];
            temp.unshift("You are reading "+title);
            passage = temp;
            //pasage = ["This", "is", "a", "test", "passage"];
            //check
            userData["name"] = $("#name").val();
            console.log("Name: "+userData["name"]);
            userData[title] = [];
            $("#btn-go").attr("disabled","disabled");
        }
        
    })
});





function nextpage() {
    if (page_num == 1) {
        p1();
    }else if (page_num == 2) {
        p2();
    }else if (page_num == 3) {
        p3();
    }else if (page_num == 4) {
        p4();
    }else{}
}

//collect basic info
function p1() {
    
};

//hide emojis and play video
function p2() {
    
}

function p3() {
    
}

function p4() {
    
}


function flashText(){
    //speed = letter/sec (global variable)
    word = passage.shift();
    $("#p-text").html(word);
    userData[title].push(timestamp());
    nletter = word.length;
    if(passage.length > 0){
        setTimeout(function(){
            flashText();
            console.log("nletter "+ nletter);
            console.log(speed);
        },nletter*speed*100);
    }else{
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

    var file = new File([blob], fileName, {
        type: 'video/webm'
    });
    xhr('/uploadFile', file, function(responseText) { //??
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
