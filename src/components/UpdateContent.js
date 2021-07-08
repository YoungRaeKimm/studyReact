import React, { Component } from 'react';

class UpdateContent extends Component{  // feature가 아니라 props
    constructor(props){
        super(props);
        this.state={
            id:this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc
        }
        this.inputFromHandler = this.inputFromHandler.bind(this);
    }
    inputFromHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <article class="">
                <h2>Update</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc);
                    }.bind(this)}
                >
                    <input type = "hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={
                                this.inputFromHandler}>
                        </input>
                    </p>
                    <p>
                        <textarea
                            onChange={
                                this.inputFromHandler}
                            name="desc"
                            placeholder="decription"
                            value={this.state.desc}>
                        </textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>

                </form>
            </article>
        );
    }
}

export default UpdateContent;   //이렇게해야지 밖에서 사용 가능
