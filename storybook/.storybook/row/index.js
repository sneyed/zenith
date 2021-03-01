import styles from "./row.module.scss";

export default function Row({ children, columns = 1, gap = "16px" }) {
  return (
    <div
      className={styles.container}
      style={{ "--gap": gap, "--columns": columns }}
    >
      {children}
    </div>
  );
}
