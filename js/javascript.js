document.getElementById("menuIcon").addEventListener("click", () => {
  const menuIcon = document.querySelector(".menuIcon");
  const navbar = document.getElementById("navbar");
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});

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
      SecureToken: "00e60553-da0c-4dd7-bf93-67979a775e98",
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
