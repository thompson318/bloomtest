const water = document.getElementById('watersound');
const narration = document.getElementById('narration');
const startButton = document.getElementById('startbutton');
water.volume = 0.90;
narration.volume = 0.30;

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function startplay(){
  console.log('Pressed the button');
  water.play()
    .then(() => {
      clearInterval(playAttempt);
      startButton.style.visibility = 'hidden';
      const delay_ms = (Math.round(Math.random() * 10)/2 + 5) * 1000
      console.log('going to wait for ', delay_ms, 'ms') 
      delay(delay_ms).then(() => narration.play());
    })
    .catch(error => {
      console.log('Unable to play the sound, User has not interacted yet.');
    });
}


let playAttempt = setInterval(() => {
  water.play()
    .then(() => {
      clearInterval(playAttempt);
      startButton.style.visibility = 'hidden';
      const delay_ms = (Math.round(Math.random() * 10)/2 + 5) * 1000
      console.log('going to wait for ', delay_ms, 'ms') 
      delay(delay_ms).then(() => narration.play());
    })
    .catch(error => {
      console.log('Unable to play the sound, User has not interacted yet.');
    });
}, 2000);


let x = 0
const soundFiles = 43
$("#narration").bind("ended", function(){
  x = x + 1
  const file = "sounds/" + String(x%soundFiles).padStart(2, '0') + "_panned.mp3"
  console.log("Looking for ", file)
  narration.src = file
  narration.pause()
  //should also wait for a random number of seconds
  narration.load()
  const delay_ms = (Math.round(Math.random() * 6)/2 + 1) * 1000
  console.log('going to wait for ', delay_ms, 'ms') 
  delay(delay_ms).then(() => narration.play());
});


