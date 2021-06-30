// Burger Menu
document.getElementById("menuIcon").addEventListener("click", () => {
  const menuIcon = document.querySelector(".menuIcon");
  const navbar = document.getElementById("navbar");
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});

//Swiper JS
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Contact Form backend
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value;
  var emailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(emailregex)) {
    document.getElementById("email").style.background = "transparent";

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let messageval = document.getElementById("messageval").value;

    Email.send({
      SecureToken: "34e592d4-efb3-4785-8e01-2293964e4b7f",
      To: "pratikpathak200@gmail.com",
      From: email,
      Subject: "Portfolio Message Request",
      Body: fname + " " + lname + " said 👇 <br>" + messageval,
    }).then((message) => {
      if (message === "OK") {
        document.getElementById("error-box").style.display = "flex";
        document.getElementById("error-box").innerHTML = "Email Sent &#9989;";
      } else {
        document.getElementById("error-box").style.display = "flex";
        document.getElementById("error-box").innerHTML =
          "Something went wrong!";
      }
    });
  } else {
    document.getElementById("error-box").style.display = "flex";
    document.getElementById("error-box").innerHTML = "Invalid Email";
    document.getElementById("email").style.background = "red";
  }
});

// https://g.co/allowaccess allowing access
