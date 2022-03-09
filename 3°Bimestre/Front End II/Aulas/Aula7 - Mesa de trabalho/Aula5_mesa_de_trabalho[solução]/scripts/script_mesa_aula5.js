let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let itemsList = document.querySelectorAll('.item');

function alteraTema() {


    if (toggleswitch.checked) {

        body.classList.toggle('body-dark');
        h1.classList.add('h1-dark');
        itemsList.forEach(item => {
            item.classList.add('items-dark');
            item.classList.add('items-text-dark');
        });
    } else { 
        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');

        itemsList.forEach(item => {
            item.classList.remove('items-dark');
            item.classList.remove('items-text-dark');
        });
    }
}

function changeSrc(animalName){
    const currentAnimal = document.getElementById(animalName)
    console.log(currentAnimal)
    
    const userAnswer = prompt(`
    Escolha uma URL`)

    if(userAnswer){
        currentAnimal.setAttribute('src',userAnswer)
    }

}

// const cards = document.querySelectorAll(".item");

// cards.forEach(card => {
// const button = document.createElement('button');
// button.innerText = "Trocar imagem";
// button.onclick = () => {
//     const imgSrc = prompt('Insira a URL da imagem que deseja')
//     const img = button.parentElement.querySelector('img')
//     img.setAttribute('src', imgSrc)
// }
//     card.appendChild(button)
// })
