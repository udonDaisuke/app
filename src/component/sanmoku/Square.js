import React,{useState} from 'react'

// export default function Square({value}) {
// export default function Square({}) {
export default function Square({value,onSquareClick}) {
    // hooksはコンポーネント直下で呼ばないとだめ
  // const[value,setValue]=useState(null)

  // function handleClick() {
  //   console.log("clicked") 
  //   //セットして、レンダリング要求
  //   setValue('X')
  // }

  return (
    // クリックイベントは関数で渡す
    // <button className="Square" onClick={handleClick}>{value}</button>
    <button className="Square" onClick={onSquareClick}>{value}</button>
  )
}
