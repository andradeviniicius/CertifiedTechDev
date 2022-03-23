const submitBtn = document.getElementById('submitBtn')

const firstName = document.getElementById('name')
const lastName = document.getElementById('lastName')
const documentId = document.getElementById('documentId')
const birthDate = document.getElementById('birthDate')

let userFirstName = document.getElementById('userName')
let userDocumentId = document.getElementById('userDocumentId')
let userBirthDate = document.getElementById('userBirthDate')

console.log(userBirthDate)

const listaUsuario = [{
  firstName:"",
  lastName:"",
  documentId:"",
  birthDate:"",
  userImage:"",
}]



submitBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  userFirstName.value = (firstName.value + ' ' + lastName.value)
  userDocumentId.value = documentId.value
  userBirthDate.value = birthDate.value
  let userImage = document.getElementById("userImage").files;

    if (userImage.length > 0) {
        var fileReader = new FileReader();

        fileReader.onload = function (event) {
            document.getElementById("userUserImage").setAttribute("src", event.target.result);
        };

        fileReader.readAsDataURL(userImage[0]);
    }



})

