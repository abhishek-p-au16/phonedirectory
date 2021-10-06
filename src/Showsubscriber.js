import React,{Component} from "react";
import Header from "./Header"

import './Showsubscriber.css'
import {Link} from 'react-router-dom'
class Showsubscriber extends Component {
  clickHandler(message){
    alert(message)

  }


   
  render() {
    // let details =[
    //   {
    //     id: 1,
    //     name: 'srishti',
    //     Number: '34567004o01'

    //   },
    //   {
    //     id: 2,
    //     name: 'srishti',
    //     Number: '34567004o01'

    //   },
    //   {
    //     id: 3,
    //     name: 'devika',
    //     Number: '34567004o01'

    //   },
    //   {
    //     id: 4,
    //     name: 'sekhar',
    //     Number: '34567004o01'

    //   },
    // ]
    


    return(
      <div>
        <Header  heading="PHONE DIRECTORY"/>
       <div className="component-body-container">
        <Link to="/add"> <button className="button add-btn">Add</button></Link>
         <div className="grid-container header-container">
           <span className="grid-item name-heading">name</span>
           <span className="grid-item phone-heading">Phone</span>
         </div>
         {
           this.props.subscriberList.map(sub=>{
             return(<div key ={sub.id} className="grid-container">
               <span className="grid-item ">{sub.name}</span>
               <span className="grid-item">{sub.Number}</span>
               <button className="button deletebtn" onClick={this.clickHandler.bind(this,"dlete handler clicked")}>Delete</button>
                    </div>
             )
           })
         }
       </div>
    



        
      </div>
   
    )
  }
}

export default Showsubscriber