import './App.css';
import Nav from './Nav'

import Add from './Add'
import Remove from './Remove'
import Home from './Home'
import Update from './Update'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import axios from 'axios';


function App() {
  //this is just an example of where i can use axios in the future
  // axios.get("http://localhost:8081/api/allstudents").then(data => console.log(data))
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {Home}></Route>
          <Route path = "/Home" exact component = {Home}></Route>
          <Route path = "/Add" component = {Add}></Route>
          <Route path = "/Remove" component = {Remove}></Route>
          <Route path = "/Update" component = {Update}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
