import "./signupbox.css"
import axios from "axios"
import { useState } from "react"

export const Register=()=>{

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
        }
        else{
            console.log(res)
            alert("Invalid Input")
        }
    }

    return(
        <div id="signupbox">
            {/* {console.log("User",user)} */}
                <h2>Sign Up</h2>
                <br/>
                <input type="text" name="name" value={user.name} placeholder="Enter you name" onChange={handleChange}></input>
                <br/>
                <br/>
                <input type="text" name="mobile" value={user.mobile} placeholder="Enter you mobile" onChange={handleChange}></input>
                <br/>
                <br/>
                <input type="text" name="email" value={user.email} placeholder="Enter you email" onChange={handleChange}></input>
                <br/>
                <br/>
                <input type="password" name="password" value={user.password} placeholder="Enter you password" onChange={handleChange}></input>
                <br/>
                <br/>
                <div></div>
                <button onClick={register}>Submit</button>
        </div>
    )
}