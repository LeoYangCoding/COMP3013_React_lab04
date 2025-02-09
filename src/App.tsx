// Tingtao (Leo) Yang
import {useState} from "react"
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";


function App() {
  const [assignmentList, setAssginment] = useState<object|null>(); 
  return (
    <>

      <Header />
      <Assignments />
    </>
  );
}

export default App;
