import React, { Component } from 'react';

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

export default Content;   //이렇게해야지 TOC 밖에서 사용 가능
