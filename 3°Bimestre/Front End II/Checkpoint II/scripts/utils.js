function createErrorMessage(){
    let p = document.createElement("small")
    p.style.border = 'red'
    p.style.display = 'flex'
    p.style.color = 'red'
    p.innerText = 'Campo obrigatório'

    return p
}