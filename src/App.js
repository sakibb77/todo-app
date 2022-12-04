import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { createContext } from "react";

export const DeleteContext = createContext();
export const EditContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editedText, setEditedText] = useState("");
  const [toggleEditeMode, setToggleEditeMode] = useState(true);

  //getting data from the server
  useEffect(() => {
    fetchingData();
  }, []);

  //fetching data from server
  const fetchingData = async () => {
    try {
      const res = await fetch(
        "https://dramatic-quintessential-deerstalker.glitch.me/tasks"
      );
      if (!res.ok) throw new Error("somethign went wrong");
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  //deleting data
  const handleDelete = (id) => {
    deleteData(id);
    //set updated tasks
    setTasks(tasks.filter((task) => id !== task.id));
  };

  //delete data
  const deleteData = async (id) => {
    await fetch(
      `https://dramatic-quintessential-deerstalker.glitch.me/tasks/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "aplication/json",
        },
      }
    );
  };

  //data editing
  const handleEdit = (id) => {
    const [editableTarget] = tasks.filter((task) => id === task.id);

    editableTarget.isEditable = true;
    setEditedText(editableTarget.text);

    setTasks([...tasks]);
    setToggleEditeMode(false);

    //re-arrange
    tasks
      .filter((task) => task.id !== id)
      .map((editableEl) => (editableEl.isEditable = false));
  };

  //editing task form handler
  const handleEditeSubmit = (e, id) => {
    e.preventDefault();
    setToggleEditeMode(!toggleEditeMode);

    //update data
    const updateData = {
      text: editedText,
      id: id,
    };

    //put request
    puttingRequest(id, updateData);

    //real time update
    const [editableTarget] = tasks.filter((task) => id === task.id);
    editableTarget.isEditable = false;
    editableTarget.text = updateData.text;
  };

  const puttingRequest = async (id, newData) => {
    await fetch(
      `https://dramatic-quintessential-deerstalker.glitch.me/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );
  };

  return (
    <div className="main-wrapper bg-gradient-to-t from-gray-900 to-teal-900 text-lg text-gray-100 flex flex-col py-10 px-4 ">
      <DeleteContext.Provider value={handleDelete}>
        <EditContext.Provider value={handleEdit}>
          <Header />
          <AddTask tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            error={error}
            loading={loading}
            handleEditeSubmit={handleEditeSubmit}
            editedText={editedText}
            setEditedText={setEditedText}
          />
          <Footer />
        </EditContext.Provider>
      </DeleteContext.Provider>
    </div>
  );
};

export default App;
