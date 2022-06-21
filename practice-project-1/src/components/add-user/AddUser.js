import { useRef, useState } from "react";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const usernNameRef = useRef();
  const ageRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    props.newUserHandler({
      name: usernNameRef.current.value,
      age: ageRef.current.value,
    });
    usernNameRef.current.value = "";
    ageRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" required ref={usernNameRef}></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" required min={1} ref={ageRef}></input>
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button className="btn">Add User</button>
      </div>
    </form>
  );
}

export default AddUser;
