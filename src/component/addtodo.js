import React from 'react'

export default function Addtodo({setInput ,input , addHandler}) {

const addTodo=()=>{
  addHandler({id:Math.random() , isDone:false , text:(input)})
}



  return (
    <div>
      <input type="text" placeholder="Type Your Task Here"  
      onChange={ (ev) => setInput(ev.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}
