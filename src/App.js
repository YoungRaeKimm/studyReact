import React, { Component } from 'react';
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import Subject from "./components/Subject"
import TOC from "./components/TOC";
import Control from "./components/Control"
import './App.css';

class App extends Component {//하나의 최상위 태그가 있어야한다. 여기선 div
    constructor(props){     // constructor에서만 setState 안써도됨. 나머지는 써야함.
        super(props);
        this.state = {
            mode : 'read',
            selected_content_id:2,
            subject:{title:'WEB', sub:'World Wide Web!'},
            welcome :{title:'Welcome', desc:"Hello React"},
            contents:[
                {id:1, title:'HTML', desc:'HTML is HyperText ...'},
                {id:2, title:'CSS', desc:'CSS is HyperText ...'},
                {id:3, title:'JavaScript', desc:'JavaScript is HyperText ...'}
            ]
        }
    }
    render(){
        let _title, _desc, _article =null;
        if(this.state.mode === 'welcome'){
          _title = this.state.welcome.title;
          _desc = this.state.welcome.desc;
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        }
        else if(this.state.mode ==='read'){
            let i=0;
            while(i<this.state.contents.length){
                let data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i++;
            }
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        }//아래서 bind 와 setState 사용함.
        else if(this.state.mode === 'create'){
            _article = <CreateContent></CreateContent>
        }

        return(
            <div className="App">
                <Subject
                    title = {this.state.subject.title}
                    sub = {this.state.subject.sub}
                    onChangePage= {function(){
                        this.setState({mode:'welcome'});
                    }.bind(this)}
                >
                </Subject>
                <TOC onChangePage={function(id){
                    this.setState({
                        mode:'read',
                        selected_content_id:Number(id)
                    });
                }.bind(this)}
                data={this.state.contents}
                ></TOC>
                <Control onChangeMode={function(_mode){
                    this.setState({
                        mode:_mode
                    });
                }.bind(this)}></Control>
                {_article}
            </div>
        );
    }
}

export default App;
