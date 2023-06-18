import React, { Component } from 'react'
import style from '../styles/style.module.css'
class Postcomp extends Component {
    render() {
        const{key,title,body}=this.props;
        return (
            <>
                <div className={style.post}>
                    <h6>{key}</h6>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            </>
        )
    }
}
export default Postcomp;