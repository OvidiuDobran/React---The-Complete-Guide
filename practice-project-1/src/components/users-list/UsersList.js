import UserItem from "./user-item/UserItem";
import styles from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <div className={styles.container}>
      {props.users.map((user, index) => (
        <UserItem key={index} user={user}></UserItem>
      ))}
    </div>
  );
}
