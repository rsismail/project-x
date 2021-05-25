import React from 'react'

const Button = (props) => {
    return (
        <div className={props.btnStyle}>
 {props.text}
        </div>
    )
}

export default Button
