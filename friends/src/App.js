import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getFriends} from './store/action'; //name import
import FriendForm from './components/FriendForm'; //export default

import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getFriends()
  } 
  render() {
    return (
      <div className="App">
      <FriendForm />
      {this.props.friends.map(friend => {
        return (
          <div>
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h3>{friend.email}</h3>
          </div>
        )
      })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}
export default connect(mapStateToProps, {getFriends})(App);

