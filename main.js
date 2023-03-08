// Getting all keys
const keys = document.querySelectorAll(".key")

// Playing notes
function playNote(event) {
    
    let audioKeyCode = getKeyCode(event);

    // Pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    
    // if key pressed exists
    const isKeyExists = key
    if(!isKeyExists) {
        return;
    }
    
    playAudio(audioKeyCode);
    
}

function getKeyCode(event) {
    let keyCode;
    const isKeyboard = event.type === "keydown"
    
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

// Clicking with mouse
keys.forEach(function(key){
    key.addEventListener("click", playNote)
})

// Keyboard type
//                         event,  funct that will be executed when event happen
window.addEventListener("keydown", playNote)