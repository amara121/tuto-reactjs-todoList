import { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: setId(),
      text: text,
    }

    addTodo(newTodo)

    setText("")

  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full flex items-center gap-2"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 pl-4 border-blue-400 flex-1 h-11 rounded-xl focus:outline-none focus:border-4"
        type="text"
        placeholder="Nouvelle tâche..."
      />
      <button className="bg-blue-400 rounded-xl h-11 w-20 font-bold text-white">
        Ajouter
      </button>
    </form>
  );
};

let id = 0

const setId = () => {
  return ++id
}

export default Form;
