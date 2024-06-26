// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const synth = window.speechSynthesis;
  const btnPress = document.querySelector("button");
  const txtSpace = document.getElementById("text-to-speak");
  const voiceOpts = document.getElementById("voice-select");
  const smileImage = document.querySelector('img[alt="Smiling face"]');
  let voices;
  
  populateVoiceList();
  if (typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Code below referenced from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices
  function populateVoiceList(){
    if (typeof speechSynthesis === "undefined") {
      return;
    }
    
    let availVoices = [];
    availVoices = synth.getVoices();

    console.log("These are the avail voices at start: ", availVoices);

    // This loop is used to get list of available voices
    for (let i = 0; i < availVoices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${availVoices[i].name} (${availVoices[i].lang})`;

      if (availVoices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", availVoices[i].lang);
      option.setAttribute("data-name", availVoices[i].name);
      voiceOpts.appendChild(option);
    };

    voices = availVoices;

  }

  // Uses speech synthesis and speak to play sound using the selected voice
  btnPress.addEventListener("click", function(e){
    e.preventDefault();

    const speakThis = new SpeechSynthesisUtterance(txtSpace.value); // Gets the text to speak aloud
    const selectedVoice = voiceOpts.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++){
      if (voices[i].name == selectedVoice){
        console.log("This is the avail voice: ", voices[i]);
        console.log("This is the avail voice name: ", voices[i].name);
        console.log("This is the speaking voice voice: ", selectedVoice);
        speakThis.voice = voices[i];
      };
    }

    // synth.cancel();
    synth.speak(speakThis);

    // Keeps track of when to change smiley face
    speakThis.addEventListener("start", function(){
      // console.log("speaking in progress: ", synth.speaking);
      smileImage.src = "./assets/images/smiling-open.png"
    })

    speakThis.addEventListener("end", function(){
      // console.log("speaking in progress: ", synth.speaking);
      smileImage.src = "./assets/images/smiling.png"
    })
    
  });

};

