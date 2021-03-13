import React, { useContext, useState } from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import { LoginContext } from "./App"

export default function LoginPopup(){
    const { loginUser } = useContext(LoginContext)
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="overlay">
            <div className="popup Login"></div>
            <h2>Log in</h2>
            <form onSubmit = {
                (e) => {
                     e.preventDefault("")
                    
                    loginUser({user:username, password:password})
                }
            }>
                <label>Username</label>
                <input onChange={e => setUserName(e.target.value)} type="text"></input>
                <label>Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password"></input>
                <input type="submit" value="Log in" />
            </form>
            
        </div>
    )
}