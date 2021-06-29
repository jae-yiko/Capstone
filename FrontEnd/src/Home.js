import Search from './Search'
import React, { useState, useEffect } from 'react';
import StudentServices from './services/StudentServices';



const Home = () => {
    //studentData is a variable that represents a piece/part of state
    //setStudentData is a method/function that can change the state
    //useState([]) is the useState hook which is also a function and we pass it an argument that will be the inital value of the state
    const [studentData, setStudentData] = useState([]);
    //useEffect(()=> { is acting like a lifecycle method, it is reacting to any changes that is happening to my component/state
    useEffect(()=> {
        //StudentServices is coming from a file called StudentServices where are created an object/instance of a class
        //this is saying going to StudentServices.getStudents() and the axios=promise=async=takesometimetogetdata and that is why I am using .then() can be used on promises so that it will handle the response data
        StudentServices.getStudents().then((dataset) =>setStudentData (dataset.data))
        // setStudentData(StudentServices.getStudents());
    },[])
    console.log(studentData);

    return (
        <div>
            <Search/>
            <table className="table table-bordered table-hover" >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Student Name</th>
                        <th>Grade</th>
                        <th>Age</th>
                        <th>Average</th>
                        <th>Teacher</th>
                    </tr>
                </thead>
                <tbody>
            {studentData.map((val)=>{
                return(
                    // need a keyprop
                    <tr sid={val.sid} key={val.sid}>
                        <td>{val.sid}</td>
                        <td>{val.sname}</td>
                        <td>{val.sgrade}</td>
                        <td>{val.sage}</td>
                        <td>{val.saverage}</td>
                        <td>{val.steacher}</td>
                    </tr>
                )
            })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
