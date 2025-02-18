import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { TAssignment } from "../../types";

type Props = {
  assignment: TAssignment;
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>
}
export function Assignment({assignment, setAssignments}:Props) {
  


  const toggleComplete = () => {
    const assignmentToChange = 
    setAssignments((prev) => [...prev]);
  }

  const completeSate = (completed:boolean) => {
    const completedCss = "";


  }
 
  // const deleteAssignment = () => {

  //   setAssignments((prev) => [...prev]);
  // }    

  return (
    <div className={styles.assignment}>


    <button key={assignment.task} onClick={toggleComplete} className={styles.checkContainer} > 
      <div /> 
    </button>

    {/* <p className={styles.textCompleted} >{assignment.task}</p> */}
    <p className={assignment.completed ? "{styles.textCompleted}" : ""}>{assignment.completed ? "{styles.textCompleted}" : ""}</p>

    
    <button className={styles.deleteButton}>
      {/* onClick={deleteAssignment}  */}
       <TbTrash size={20} /> 
       </button>

{/*  
      {prop.assignmentList?.map((item)=>(


          <li 
              className={`assignment`} 
              key={item} 
          >
              <button className={styles.checkContainer}> <div /> </button>
              {item}

              
              <button className={styles.deleteButton}> <TbTrash size={20} /> </button>
          </li>
      ))}  */}

    </div>
  );
}
