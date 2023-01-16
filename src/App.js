import './App.css';
import Todolist from './component/todolist';
import Addtodo from './component/addtodo';
import { useState } from 'react';

//const todos = [
//  { text:"wake Up Early" , id :1 },
//  { text:"Check the Charts" , id :2 },
//];



function App() {


  const [ todos , setTodos ] = useState([
    { text:"wake Up Early" , id :1 , isDone:false },
    { text:"Check the Charts" , id :2 ,isDone : false },
    ])
    

    const deleteHandler = (ID) =>{
      setTodos(
        todos.filter(el=> el.id!==ID)
      )

    }

    const doneHandler=(ID)=>{
      setTodos(
        todos.map(el=>  el.id=== ID? { ...el, isDone: !el.isDone} : el  )
      );
    };

    const [input,setInput]=useState('')

    const addHandler = (newTodo) =>{
      setTodos(
        [...todos,newTodo]
      )
    }



    return (
    <div className="App">
      <h1>To Do App !!</h1>
     <Addtodo setInput={setInput} input={input} addHandler={addHandler}/>
     <Todolist tasklist={todos} deleteHandler={deleteHandler} doneHandler={doneHandler} />

         </div>
  );
}

export default App;
