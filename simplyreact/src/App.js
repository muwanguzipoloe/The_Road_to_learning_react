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
// Define Higher order function outside App component:
// The function takes the searchTerm and returns another function
// function isSearched(searchTerm) {
//   return function (item) {
/*
      The condition matches the incoming searchTerm pattern with the 
      title property of the item from your list. You can do that with 
      the built-in includes JavaScript functionality. When the pattern 
      matches, it returns true and the item stays in the list; when 
      the pattern doesn’t match, the item is removed from the list.
*/
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }
// Alternative to above function, using ES6 Arrow functions and .include():
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: '',
    };
/*
    In order to define the onDismiss() as class 
    method, you have to bind it in the constructor:
*/
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
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
/* 
      When using a handler in your element, you get access to the 
      synthetic React event in your callback function’s signature.
*/
  onSearchChange(event) {
       /*
       The event has the value of the input field in its target object, 
       so you can update the local state with a search term 
       using this.setState(). 
       */
    this.setState({ searchTerm: event.target.value });
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
        <br/>
        <div>{helloWorld}</div>
        <br / >
          <form>
            <input 
            type="text"
            onChange={this.onSearchChange}
            />
          </form>
          {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
            <div key={item.objectID}>
              <span>
          <a href={item.url}>{item.title}</a>
              </span>
            </div>
          )}
          
        <br/>

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