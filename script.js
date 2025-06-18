let currentFontSize = 16;

// Funções de Acessibilidade (Aumentar, Diminuir Fonte e Alto Contraste)
const increaseFont = () => {
  currentFontSize += 2;
  document.documentElement.style.fontSize = `${currentFontSize}px`;
};

const decreaseFont = () => {
  currentFontSize = Math.max(12, currentFontSize - 2);
  document.documentElement.style.fontSize = `${currentFontSize}px`;
};

const toggleContrast = () => {
  document.body.classList.toggle('high-contrast');
};

// Menu Hamburguer (Responsivo)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Menu de Acessibilidade
const accessibilityBtn = document.getElementById('accessibility-btn');
const accessibilityMenu = document.getElementById('accessibility-menu');

accessibilityBtn.addEventListener('click', () => {
  accessibilityMenu.classList.toggle('hidden');
});

// Efeito de Revelação ao Rolar
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Carrossel de Imagens
const images = [
  './img/abelha.jpeg',      // Exemplo de imagem inicial
  './img/puro.jpeg',    // Segunda imagem
  './img/mel.jpg'         // Terceira imagem
];

let currentIndex = 0;

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  const img = document.getElementById('carousel-image');
  img.src = images[currentIndex];
}
