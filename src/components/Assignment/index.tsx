import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type AssignmentProps = {assignmentList: string[]|null}
export function Assignment(prop:AssignmentProps) {
  return (
    <div className={styles.assignment}>

      {prop.assignmentList?.map((item)=>(


          <li 
              className={`assignment`} 
              key={item} 
          >
              <button className={styles.checkContainer}> <div /> </button>
              {item}

              
              <button className={styles.deleteButton}> <TbTrash size={20} /> </button>
          </li>
      ))}

    </div>
  );
}
