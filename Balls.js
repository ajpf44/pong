const rand = (num)=> Math.floor(Math.random()*num)

class Ball{
    constructor(parentNode){
        this.parentNode = parentNode
        this.size = rand(20)+20
        this.color = `rgb(${rand(254)}, ${rand(254)}, ${rand(254)}, 0.8)`
        
        this.speedMod = rand(15)+1
        this.angleSpeed= (rand(359)+1)*Math.PI/180
        this.speed = {x: this.speedMod*Math.sin(this.angleSpeed), y: this.speedMod*Math.cos(this.angleSpeed)}

        this.posY = rand(parentNode.clientHeight-this.size)
        this.posX = rand(parentNode.clientWidth-this.size)
    }
    createBallDiv = function(){
        const ballDiv = document.createElement('div')

        ballDiv.style.backgroundColor = `${this.color}`


        ballDiv.style.width = `${this.size}px`
        ballDiv.style.height = `${this.size}px`
        ballDiv.style.borderRadius = `100%`
        ballDiv.style.translate = `${this.posX}px ${this.posY}px`
        ballDiv.style.position = 'absolute'

        this.ballDiv = ballDiv
        this.#startMoving()
        this.#appendToParentNode()
    }

    #startMoving = function(){
        this.idInterval = setInterval(()=>{
            this.#move()
            this.ballDiv.style.translate = `${this.posX}px ${this.posY}px`
        },20)
    }
    #move = function(){
        if(this.posX > this.parentNode.clientWidth -this.size || this.posX < 0) this.speed.x *= -1
        if(this.posY > this.parentNode.clientHeight -this.size || this.posY < 0) this.speed.y *= -1

        this.posX += this.speed.x
        this.posY += this.speed.y
    }    
    #appendToParentNode = function(){
        this.parentNode.appendChild(this.ballDiv)
    }
    removeThis = function(){
        if(this.idInterval) clearInterval(this.idInterval)

        this.ballDiv.remove()
    }
}

export default Ball



