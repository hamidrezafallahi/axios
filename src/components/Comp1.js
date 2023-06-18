import React, { Component } from 'react'
import axios from 'axios'
import Postcomp from './Postcomp.js'
 class Comp1 extends Component {
     constructor(props){
         super(props)
         this.state={
             posts:[],
             IsError:false
         }
     }
     componentDidMount() {
         this.getdata();
     }
     getdata=()=>{
        axios.get("https://jsonplaceholder.typicode.com/postssss")
        .then((response)=>(this.setState({posts:response.data})))
        .catch(()=>(this.setState({IsError:true})))
     }
    render() {
        const{posts,IsError}=this.state;
        return (
            <>
            {IsError ? (<h3> error is happening</h3>
            ) : (
            posts.map((post)=>(<Postcomp key={post.id} title={post.title} body={post.body}  />)))}
            </>
        )
    }
}
export default Comp1;