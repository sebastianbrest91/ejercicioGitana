const jugadores = document.getElementById('formjugadores') 
const nombre1 = document.getElementById('nombre1')
const nombre2 = document.getElementById('nombre2')
const ganadorInput = document.getElementById('ganador')

jugadores.addEventListener ('submit',(evt)=> {
    evt.preventDefault()
    const newnombre1 = nombre1.value
    const newnombre2 = nombre2.value

let puntosJugador1 = 30
let puntosJugador2 = 30

let round = 0

while (puntosJugador1 > 0 && puntosJugador2 > 0){

round = round + 1

let tiroJugador1 = Math.round(Math.random()*10)
console.log(tiroJugador1)

let tiroJugador2 = Math.round(Math.random()*10)
console.log(tiroJugador2)

if(tiroJugador1 === tiroJugador2)
    console.log("Ronda empatada")
else if (tiroJugador1 > tiroJugador2){
    puntosJugador2 = puntosJugador2 - tiroJugador1 
} else {
    puntosJugador1 = puntosJugador1 - tiroJugador2 
}

console.log("round " + round)

console.log(newnombre1 + " " + puntosJugador1)

console.log(newnombre2 + " " + puntosJugador2)

}
let ganador
if(puntosJugador1 > puntosJugador2){
    ganador = newnombre1
} else{
    ganador = newnombre2
}

ganadorInput.value = ganador

})