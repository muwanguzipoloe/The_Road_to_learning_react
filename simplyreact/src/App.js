import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list,
    };
/*
    In order to define the onDismiss() as class 
    method, you have to bind it in the constructor:
*/
    this.onDismiss = this.onDismiss.bind(this);
  }
/* 
    Defining the method so that it may be usable.
    the objective is to remove the item identified 
    by the id from the list and store an updated 
    list to the local state. (Using JS built-in filter)
*/
  onDismiss(id) {
    const isNotID = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotID);

/*
    Alternative to the above:
      onDismiss(id) {
        const updatedList = this.state.list.filter(item => item.objectID !== id);
      }
*/
//  Use the setState() class method to update the list in the local component state:

    this.setState({ list: updatedList });
  }
  render() {
    const helloWorld = 'This is the Road to learning React';
    return (
      <div className="App">
{
/*
  You can also write map functions more concisely with 
  an ES6 arrow function:
*/
}       
        <div>{helloWorld}</div>
        <br / >

        {this.state.list.map(item => 
          
/* 
   Make sure that the key attribute is a stable identifier. 
   Avoid using the index of the item in the array, because the array 
   index is not stable. If the list changes its order, for example, 
   React will not be able to identify the items properly.
*/
            <div key= {item.objectID}>
              <span>
              <a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author} </span>
              <span>{item.num_comments}, </span>
              <span>{item.points} </span>
              <span>
                
                <button 
                
                  /*It is not advisable to use arrow functinos in 
                   event handlers like below, it affects performance
                   if there's so many of such event handlers.
                   it would be better to impliment a separate
                   button component for optimization.  
                  */
                
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
        )}
      </div> );
} }
export default App;