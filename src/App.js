import React,{Component} from "react";
import Header from "./header"
class App extends Component {


  render() {
    return(
      <div>
        <Header/>
        <div>
          <button class="btn btn-primary">add contact</button>
        </div>
        <div>
          <span>name</span><br/>
          <span>number</span>
        </div>



        
      </div>
   
    )
  }
}

export default App