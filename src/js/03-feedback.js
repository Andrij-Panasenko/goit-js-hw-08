import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChange, 500));

function onInputChange(evt) {
  evt.preventDefault();

  const { email, message } = evt.currentTarget.elements;

  //забираємо деструктуризовані поля форми і записуємо їх як об'єкт
  const userData = {
    email: email.value,
    message: message.value,
  };

  // сетимо об'єкт в локалСторедж де ключ 'feedback-form-state' а об'єкт - {"email":"","message":""} його значення
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

//записуємо об'єкт в змінну
const savedDataFromStorage = localStorage.getItem('feedback-form-state');

//перевіряємо чи є в нас в локалСторедж дані
if (savedDataFromStorage) {
  //парсимо дані
  const parsedDataFromStorage = JSON.parse(savedDataFromStorage);

  // отримуємо поля форми
  const emailField = form.querySelector('[type="email"]');
  const textareaField = form.querySelector('[name="message"]');

  //записуємо дані з локалСторедж як значення полів форми
  emailField.value = parsedDataFromStorage.email;
  textareaField.value = parsedDataFromStorage.message;
}