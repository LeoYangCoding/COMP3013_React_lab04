import {useState} from "react"
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import {TAssignment} from "../../types"

type Props = { setAssignments:React.Dispatch<React.SetStateAction<TAssignment[]>>}
export function Header({setAssignments}:Props) {

  const [assignment, setAssignment] = useState(""); 
  const handleClick = () => {
    // setAssignments((assignmentsList)=>{       //Automatic import the data in the assignment claimed in the App.tsx
    //   const newAssignmentList = [];
    //   assignmentsList.forEach(assignment => newAssignmentList.push(assignment))
    //   newAssignmentList.push(newAssignment)
    // });

    setAssignments((prev)=>[...prev,{id:String(prev.length+1), task: assignment, completed:false}] );


  }

  // if(prop.assignments){
    
  //   const handleSubmit = (e:any) =>{
  //     e.preventDefault();
      
  //     setAssignments((assignments)=>{
  //         setAssignments([...assignments,assignment]);
  //         // const newAssignment = {id:"2", task: assignment, complete:false};
  //         // const newAssignmentList = [];
  //         // prop.assignments.forEach(assignment => newAssignmentList.push(assignment));
  //         return newAssignmentList;
    
  //       });
  //   }else{
  //     setAssignments([assignment])
  //   }
  //   setAssignment("");
  // }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} > 
        {/* onSubmit = {handleSubmit} */}
        <input placeholder="Add a new assignment" type="text" value={assignment} onChange={(e) => setAssignment(e.target.value)}/>
        <button disabled={!assignment} onClick={handleClick} >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};


