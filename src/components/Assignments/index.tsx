import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import {TAssignment} from "../../types"


type Props = {
  assignments: TAssignment[]
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>
};
export function Assignments({assignments, setAssignments}:Props) {
  const countCompleted = (assignments:TAssignment[]) =>{
    return assignments.filter(item => item.completed ===true).length;
  }
  const completedAssignmentNumber = countCompleted(assignments)
  console.log(assignments)
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments?.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignmentNumber} of {assignments?.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map(assignment  => <Assignment assignment={assignment} setAssignments={setAssignments}/>)}
      </div>

    </section>
  );
}
