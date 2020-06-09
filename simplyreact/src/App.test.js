// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'; 
import ReactDOM from 'react-dom'; 
// this import enables us to extend app component test with snapshot test.
import renderer from 'react-test-renderer'
import App from './App';

// extending app component test with snaphot test 

describe('App', ()=> {
  it('renders without crashing', () => { 
    const div = document.createElement('div'); 
    ReactDOM.render(<App />, div); 
    ReactDOM.unmountComponentAtNode(div);
  });
})
