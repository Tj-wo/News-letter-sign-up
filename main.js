function myFunction(x) {
  if (x.matches) {
    document.images[0].src = "assets/images/illustration-sign-up-mobile.svg";
  } else {
    document.images[0].src = "assets/images/illustration-sign-up-desktop.svg";
  }
}

let x = window.matchMedia("(max-width: 400px)");
myFunction(x);
x.addEventListener("change", myFunction);

let emailRe =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let email = document.getElementsByName("email")[0];

let valid = document.querySelector("form span");

document.forms[0].onsubmit = () => {
  if (emailRe.test(email.value)) {
    document.querySelector(".main:first-child").style.display = "none"
    document.querySelector(".popup").style.display = "flex"
    document.querySelector(".popup p span").innerHTML = email.value
  } else {
    email.style.borderColor = "red";
    email.style.background = "#ff000010";
    email.style.color = "red";
    valid.style.display = "block";
  }
  return false;
};

email.onfocus = () => {
  email.style.borderColor = "black";
  email.style.background = "white";
  email.style.color = "hsl(234, 29%, 20%)";
  valid.style.display = "none";
};

email.onblur = () => {
  email.style.borderColor = "#ddd";
  email.style.background = "white";
  email.style.color = "hsl(234, 29%, 20%)";
  valid.style.display = "none";
};
