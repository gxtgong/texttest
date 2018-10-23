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


var passage = [];
var speed = 0.8;
var title ="textsample";


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
    /*
    split(corpus);
    sample = {};
    sample["wiki"] = passage;
    $.post('sample.json', JSON.stringify(sample, null, 4), function(){
        console.log("Post sample.json successfully");
    });
    
    
    */
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
