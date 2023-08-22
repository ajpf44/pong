import Ball from "./Balls.js";
import Player from "./Player.js";

const body = document.querySelector('body');

const ball = new Ball(body);
ball.createBallDiv();

const player1 = new Player('player1');
const player2 = new Player('player2');
const movesPLa = ['a', 'd', 'ArrowLeft', 'ArrowRight'];

window.addEventListener('resize', ()=>{
    const newX = window.innerWidth;
    const newY = window.innerHeight;
    
    const childrenMain = [...main.children];
    childrenMain.map(el=>{
        const elPos = el.getBoundingClientRect();

        if(elPos.x >= newX || elPos.y >= newY) el.remove();
    })
    
    balls=  balls.filter(ball=> (ball.posX < newX && ball.posY < newY));

    refreshObjNum();
})

window.addEventListener('keydown', (evt)=>{
    if(evt.key == 'a' || evt.key =='d') player1.move(evt.key);
    else player2.move(evt.key);
});
