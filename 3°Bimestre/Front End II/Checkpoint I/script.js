const submitBtn = document.getElementById('submitBtn')

const firstName = document.getElementById('name')
const lastName = document.getElementById('lastName')
const documentId = document.getElementById('documentId')
const birthDate = document.getElementById('birthDate')


submitBtn.addEventListener('click',(e)=>{
  // e.preventDefault();


  window.sessionStorage.setItem('NomeSobrenome', (firstName.value + ' ' + lastName.value)) 
  window.sessionStorage.setItem('CPF',  documentId.value)
  window.sessionStorage.setItem('DataNascimento',  birthDate.value)
  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

  let userImage = document.getElementById("userImage");
  let imgData = getBase64Image(userImage)
  window.sessionStorage.setItem('imgData', imgData)

  // window.sessionStorage.setItem('Img', JSON.stringify(userImage))
      
  //   if (userImage.length > 0) {
  //         var fileReader = new FileReader();
  
  //         fileReader.onload = function (event) {
  //             document.getElementById("userUserImage").setAttribute("src", event.target.result);
  //           };
            
  //         fileReader.readAsDataURL(userImage[0]);
  //     }
      

})

