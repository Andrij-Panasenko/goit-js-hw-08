import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChange, 500));
// form.addEventListener('submit', onFormSubvit);

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

  const LOCAL_STOR_KEY = 'feedback-form-state';
  // сетимо об'єкт в локалСторедж де ключ 'feedback-form-state' а об'єкт - {"email":"","message":""} його значення
  localStorage.setItem(LOCAL_STOR_KEY, JSON.stringify(userData));
}

//записуємо об'єкт в змінну
// const savedDataFromStorage = localStorage.getItem('feedback-form-state');

// //перевіряємо чи є в нас в локалСторедж дані
// if (savedDataFromStorage) {
//   //парсимо дані
//   const parsedDataFromStorage = JSON.parse(savedDataFromStorage);

//   // отримуємо поля форми
//   const emailField = form.querySelector('[type="email"]');
//   const textareaField = form.querySelector('[name="message"]');

//   //записуємо дані з локалСторедж як значення полів форми
//   emailField.value = parsedDataFromStorage.email;
//   textareaField.value = parsedDataFromStorage.message;
// }

//функція сабміту форми
// function onFormSubvit(evt) {
//   const formElements = evt.currentTarget.elements;
//   const email = formElements.email.value;
//   const message = formElements.message.value;

//   if (email === '' || message === '') {
//     alert('All fields must be fillded');
//     return;
//   } else {
//     const formData = {
//       email,
//       message,
//     };
//     console.log(formData);
//     form.reset();
//     // localStorage.clear();
//   }
// }