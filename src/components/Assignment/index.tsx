import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Props = {title: string }
export function Assignment({title}:Props) {
  const toggleComplete = () => {
    const assignmentToChange = 
    setAssignments((prev) => [...prev]);
  }
 
  const deleteAssignment = () => {

    setAssignments((prev) => [...prev]);
  }    

  return (
    <div className={styles.assignment}>


    <button onClick={toggleComplete} className={styles.checkContainer}> 
      <div /> 
    </button>

    <p>{title}</p>

    
    <button onClick={deleteAssignment} className={styles.deleteButton}>
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
