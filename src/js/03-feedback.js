import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state'

const form = document.querySelector('.feedback-form');

let formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateInput();
/*
* - Останавливаем поведение по умолчанию
* - Убираем сообщение из хранилища
* - Очищаем форму
*/
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}
/*
* - Получем значение сообщения
* - Сохраняем его в хранилище
* - Добавляем throttle
*/
function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
/*
* - Получем значение из хранилища
* - Если там что-то было, обновляем DOM
*/
function populateInput() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    const parsedForm = JSON.parse(savedForm);

    if (savedForm) {
        form.email.value = parsedForm.email;
        form.message.value = parsedForm.message;
    }
}