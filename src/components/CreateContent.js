import React, { Component } from 'react';

class CreateContent extends Component{  // feature가 아니라 props
    render(){
        return(
            <article class="">
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                        alert('submit');
                    }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p>
                        <textarea name="desc" placeholder="decription"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>

                </form>
            </article>
        );
    }
}

export default CreateContent;   //이렇게해야지 밖에서 사용 가능
