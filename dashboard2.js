function redirectToPage(url) {
  window.location.href = url;
}

const progressCountElements = document.querySelectorAll('.progress-count');
const customStyle = document.getElementById('custom-style');

function updatePseudoElementSize() {
    const stepWizardList = document.querySelector('.card-03');
    const containerWidth = stepWizardList.offsetWidth;
    const windowWidth = window.innerWidth;
    const z=containerWidth/windowWidth;
    console.log(containerWidth);

    //const newHeight=containerWidth*0.07;
    //const newWidth=containerWidth*0.07;

    //const x=containerWidth*0.015;
    //const y=containerWidth*0.03;

    const newHeight=Math.sqrt(500*containerWidth)*0.07;
    const newWidth=Math.sqrt(500*containerWidth)*0.07;

    const x=Math.sqrt(500*containerWidth)*0.015;
    const y=Math.sqrt(500*containerWidth)*0.03;

    console.log(`newHeight: ${newHeight}, newWidth: ${newWidth}`);


  const styleText = `
    .progress-count {
        font-size: ${y*1.5}px;
    }
    .progress-count:after {
      height: ${newHeight}px;
      width: ${newWidth}px;
    }
    .progress-count:before {
        height: ${x}px;
        width: ${y}px;
      }
    .card-06{
        height: ${Math.sqrt(500*containerWidth)/12}px;
        max-width: ${Math.sqrt(500*containerWidth)/10}px;
        font-size: ${Math.sqrt(500*containerWidth)*0.06}px;
    }
    .text-title{
        font-size: ${Math.sqrt(500*containerWidth)*0.04}px;
      }
      .text-content{
        font-size: ${Math.sqrt(500*containerWidth)*0.03}px;
      }
  `;
  
  customStyle.textContent = styleText;
}

// Ejemplo: aumentar el tamaño del pseudo-elemento al doble
updatePseudoElementSize(); // Cambiar 12 al valor que desees

// Agrega un evento para actualizar los tamaños si la ventana cambia de tamaño
window.addEventListener('resize', updatePseudoElementSize);






const backButton = document.getElementById("backButton");
    const nextButton = document.getElementById("nextButton");
    const steps = document.querySelectorAll(".step-wizard-item");
    const blocks = document.querySelectorAll(".dinamic");

    let currentStepIndex = 0;

    let currentBlock = 0; // Contador para el bloque actual

    // Oculta todos los bloques excepto el primero
    for (let i = 1; i < blocks.length; i++) {
        blocks[i].style.display = "none";
    }

    // Función para mostrar el bloque correspondiente
    function showBlock(index) {
        blocks[currentBlock].style.display = "none"; // Oculta el bloque actual
        blocks[index].style.display = "block"; // Muestra el bloque correspondiente
        currentBlock = index; // Actualiza el bloque actual
    }

    backButton.addEventListener("click", () => {
      if (currentStepIndex > 0) {
        steps[currentStepIndex].classList.remove("current-item");
        currentStepIndex--;
        steps[currentStepIndex].classList.add("current-item");
      }
      if (currentBlock > 0) {
        showBlock(currentBlock - 1);
    }
    });

    nextButton.addEventListener("click", () => {
      if (currentStepIndex < steps.length - 1) {
        steps[currentStepIndex].classList.remove("current-item");
        currentStepIndex++;
        steps[currentStepIndex].classList.add("current-item");
      }
      if (currentBlock < blocks.length - 1) {
        showBlock(currentBlock + 1);
    }
    });


// Agrega un evento para cambiar la visibilidad del container cuando el checkbox cambie
document.getElementById('check').addEventListener('change', function() {
    var bodyWidth = window.innerWidth;
    var card01 = document.querySelector('.card-01');
    var container = document.querySelector('.card-02');
    if (container && bodyWidth<1100) {
        container.style.display = this.checked ? 'none' : 'flex';
        card01.style.height = this.checked ? '100vh' : '60px';
    }
});


function checkWindowSize() {
    var bodyWidth = window.innerWidth;
    var checkbox = document.getElementById('check'); 
    var card01 = document.querySelector('.card-01');
    var container = document.querySelector('.card-02');
    if (bodyWidth >= 1100) {
        container.style.display = 'flex';
        card01.style.height = '100vh';
    }else{
        container.style.display = 'flex';
        card01.style.height = '60px'; 
        if (checkbox.checked)
        {
            card01.style.height = '100vh'; 
        }
    }
  }

  
  // Ejecuta la función cuando se carga la página
  checkWindowSize();
  
  // Agrega un evento de cambio de tamaño de ventana
  window.addEventListener("resize", checkWindowSize);