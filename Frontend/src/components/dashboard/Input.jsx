import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <form
      onSubmit={handleAddTask}
      className="flex items-center gap-3 mt-6 bg-gray-900 p-4 rounded-xl border border-gray-700 w-full md:w-[80%] max-w-2xl"
    >
      <input
        className="flex-1 bg-gray-800 text-white rounded-lg py-2 px-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        type="text"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold transition"
      >
        Add
      </button>
    </form>
  );
};

export default Input;
