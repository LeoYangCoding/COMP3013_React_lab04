// Tingtao (Leo) Yang
import React from "react"
import {useState} from "react"
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import {TAssignment} from "./types"


function App() {
  const [assignmentList, setAssignmentList] = useState<TAssignment[]>([]); 
  // const assignmentList = {};
  return (
    <>

      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
      <Assignments assignmentList={assignmentList}/>
    </>
  );
}

export default App;
