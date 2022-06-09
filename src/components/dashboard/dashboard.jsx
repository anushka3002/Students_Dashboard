import { Link } from "react-router-dom"
import { Navbar } from "../navbar/navbar"
import "./dashboard.css"

export const Dashboard=()=>{
    return(
        <div id="whole">
            <Navbar/>
            <br/>
            <div id="container">
            <div id="studentsCard">
            <Link to={"/student"}><h1 id="bold">Students List</h1></Link>
        </div>
        <div id="eventsCard">
            <Link to={"/event"}><h1 id="bold">Events List</h1></Link>
        </div>
        <div id="pieChart">
            <Link to={"/pieChart"}><h1 id="bold">Stuents PieChart</h1></Link>
        </div>
        </div>
        </div>
    )
}