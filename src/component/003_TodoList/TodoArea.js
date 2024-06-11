import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Mordal from './Mordal';
import './style.css'


const TodoArea = ({}) => {
  const [isActive, setIsActive]=useState(false);
  const [items, setItems] = useState([
    {id:1,content:"test1"},
    {id:2,content:"test2"},
    {id:3,content:"test3"},
    {id:4,content:"test4"}]);
  
  const mordalBtn=()=>{
    setIsActive(!isActive);
    console.log(isActive)
  }

  return (
    <div className='main-area'>
      <h2 className='header-title'>TODO APP</h2>
      <ul className='todo-area'>
        <TodoItem items = {items} setItems={setItems}/>
      </ul>
      <div className='add-btn'>
          <button onClick={mordalBtn}>+</button>
      </div>
      <Mordal items={items} setItems={setItems} isActive={isActive} setIsActive={setIsActive}/>
    </div>
  )
}

export default TodoArea