const botonSumar = document.getElementById('sumar')
const totalJugador1 = document.getElementById('totalJugador1')
const totalJugador2 = document.getElementById('totalJugador2')

botonSumar.addEventListener('click', (evt) => {
    let suma1 = 0
    let suma2 = 0

    const input1 = document.querySelectorAll('.th1 input[type="number"]')
    const input2 = document.querySelectorAll('.th2 input[type="number"]')

    input1.forEach(input => {
        const valor = parseFloat(input.value)
        if (!isNaN(valor)) suma1 += valor
        input.value = ''
    })

    input2.forEach(input => {
        const valor = parseFloat(input.value)
        if (!isNaN(valor)) suma2 += valor
        input.value = ''
    })

    let actual1 = parseFloat(totalJugador1.textContent) || 0
    let actual2 = parseFloat(totalJugador2.textContent) || 0

    totalJugador1.textContent = actual1 + suma1
    totalJugador2.textContent = actual2 + suma2
})