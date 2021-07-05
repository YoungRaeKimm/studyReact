import React, { Component } from 'react';
import './App.css';

class Subject extends Component{//하나의 최상위 태그가 있어야한다. 여기선 header
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
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
class Content extends Component{  // feature가 아니라 props
  render(){
    return(
      <article class="">
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {//하나의 최상위 태그가 있어야한다. 여기선 div
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <Subject title="WEB" sub="world wide web!"></Subject>
          <Subject title="React" sub="for UI"></Subject>
          <TOC></TOC>
          <Content title="HTML" desc = "HTML is Hyper Markup Language"></Content>
        </header>
      </div>
    );
  }
}

export default App;
