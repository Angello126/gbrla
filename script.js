const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const imageToShow = document.getElementById("imageToShow");

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  // Ocultar mensaje inicial
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.style.display = 'none'; // Ocultar el mensaje de "En este 14 de febrero..."

  // Mostrar la pregunta
  const questionMessage = "¿Quieres ser mi San Valentín? 💌";
  setTimeout(() => {
    mainMessageElement.textContent = questionMessage;
    mainMessageElement.style.display = 'block'; // Mostrar la nueva pregunta
  }, 500);

  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);

  // Mostrar los botones de respuesta
  document.querySelector(".response-options").style.display = "flex";
  // Ocultar los botones de abrir y cerrar
  document.querySelector(".options").classList.add("hide");
});

btnCloseElement.addEventListener('click', () => {
  document.querySelector(".response-options").style.display = "none";
  document.querySelector(".options").classList.remove("hide");
  document.getElementById("mainMessage").textContent = "Adriana En este 14 de febrero, quiero preguntarte algo importante...";
  document.getElementById("mainMessage").style.display = 'block'; // Mostrar el mensaje original
});

document.getElementById("yes").addEventListener("click", function() {
  document.querySelector(".response-options").style.display = "none";
  document.querySelector(".animation-message").style.display = "block";
  showFloatingHearts(); // Lanza corazones si responde "Sí"
});

document.getElementById("no").addEventListener("click", function() {
  document.querySelector(".response-options").style.display = "none";
  document.getElementById("mainMessage").textContent = "Como que No?? >:,c  >:,,V";
  
  // Mostrar la imagen solo cuando se presiona "No"
  imageToShow.style.display = 'block'; // Mostrar la imagen
});

// Función para generar corazones flotantes
function showFloatingHearts() {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("span");
    heart.classList.add("heart-icon");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let randomX = Math.random() * window.innerWidth;
    let randomDuration = Math.random() * 3 + 2;

    heart.style.left = `${randomX}px`;
    heart.style.animation = `float-hearts ${randomDuration}s ease-in-out forwards`;

    setTimeout(() => {
      heart.remove();
    }, randomDuration * 1000);
  }
}
