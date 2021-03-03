import React from "react"
import { propTypes } from "react-bootstrap/esm/Image"

export default function LoginPopup(){
    return (
        <div className="overlay">
            <div className="popup Login"></div>
            <h2>Log in</h2>
            <form onSubmit = {
                (e) => {
                     e.preventDefault("")
                    
                    propTypes.loginUser({Username:""})
                }
            }>
                <label>Username</label>
                <input type="text"></input>
            </form>
            
        </div>
    )
}