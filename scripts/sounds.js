const water = document.getElementById('watersound');
const startButton = document.getElementById('startbutton');
water.volume = 0.90;

function startplay(){
  console.log('Pressed the button');
  water.play()
    .then(() => {
      clearInterval(playAttempt);
      startButton.style.visibility = 'hidden';
    })
    .catch(error => {
      console.log('Unable to play the sound, User has not interacted yet.');
    });
}


let playAttempt = setInterval(() => {
  water.play()
    .then(() => {
      clearInterval(playAttempt);
      startButton.display = False
    })
    .catch(error => {
      console.log('Unable to play the sound, User has not interacted yet.');
    });
}, 2000);


//let x = 0
//const soundFiles = 2
//$("#narration").bind("ended", function(){
//  x = x + 1
//  const file = "sounds/" + String(x%soundFiles).padStart(2, '0') + ".mp3"
//  console.log("Looking for ", file)
//  narrator.src = file
//  //should also wait for a random number of seconds
//  narrator.load()
//  narrator.play()
//});


