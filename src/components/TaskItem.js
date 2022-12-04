import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { DeleteContext, EditContext } from "../App";

const TaskItem = ({ task, handleEditeSubmit, editedText, setEditedText }) => {
  const handleDelete = useContext(DeleteContext);
  const handleEdit = useContext(EditContext);
  const [checked, setChecked] = useState(false);

  const handleCheckBox = () => {
    setChecked(!checked);
  };

  return (
    <div className=" bg-gradient-to-r from-gray-800 to-slate-800 rounded p-5 flex items-center justify-between hover:bg-gradient-to-r  hover:from-teal-800 hover:to-gray-800 group">
      <div className="task-item-left flex items-center gap-3">
        <span className="flex items-center">
          <input
            required
            type="checkbox"
            name=""
            id=""
            className="accent-teal-500 h-4 w-4"
            onChange={handleCheckBox}
          />
        </span>

        {task.isEditable && (
          <form action="" onSubmit={(e) => handleEditeSubmit(e, task.id)}>
            <input
              type="text"
              required
              name=""
              id=""
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="bg-transparent outline-none border-b-2 border-gray-400"
            />
          </form>
        )}

        {!task.isEditable && (
          <p
            className={`text-lg md:xl font-semibold tracking-wide duration-300 group-hover:text-teal-400 ${
              checked && "line-through text-gray-400"
            }`}
          >
            {task.text}
          </p>
        )}
      </div>
      <div className="task-item-right flex gap-3 items-center text-2xl text-gray-500 ">
        <button
          className="hover:text-teal-400 duration-300 cursor-pointer"
          onClick={() => handleEdit(task.id)}
        >
          <BiEdit />
        </button>
        <button
          className="hover:text-rose-500 duration-300 cursor-pointer"
          onClick={() => handleDelete(task.id)}
        >
          <BiTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
