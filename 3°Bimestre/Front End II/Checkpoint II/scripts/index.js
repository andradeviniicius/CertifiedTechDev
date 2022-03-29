const emailInput = document.getElementById('inputEmail')
const inputPassword = document.querySelector('#inputPassword')
console.log(emailInput);   

emailInput.addEventListener('change', ()=>{
    if (emailInput.value==""){
        console.log('mudou');
        emailInput.parentNode.appendChild(createErrorMessage())
    }
    else {
        
    }
})