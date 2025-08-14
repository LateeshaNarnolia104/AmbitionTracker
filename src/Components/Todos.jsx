import { useState, useEffect } from "react";
import Icons from "./Icons";
import BackIcon from "./Backicon";

function Todos() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim() || !date) return;
    const newTask = { text: task.trim(), date, completed: false };
    setTodos([...todos, newTask]);
    setTask("");
    setDate("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-24 pb-8 bg-[#051F45] text-[#F2C4CD]"
    style={{ backgroundImage: "url('/bgforbp.png')" }} >
      <BackIcon />
      <Icons />
      <h1 className="text-4xl font-bold mb-4 text-[#051F45] drop-shadow-md">Todo List</h1>
      
      <div className="flex flex-col md:flex-row gap-2 mb-4 w-full max-w-lg">
        <input
          type="text"
          placeholder="Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-[#F2C4CD] p-2 rounded-lg bg-[#F2C4CD] text-[#051F45] placeholder:text-[#051F45]/60 shadow focus:outline-none focus:ring-2 focus:ring-[#051F45] w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-[#F2C4CD] p-2 rounded-lg bg-[#F2C4CD] text-[#051F45] shadow focus:outline-none focus:ring-2 focus:ring-[#051F45]"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 rounded-lg bg-[#F2C4CD] text-[#051F45] font-semibold shadow hover:bg-[#e8a6b8] hover:text-[#051F45] transition"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-lg overflow-y-auto mt-4">
        {todos.map((t, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#F2C4CD] text-[#051F45] shadow p-4 rounded-lg mb-3 border border-[#e8a6b8]"
          >
            <div>
              <p className={`font-medium ${t.completed ? "line-through opacity-60" : ""}`}>
                {t.text}
              </p>
              <p className="text-sm opacity-70">{t.date}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleTodo(i)}
                className="px-3 py-1 rounded-lg bg-[#051F45] text-[#F2C4CD] shadow border border-[#F2C4CD] hover:bg-[#F2C4CD] hover:text-[#051F45] transition font-semibold"
              >
                {t.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteTodo(i)}
                className="px-3 py-1 rounded-lg bg-red-400 text-white shadow hover:bg-red-500 transition font-semibold"
              >
                Del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
