import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";


function App() {
  const [ data, setData ] = useState([
    // {
    //   id: 1,
    //   text: "je vais regarder la télé a 15h",
    // },
    // {
    //   id: 2,
    //   text: "je dois etudier a 20h",
    // }
  ])

  const addTodo = (newtodo) =>{
    setData([newtodo, ...data])
  }

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[350px] w-full flex flex-col items-center gap-5">
        <h2 className="text-3xl text-blue-500 font-bold">Tuto reactjs</h2>
        <Header />
        
        <Form addTodo={addTodo} />

        <Todolist data={data} />
      </div>
    </div>
  );
}

export default App;
