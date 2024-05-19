// script.js dosyası

const submitButton = document.getElementById('submit-button');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
const successScreen = document.getElementById('success');
const content = document.getElementsByClassName('content');
const container = document.getElementById('container');
const dismissButton = document.getElementById('dismiss-button');

var regexForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/;

const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailInput.value;
    if (!email || !regexForEmail.test(email)) {
        emailInput.classList.add('error');
        errorMessage.classList.add('show-error');
        emailInput.placeholder = 'ash#loremcompany.com';
    } else {
        emailInput.classList.remove('error');
        errorMessage.classList.remove('show-error');
        successScreen.classList.add('success-visible');
        container.classList.add('show');
        for (const element of content) {
            element.classList.add('hide');
        }
        successMessage.innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`;
    }
};

submitButton.addEventListener('click', handleSubmit);

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSubmit(event);
    }
});

dismissButton.addEventListener('click', (e) => {
    e.preventDefault();
    successScreen.classList.remove('success-visible');
    container.classList.remove('show');
    emailInput.value = '';
    for (const element of content) {
        element.classList.remove('hide');
    }
});
