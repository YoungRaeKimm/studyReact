import React, { Component } from 'react';
import './App.css';

class Subject extends Component{//하나의 최상위 태그가 있어야한다. 여기선 header
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}
class Content extends Component{
  render(){
    return(
      <article class="">
        <h2>HTML</h2>
        HTML is HyperText Markup Language
      </article>
    );
  }
}

class App extends Component {//하나의 최상위 태그가 있어야한다. 여기선 div
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <Subject></Subject>
          <TOC></TOC>
          <Content></Content>
        </header>
      </div>
    );
  }
}

export default App;
