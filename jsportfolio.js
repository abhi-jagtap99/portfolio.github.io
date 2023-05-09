let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);


  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 100
});

ScrollReveal().reveal('.home-content, .heading, .education_heading, .skill-title', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skill-container, .project-box, .contact form, .service-item', 
{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .even', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content, .odd', {origin: 'right'});





const text = document.querySelector('.second-text');

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Student";
  }, 0);
  // setTimeout(() => {
  //   text.textContent = "";
  // }, 4000);
  // setTimeout(() => {
  //   text.textContent = "";
  // }, 8000);
  
};

textLoad();

setInterval(textLoad, 12000);


const serviceItem = document.querySelector(".service-item");
const popup = document.querySelector(".popup-box");
const popupClose = popup.querySelector(".popup-close");
serviceItem.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
    const item = event.target.parentElement;
    const title = item.querySelector(".title").innerHTML;
    const readMore = item.querySelector(".read-more").innerHTML;
    popup.querySelector(".title").innerHTML = title;
    popup.querySelector(".popup-body").innerHTML = readMore;
    popupBox();
  }
})

popupClose.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
  if(event.target == popup){
    popupBox();
  }
})

function popupBox(){
  popup.classList.toggle("open");
}
