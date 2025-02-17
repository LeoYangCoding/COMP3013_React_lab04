import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import {TAssignment} from "../../types"


type Props = {assignments: TAssignment[]}
export function Assignments({assignments}:Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments?.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of {assignments?.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        <Assignment assignments={assignments}/>
      </div>
    </section>
  );
}
