import { Link } from "react-router-dom"
import "./dashboard.css"

export const Dashboard=()=>{
    return(
        <>
            <div id="header">
                <h3>Dashboard</h3>
            </div>
            <br/>
            <div id="container">
            <div id="studentsCard">
            <Link to={"/student"}><h1 id="bold">Students List</h1></Link>
        </div>
        <div id="eventsCard">
            <h1 id="bold">Events List</h1>
        </div>
        <div id="pieChart">
            <h1 id="bold">Stuents PieChart</h1>
        </div>
        </div>
        </>
    )
}