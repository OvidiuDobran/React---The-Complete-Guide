import AddUser from "./components/add-user/AddUser";
import Card from "./components/card/Card";
import styles from "./App.module.css";
import { useState } from "react";
import UsersList from "./components/users-list/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  function addNewUser(user) {
    setUsers((prevState) => [...prevState, user]);
  }

  return (
    <div className={styles.container}>
      <Card>
        <AddUser newUserHandler={addNewUser}></AddUser>
      </Card>
      {users.length > 0 && (
        <Card>
          <UsersList users={users}></UsersList>
        </Card>
      )}
    </div>
  );
}

export default App;
