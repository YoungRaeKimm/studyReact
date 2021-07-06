import React, { Component } from 'react';
import Content from "./components/Content"
import Subject from "./components/Subject"
import TOC from "./components/TOC";
import './App.css';




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
