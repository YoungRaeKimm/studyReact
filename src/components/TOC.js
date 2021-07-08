import React, { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){  //true return 이면 render 호출 false면 호출안함. push말고 concat 하라는 이유가 여깄다.
        if(this.props.data === newProps.data){
            return false
        }
        return true;
    }
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while(i<data.length){
            lists.push(
            <li key={data[i].id}>
                <a href={"/content/" + data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}>
                {data[i].title}</a></li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                {lists}
                </ul>
            </nav>
        );
  }
}

export default TOC;   //이렇게해야지 TOC 밖에서 사용 가능
