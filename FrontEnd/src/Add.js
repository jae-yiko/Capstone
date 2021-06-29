import React from 'react'
import axios from 'axios'


class Add extends React.Component{
    constructor(props)
    {
        super(props)
        this.state= {
            sname:'',
            sage: '',
            saverage:'',
            sgrade:'',
            steacher:'',
            created:[],
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNewStudent= this.addNewStudent.bind(this)
    }
    
    handleChange(event)
    {
        let addit= event.target.name
        let value = event.target.value
        this.setState({[addit]:value})
    }

    addNewStudent(){
        axios.post(`http://localhost:8081/api/addstudent`, this.state)
        .then((response) => {
            this.setState({created: response.data})
            console.log(response);
            console.log(response.data)
        })  
    }

    render(){
        return (
            <div className="addinputbtn">
                <div className="whiteBox">
                    <div className="containter">
                        <h2 className="register">Registration</h2>
                        <div className="row">
                            {/* <form className="form-inline"> */}
                                <div className="col-sm">
                                    <span className="details">Students Full Name</span>
                                    <input name = "sname" onChange={this.handleChange} className= "addName" text="text" placeholder="Enter students name"></input>
                                </div>
                                <div className="col-sm">
                                    <span className="details">Students Grade</span>
                                    <input name = "sgrade" onChange={this.handleChange} className= "addGrade" text="text" placeholder="Enter students grade"></input>
                                </div>
                                <div className="col-sm">
                                    <span className="details">Students Age </span>
                                    <input name = "sage" onChange={this.handleChange} className= "addAge" text="text" placeholder="Enter students age"></input>
                                </div>
                                <div className="col-sm">
                                    <span className="details">Students Average </span>
                                    <input name = "saverage" onChange={this.handleChange} className= "addAverage" text="text" placeholder="Enter students average"></input>
                                </div>
                                <div className="col-sm">
                                    <span className="details">Students Teacher </span>
                                    <input name = "steacher" onChange={this.handleChange} className= "addTeacher" text="text" placeholder="Enter students teacher"></input>
                                </div>
                                <div className="col-sm">
                                    <button  className="btn btn-primary btn-lg btn-block btn-sm" onClick = {this.addNewStudent} >Add Student</button>
                                </div>

                            {/* </form> */}
                        </div>
                    </div>
                </div>
                <table className="table table-bordered">
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
                        <tr >
                            <td>{this.state.created.sid}</td>
                            <td>{this.state.created.sname}</td>
                            <td>{this.state.created.sage}</td>
                            <td>{this.state.created.saverage}</td>
                            <td>{this.state.created.steacher}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
 

export default Add




// import React from 'react'

// const Add = () => {
//     return (
//         <div className="addinputbtn">
//         <input className= "addName" text="text" placeholder="Name"></input>
//         <input className= "addGrade" text="text" placeholder="Grade"></input>
//         <input className= "addAge" text="text" placeholder="Age"></input>
//         <input className= "addAverage" text="text" placeholder="Average"></input>
//         <input className= "addTeacher" text="text" placeholder="Teacher"></input>
//         <button className="updatebtn">Update Changes</button>
//     </div>
//     )
// }

// export default Add