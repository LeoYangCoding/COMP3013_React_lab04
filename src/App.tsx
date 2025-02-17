// Tingtao (Leo) Yang
import React from "react"
import {useState} from "react"
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import {TAssignment} from "./types"


function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([]); //or <TAssignment[]> can be replaced by Array<TAssignment>
  // const assignments = {};
  return (
    <>

      <Header setAssignments={setAssignments}/>
      <Assignments assignments={assignments}/>
    </>
  );
}

export default App;
