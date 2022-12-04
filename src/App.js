import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const App = () => {
  const [tasks, setTasks] = useState([]);

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-wrapper bg-gradient-to-t from-gray-900 to-teal-900 text-lg text-gray-100 flex flex-col py-10 px-4 ">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
