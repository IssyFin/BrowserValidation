function bindEvents(){
    let emailInput = document.getElementById("email");
    let countryInput = document.getElementById("country");
    let zipInput = document.getElementById("zip");
    let passInput = document.getElementById("pass");
    let confirmInput = document.getElementById("confirmPass");
    let myButton = document.getElementById("highfive");
    emailInput.addEventListener("focusout",(event)=>{
        emailCheck();
    console.log("email check");}
    )
    countryInput.addEventListener("focusout",(event)=>{
        countryCheck();}
    )
    zipInput.addEventListener("focusout",(event)=>{
        zipCheck();}
    )
    passInput.addEventListener("focusout",(event)=>{
        passCheck();}
    )
    confirmInput.addEventListener("focusout",(event)=>{
        confirmCheck();}
    )
    myButton.addEventListener("click",(event)=>
    {
        highFive();
    })
}

function emailCheck(){
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please use a valid format.");
        emailError.textContent = "Please use a valid format.";
        emailError.classList.remove("hidden");
      } 
    else if(email.validity.valueMissing){
        email.setCustomValidity("Please enter a valid email address.");
        emailError.textContent = "Please enter a valid email address."
        emailError.classList.remove("hidden");
    }
      else {
        email.setCustomValidity("");
        emailError.textContent="";
        emailError.classList.add("hidden");
      }
}

function countryCheck(){
    let country = document.getElementById("country");
    let countryError = document.getElementById("countryError");
    if(country.validity.tooShort){
        country.setCustomValidity("Country names must be a minimum of 4 characters long.");
        countryError.textContent = "Country names must be a minimum of 4 characters long."
        countryError.classList.remove("hidden");
    }
    else  if (country.validity.patternMismatch) {
        country.setCustomValidity("Country names must only include alpha characters.");
        countryError.textContent = "Country names must only include alpha characters.";
        countryError.classList.remove("hidden");
      } 
      else {
        country.setCustomValidity("");
        countryError.textContent="";
        countryError.classList.add("hidden");
      }
}

function passCheck(){
    let password = document.getElementById("pass");
    let passwordError = document.getElementById("passError");
    if (password.validity.tooShort) {
        password.setCustomValidity("Passwords must be at least 8 characters long.");
        passwordError.textContent = "Passwords must be at least 8 characters long.";
        passwordError.classList.remove("hidden");
      } 
      else {
       password.setCustomValidity("");
        passwordError.textContent="";
        passwordError.classList.add("hidden");
      }
}

function zipCheck(){
    let zip = document.getElementById("zip");
    let zipError = document.getElementById("zipError");
    if (zip.validity.tooShort) {
        zip.setCustomValidity("Zip codes must be no less than characters long.");
        zipError.textContent = "Zip codes must be no less than characters long.";
        zipError.classList.remove("hidden");
      } 
    else if(zip.validity.tooLong){
        zip.setCustomValidity("Zip codes must be no more than characters long.");
        zipError.textContent = "Zip codes must be no more than characters long.";
        zipError.classList.remove("hidden");
    }
    else if(zip.validity.patternMismatch){
        zip.setCustomValidity("Zip codes must be numeric.");
        zipError.textContent = "Zip codes must be numeric.";
        zipError.classList.remove("hidden");
    }
      else {
       zip.setCustomValidity("");
        zipError.textContent="";
        zipError.classList.add("hidden");
      }
}

function confirmCheck(){
    let password = document.getElementById("pass");
    let confirm = document.getElementById("confirmPass");
    let confirmError = document.getElementById("confirmError");
    if (confirm.value!==password.value) {
        confirm.setCustomValidity("Passwords do not match.");
        confirmError.textContent = "Passwords do not match.";
        confirmError.classList.remove("hidden");
      } 
      else {
       confirm.setCustomValidity("");
        confirmError.textContent="";
        confirmError.classList.add("hidden");
      }
}

function checkErrors(){
    let emailInput = document.getElementById("email");
    let countryInput = document.getElementById("country");
    let zipInput = document.getElementById("zip");
    let passInput = document.getElementById("pass");
    let confirmInput = document.getElementById("confirmPass");
    if(!emailInput.validity.valid){
        return true;
    }
    else if(!countryInput.validity.valid){
        return true;
    }
    else if(!zipInput.validity.valid){
        return true;
    }
    else if(!passInput.validity.valid){
        return true;
    }
    else if(!confirmInput.validity.valid||(passInput.value!==confirmInput.value)){
        return true;
    }
    else{
        return false;}
}

function highFive(){
    if(checkErrors()===true){
        alert("Please correct all errors in the form before submitting.");
    }
    else{
        alert("High five, everything looks great!");
    }
}

bindEvents();