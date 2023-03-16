//variables
const whatsapp = document.querySelector('.whatsapp');
const header = document.getElementById('header');
const mainsec = document.getElementById('mainsec');
const mobileNav = document.getElementById('mobilenav');


//scroll function
let previousScroll = window.scrollY;

window.addEventListener('scroll', () => {
  
const currentScroll = window.scrollY;

if(currentScroll > previousScroll){
  header.style.top = '-80px';
  mobileNav.style.bottom = 0;
  mainsec.style.padding = 0;
} else if (currentScroll < previousScroll) {header.style.top = 0;
 mobileNav.style.bottom = '-80px';
}

previousScroll = currentScroll;
})

// change whatsapp color to white on pc
window.onscroll = () => {
  (scrollY > 20) ? whatsapp.style.color = '#fff' : whatsapp.style.color = ''
}

//message popup
window.onload = () => {
  document.querySelector('.message').style.right = '0px';

  setTimeout(() => {
    document.querySelector('.message').style.right = '-100%';
  }, 3000)
}

