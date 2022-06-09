import "./signupbox.css"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Register=()=>{
    const [navigate,setNavigate]=useState(false)

    const [user,setUser] = useState({
        name:"",
        email:"",
        mobile:"",
        password:"",
    })

    const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register=()=>{
        const {name,email,mobile,password}=user
        if(name && email && mobile && password){
            axios.post("http://localhost:3332/admin/register",user)
            .then(res=>console.log(res))
            alert("User Registered")
            setNavigate(true)
            
        }
        else{
            console.log(res)
            alert("Invalid Input")
            setNavigate(false)
        }
    }

    return(
        <div id="studentOut">
        <div id="signContainer">
        <div id="signupbox">
            {/* {console.log("User",user)} */}
                <h2 style={{textDecoration:"underline"}}>SIGN UP</h2>
                <br/>
                <input id="registerInput" type="text" name="name" value={user.name} placeholder="Enter you name" onChange={handleChange}></input>
                <br/>
                <br/>
                <input id="registerInput" type="text" name="mobile" value={user.mobile} placeholder="Enter you mobile" onChange={handleChange}></input>
                <br/>
                <br/>
                <input id="registerInput" type="text" name="email" value={user.email} placeholder="Enter you email" onChange={handleChange}></input>
                <br/>
                <br/>
                <input id="registerInput" type="password" name="password" value={user.password} placeholder="Enter you password" onChange={handleChange}></input>
                <br/>
                <br/>
                <div></div>
                <Link to={"/dashboard"}><button id="signbutton"
                 onClick={register}>Register</button></Link>
                <p>Or</p>
                <Link to={"/login"}><p style={{marginTop:"-11px"}}>Already Registered? Login</p></Link>
        </div>
        <div id="staticHome">
            <h1 style={{color:"white",textAlign:"left",marginTop:"20%",marginLeft:"4%"}}>Student dashboard - Profile screens designed by Anushka.</h1>
            <h3 style={{color:"white",textAlign:"left",marginTop:"3%",marginLeft:"4%"}}>MERN STACK DEVELOPER</h3>
        </div>
        </div>
        </div>
    )
}