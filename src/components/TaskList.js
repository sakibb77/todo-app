import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list bg-gray-900 container lg:max-w-4xl mx-auto p-10 flex flex-col gap-2 overflow-auto">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
