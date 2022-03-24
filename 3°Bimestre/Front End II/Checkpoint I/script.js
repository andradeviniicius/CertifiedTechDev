const submitBtn = document.getElementById('submitBtn')

const firstName = document.getElementById('name')
const lastName = document.getElementById('lastName')
const documentId = document.getElementById('documentId')
const birthDate = document.getElementById('birthDate')

document.querySelector("#userImage").addEventListener("change", function(){
  const reader = new FileReader()

  reader.addEventListener("load", ()=>{
    sessionStorage.setItem('imgData', reader.result)
  })

  reader.readAsDataURL(this.files[0])
})


submitBtn.addEventListener('click',(e)=>{
  // e.preventDefault();


  window.sessionStorage.setItem('NomeSobrenome', (firstName.value + ' ' + lastName.value)) 
  window.sessionStorage.setItem('CPF',  documentId.value)
  window.sessionStorage.setItem('DataNascimento',  birthDate.value)
  

})

