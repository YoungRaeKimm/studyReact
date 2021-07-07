import React, { Component } from 'react';

class Subject extends Component{//하나의 최상위 태그가 있어야한다. 여기선 header
  render(){
    return (
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
