import React, { useState } from "react";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const [isLoading, error, performRequest] = useHttp(
    { method: "GET" },
    (resData) => {
      const loadedTasks = [];

      for (const taskKey in resData) {
        loadedTasks.push({ id: taskKey, text: resData[taskKey].text });
      }

      setTasks(loadedTasks);
    },
    []
  );

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={performRequest}
      />
    </React.Fragment>
  );
}

export default App;
