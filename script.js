const barra1 = document.getElementById('player1')
let pos1 = 0

const acceptedMove1 = ['ArrowUp','ArrowDown','ArrowRight', 'ArrowLeft']
const pla1_Moves = {
    'ArrowUp':10, 
    'ArrowDown': -10,
     'ArrowRight':10,
      'ArrowLeft': -10
    }
window.addEventListener('keydown', (evt)=>{
    if(acceptedMove1.includes(evt.key)){
        pos1 += pla1_Moves[evt.key]

        barra1.style.transform = `translate(${pos1}px, 0)`
    }else if(
        
    )
})