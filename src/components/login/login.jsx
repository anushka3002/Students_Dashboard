import {useState} from "react"
import "./login.css"
import axios from "axios"
import { Link } from "react-router-dom"
import { Register } from "../signup/signup"

export const Login=()=>{
    const [user,setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login=()=>{
        axios.post("http://localhost:3332/admin/login",user)
        .then(res=>alert("Logged in Successfully"))
        .catch(err=>alert("error"))
    }

    return(
        <>
        <div id="studentOut">
        <div id="signContainer">
        <div id="loginBox">
            {/* {console.log("LoginUser",user)} */}
            <h2 style={{textDecoration:"underline"}}>Login</h2>
            <input id="loginInput" type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
            <br/>
            <br/>
            <input id="loginInput" type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <br/>
            <br/>
            <Link to={"/dashboard"}><button  id="signbutton" className="button" onClick={login}>Login</button></Link>
            <div>or</div>
            <Link to={"/"}><p>Register</p></Link>
        </div>
        <div id="staticHome">
            <h1 style={{color:"white",textAlign:"left",marginTop:"20%",marginLeft:"4%"}}>Student dashboard - Profile screens designed by Anushka.</h1>
            <h3 style={{color:"white",textAlign:"left",marginTop:"3%",marginLeft:"4%"}}>MERN STACK DEVELOPER</h3>
        </div>
        </div>
        </div>
        </>
    )
}