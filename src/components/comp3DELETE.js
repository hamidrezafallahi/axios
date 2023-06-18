import React, { Component } from 'react'
import axios from 'axios'
import '../styles/mystyle.scss'
class comp3DELETE extends Component {
    constructor(props){
        super(props)
        this.state={
            id:0,
        }
    }
    deleteposthandler=()=>{
        const {id}=this.state;
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>(console.log(id)))
    }
    idhandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state.id)
    }


    render() {
        const {id }=this.state;
        return (
            <>
                <div className='delete'>
                    post id : <input type="number" name='id'value={id} onChange={this.idhandler}/>
                </div>
                <div className='delete'>
                    <button onClick={this.deleteposthandler}>delete post</button>
                </div>
                postid : {id}
            </>
        )
    }
}
export default comp3DELETE;