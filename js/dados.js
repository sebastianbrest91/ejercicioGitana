const dado1 = document.getElementById('tirar1')
const dado2 = document.getElementById('tirar2')
const dados = document.getElementById('tirarambos')

const carrouselImg1 = document.querySelectorAll('.carrousel-img1')

let currentIndex1 = Math.round(Math.random()*6)

let totalImg1 = carrouselImg1.length

function showImg1 (index){
    carrouselImg1.forEach((img,i) => {
        if(i === index){
            img.classList.add('active')
        } else{
            img.classList.remove ('active')
        }
    })
}

const carrouselImg2 = document.querySelectorAll('.carrousel-img2')

let currentIndex2 = Math.round(Math.random()*6)

let totalImg2 = carrouselImg2.length

function showImg2 (index){
    carrouselImg2.forEach((img,i) => {
        if(i === index){
            img.classList.add('active')
        } else{
            img.classList.remove ('active')
        }
    })
}

tirar1.addEventListener('click', (evt)=>{
    currentIndex1 = Math.round(Math.random()*6) % totalImg1
    showImg1(currentIndex1)
})

tirar2.addEventListener('click', (evt)=>{
    currentIndex2 = Math.round(Math.random()*6) % totalImg2
    showImg2(currentIndex2)
})

tirarambos.addEventListener('click', (evt)=>{
    currentIndex1 = Math.round(Math.random()*6) % totalImg1
    showImg1(currentIndex1)
    currentIndex2 = Math.round(Math.random()*6) % totalImg2
    showImg2(currentIndex2)
})