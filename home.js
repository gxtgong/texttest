// Global variables
var vidrecorder;
var page_num = 1;
var userData = {};
var wikiText = "The MIT Media Lab is an antidisciplinary research laboratory at the Massachusetts Institute of Technology, growing out of MIT's Architecture Machine Group in the School of Architecture. Its research does not restrict to fixed academic disciplines, but draws from technology, media, science, art and design. As of 2014, Media Lab's research groups include neurobiology, biologically inspired fabrication, socially engaging robots, emotive computing, bionics, and hyperinstruments. The Media Lab was founded in 1985 by Nicholas Negroponte and former MIT President Jerome Wiesner, and is housed in the Wiesner Building (designed by I.M.Pei), also known as Building E15. The Lab has been written about in the popular press since 1988, when Stewart Brand published The Media Lab: Inventing the Future at MIT, and its work was a regular feature of technology journals in the 1990s. In 2009, it expanded into a second building. The founding director of the lab was Nicholas Negroponte, who directed it until 2000. Later directors were Walter Bender (2000–2006), Frank Moss (2006–2011), and Joi Ito (2011-present). As of 2014, the Media Lab had roughly 70 administrative and support staff members. Associate Directors of the Lab were Hiroshi Ishii and Andrew Lippman. Pattie Maes and Mitchel Resnick were co-heads of the Program in Media Arts and Sciences, and the Lab's Chief Knowledge Officer was Henry Holtzman. The Media Lab has at times had regional branches in other parts of the world, such as Media Lab Europe and Media Lab Asia, each with their own staff and governing bodies. The Lab's primary funding comes from corporate sponsorship. Rather than accepting funding on a per-project or per-group basis, the Lab asks sponsors to fund general themes; sponsors can then connect with Media Lab research. Specific projects and researchers are also funded more traditionally through government institutions including the NIH, NSF, and DARPA. Also, consortia with other schools or other departments at MIT are often able to have money that does not enter into the common pool. Companies sponsoring the Lab can share in the Lab’s intellectual property without paying license fees or royalties. Non-sponsors cannot make use of Media Lab developments for two years after technical disclosure is made to MIT and Media Lab sponsors. The Media Lab generates approximately 20 new patents every year. Some recurring themes of work at the Media Lab include human adaptability, human computer interaction, education and communication, artistic creation and visualization, and designing technology for the developing world. Other research focus includes machines with common sense, sociable robots, prosthetics, sensor networks, musical devices, city design, and public health. Research programs all include iterative development of prototypes which are tested and displayed for visitors. Each of these areas of research may incorporate others. Interaction design research includes designing intelligent objects and environments. Educational research has also included integrating more computation into learning activities - including software for learning, programmable toys, and artistic or musical instruments. Examples include Lego Mindstorms, the PicoCricket, and One Laptop per Child. The Media Arts and Sciences program is a part of MIT's School of Architecture and Planning, and includes three levels of study: a doctoral program, a master's of science program, and a program that offers an alternative to the standard MIT freshman year as well as a set of undergraduate subjects that may form the basis for a future joint major. All graduate students are fully supported (tuition plus a stipend) from the outset, normally by appointments as research assistants at the Media Laboratory, where they work on research programs and faculty projects, including assisting with courses. These research activities typically take up about half of a student’s time in the degree program. In addition to the Media Lab, the combined original Wiesner building (E15) and new (E14) buildings also host the List Visual Arts Center, the School of Architecture and Planning's Program in Art, Culture and Technology (ACT), and MIT's Program in Comparative Media Studies.The Media Arts and Sciences academic program have a close relationship with the Media Lab. Most Media Lab faculty are professors of Media Arts and Sciences. Students who earn a degree in Media Arts and Sciences have been predominantly in residence at the Media Lab, taking classes and doing research. Some students from other programs at MIT, such as Mechanical Engineering, or Electrical Engineering and Computer Science, do their research at the Media Lab, working with a Media Lab/Media Arts and Sciences faculty advisor, but earn their degrees (such as MEng or an MS in EECS) from other departments. In 2009, the Media Lab expanded into a new building designed by Pritzker Prize-winning Japanese architect Fumihiko Maki. The local architect of record was Leers Weinzapfel Associates, of Boston. The Maki building has predominantly glass walls, with long lines of sight through the building, making ongoing research visible and encouraging connections and collaboration. Media Arts and Sciences faculty and academic research staff are principal investigators/heads of the Media Lab's various research groups. They also advise Media Arts and Sciences graduate students and mentor MIT undergraduates. \"Most departments accept grad students based on their prospects for academic success; the Media Lab attempts to select ones that will best be able to help with some of the ongoing projects.\" As of 2014, there are more than 25 faculty and academic research staff members, including a dozen named professorships. A full list of Media Lab faculty and academic research staff, with bios and other information, is available via the Media Lab website.";
var passage = [];
var speed = 1.2;
var title ="textsample";
passage = wikiText.split(" ");

var corpus = {
	// two stories: one with a buildup and another with linear emotions
	// how bucket of meaning of story gets filled
    "Death Buys A Coffee": "Death goes to buy a coffee, but inside the café, everyone is too preoccupied to notice. At the doorway, he leaves his scythe propped up against the wall and drapes his cobwebbed cloak over the coat hanger. He eyes the menu scrawled overhead with chalk, the frame of his jaw parted in perpetual uncertainty. The barista taps her foot from behind the counter and makes a face. “Sir, are you ready to order? We have customers waiting, you know,” she huffs. Death glances over his shoulder to meet the glare of a wrinkly-eyed woman. “Ah–my bad. Just give me a moment.” He pauses. “I’d like a regular, hot, organic caramel latte with mocha drizzle–oh, and make it gluten-free, please.” “Your name?” “Death,” says Death. He reaches into his pocket for spare change, though it’s mostly made up of wadded five-dollar bills and quarters. He makes sure to drop a dime into the tip jar as he nods sheepishly at the barista. She rolls her eyes. “That’ll be $4.39.” Another worker slides his mug down the countertop, and Death curls his bony fingers around it, taking a whiff. It’s sweet. Perhaps a bit too much for his taste. He wanders into the back of the room, searching for a vacant seat. Somewhere there is a vinyl record player oozing out a man’s low humming of a familiar song. Death sings along, finding an armchair near a window overlooking the street. From outside, figures dart down the sidewalk with faces tucked into mufflers. A red-nosed woman passes and catches him staring. Death smiles, but she turns away. As he is settling in, the door springs open and wind rushes in. He spills a bit of latte. Death winces, then glances up at a little girl with a wide, toothy grin. “Hi!” she says. “I saw you through the window. I like your costume!” She takes a seat next to Death, waving at her mother who’s ordering at the front. A woman with worn lines etched into her skin looks back, her expression vacant. Absent of contentment. If anything, she could appear no less unconcerned about her daughter making conversation with a peculiar, darkly-clothed entity. Instead, the air around her is reminiscent of fresh grief. The girl continues to beam at Death, half-expecting a response. He clears his throat. “Really,” Death muses. “Shouldn’t you be in school?” The little girl frowns. “I would be, but Mama’s going to see Kitty at the vet’s next door.” “Kitty?” “That’s our cat. She’s being put down today.” Death takes a slow sip. “Is that so?” “Yeah. Mama says that means everything is going to be okay again. You see, Kitty’s been sick for a while.” He sets his mug down, watching the steam spin into sinewy tendrils. Death tilts his head to the side and peers at his scythe, still balanced against the wall undisturbed. He ruffles the hair of the little girl and she giggles. A sad smile creeps onto his face. “…I see.”",
    "The Anatomy of a Meal": "They replaced her pinky fingers with tiny dill pickles. At breakfast it was pork sausage, cheap skinny links fashioned into prosthetics and slippery with grease. Three times a day she’d devour the pyramid-portioned meals her mother cooked and wash them down with heavy, thick milk. Racing outside after her plate passed inspection, she’d run the three blocks to my house and breathe loudly at the door, pushing invisibly against my neck and urging me to hurry. She’d lost the fingers before she was born. Doc Nevins said her fingers were never there and that the stork musta forgot them back at his nest. We’d spent our early years in trees together, checking all the birds’ nests, looking for any sign of baby fingers. She kept a little pouch tied to the belt loops on her jeans every day just in case she found them. Then one night at the dinner table her brother Sam said the French fries looked like fingers and Maggie said she was bored of tree-climbing and maybe we should ride bikes instead. From then on she ate only fingers made of carrots and cheese, French toast sticks and slivers of apple, elongated grapes, celery slathered in peanut butter, digit-sized chicken strips and anything else Mrs. Fenley could create in her kitchen. When Maggie heard that milk helped your bones to grow she demanded it at every meal and when her mother wasn’t looking, Maggie would soak her hands in it pushing everything down to the bottom of the glass and wishing for the smallest lump when she pulled them back out. Some days I taped my pinky fingers behind my ring fingers and pretended I was Maggie. I would stare at my hands and tilt them, removing the knuckles and joints Maggie was without. Sometimes I forgot to take the tape off and she would see it twisted around my fingers and frown. She wondered why I wanted what she didn’t, how I could give up her most prized possession so easily but I could never answer her. Instead I would run to my mother and ask for three dollars, wiping away my tears with the sleeves of my T-shirt while she rummaged in her purse. I would tuck the money safely into my front pocket and me and Maggie would ride silently to the grocery store on our bikes. She would wait outside on the curb while I went in and bought her favourite cookies and then we would sit together all afternoon and eat an entire box of ladyfingers."
	};

function split(corpus) {
    for (var title in corpus){
        corpus[title] = corpus[title].split(" ");
    } 
    console.log(corpus[title])
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
                speed = 1.2;
            }else if (speedLevel == "med") {
                console.log("Speed changed to median");
                speed = 0.75;
            }else if (speedLevel == "high") {
                console.log("Speed changed to high");
                speed = 0.55;
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
        },(Math.sqrt(nletter))^2*speed*100);
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
