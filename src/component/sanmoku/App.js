// function Square(){
//   <button className="Square">1</button>
// }

import { useState } from "react";
import Square from "./Square";


export default function Board(){
  const [xIsNext,setXIsNext] = useState(true)
  const [squares,setSquares]=useState(Array(9).fill(null))

  function handleClick(i){
    if (squares[i]||calculateWinner(squares)) {
      return      
    }

    // value update
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i]="X"      
    } else {
      nextSquares[i]="O"
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)

  }

  const winner =  calculateWinner(squares)
  let status
  if(winner){
    status = "winner"+winner
  }else{
    status = "next player" +(xIsNext?"X":"O")
  }

  return(
    <>
      <div>
        <div className="status">{status}</div>
        {/* 文字じゃないと渡らないっぽい */}
        {/* <Square value="1" />
        <Square value="2" />
        <Square value="3" /> */}
        <Square value={squares[0]} onSquareClick={()=>{handleClick(0)}}/>
        <Square value={squares[1]} onSquareClick={()=>{handleClick(1)}}/>
        <Square value={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
      </div>
      <div>
      {/* <Square value="4" />
      <Square value="5" />
      <Square value="6" /> */}
        <Square value={squares[3]} onSquareClick={()=>{handleClick(3)}}/>
        <Square value={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
        <Square value={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
        </div>
      <div>
      {/* <Square value="7" />
      <Square value="8" />
      <Square value="9" /> */}
        <Square value={squares[6]} onSquareClick={()=>{handleClick(6)}}/>
        <Square value={squares[7]} onSquareClick={()=>{handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}}/>
      </div>
    </> 
  )
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for(let i=0;i<lines.length;i++){
    const [a,b,c]=lines[i]
    if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
      return squares[a]
    }

  }
  return null
}