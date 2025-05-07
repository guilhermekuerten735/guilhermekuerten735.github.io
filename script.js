document.addEventListener('DOMContentLoaded', function () {
  // Menu Mobile
  const navbar = document.querySelector('.navbar-container');
  const navList = document.querySelector('.nav-list');
  const menuToggle = document.querySelector('.menu-toggle');

  menuToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
    menuToggle.textContent = navList.classList.contains('active') ? '✕' : '☰';
  });

  // Fechar o menu ao clicar em um link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      menuToggle.textContent = '☰';
    });
  });

  // Botão "Voltar ao Topo"
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Mostrar/ocultar botão "Voltar ao Topo"
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }

    // Header dinâmico no scroll
    const header = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(11, 27, 59, 0.95)';
    } else {
      header.style.backgroundColor = '#0b1b3b';
    }
  });

  // Lightbox para a galeria
  document.querySelectorAll('.galeria-solucoes img').forEach(img => {
    img.addEventListener('click', function () {
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      lightbox.innerHTML = `
        <span class="close">&times;</span>
        <img src="${this.src}" alt="${this.alt}">
      `;
      document.body.appendChild(lightbox);

      lightbox.querySelector('.close').addEventListener('click', () => {
        lightbox.remove();
      });
    });
  });

  // Contador animado
  const anosExperiencia = document.querySelector('.qualidades li span');
  if (anosExperiencia) {
    const target = parseInt(anosExperiencia.textContent);
    let count = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(timer);
      }
      anosExperiencia.textContent = Math.floor(count) + '+ anos';
    }, 16);
  }

  // Animação com ScrollReveal
  ScrollReveal().reveal('.quem-somos-container', {
    delay: 200,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.servicos h2, .servicos p', {
    delay: 200,
    distance: '30px',
    origin: 'top',
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.card-servico', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.texto-solucoes, .galeria-solucoes', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.contato-whatsapp h2, .contato-whatsapp p', {
    delay: 200,
    distance: '30px',
    origin: 'top',
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.whatsapp-card', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    easing: 'ease-in-out'
  });
});