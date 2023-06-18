import React, { Component } from 'react'
import axios from 'axios'
import '../styles/mystyle.scss'
class Compaxios4PUT_PATCH extends Component {
    constructor(props){
        super(props)
        this.state={
            id:0,
            body:"",
            title:""
        }
    }
    changehandler=(event)=>{
        this.setState(({[event.target.name]:event.target.value}))
    }
    puthandler=()=>{
        const {id,body,title}=this.state;
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{title:title})
        .then((response)=>(console.log(response)))
    }
    patchhandler=()=>{
        const {id,body,title}=this.state;
        axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,{title:title})
        .then((response)=>(console.log(response)))
    }
    render() {
        const {id,body,title}=this.state;
        return (
            <>
                <div className='box3'>
                    <div>
                        post id : <input type="number" name='id' value={id} onChange={this.changehandler} />
                    </div>
                    <div>
                        post title : <input type="text" name='title' value={title} onChange={this.changehandler}/>
                    </div>
                    <div>
                        post body : <input type="text" name='body' value={body} onChange={this.changehandler}/>
                    </div>
                    <div >
                    <button onClick={this.puthandler}>put</button>
                    <button onClick={this.patchhandler}>patch </button>
                    </div>
                </div>
                <div>
                    post id is :{id}
                </div>
                <div>
                    post title is :{title}
                </div>
                <div>
                    post body is :{body}
                </div>

            </>
        )
    }
}
export default Compaxios4PUT_PATCH;