import React, { useState } from 'react'
import './style.css'

const Mordal = ({items, setItems, isActive,setIsActive}) => {

  const [text, setText] = useState("")
  
  const saveBtn=(text)=>{
    const newItems = [...items]
    newItems.push({id:items.length,content:text})
    setItems(newItems)
    setIsActive(!isActive);
    setText("")
  }
  const cancelBtn=()=>{
    setIsActive(!isActive);
  }
  
  if(isActive){
    return (
      <div className='overlay'>
        <div className='box'>
          <h2 className='title'>新規登録</h2>
          <form>
            <input className='input-text' 
              placeholder='task name'
              value={text} 
              onChange={(e)=>setText(e.target.value)}
              
            />
            <div className='btn-area'>
              <div className='save-btn' type='button' onClick={()=>saveBtn(text)}>
                <p>保存</p>
              </div>
              <div className='cancel-btn'onClick={cancelBtn}>
                <p>キャンセル</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    )  
  }else{
    return (null)
  }

}

export default Mordal