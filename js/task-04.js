let counterValue = 0;
const value=document.querySelector('#value')
document.querySelector('[data-action="decrement"]').addEventListener("click", () => {
    counterValue -= 1;
return value.textContent = counterValue;
});
document.querySelector('[data-action="increment"]').addEventListener("click", () => {
    counterValue += 1;
   return value.textContent = counterValue; 
});


