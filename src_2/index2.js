const formRef = document.querySelector('.js-feedback-form');
const textareaRef = document.querySelector('.js-feedback-form textarea');

textareaRef.addEventListener('input', handleTextareaInput);


 function handleTextareaInput(event){
    const message = event.currentTarget.value

    localStorage.setItem('message', message)
 }

 function getValueFromLocalStorage() {
    const message = localStorage.getItem(message)

    textareaRef.value = message;
 }

// /*
// * - Зупиняєм поведінку за замовчуванням
// * - Видаляємо повідомлення зі сховища
// * - Очищуємо форму
// */
// 




function handleFormSubmit(event) {
      event.preventDefault();
 }