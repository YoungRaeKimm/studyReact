import React, { Component } from 'react';

class CreateContent extends Component{  // feature가 아니라 props
    render(){
        return(
            <article class="">
            <h2>Create</h2>
            <form>

            </form>
            </article>
        );
    }
}

export default CreateContent;   //이렇게해야지 TOC 밖에서 사용 가능
