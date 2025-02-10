import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type AssignmentsProps = {assignmentList: string[]|null}
export function Assignments(prop:AssignmentsProps) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{prop.assignmentList?.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of {prop.assignmentList?.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        <Assignment assignmentList={prop.assignmentList}/>
      </div>
    </section>
  );
}
