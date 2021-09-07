import React,{Component} from 'react';
import Header from './Header'
import "./addsubscriber.css"

class AddSubscriber extends Component {
    render() {
        return(
            <div>
                <Header heading="addSubscriber"/>
                <div className="component-body-container">
                    <button className="button">Back</button>

               
                    <form class="subscriber-form">
                    <label htmlFor="name" className="label-control">Name</label><br/>
                    <input className="input-control" id="name" type="text" name="name" placeholder=""/><br/>
                    <label htmlFor="phone" className="label-control">Phone Number</label><br/>
                    <input className="input-control" id="phone" type="text" name="phone" placeholder=""/>
                    <div className=".subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to added:</span> <br/>
                        <span className="subscriber-info">name:</span> <br/>
                        <span className="subscriber-info">phone:</span> <br/>
                    </div>
                    <button type="submit" className="button add-btn" >Add</button>


                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber 