import React, { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTast] = useState("");
  const inputRef = useRef(null);

  //add task handler event
  const addTaskHandler = (e) => {
    e.preventDefault();

    //post task into server
    taskPosting(task);

    //input focus blur
    inputRef.current.blur();
    //input clear
    setTast("");
  };

  //task posting
  const taskPosting = async (text) => {
    const res = await fetch(
      "https://dramatic-quintessential-deerstalker.glitch.me/tasks",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );

    //real time data show
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <form
      className="bg-gray-900 flex justify-between items-center gap-4 p-10 lg:max-w-4xl mx-auto container flex-col md:flex-row"
      onSubmit={(e) => addTaskHandler(e)}
    >
      <input
        value={task}
        onChange={(e) => setTast(e.target.value)}
        ref={inputRef}
        type="text"
        name=""
        id=""
        className="bg-transparent outline-none text-xl border-b-2 border-teal-500 text-center"
        placeholder="what things to do"
      />
      <button
        type="submit"
        className="border-teal-500 border-2 rounded-sm py-2 px-5 bg-teal-500/10 text-teal-500 text-xl hover:bg-teal-500 hover:text-gray-900 duration-300"
      >
        Add task
      </button>
    </form>
  );
};

export default AddTask;
