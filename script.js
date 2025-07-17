// Navbar Section
const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav_links');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navlinks.classList.toggle('active');
    navbg.classList.toggle('active');
});

// Hero Section typedjs
var typed = new Typed('#element', {
    strings: ['Web Developer^1000', 'Open Source Enthusiast^1000', 'Hacktoberfest23 Contributor^1000' ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    smartBackspace: false,
});

// Skills section Marquee
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++){
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Projects Section Tab
const tabs = document.querySelectorAll('.tab');
const tabBtns = document.querySelectorAll('.tab-btn');
const tab_Nav = function(tabBtnClick){
  tabBtns.forEach((tabBtn) => {
    tabBtn.classList.remove("active");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  })

  tabBtns[tabBtnClick].classList.add("active");
  tabs[tabBtnClick].classList.add("active");
}
tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", () => {
    tab_Nav(i);
  })
})

// Contact Section Code
function sendMessage(){
  (function(){
    emailjs.init("QfErl3Tlp7v4waFgb");
  })();
  var serviceID = "service_v1r145p";
  var templateID = "template_e5za06n";

  var params = {
    senderfirstname: document.querySelector("#fname").value,
    senderlastname: document.querySelector("#lname").value,
    senderemail: document.querySelector("#email").value,
    subject: document.querySelector("#sub").value,
    message: document.querySelector("#msg").value
  };
  emailjs.send(serviceID, templateID, params)
  .then(res => {
    alert('Thank you, ' + params['senderfirstname'] + '! Your message has been sent 🥳');
  })
  .catch();
}

function clearFields(){
  document.getElementById("fname").value='';
  document.getElementById("lname").value='';
  document.getElementById("email").value='';
  document.getElementById("sub").value='';
  document.getElementById("msg").value='';
}

// GSAP Animation
var tl = gsap.timeline()

tl.from(".navbar .nav_links",{
  y: -100,
  duration: 2,
  delay: 0.5,
  opacity: 0,
  stagger: 0.3
})

tl.from("#Home h2, #Home h1, #Home h3, #Home a", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.5
})

gsap.from(".about_title h1, .about_img img, .about_content_article p, .about_btn a, .about_social_icons a",{
  scale: 0,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
  scrollTrigger:{
    trigger: ".about_title h1",
    scroller: "body"
  }
})

gsap.from(".skill_title h1, .marquee .marquee-content",{
  scale: 0,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
  scrollTrigger:{
    trigger: ".skill_title h1",
    scroller: "body"
  }
})

gsap.from(".project_title h1",{
  scale: 0,
  opacity: 0,
  duration: 2,
  scrollTrigger:{
    trigger: ".project_title h1",
    scroller: "body"
  }
})

gsap.from(".contact_title h1",{
  scale: 0,
  opacity: 0,
  duration: 2,
  scrollTrigger:{
    trigger: ".contact_title h1",
    scroller: "body"
  }
})
