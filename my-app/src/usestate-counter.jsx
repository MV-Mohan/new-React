import React, { useState } from 'react'

const UsestateCounter = () => {
    const[count,setcount]=useState(0)

    const increaseCount =()=>{
        setcount(count+1)
    }

    const decreaseCount =()=>{
        setcount(count-1)
    }
    const setMsg = ()=>{
      console.log()
    }
  return (
    <div>
         
       <h1>This is the Counter</h1>
       <h2>{count}</h2><br />
       <button onClick={decreaseCount}> - </button>
       <span>Count</span>
       <button onClick={increaseCount}> + </button>
        <h1>mister,{setMsg}</h1>
        <button onClick={()=>setMsg("good morning")}>greek</button> 
        <button onDoubleClick={()=>setMsg("good night")}>greek</button> 

    </div>
  )
}

export default UsestateCounter