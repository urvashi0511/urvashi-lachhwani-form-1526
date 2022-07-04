let form = document.querySelector('form');
let fullName = document.getElementById('fname');
let Email = document.getElementById('email');
let Message = document.getElementById('message');
let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let btn = document.getElementById('button');


function validateForm() {

    console.clear();

    let dataCollector = {};
    let errorCollector = [];

    fullName.value = fullName.value.trim();
    Email.value = Email.value.trim();
    Message.value = Message.value.trim();


    if (fullName.value !== '') {
        dataCollector.fullName = fullName.value;
    } else {
        errorCollector.push('Please enter your full name');
    }



    if (Email.value !== '') {
        if (validEmail.test(Email.value)) {
            dataCollector.emailInput = Email.value;
        } else {
            errorCollector.push('Please enter a valid email')
        }

    } else {
        errorCollector.push('Please enter your email');
    }

    //Message

    if (message.value !== '') {
        dataCollector.messageInput = Message.value;
    } else {
        errorCollector.push('Please enter your message');
    }

    if (errorCollector.length === 0) {
        console.log(dataCollector);
        form.reset();
    } else {
        console.log(errorCollector);
    }
};

// register button button for 'click' event
btn.addEventListener('click', validateForm);