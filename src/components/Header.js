import logo from '../logo.svg';
import React from 'react';
import { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {this.props.title}
        </p>
        <p>
          Edit <code>src/App.js</code> {this.props.num}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="array">
          <p>{this.props.myArr[0]}</p>
          <p>{this.props.myArr[1]}</p>
          <p>{this.props.myArr[2]}</p>
          <p>{this.props.myArr[3]}</p>
        </div>
        <div className="func">
          <p>{this.props.myFunc(10, 20)}</p>
        </div>
      </header>
    );
  }
}
