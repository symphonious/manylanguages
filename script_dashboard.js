





//reiniciar cache al clicar boton de retroceso
window.addEventListener('pageshow', function(event) {
    var toggleMenu = document.getElementById('check');
    var checkBtn = document.querySelector('.checkbtn');
  
    toggleMenu.checked = false;
    checkBtn.classList.remove('active');
  });
//reemplazar el boton play por el boton pausa
  playButton.addEventListener('click', function() {
      if (playButton.classList.contains('play')) {
        playButton.classList.remove('play');
        playButton.classList.add('pause');
    
        audioElement.volume = volume_slider.value / 100;
        isPlaying_volume = true;
        wave.classList.add('loader');
        if (audioElement.paused) {
            boton_play_activado=1;
            console.log("boton activado");
        }
      } else {
        playButton.classList.remove('pause');
        playButton.classList.add('play');
    
        audioElement.volume = 0;
        isPlaying_volume = false;
        wave.classList.remove('loader');
      }
  });





let playpause_btn = document.querySelector('.playpause-track');
let volume_slider = document.querySelector('.volume_slider');
let wave = document.getElementById('wave');
let audioElement = new Audio();

let boton_play_activado=0;
let speed = 1.25;
let isPlaying_volume=false;

let blob_global="";


function setVolume(){
    audioElement.volume = volume_slider.value / 100;
    console.log(audioElement.volume);
}




var audioQueue = [];
var isPlaying = false; // Variable para controlar si se está reproduciendo un audio
var start_listening = 0;


// Crear una instancia de WebSocket y establecer la URL del servidor WebSocket
const socket = new WebSocket("wss://openlanguage.glitch.me/5666431911351");

// Evento que se ejecuta cuando la conexión se establece correctamente
socket.onopen = () => {
  console.log('Conexión establecida');

  // Enviar un mensaje al servidor
  socket.send('12345');//aqui va el user_id de gumroad o el codigo random generado en openlanguage.glitch.me
};

// Evento que se ejecuta cuando se recibe un mensaje del servidor
socket.onmessage = (event) => {
  var blob = event.data;
  console.log(typeof blob);
  

  
    console.log(blob);
    //blob_global=blob_global+blob;
    //document.getElementById('translated_text').innerHTML = blob_global;
    const elementoPadreQuestion = document.getElementById('translated_text'); 
    const contenidoPersonalizadoQuestion = blob;
    elementoPadreQuestion.insertAdjacentHTML('beforeend', `
        <p >${contenidoPersonalizadoQuestion}</p>  
        <br>
    `);
    elementoPadreQuestion.scrollTop = elementoPadreQuestion.scrollHeight;

    /*
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(blob);
      utterance.lang = "en-US";
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
    } else {
      console.error('La Web Speech API no es compatible con este navegador.');
    }*/

  

  // Enviar una respuesta al servidor
  //socket.send('Gracias por el mensaje!');
};

