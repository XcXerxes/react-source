import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  click = () => {
    // this.setState({ count: this.state.count + 1 }, () => {console.log('12323')})
    // this.setState(state => {
    //   return { count: state.count + 1 }
    // })
    console.log(this)
    this.forceUpdate()
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {[1, 2, 3].map(item => (
            <p className="pp">
              Edit <code>src/App.js</code> and save to reload.
            </p>
          ))}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{this.state.count}</p>
          <button ref={val => this.vals = val} onClick={this.click}>按钮</button>
        </header>
      </div>
    );
  }
}

export default App;
