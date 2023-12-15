
function convert(){
    const textIn = document.getElementById("text").value;
// Create a new instance of the SpeechSynthesisUtterance object
const message = new SpeechSynthesisUtterance();

// Set the text that you want to convert to speech
message.text = textIn;
// Set the voice that you want to use (optional)
message.voice = speechSynthesis.getVoices()[1]; // use the first available voice

// Set the volume, rate, and pitch of the speech (optional)
message.volume = 1; // 0 to 1
message.rate = 1; // 0.1 to 10
message.pitch = 0; // 0 to 2

// Speak the text
speechSynthesis.speak(message);
}

