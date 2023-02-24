const progress = document.querySelector('.progress'); 
const percent = document.querySelector('.percent'); 
const steps = document.querySelectorAll('.step'); 
const formFields = document.querySelectorAll('.field');
const prevBtn = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');
const submitBtn = document.querySelector('.submit');

function stepCounter(id) {

    steps.forEach(step => {

        step.classList.remove('completed');

        if (+id >= +step.id) {

            step.classList.add('completed');
            percent.style.width = `${Number(+id) * 50}%`;

        }

    });
}

function fieldChanger(id) {
    
    formFields.forEach( field => {
        let fieldId = field.id.slice(-1);
        field.classList.remove('active');

        if (fieldId == id) {
            field.classList.add('active')
        }
    });
}

function counter(event) {

    let id = event.target.id;

    stepCounter(id)
    fieldChanger(id)
}

steps.forEach(step => {
    step.addEventListener('click', counter);
});

function prevStep(event) {
    let prevFieldId = +event.target.parentElement.id.slice(-1) - 1;
    console.log(prevFieldId);
    stepCounter(prevFieldId);
    fieldChanger(prevFieldId);
}

function nextStep(event) {
    let prevFieldId = +event.target.parentElement.id.slice(-1) + 1;
    console.log(prevFieldId);
    stepCounter(prevFieldId);
    fieldChanger(prevFieldId);
}

function submitForm() {
    steps.forEach(step => {
        step.classList.add('completed');
        percent.style.width = `${Number(2) * 50}%`;
    });

    formFields.forEach( field => {
        field.classList.remove('active');
        if (field.id == 'field-3') {
            field.classList.add('active');
        }
    });
}

prevBtn.forEach( btn => {
    btn.addEventListener('click', prevStep);
});
nextBtns.forEach( btn => {
    btn.addEventListener('click', nextStep);
});
submitBtn.addEventListener('click', submitForm);
