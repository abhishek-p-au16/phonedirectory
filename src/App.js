import React,{Component} from "react";
import Header from "./Header"

import './App.css'
class App extends Component {


  render() {
    let details =[
      {
        id: 1,
        name: 'srishti',
        Number: '34567004o01'

      },
      {
        id: 2,
        name: 'srishti',
        Number: '34567004o01'

      },
      {
        id: 3,
        name: 'devika',
        Number: '34567004o01'

      },
      {
        id: 4,
        name: 'sekhar',
        Number: '34567004o01'

      },
    ]


    return(
      <div>
        <Header/>
       <div className="component-body-container">
         <button className="button add-btn">Add</button>
         <div className="grid-container header-container">
           <span className="grid-item name-heading">name</span>
           <span className="grid-item phone-heading">Phone</span>
         </div>
         {
           details.map(sub=>{
             return(<div key ={sub.id} className="grid-container">
               <span className="grid-item ">{sub.name}</span>
               <span className="grid-item">{sub.Number}</span>
                    </div>
             )
           })
         }
       </div>
    



        
      </div>
   
    )
  }
}

export default App