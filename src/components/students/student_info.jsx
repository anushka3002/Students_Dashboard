import axios from "axios"
import { useEffect,useState } from "react"
import { Navbar } from "../navbar/navbar"
import "./student_info.css"

export const StudentInfo=()=>{

    const [data,setData]=useState([])
    const [thename,setTheName]=useState("")
    const [theroll,setTheRoll]=useState("")
    const [thecontact,setTheContact]=useState("")
    const [num,setNum]=useState(0)
    const [term,setTerm]=useState(0)
    // const [numterm,setNumTerm]=useState("0")

    useEffect(()=>{
        getData()
    },[])

    
    const getData=()=>{
        axios.get("http://localhost:3332/student/studentInfo").then((res)=>{
            console.log(res.data)
            setNum(res.data.length)
            setData(res.data)
        }).catch((err)=>{
            console.log("Error:"+err)
        })
    }

    const handleSearchName=()=>{
        const searchName= data.filter((studentName)=>studentName.name.toLowerCase().includes(thename))
        const searchRoll= data.filter((studentName)=>studentName.roll_number.includes(theroll))
        const searchContact= data.filter((studentName)=>studentName.contact_number.includes(thecontact))
        setData(searchName)
    }
    const handleSearchRoll=()=>{
        const searchRoll= data.filter((studentRoll)=>studentRoll.roll_number.includes(theroll))
        setData(searchRoll)
    }
    const handleSearchContact=()=>{
        const searchContact= data.filter((studentContact)=>studentContact.contact_number.includes(thecontact))
        setData(searchContact)
    }
    // const handleFilterTerm=()=>{
    //     const filterTerm= data.filter((studentTerm)=>studentTerm.term.includes(numterm))
    //     setData(filterTerm)
    //     console.log("filter")
    // }

    

    const handleQueryName=(e)=>{
        setTheName(e.target.value)
    }
    const handleQueryRoll=(er)=>{
        setTheRoll(er.target.value)
    }
    const handleQueryContact=(ec)=>{
        setTheContact(ec.target.value)
    }

    return(
        <>
        <Navbar/>
        <div id="bigContainer">
        <div id="firstContainer">
            <h1>Students Table</h1>
            <h3>Count of Student:{num}</h3>
            <table id="studentsTable">
                <tr>
                    {/* <th>Se no.</th> */}
                    <th>Name</th>
                    <th>Roll Number</th>
                    <th>Term</th>
                    <th>Current Year</th>
                    <th>Contact Number</th>
                </tr>
            {data.map((e)=>
                <tr key={e.id}>
                    {/* <td>{num}</td> */}
                    <td>{e.name}</td>
                    <td>{e.roll_number}</td>
                    <td>{e.term}</td>
                    <td>{e.current_year}</td>
                    <td>{e.contact_number}</td>
                </tr>
                )}
            </table>
        </div>
        <div id="secondContainer">
        <div id="SearchBy">
            <br/>
            <br/>
                <h2>Search by</h2>
            <input type="text" onChange={handleQueryName}></input>
            <button id="studentButton" onClick={handleSearchName}>Name</button>
            <br/>
            <input type="text" onChange={handleQueryRoll}></input>
            <button id="studentButton" onClick={handleSearchRoll}>Roll</button>
            <br/>
            <input type="text" onChange={handleQueryContact}></input>
            <button id="studentButton" onClick={handleSearchContact}>Contact</button>
            </div>

            <div id="filterBy">
                <h2>Filter by</h2>
                <p>Term</p>
                <select>
                    <option>1st Term</option>
                    <option>2nd Term</option>
                    <option >3rd Term</option>
                    <option>4th Term</option>
                    <option>5th Term</option>
                    <option>6th Term</option>
                    <option>7th Term</option>
                    <option>8th Term</option>
                </select>
                <p>Current year</p>
                <select>
                    <option value="">1st Year</option>
                    <option value="">2nd Year</option>
                    <option value="">3rd Year</option>
                    <option value="">4th Year</option>
                </select>
            </div>

            </div>
            </div>
        </>
    )
}