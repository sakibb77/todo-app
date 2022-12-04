import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const TaskItem = ({ task }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-slate-800 rounded p-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group">
      <div className="task-item-left flex items-center gap-3">
        <span className="flex items-center">
          <input
            required
            type="checkbox"
            name=""
            id=""
            className="accent-teal-500 h-4 w-4"
          />
        </span>
        <p className="text-lg md:xl font-semibold tracking-wide group-hover:text-teal-400">
          {task.text}
        </p>
      </div>
      <div className="task-item-right flex gap-3 items-center text-2xl text-gray-500 ">
        <button className="hover:text-teal-400 duration-300 cursor-pointer ">
          <BiEdit />
        </button>
        <button className="hover:text-rose-500 duration-300 cursor-pointer">
          <BiTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
