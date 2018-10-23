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
    "Between the Lines": " “What?” I’m kicking myself as he looks straight into my eyes. My ears stopped working as soon as I saw his face. His eyes are the same hue of the hot cocoa you hold tight between yourhands while you sit by the fire, and they’re splintered with the very green that decorates all the most exquisite trees on this earth. His skin is clearer than the sky or my head have ever been. My brain is flooded in the split second I meet his gaze before I have to look away to avoid combustion.",
    "Another Day at War": "The fear and anxiety begin shortly before the battle.  I tremble, and a nervous sweat trickles down my brow. Self-doubt plagues my thoughts. My heart races. I ponder upon the consequences should I lose, and the spoils should I win.  If I should fail, all my men would fall; I would be humiliated, and worst of all, my rightful place as king would be stolen from me.  If I win, the glory will be all mine.  I stand at the back of my army.  All of my men are at my sides and in front of me."
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
                    temp.unshift("You are reading "+title);
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
