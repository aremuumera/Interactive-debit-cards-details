const inputedNumber = document.querySelector('.number-input');
const inputedText = document.querySelector('.text-input');
const cvc = document.querySelector('.cvc');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const monthError = document.querySelector('.month-error');
const numberError = document.querySelector('.number-error');
const cvcError = document.querySelector('.cvc-error');
const completeState = document.querySelector('.complete-state');
const confirmState = document.querySelector('.confirm-state');
const formContainer = document.querySelector('.form-container');
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.card-name');
const cardMonthAndYear = document.querySelector('.card-month-year');
const cvcNumber = document.querySelector('.cvc-number');


// let btnValidation = inputedNumberValidation () && dobAndCvcValidation ()


// text input validation

// text input validation
const inputedTextValidation = () => {
    let regex = /^[A-Za-z\s]+$/;
    let stray0 = inputedText.value;
    if (stray0.match(regex)) {
        inputedText.style.borderColor = "hsl(278, 68%, 39%)";
        return true;
        
    } else {
        inputedText.style.borderColor = "red";
        return false;
    }
}

inputedText.addEventListener('input', inputedTextValidation);

// card number input validation
const inputedNumberValidation = () => {
   
        let regex = /^\d{0,16}$/;
        let stray = inputedNumber.value.replace(/\s/g, ''); // Remove existing spaces and also to remove any space the user has input which will make the numbers togehter
        let formattedNumber = stray.replace(/(\d{4})/g, '$1 '); // Add space after every 4 digits and then we can add space to the number after every 4 digits
        inputedNumber.value = formattedNumber.trim(); // Update the input value and the trim method is to remove the last space after the 16th digit

        if (stray.length !== 16) {
          numberError.innerHTML = "Wrong format, use up to 16 digits";
          numberError.style.color = "red";
          inputedNumber.style.borderColor = "red";
          return false;
        } else {
          inputedNumber.style.borderColor = "hsl(278, 68%, 39%)";
          numberError.innerHTML = "";
          numberError.style.color = "";
          return true;
        }
    
    }
inputedNumber.addEventListener('input', inputedNumberValidation);

// month, date and cvc validation
const dobAndCvcValidation = () => {
    let regex = /^\d{2}$/;
    let regex1 = /^\d{3}$/;
    let stray2 = month.value;
    let stray3 = year.value;
    let stray4 = cvc.value;

    if (!stray2.match(regex)) {
        monthError.innerHTML = "Can't be blank";
        monthError.style.color = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        cvc.style.borderColor = "red";
        return false;
    } else if (stray2.match(regex) && !stray3.match(regex)) {
        monthError.innerHTML = "Can't be blank";
        month.style.borderColor = "hsl(278, 68%, 39%)";
        year.style.borderColor = "red";
        cvc.style.borderColor = "red";
        return false;
    } else if (stray3.match(regex) && !stray4.match(regex1)) {
        year.style.borderColor = "hsl(278, 68%, 39%)";
        month.style.borderColor = "hsl(278, 68%, 39%)";
        cvc.style.borderColor = "red";
        monthError.innerHTML = " ";
        monthError.style.color = " ";
        cvcError.style.color = "red";
        cvcError.innerHTML = "Can't be blank";
        return false;
    } else {
        cvc.style.borderColor = "hsl(278, 68%, 39%)";
        year.style.borderColor = "hsl(278, 68%, 39%)";
        month.style.borderColor = "hsl(278, 68%, 39%)";
        monthError.innerHTML = " ";
        monthError.style.color = " ";
        cvc.style.borderColor = "hsl(278, 68%, 39%)";
        cvcError.style.color = " ";
        cvcError.innerHTML = " ";
        return true;
    }
};

addEventListener("input", dobAndCvcValidation);

confirmState.addEventListener('click', (e) => {
    e.preventDefault();

    const isValid = inputedNumberValidation() && dobAndCvcValidation() && inputedTextValidation();
    if (isValid) {
        formContainer.classList.add('close');
        completeState.classList.add('active');
        completeState.classList.add('scale-in-top');
        const nameInput = inputedText.value;
        const numberInput = inputedNumber.value;
        const cvcInput = cvc.value;
        const monthInput = month.value;
        const yearInput = year.value;
        cvcNumber.innerHTML = cvcInput;
        cardName.innerHTML =  nameInput;
        cardNumber.innerHTML = numberInput;
        cardMonthAndYear.innerHTML = `${monthInput}/${yearInput}`;
    } else {
        formContainer.classList.remove('close');
        completeState.classList.remove('active');
        completeState.classList.remove('scale-in-top');
    }
});


      