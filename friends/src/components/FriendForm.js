
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addFriend } from '../store/action'

 class FriendForm extends Component {
    state = {
        name: '', 
        age: '',
        email: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   submitHandler = e => {
       e.preventDefault();
       const friend= {
           name:this.state.name, 
           age:this.state.age,
           email:this.state.email
       }
       this.props.addFriend(friend);
       this.setState({
           name: '',
           age: '',
           email: ''
       })
   }

  render() {
    return (
      <div>
         <div>
        <form onSubmit={this.submitHandler} > 
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder= 'name'
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder= 'age'
          />
           <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder= 'email'
          />
       



          <button>Add friend</button>
        </form>
      </div>
      </div>
    )
  }
}

export default connect(null, {addFriend})(FriendForm);


//form, input, button, setstate onSubmit={}
