/* ----------------------SCRIPT PARA ATIVAR MENU HAMBURGUER---------------------- */
const toggleMenu = document.querySelector('.nav-menuHamburguer')
const navMenu = document.querySelector('.nav-menu')

toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  toggleMenu.classList.remove('active')
  navMenu.classList.remove('active')
}))



/* ----------------------SCRIPT PARA ATIVAR NAVBAR FIXA---------------------- */
window.addEventListener('scroll', function () {
  let header = document.querySelector('#header');
  header.classList.toggle('navBar-fixed', window.scrollY > 500)
})



/* ----------------------SCRIPT PARA ATIVAR BOTÃO SETA---------------------- */
const bntSeta = document.querySelector('#icon-seta')

bntSeta.addEventListener('click', ()=> {
  window.scroll({ top:window.innerHeight, behavior: "smooth"})
} )



/* ----------------------SCRIPT PARA ATIVAR SCROLL SUAVE---------------------- */
const menuItems = document.querySelectorAll('.nav-menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 800;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};



/* ----------------------SCRIPT SCROLL REVEAL ANIMATION---------------------- */
const srTop = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  reset: false     
})

srTop.reveal('.box-foto',{delay: 100})
srTop.reveal('.explorar',{delay: 100})
srTop.reveal('.btn-linkedIn',{delay: 100})
srTop.reveal('.title-section',{delay: 100})
srTop.reveal('.title-contato',{delay: 300})
srTop.reveal('.title-contato-info',{delay: 300})
srTop.reveal('.projeto-2',{delay: 100})
srTop.reveal('.projeto-3',{delay: 100})

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 2000,
  reset: false
})
  
srLeft.reveal('.box-logo img',{delay: 100})
srLeft.reveal('.btn-gitHub',{delay: 100})
srLeft.reveal('.box-introducao',{delay: 100})
srLeft.reveal('.formulario',{delay: 100})
srLeft.reveal('.projeto-1',{delay: 100})

const srRight = ScrollReveal({
  origin: 'right',
  distance: '60px',
  duration: 2000,
  reset: false
})
    
srRight.reveal('.box-texto-home h1',{delay: 100})
srRight.reveal('.box-texto-home h2',{delay: 200})
srRight.reveal('.btn-whatsApp',{delay: 100})
srRight.reveal('.box-linguagens',{delay: 200})
srRight.reveal('.box-conhecimentos',{delay: 300})
srRight.reveal('.box-contato',{delay: 100})
srRight.reveal('.projeto-4',{delay: 100})



/* ----------------------CHANGE ACTIVE LINK---------------------- */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 500,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)



/* ----------------------SCRIPT TYPING EFFECT---------------------- */
let typingEffect = new Typed(".typedText",{
  strings : ["Front-End", "Back-End", "Web"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 1000
})