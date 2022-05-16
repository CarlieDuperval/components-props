import React, { useState } from "react";
import Greet from "./Greet";

// This is the list
const students = [
    {id: 1, firstName:"Wade" ,lastName:"Booth" },
    {id: 2, firstName:"Alex" ,lastName:"HAll" },
    {id: 3, firstName:"Maria" ,lastName:"Bruno" },
    {id: 4, firstName:"Arthur" ,lastName:"Silva" },
    {id: 5, firstName:"Carlie"  },

]

// this is the mAP
function Main () {
    const [studentList , setStudentList] = useState(students);
    const handleClick = () => {
    // Add Rodrigo to our list of students (we need useState to pus )
    const rodrigo = { id: 6, firstName:"Rodrigo" }
    setStudentList([...students, rodrigo])
    //const newStudentList = [... students, rodrigo
    // setStudentList(newStudentList)
    document.querySelector("button").style.display = 'none'
    }

    return (
    <main>
        <button onClick={handleClick}>Add Rodrigo</button>
     {studentList.map(student => {
         return (
         <Greet 
         // This is the key
        key={student.id}
        lastName={student.lastName}
        firstName={student.firstName}/>
         )
     })}
    </main>
    )
}


export default Main;