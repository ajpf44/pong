const barSpeed = 20

class Player{
    constructor(id){
        this.bar = document.getElementById(id)
        this.pos = 0

        if(id == 'player1') this.moves = {'a':-barSpeed,'d':barSpeed}
        else this.moves = {'ArrowLeft':-barSpeed,'ArrowRight':barSpeed}
    }
    victories = 0

    move = function(m){
        this.pos += this.moves[m]
        this.bar.style.transform  = `translate(${this.pos}px, 0px)`
    }
}

export default Player