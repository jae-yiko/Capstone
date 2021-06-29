import axios from 'axios'
import React, {Component} from 'react'

class Search extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            sid: '',
            idFound:[],
        }
        this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
    }
    
    handleChange(event){
        let changeIt = event.target.name
        let value = event.target.value
        this.setState({[changeIt]:value})
    }
    search(event){
        axios.get( "http://localhost:8081/api/studentSearch/" + this.state.sid)  
        .then((response) => {
            this.setState({idFound: [response.data]})
            console.log(response);
            console.log(response.data);
        })
    }

    render (){
        return(
            <div>
                <div className="allofsearch">
                    <div className="containter">
                        <h2>Search by id</h2>
                        <div className="row">
                            <div className="col-sm">
                                <span className="details">Student id</span>
                                <input className="searchIdName" text="text" name="sid" value={this.state.sid} onChange={this.handleChange} placeholder="Enter students id"></input>
                            </div>
                            <div className="col-sm">
                                <button className="btn btn-primary btn-lg btn-block btn-sm" onClick={this.search}>Search</button> <br/>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.idFound.map((val)=>
                (
                    <div sid={val.sid} key={val.sid}>
                        id: {val.sid} <br/>
                        Full Name: {val.sname}<br/>
                        Grade: {val.sgrade}<br/>
                        Age: {val.sage}<br/>
                        Average: {val.saverage}<br/>
                        Teacher: {val.steacher}<br/>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default Search
