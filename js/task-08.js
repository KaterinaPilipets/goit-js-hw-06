const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();   // отменяем перезагрузку страницы
  const {elements: { email, password }} = event.currentTarget;//відергивает по именам
  if (!email.value || !password.value) {
    return alert("Все поля должны быть заполнены!");
  }
  const user = {
    email: email.value,
    password: password.value,
  };
  event.currentTarget.reset();
  return console.log(user);
}
