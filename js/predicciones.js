let nombre1 = prompt ("¡Quien sera el primero en ser desafiado?")
    console.log("Suerte " + nombre1 + " en tu aventura")

let nombre2 = prompt ("¡Quien sera el segundo en ser desafiado??")
    console.log("Suerte " + nombre2 + " en tu aventura")

let participantes = [nombre1, nombre2]
    console.log(participantes)

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

console.log("puntos de "+ nombre1 + " " + puntosJugador1)

console.log("puntos de "+ nombre2 + " " + puntosJugador2)

}

if(puntosJugador1 > puntosJugador2){
    console.log("GANADOR "+ nombre1)
} else{
    console.log("GANADOR " + nombre2)
}