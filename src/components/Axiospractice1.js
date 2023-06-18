import React, { Component } from 'react'
import style from '../styles/style.module.css'
import '../styles/mystyle.scss'
import axios from 'axios'
class Axiospractice1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Firstname: '',
            Lastname: '',
            posts: [],
            users: [],
            todos: []
        }
    }
    componentDidMount() {
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        // .then((response) => (this.setState({ posts: response.data })))
        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then((response) => (this.setState({ users: response.data })))
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => (this.setState({ todos: response.data })))
        ////////////////////////////////////////////////////////////////////////
        // axios.all([
        //     axios.get("/posts"),
        //     axios.get("/users"),
        //     axios.get("/todos")
        // ])
        ///////////////////////////////////////////////////////////////////////
        Promise.all([
            axios.get("/posts"),
            axios.get("/users"),
            axios.get("/todos")
        ])
        ///////////////////////////////////////////////////////////////////////
        // .then((response)=>response.forEach((res)=>console.log(res.data)))
        ///////////////////////////////////////////////////////////////////////
        // .then((response)=>{
        //     this.setState({posts:response[0].data})
        //     this.setState({users:response[1].data})
        //     this.setState({todos:response[2].data})
        // })
        ////////////////////////////////////////////////////////////////////////
        .then(axios.spread((p,u,t)=>{
            this.setState({posts:p})
            this.setState({users:u})
            this.setState({todos:t})
        }))

    }
    fetchingdata = () => {
        console.log(this.state)
    }
    changehandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        const { Firstname, Lastname } = this.state;
        return (
            <>
                <div className={style.c3}>
                    <div className='c4'>
                        first name : <input type="text" name='Firstname' value={Firstname} onChange={this.changehandler} />
                    </div>
                    <div className='c4'>
                        last name : <input type="text" name='Lastname' value={Lastname} onChange={this.changehandler} />
                    </div>
                    <hr />
                    <div className='c4'>
                        <span> first name is :{Firstname}</span><br />
                        <span>
                            last name is : {Lastname}
                        </span>
                    </div>
                    <div>
                        <button onClick={this.fetchingdata}>console.log</button>
                    </div>
                </div>
                <div className={style.c5}>
                    <div className='c6'>{this.state.posts.map((post) => (<h4 key={post.id}>{post.title}</h4>))}</div>
                    <div className='c7'>{this.state.users.map((user) => (<h4 key={user.id}>{user.name}</h4>))} </div>
                    <div className='c8'>{this.state.todos.map((todo) => (<h4 key={todo.id}>{todo.title}</h4>))} </div>
                </div>
            </>
        )
    }
}
export default Axiospractice1;