import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Board from "../components/dashboard/Board";
import Input from "../components/dashboard/Input";

const Dashboard = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div id="dashboard" className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <div className="ml-72 flex-1 p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-purple-400">My Tasks</h1>

        <Input taskList={taskList} setTaskList={setTaskList} />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
          {taskList.map((task, index) => (
            <Board
              key={index}
              task={task}
              taskList={taskList}
              index={index}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
