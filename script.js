class Ball{
    acceptedColors = ['blue', 'red', 'lightgreen', 'black', 'rgb(231, 128, 98, 0.8)']
    constructor(parentNode){
        this.parentNode = parentNode
        this.size = Math.floor(Math.random()*81)+20
        this.color = this.acceptedColors[Math.floor(Math.random()*this.acceptedColors.length)]
        
        this.speedMod = 8
        this.angleSpeed = Math.PI*Math.floor(Math.random()*2)
        this.speed = {x: this.speedMod*Math.sin(this.angleSpeed), y: this.speedMod*Math.cos(this.angleSpeed)}

        this.posY = Math.floor((window.innerHeight-this.size)/2)
        this.posX = Math.floor((window.innerWidth-this.size)/2)
    }
    createBallDiv = function(){ 
        const ballDiv = document.createElement('div')

        ballDiv.style.backgroundColor = `${this.color}`


        ballDiv.style.width = `${this.size}px`
        ballDiv.style.height = `${this.size}px`
        ballDiv.style.borderRadius = `100%`
        ballDiv.style.translate = `${this.posX}px ${this.posY}px`
        ballDiv.style.position = 'absolute'

        return ballDiv
    }


    speedUp = function(){
        const barra1 = document.getElementById('player1')
        const barra2 =document.getElementById('player2')

        if(this.posX > this.parentNode.clientWidth -this.size || this.posX < 0) this.speed.x *= -1
        /* if(this.posY > this.parentNode.clientHeight -this.size || this.posY < 0) this.speed.y *= -1 */
        if(this.posY > this.parentNode.clientHeight -this.size - 50){
            const inicioBarra =barra1.getBoundingClientRect().x
            const tamBarra = barra1.getBoundingClientRect().width
            if(this.posX  >= inicioBarra && this.posX <= inicioBarra+tamBarra) this.speed.y *= -1
            else{
                console.log('Jogador 1 perdeu')
            }

        }else if(this.posY< 50){
            const inicioBarra =barra2.getBoundingClientRect().x
            const tamBarra = barra2.getBoundingClientRect().width
            if(this.posX  >= inicioBarra && this.posX <= inicioBarra+tamBarra) this.speed.y *= -1
            else{
                console.log('Jogador 2 perdeu')
            }
        }

        this.posX += this.speed.x
        this.posY += this.speed.y
    }
}

const barra1 = document.getElementById('player1')
const barra2 =document.getElementById('player2')
let pos1 = 0
let pos2 = 0

const acceptedMove1 = ['ArrowUp','ArrowDown','ArrowRight', 'ArrowLeft']
const pla1_Moves = {
    'ArrowUp':20, 
    'ArrowDown': -20,
    'ArrowRight':20,
    'ArrowLeft': -20
}

const acceptedMove2 = ['a', 'd']
const pla2_Moves = {
    'a': -20,
    'd': 20
}
window.addEventListener('keydown', (evt)=>{
    if(acceptedMove1.includes(evt.key)){
        pos1 += pla1_Moves[evt.key]

        barra1.style.transform = `translate(${pos1}px, 0)`
    }
})
window.addEventListener('keydown', (evt)=>{
    if(acceptedMove2.includes(evt.key)){
        pos2 += pla2_Moves[evt.key]

        barra2.style.transform = `translate(${pos2}px, 0)`
    }
})

console.log(barra2.getBoundingClientRect())

const body = document.querySelector('body')
const b1 = new Ball(body)
b1.ballDiv = b1.createBallDiv()
body.appendChild(b1.ballDiv)

setInterval(()=>{
    b1.speedUp()
    b1.ballDiv.style.translate = `${b1.posX}px ${b1.posY}px`
},20)