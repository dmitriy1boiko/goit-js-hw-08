import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-from-state";

const formObject = {
  form : document.querySelector('.feedback-form'),
  inputEmail : document.querySelector('.feedback-form input'), 
  textareaMessage : document.querySelector('.feedback-form textarea'),

};
const {form, inputEmail, textareaMessage} = formObject;

const params = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  const key = event.target.name;
  params[key] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
};

function onFormSubmit (event) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  event.preventDefault();

  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
};

function getStorageData() {
  const data = localStorage.getItem(STORAGE_KEY);
  const parseData = JSON.parse(data);
  
  if (parseData?.email) {
    inputEmail.value = parseData.email;
  }
  if (parseData?.message) {
    textareaMessage.value = parseData.message;
  }
};

getStorageData();