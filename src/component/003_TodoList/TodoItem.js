import React from 'react'
import './style.css'

const TodoItem = ({items, setItems}) => {

  console.log(items)
   
  const deleteItem=(index)=>{
        const itemsMod = [...items] 
        itemsMod.splice(index,1);
        setItems(itemsMod)
        console.log(itemsMod)
        
      };
const addItem = ()=>{

}


  return (
    items.map((item,index)=>{
      return(
        <li className='item-area'>
          <input type='checkbox'/>
          <p>{item.content}</p>
          <div className='x-btn'>
            <button onClick={()=>deleteItem(index)}>X</button>
          </div>    
        </li>
      );
    })
  )
}

export default TodoItem