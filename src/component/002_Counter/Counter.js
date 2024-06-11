import React, { useState } from 'react'
import './style.css'

const Counter = () => {

  const [count, setCount]=useState(0);
  const addCount=()=>{
    setCount(a=>a+1)
  }
  const subCount=()=>{
    setCount(a=>a-1)
  }
  return (
    <div className='box-area'>
      <h2 className='title'>React Counter</h2>
      <p className='count'>{count}</p>
      <div className='btn-area'>
        <div className='btn1' onClick={addCount}>
          <p>+</p>
        </div>
        <div className='btn2' onClick={subCount}>
          <p>-</p>
        </div>
      </div>
    </div>
  )
}

export default Counter