import React,{Component} from 'react'
import AddSubscriber from './addSubscriber'
import Showsubscriber from './Showsubscriber'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class PhoneDirectory extends Component {
    constructor(){
        super();
        this.state={subscriberList:[
            {
                id:1,
                name: 'shilpa',
                phone: '67895445'
            },
            {
                id:2,
                name: 'hilpa',
                phone: '67895445'
            }
  


        ]
        }
    }

    addSubscriberHandler = (newSubscriber)=>{
        let subscriberList = this.state.subscriberList;
        if (subscriberList.length>0){
            newSubscriber.id = subscriberList[subscriberList.length-1].id+1;
        }
        else{
            newSubscriber.id = 1
        }
        subscriberList.push(newSubscriber);
        console.log(subscriberList)
    }
    render() {
        return (
            <Router>
                <Route exact path="/" render={(props)=><Showsubscriber {...props} subscriberList={this.state.subscriberList}/>}/>
                <Route exact path="/add" render={({history},props)=><AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/>
            </Router>

            
            
        )
    }
}

export default PhoneDirectory