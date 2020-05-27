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
  render() {
    const helloWorld = 'This is the Road to learn React';
    return (
      <div className="App">
{
/*
  You can also write map functions more concisely with 
  an ES6 arrow function:
*/
}
        {list.map(item => 
          
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
              <span>{item.points}</span>
            </div>
        )}
      </div> );
} }
export default App;