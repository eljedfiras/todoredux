import React from 'react'

export default function Todo({ele , deleteHandler , doneHandler}) {

  const deleteTodo=()=>{
  deleteHandler(ele.id)
}
   
const doneTodo=()=>{
  doneHandler(ele.id)
}

  return (
    <div>
        <h2  style={ele.isDone? {backgroundColor:"Black"}:{}}>{ele.text}</h2>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={doneTodo}>{ele.isDone? "unDone":"Done"}</button>
    </div>
  )
}
