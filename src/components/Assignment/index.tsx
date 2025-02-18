import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { TAssignment } from "../../types";

type Props = {
  assignment: TAssignment;
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>
}
export function Assignment({assignment, setAssignments}:Props) {
  


  const toggleComplete = (key:string) => {
    setAssignments((prev) => [...prev]);
  }

  
 
  const deleteAssignment = (id: string) => {

    setAssignments((prev) => prev.filter((item)=>item.id !==id));
  };    

  return (
    <div className={styles.assignment}>


    <button key={assignment.id} onClick={()=>toggleComplete(assignment.id)} className={styles.checkContainer} > 
      <div /> 
    </button>

    <p className={assignment.completed ? `${styles.textCompleted}` : ""}>{assignment.task}</p>

    
    <button key={assignment.id} onClick={()=>deleteAssignment(assignment.id)}  className={styles.deleteButton}>
      
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
