import { useState } from "react";
import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [taskText, setTaskText] = useState("");

  const reqBody = taskText
    ? {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    : { method: "GET" };
  const [isLoading, error] = useHttp(
    reqBody,
    (resData) => {
      if (!taskText) {
        return;
      }
      const generatedId = resData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    },
    [taskText]
  );

  const enteredTaskHandler = (task) => {
    setTaskText(task);
  };
  return (
    <Section>
      <TaskForm onEnterTask={enteredTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
