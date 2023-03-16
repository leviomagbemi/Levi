const firebaseConfig = {
  apiKey: "AIzaSyDlim6KxlSY5018VysTyDA3cIE9YtmyXm8",
  authDomain: "my-portfolio-50195.firebaseapp.com",
  databaseURL: "https://my-portfolio-50195-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-50195",
  storageBucket: "my-portfolio-50195.appspot.com",
  messagingSenderId: "556987743126",
  appId: "1:556987743126:web:9824f7a12764f2a5b13bb7",
  measurementId: "G-YMSTR31CZ6"
};

//initialized database
firebase.initializeApp(firebaseConfig);

//reference database
let messageRef = firebase.database().ref('Portfolio form');

const form = document.getElementById('contactform');
const submitBtn = document.querySelector('.submit');
const header = document.getElementById('header');
const mobileNav = document.getElementById('mobilenav');

//addeventlistener

form.addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // get values
  let fullName = getInputValue('fullname'),
      email = getInputValue('email'),
      subject = getInputValue('subject'),
      project = getInputValue('project');

saveMessage(fullName, email, subject, project);



submitBtn.innerHTML = `Message Sent <i class="fas fa-check"></i>`;


setTimeout(() => {
  submitBtn.innerHTML = `Send message <i class="fas fa-paper-plane"></i>`;
}, 2000);

form.reset();
}

//get form values
function getInputValue(id){
return document.getElementById(id).value;
}

//save messages
function saveMessage(fullName, email, subject, project){
  let newMessageRef = messageRef.push();

  newMessageRef.set({
    fullname: fullName,
    email: email,
    subject: subject,
    project: project
  })
}

//scroll function
let previousScroll = window.scrollY;

window.addEventListener('scroll', () => {
  
const currentScroll = window.scrollY;

if(currentScroll > previousScroll){
  header.style.top = '-80px';
  mobileNav.style.bottom = 0
} else if (currentScroll < previousScroll) {header.style.top = 0;
 mobileNav.style.bottom = '-80px'}

previousScroll = currentScroll;
})

