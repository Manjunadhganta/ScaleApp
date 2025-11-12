import React from "react";

const Board = ({ task, taskList, index, setTaskList }) => {
  const handleDelete = () => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  return (
    <div className="max-w-md w-full flex flex-col items-center justify-between border border-gray-700 bg-gray-800 rounded-xl text-center text-white text-lg p-4 shadow-md hover:shadow-lg transition-all duration-200">
      <p className="mb-3">{task}</p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-1.5 px-3 font-semibold transition-all duration-200"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Board;
