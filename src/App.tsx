// Tingtao (Leo) Yang
import React from "react"
import {useState} from "react"
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";


function App() {
  const [assignmentList, setAssignmentList] = useState<string|null>(null); 
  return (
    <>

      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
      <Assignments assignmentList={assignmentList}/>
    </>
  );
}

export default App;
