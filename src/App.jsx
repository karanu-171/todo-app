import React, {useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import Todo from './components/Todo';
import './App.css'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100 `,
  count: `text-center p-2`
}

function App() {
  const [todos, setTodos] = useState(['learn react', 'grind leetcode'])

  //create todo
  // read todo from firebase
  // update todo
  // delete todo
  return ( 
   <div className={style.bg}>
    <div className={style.container}>
      <h3 className={style.heading}>To do App</h3>
      <form className={style.form}>
        <input className={style.input} placeholder="Add todo"/>
        <button className={style.button}><AiOutlinePlus/></button>
      </form>
      <ul>
        {todos.map((todo, index)=>(
          <Todo key={index} todo={todo}/>
        ))}
      </ul>
      <p className={style.count}>You have 2 todos</p>
    </div>
   </div>
  )
}

export default App
