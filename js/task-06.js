const textInput = document.querySelector("#validation-input");
const lengthMax =+textInput.getAttribute('data-length')
textInput.addEventListener('blur', event => {
    const eventLength = event.currentTarget.value.length
    textInput.classList = eventLength===lengthMax ? "valid" :  "invalid"
   })