import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STOR_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

function onInputChange(evt) {
  evt.preventDefault();

  const { email, message } = form.elements;
  const emailData = email.value;
  const messageData = message.value

  //забираємо деструктуризовані поля форми і записуємо їх як об'єкт
  const userData = {
    email: emailData,
    message: messageData,
  };

  // сетимо об'єкт в локалСторедж де ключ 'feedback-form-state' а об'єкт - {"email":"","message":""} його значення
  localStorage.setItem(LOCAL_STOR_KEY, JSON.stringify(userData));
}

//записуємо об'єкт в змінну
const savedDataFromStorage = localStorage.getItem(LOCAL_STOR_KEY);

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

// функція сабміту форми
function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = form.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;

  if (email === '' || message === '') {
    alert('All fields must be fillded');
    return;
  } else {
    const userData = {
      email,
      message,
    };
    console.log(userData);
    localStorage.clear();
    form.reset();
  }
}
