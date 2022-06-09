import axios from "axios"
import { useEffect,useState } from "react"
import { Navbar } from "../navbar/navbar"
import "./event.css"

export const EventInfo=()=>{

    const [data,setData]=useState([])
    // const [thename,setTheName]=useState("")
    // const [theroll,setTheRoll]=useState("")
    // const [thecontact,setTheContact]=useState("")
    const [num,setNum]=useState(0)

    useEffect(()=>{
        getData()
    },[])

    
    const getData=()=>{
        axios.get("http://localhost:3332/event/eventInfo").then((res)=>{
            console.log(res.data)
            setNum(res.data.length)
            setData(res.data)
        }).catch((err)=>{
            console.log("Error:"+err)
        })
    }

    // const handleSearchName=()=>{
    //     const searchName= data.filter((studentName)=>studentName.name.toLowerCase().includes(thename))
    //     const searchRoll= data.filter((studentName)=>studentName.roll_number.includes(theroll))
    //     const searchContact= data.filter((studentName)=>studentName.contact_number.includes(thecontact))
    //     setData(searchName)
    // }
    // const handleSearchRoll=()=>{
    //     const searchRoll= data.filter((studentRoll)=>studentRoll.roll_number.includes(theroll))
    //     setData(searchRoll)
    // }
    // const handleSearchContact=()=>{
    //     const searchContact= data.filter((studentContact)=>studentContact.contact_number.includes(thecontact))
    //     setData(searchContact)
    // }
    

    // const handleQueryName=(e)=>{
    //     setTheName(e.target.value)
    // }
    // const handleQueryRoll=(er)=>{
    //     setTheRoll(er.target.value)
    // }
    // const handleQueryContact=(ec)=>{
    //     setTheContact(ec.target.value)
    // }

    return(
        <>
        <Navbar/>
        <div id="bigContainerEvent">
        <div id="firstContainerEvent">
            <h1>Event List</h1>
            <h3>Count of Events:{num}</h3>
            <table id="eventsTable">
                <tr>
                    <th>Event Name</th>
                    <th>Event Info Url</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Register</th>
                </tr>
            {data.map((e)=>
                <tr key={e.id}>
                    <td>{e.event_name}</td>
                    <a href={e.event_info_url}><td>Event info Url</td></a>
                    <td>{e.start_date}</td>
                    <td>{e.end_date}</td>
                    <td>Register</td>
                </tr>
                )}
            </table>
        </div>
        <div id="secondContainerEvent">
        <div id="SearchByEvent">
                <h2>Search by</h2>
            {/* <input type="text" onChange={handleQueryName}></input>
            <button id="studentButton" onClick={handleSearchName}>Name</button>
            <br/>
            <input type="text" onChange={handleQueryRoll}></input>
            <button id="studentButton" onClick={handleSearchRoll}>Roll</button>
            <br/>
            <input type="text" onChange={handleQueryContact}></input>
            <button id="studentButton" onClick={handleSearchContact}>Contact</button> */}
            </div>

            <div id="eventStatus">
                <h2>Event Status</h2>
                <div id="statusCont"><p>Completed Events</p><div style={{backgroundColor:"red"}} id="comeventCircle"></div></div>
                <div id="statusCont"><p>Upcoming Events</p><div style={{backgroundColor:"green"}} id="comeventCircle"></div></div>
                <div id="statusCont"><p>Ongoing Events</p><div style={{backgroundColor:"blue"}} id="comeventCircle"></div></div>
            </div>

            <div id="filterByEvent">
                <h2>Filter by</h2>
                <p>Type of Events</p>
                <select>
                    <option value="">Upcoming Events</option>
                    <option value="">Ongoing Events</option>
                    <option value="">Completed Events</option>
                </select>
            </div>

            </div>
            </div>
        </>
    )
}