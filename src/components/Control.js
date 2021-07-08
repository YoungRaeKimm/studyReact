import React, { Component } from 'react';

class Control extends Component{//하나의 최상위 태그가 있어야한다. 여기선 header
    render(){
        return (
            <ul>
                <li><a href="/create" onClick={function(e){
                     e.preventDefault();
                     this.props.onChangeMode('create');
                 }.bind(this)}>
                 create
                 </a>
                 </li>

                 <li><a href="/update"onClick={function(e){
                     e.preventDefault();
                     this.props.onChangeMode('update');
                 }.bind(this)}>
                update
                 </a>
                 </li>

                 <li><input onClick={function(e){
                     e.preventDefault();
                     this.props.onChangeMode('delete');
                 }.bind(this)} type="button" value="delete"></input></li>
            </ul>
        );
    }
}

export default Control;
