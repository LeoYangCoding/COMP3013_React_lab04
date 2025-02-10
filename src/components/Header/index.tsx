import {useState} from "react"
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type HeaderProps = {assignmentList: string|null, setAssignmentList:string|null}
export function Header(prop:HeaderProps) {

  const [assignmentList, setAssignmentList] = useState<string|null>(null); 
  
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={(e) => prop.setAssignmentList(e.target.value)}/>
        <button disabled={!prop.assignmentList}  >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
