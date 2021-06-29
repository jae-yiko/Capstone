import React from 'react'
import axios from 'axios'
class RemoveStudent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state= {
            deleteId: '',
            removed:'',
        }
        this.handleRemoveChange = this.handleRemoveChange.bind(this)
        this.remove= this.remove.bind(this)
    }
    
    handleRemoveChange(event)
    {
        let removeId = event.target.name
        let value = event.target.value
        this.setState({[removeId]:value})
    }

    remove(){
        axios.delete(`http://localhost:8081/api/student/${this.state.deleteId}`)
        .then((response)=>{
            this.setState({removed: response.data})
            console.log(response);
            //confirmed that response.data is the response sentence that I want to show after deleting a student
            console.log(response.data)
        })
        .catch((error) => {
            this.setState({removed:"Student with id:" + this.state.deleteId + " is not found"})
            console.log("Student with " + this.state.deleteId + " is not found")
        })
    }

    render()
    {
        return (
            <div>
                <div className="removeinputbtn">
                    <div className="container">
                        <h2>Remove</h2>
                        <div className="row ">
                            <div className="col-sm">
                                <span className="details">Student id</span>
                                <input text="text" name = "deleteId" className="removeName" placeholder="Enter students id" value={this.state.deleteId} onChange={this.handleRemoveChange}></input>
                            </div>
                            <div className="col-sm">
                                <button onClick={this.remove} className="btn btn-primary btn-lg btn-block btn-sm">Remove Student</button> <br/>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.removed}
            </div>
            
        )
    }
}


export default RemoveStudent