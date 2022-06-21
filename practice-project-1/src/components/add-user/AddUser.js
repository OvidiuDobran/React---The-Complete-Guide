import { useState } from "react";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    props.newUserHandler({ name: userName, age });
    setUserName("");
    setAge(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={(event) => setUserName(event.target.value)}
            required
            value={userName}
          ></input>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={(event) => setAge(event.target.value)}
            required
            min={1}
            value={age}
          ></input>
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button className="btn">Add User</button>
      </div>
    </form>
  );
}

export default AddUser;
