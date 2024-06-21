import React, {useState,useEffect}from 'react'

export default function Effect() {

  const [count_inner,setCount_inner] = useState(0);
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);
  const [isDisplay,setIsDisplay] = useState(false)

  // 関数の外で実行する
  // useEffect(()=>{},[])
  useEffect(()=>{
    console.log("再レンダリングされるたび実行");
  })

  // useEffect(()=>{},[2])
  useEffect(()=>{
    console.log("初回レンダリング時のみ実行");
  },[1])

  // useEffect(()=>{},[count])
  useEffect(()=>{
    console.log("countが変化するたびに実行");
  },[count])

  // useEffect(()=>{},[count_inner])
  useEffect(()=>{
    // setCount((count)=>count+1)
    // endless randering when 2nd parameter changes in the function
    // setCount_inner((count_inner)=>count_inner+1)
    console.log("count_innerが変化するたびに実行");
  },[count_inner])
  
  useEffect(()=>{
    // 
    // setCount2(count2+1)
    console.log(count2)
  },[count2])


  const effect1 = () => {
    console.log("effect1")
  }
  const effect2 = () => {
    console.log("effect2")
    console.log(count)
    setCount(prev=>prev+1)
  }
  const effect3 = () => {
    setCount(count+1)
    console.log("effect3")
    console.log(count)
    setCount(count+1)
  }
  const effect4 = () => {
    setCount_inner(count_inner=>count_inner+1)
    console.log("effect4")
    console.log(count,count_inner)
  }
  let countt = 0
  const effect5 = ({isDisplay}) =>{
    setTimeout(() => {
      console.log('settimeout',countt+=1)
    }, 1000);
  }
  const effect6=()=>{

  }

  return (
    
    <div>
       {console.log("----レンダリング----")}
      <button onClick={effect1}>effect1</button>
      <button onClick={effect2}>effect2</button>
      <button onClick={effect3}>effect3</button>
      <button onClick={effect4}>effect4</button>
      <button onClick={effect5}>effect5</button>
      <button onClick={()=>{effect6(isDisplay)}}>effect6</button>
      {isDisplay ? count+"sec" : "press effect6 to start timer"}
    </div>
  )
}

