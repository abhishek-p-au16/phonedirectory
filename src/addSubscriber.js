import React,{Component} from 'react';
import Header from './Header'
import "./addsubscriber.css"
import {Link} from 'react-router-dom'

class AddSubscriber extends Component {

    constructor(){
        super()

        this.state = {
            id : 0,
            name : "",
            phone : "",
        }
       

    }
    inputChangedhandler =(e)=>{
        const state = this.state
        state[e.target.name] = e.target.value
        this.setState(state)
        
    }
    onformSubmitted=(e)=>{
        e.preventDefault()
        this.props.addSubscriberHandler(this.state)
        this.setState({id:0,name:'',phone:''})
        this.props.history.push('/')
    }
    
    render() {
        const{name,phone}= this.state
        return(
            <div>
                <Header heading="addSubscriber"/>
                <div className="component-body-container">
                  <Link to='/'> <button className="button">Back</button></Link>

               
                    <form class="subscriber-form" onSubmit={this.onformSubmitted.bind(this)}>
                    <label htmlFor="name" className="label-control">Name</label><br/>
                    <input className="input-control" id="name" type="text" name="name" onChange ={this.inputChangedhandler} placeholder=""/><br/>
                    <label htmlFor="phone" className="label-control">Phone Number</label><br/>
                    <input className="input-control" id="phone" type="text" name="phone" onChange ={this.inputChangedhandler} placeholder=""/>
                    <div className=".subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to added:</span> <br/>
                        <span className="subscriber-info">name:{name}</span> <br/>
                        <span className="subscriber-info">phone:{phone}</span> <br/>
                    </div>
                    <button type="submit" className="button add-btn" >Add</button>


                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber 