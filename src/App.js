import React from 'react';
import './bootstrap.min.css';
import Navbar from './Component/NavBar'
import Content from './Component/Content';

class App extends React.Component{
  render() {
      return (
          <div>
              <Navbar />
              <Content />
          </div>
      )
  }
}

export default App;