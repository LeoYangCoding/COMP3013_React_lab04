import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Props = {title: string}
export function Assignment({title}:Props) {
  return (
    <div className={styles.assignment}>


    <button className={styles.checkContainer}> 
      <div /> 
    </button>

    <p>{title}</p>

    
    <button className={styles.deleteButton}>
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
