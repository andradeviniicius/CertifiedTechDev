function start() {
    function getRandomNumber(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }
    var Papel = document.getElementById('Papel')
    var Tesoura = document.getElementById('Tesoura')
    var Pedra = document.getElementById('Pedra')

    let userResult = 'Valor padrão'
    let machineResult = getRandomNumber(1, 4)


    Papel.addEventListener("click", () => {
        userResult = 1
        if (machineResult === 1) {
            userResult='Papel'
            machineResult = 'Papel'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto empatou`)
        } else if (machineResult === 2) {
            userResult='Papel'
            machineResult = 'Tesoura'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto voce se f# demais`)
        } else if (machineResult === 3) {
            userResult='Papel'
            machineResult = 'Pedra'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto voce amassou o computador`)
        }
    })
    Tesoura.addEventListener("click", () => {
        userResult = 2
        if (machineResult === 1) {
            userResult='Tesoura'
            machineResult = 'Papel'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto voce amassou o computador`)
        } else if (machineResult === 2) {
            userResult='Tesoura'
            machineResult = 'Tesoura'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto empatou`)
        } else if (machineResult === 3) {
            userResult='Tesoura'
            machineResult = 'Pedra'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto voce se f# demais`)
        }
    })
    Pedra.addEventListener("click", () => {
        userResult = 3
        if (machineResult === 1) {
            userResult='Pedra'
            machineResult = 'Papel'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto voce se f# demais`)
        } else if (machineResult === 2) {
            userResult='Pedra'
            machineResult = 'Tesoura'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto voce amassou o computador`)
        } else if (machineResult === 3) {
            userResult='Pedra'
            machineResult = 'Pedra'
            alert(`O computador mostrou ${machineResult} e você mostrou ${userResult} portanto empatou`)
        }
    })

}