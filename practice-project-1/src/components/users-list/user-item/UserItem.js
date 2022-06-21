import styles from "./UserItem.module.css";

export default function UserItem(props) {
  const { user } = props;

  return (
    <div className={styles.container}>
      {user.name + " (" + user.age + " years old)"}
    </div>
  );
}
