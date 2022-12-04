import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  error,
  loading,
  handleEditeSubmit,
  editedText,
  setEditedText,
}) => {
  return (
    <div className="task-list bg-gray-900 container lg:max-w-4xl mx-auto p-10 flex flex-col gap-2 overflow-auto">
      {loading ? (
        <p className="text-center">{error ? error : "loading..."}</p>
      ) : tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            handleEditeSubmit={handleEditeSubmit}
            editedText={editedText}
            setEditedText={setEditedText}
          />
        ))
      ) : (
        <p className="text-gray-500 capitalize text-center text-lg font-semibold">
          data not found
        </p>
      )}
    </div>
  );
};

export default TaskList;
