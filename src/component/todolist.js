import React from 'react'
import Todo from './todo'

export default function Todolist({tasklist , deleteHandler , doneHandler}) {
  return (
    <div>
        {tasklist.map((el) => (      <Todo ele={el}  deleteHandler={deleteHandler}  doneHandler={doneHandler}/>
))}
    </div>
  )
}
