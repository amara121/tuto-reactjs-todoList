const Todolist = ({ data }) => {
  return (
    <ul className="w-full flex flex-col gap-2">
      {data.length !== 0
        ? data.map((todo) => (
            <li key={todo.id} className="w-full flex">
              <span className="text-xl text-gray-800">
                {todo.text}
              </span>
            </li>
          ))
        : (
          <li>Vous n'avez pas de tâche actuellement!!!</li>
        )}
    </ul>
  );
};

export default Todolist;
