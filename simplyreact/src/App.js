import React, { Component } from 'react';
import './App.css';
import './index.css';

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

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className="interactions">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search
        </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}
// Using functional component instead of class.
// Using function signature to destructure the props:
// Using an arrow function makes it easier because it adds an
// implicit return is attached, which replaces the return statement.

const Search = ({ value, onChange, children }) => 
      <form>
        {children} 
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
  


const Table = ({ list, pattern, onDismiss }) =>  {
    const largeColumn = { width: '40%',
    };
    const midColumn = { width: '30%',
    };
    const smallColumn = { width: '10%',
    };
    return(
      <div className="table">
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID} className="table-row">
            <span style={ largeColumn }>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={ midColumn }>
              {item.author}</span>
            <span style={  smallColumn }>
              {item.num_comments}</span>
            <span style={  smallColumn }>
              {item.points}</span>
            <span style={  smallColumn }>
              <Button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </Button>
            </span>
          </div>
        )}
      </div>
  
      )  }

const Button = ({ onClick, className = '', children }) => 
   
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
      </button>
    

export default App;