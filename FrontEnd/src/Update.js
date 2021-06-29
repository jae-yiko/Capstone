import React, {Component} from 'react'
import axios from 'axios'
class Update extends Component{
    constructor(props)
    {
        super(props)
        this.state= {
            sid:'',
            sname:'',
            sage: '',
            saverage:'',
            sgrade:'',
            steacher:'',
            update:'',
            updated:[],
        }
        this.handleChange1 = this.handleChange1.bind(this)
        this.update= this.update.bind(this)
        // this.showNewStudent= this.showNewStudent.bind(this)
    }
    
    handleChange1(event)
    {
        let changeIt= event.target.name
        let value = event.target.value
        this.setState({[changeIt]:value})
    }

    update(){
        axios.put(`http://localhost:8081/api/student/${this.state.sid}`,
        {
            sname:this.state.sname, 
            sgrade: this.state.sgrade,
            sage:this.state.sage,
            saverage:this.state.saverage,
            steacher: this.state.steacher,
        })
        // axios.put(`http://localhost:8081/api/student${this.state.updateId}`, this.state)
        .then((response) => {
            this.setState({update: response.data})
            console.log(response);
            console.log(response.data);
        })
        .catch((error) => {
            this.setState({updated:"Student with id:" + this.state.sid + " is not found"})
        })
    }
    
    render (){
        return(
        <div className="everything">
            <div className="allofupdate">
                <div className="container">
                    <div >
                        <h2>Update Information</h2>
                        <div className="row ">
                            <div className="col-sm">
                                <span className="details">Student id</span>
                                <input value={this.state.sid} name="sid" onChange={this.handleChange1} className="updateThisId" text="text" placeholder="Enter students id"></input>
                            </div>
                            <div className="col-sm">
                                <span className="details">Students Full Name </span>
                                <input value={this.state.sname} name="sname" onChange={this.handleChange1} className="updateName" text="text" placeholder="Enter students name"></input>
                            </div>
                            <div className="col-sm">
                                <span className="details">Students Grade</span>
                                <input value={this.state.sgrade} name="sgrade" onChange={this.handleChange1} className="updateGrade" text="text" placeholder="Enter students grade"></input>
                            </div>
                            <div className="col-sm">
                                <span className="details">Students Age </span>
                                <input value={this.state.sage} name="sage" onChange={this.handleChange1} className="updateAge" text="text" placeholder="Enter students age"></input>
                            </div>
                            <div className="col-sm">
                                <span className="details">Students Average</span>
                                <input value={this.state.saverage} name="saverage" onChange={this.handleChange1} className="updateAverage" text="text" placeholder="Enter students average"></input>
                            </div>
                            <div className="col-sm">
                                <span className="details">Students Teacher </span>
                                <input value={this.state.steacher} name="steacher" onChange={this.handleChange1} className="updateTeacher" text="text" placeholder="Enter students teacher"></input>
                            </div>
                            <div></div>
                        </div>
                        <button onClick = {this.update} className="btn btn-primary btn-lg btn-block btn-sm ">Update Changes</button>
                    </div>
                </div>
                
            </div>
                <table  className="table table-bordered">
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
                        <tr>
                            <td>{this.state.update.sid}</td>
                            <td>{this.state.update.sname}</td>
                            <td>{this.state.update.sgrade}</td>
                            <td>{this.state.update.sage}</td>
                            <td>{this.state.update.saverage}</td>
                            <td>{this.state.update.steacher}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        )
    }
}


export default Update