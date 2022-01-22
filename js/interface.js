document.addEventListener('DOMContentLoaded',()=>{
    let squares=document.querySelectorAll('.square')
    squares.forEach((square)=>{
        square.addEventListener('click',handleClick)
    })
})
function handleClick(event){
    let square=event.target
    let position=square.id 
    if(handleMove(position)){
        setTimeout(()=>{
          alert(`O jogo acabou!O vencedor foi ${playerTime}`)
        },10)
    }
    upadeteSquares(position)
}

function upadeteSquares(position){
    let squares=document.getElementById(position.toString())
    let syboml=board[position]
    squares.innerHTML=`<div class="${syboml}"><div>`
}