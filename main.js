
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        img_id="selfie1";
        speak_data = "Taking you Selfie in 5 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
        take_snapshot(); 
    }, 5000);
    setTimeout(function()
    { 
        img_id="selfie2";
        speak_data = "Taking you Selfie in 10 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
        take_snapshot(); 
    }, 10000);
    setTimeout(function()
    { 
        img_id="selfie3";
        take_snapshot(); 
    }, 15000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}