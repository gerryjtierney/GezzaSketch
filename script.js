function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //this returns the relevant audio depending on they key pressed
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //this returns the relevant key depending on the key pressed

	if(!audio)return; // this stops the function from running if there is no relevant keystroke
	audio.currentTime = 0; //this resets the method back to the start so we can hit it multiple times in a row without having to wait
	audio.play();
	console.log(key);
	key.classList.add("playing");
};

//this removes the "playing" class from a method once it has the property of "transform" within
//the effect is to return the onscreen key back to normal after a short time
function removeTransition(e) {
	if (e.propertyName != "transform") return;
	this.classList.remove("playing");
	
	};

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition));


	
window.addEventListener("keydown", playSound);