function asignarDigitos(inputString) {
    if (inputString.length === 5) {
        for (let i = 0; i < 5; i++) {
            const digito = inputString.charAt(i);
            const elemento = document.getElementById(`digit${i + 1}`);
            if (elemento) {
                elemento.querySelector('span').textContent = digito;
            }
        }
    } else {
        console.log("El string debe tener exactamente 5 dígitos.");
    }
}

function connectWebSocket() {
    const websocketClient = new WebSocket("wss://silver-incredible-mercury.glitch.me");
  
    websocketClient.onopen = function(event) {
      console.log("Cliente conectado");
  
      // Enviar un "hola" al servidor inmediatamente
      websocketClient.send("get_temporal_key"+"0123456789");
  
      // Enviar "hola" cada 5 minutos

  
      websocketClient.addEventListener('message', (event) => {
        var temporal_key = event.data;
        asignarDigitos(temporal_key);
        console.log(temporal_key);
      });
    };
  
    
  }
  
  connectWebSocket();
  