import {useState} from "react"
import "./login.css"
import axios from "axios"
import { Link } from "react-router-dom"
import { Register } from "../signup/signup"
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const Navigate=useNavigate()
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const [nameDefined,setNameDefined]=useState("")

    const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
        // if(e.target.value=="anushka"){
        // setNameDefined("name")
        //     // return <h1>name</h1>
        //     console.log("anushka")
        // }
    }

    const login=()=>{
        axios.post("http://localhost:3332/admin/login",user)
        .then((res)=>{
            console.log(res.data)
            setUser(res.data)
            alert("Logged in successfully")
            Navigate("/dashboard")
        }
        )
        .catch((err)=>
            {
                alert("Please enter correct detail")
            }
        )

    }

    return(
        <>
        <div id="studentOut">
        <div id="signContainer">
        <div id="loginBox">
            {/* {console.log("LoginUser",user)} */}
            <h2 style={{textDecoration:"underline"}}>Login</h2>
            <input id="loginInput" type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange} ></input>
            <br/>
            <br/>
            <input id="loginInput" type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <br/>
            <br/>
            <button  id="signbutton" className="button" onClick={login}>Login</button>
            <div>or</div>
            <Link to={"/"}><p>Don't have an account? Register</p></Link>
            <h2>{nameDefined}</h2>
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