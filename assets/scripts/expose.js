// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Dropdown menu variables
  const horn = document.getElementById("horn-select");
  const mainImage = document.querySelector('img[alt="No image selected"]');
  // const hornSound = document.getElementsByClassName("hidden");
  const hornSound = document.querySelector("audio");

  // Volume slider variables
  const actVolume = document.createElement("audio");
  const input = document.getElementById("volume");
  const volImage = document.querySelector('img[alt="Volume level 2"]');

  // Button variables
  const playBtn = document.querySelector("button");

  // Confetti!
  const jsConfetti = new JSConfetti();

  horn.addEventListener("change", function() {
    mainImage.src = "./assets/images/" + horn.value + ".svg";
    hornSound.src = "./assets/audio/" + horn.value + ".mp3";
    actVolume.src = hornSound.src;
  });

  input.addEventListener("input", function(e) {
    const currVolume = e.target.value;
    if(currVolume == 0){
      actVolume.volume = 0;
      volImage.src = "./assets/icons/volume-level-0.svg";
    } else if((currVolume > 0) && (currVolume < 34)){
      actVolume.volume = currVolume / 100;
      volImage.src = "./assets/icons/volume-level-1.svg";
    } else if((currVolume > 32) && (currVolume < 68)){
      actVolume.volume = currVolume / 100;
      volImage.src = "./assets/icons/volume-level-2.svg";
    } else {
      actVolume.volume = currVolume / 100;
      volImage.src = "./assets/icons/volume-level-3.svg";
    }
  });

  playBtn.addEventListener("click", function(){
    actVolume.play();

    if(horn.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });

}

