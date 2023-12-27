// "use strict"
// let userMail=document.querySelectorAll("#email");
// let userPass=document.querySelectorAll("#pass");
// let userInfo=[];

// function logIn(){
//     let system={
//         email:userMail.value,
//         pass:userPass.value
//     };
//     userInfo.push(system);
//     display(userInfo);
// }
// function display(userInfo){
//     console.log(userInfo);
// }
// logIn();


// function validatePassword(password){
//     if (password.length < 8 || password.length>20){
//         return false;
//     }
//     const uppercasepattern=/[A-Z]/;
//     const lowercasepattern=/[a-z]/;
//     const numberpattern=/[0-9]/;
//     const specialcharpattern=/[\W_]/;

//     return(
//         uppercasepattern.test(password) &&
//         lowercasepattern.test(password)&&
//         numberpattern.test(password)&&
//         specialcharpattern.test(password)
//     );
// }

// let pass ='Abc123!@#';
// if (validatePassword(pass)){
//     console.log('correct password');
// }else{
//     console.log('wrong password');
// }


// const regEmails=[];
// function isEmailRegesterd(Email){
//     return regEmails.includes(Email);
// }

// function regEmail(Email){
//     regEmails.push(Email);
// }

// const enterEmail="example@example.com";
// if (isEmailRegesterd(enterEmail)){
//     console.log("yse");
// }else{
//     regEmail(enterEmail);
//     console.log("no");
// }


// let signUpAnchor=document.getElementById("signUpAnchor");

// let nameInput=document.getElementById("nameInput");
// function reverseAnchorText(){
//     if(signUpAnchor.innerText==="Sign In"){
//         signUpAnchor.innerText="Sign Up";
//         nameInput.style.display="inline"
//     }else{
//         signUpAnchor.innerText="Sign In";
//         nameInput.style.display="none";
//     }
// }
// signUpAnchor.addEventListener("click",exchange)
// function exchange(){
//     enterName.classList.replace("d-none","d-block");
//     upBtn.classList.replace("d-none","d-block");
//     inBtn.classList.replace("d-block","d-none");
// }
// reverseAnchorText();
// display(userInfo);



"use strict";

let userMail = document.querySelector("#email");
let userPass = document.querySelector("#pass");
let userInfo = [];

function logIn() {
  let system = {
    email: userMail.value,
    pass: userPass.value
  };

  if (validatePassword(system.pass)) {
    userInfo.push(system);
    display(userInfo);
  } else {
    console.log("Invalid password");
  }
}

function display(userInfo) {
  console.log(userInfo);
}

function validatePassword(password) {
  if (password.length < 8 || password.length > 20) {
    return false;
  }
  const uppercasepattern = /[A-Z]/;
  const lowercasepattern = /[a-z]/;
  const numberpattern = /[0-9]/;
  const specialcharpattern = /[\W_]/;

  return (
    uppercasepattern.test(password) &&
    lowercasepattern.test(password) &&
    numberpattern.test(password) &&
    specialcharpattern.test(password)
  );
}

let pass = 'Abc123!@#';
if (validatePassword(pass)) {
  console.log('Correct password');
} else {
  console.log('Wrong password');
}

const regEmails = [];

function isEmailRegistered(email) {
  return regEmails.includes(email);
}

function regEmail(email) {
  regEmails.push(email);
}

const enterEmail = "example@example.com";
if (isEmailRegistered(enterEmail)) {
  console.log("Email already registered");
} else {
  regEmail(enterEmail);
  console.log("Email registered successfully");
}

let signUpAnchor = document.getElementById("signUpAnchor");
let nameInput = document.getElementById("nameInput");

function reverseAnchorText() {
  if (signUpAnchor.innerText === "Sign In") {
    signUpAnchor.innerText = "Sign Up";
    nameInput.style.display = "inline";
  } else {
    signUpAnchor.innerText = "Sign In";
    nameInput.style.display = "none";
  }
}

signUpAnchor.addEventListener("click", reverseAnchorText);

logIn();
display(userInfo);