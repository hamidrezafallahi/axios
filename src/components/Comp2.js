import React, { Component } from 'react'
import '../styles/mystyle.scss'
import axios from 'axios'
class Comp2 extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:''
        }
    }
    changeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    buttonhandler=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",
            {title:this.state.title,
            body:this.state.body})
        .then((response)=>(console.log(response)))
    }
    render() {
        const{title,body}=this.state;
        return (
            <>
                <div className='insert'>
                    <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    <textarea name="body" id="" cols="30" rows="10"value={body} onChange={this.changeHandler}></textarea>
                    <button onClick={this.buttonhandler}>insert post</button>
                    <h3>{title}</h3>
                    <h5>{body}</h5>
                </div>
            </>
        )
    }
}
export default Comp2;