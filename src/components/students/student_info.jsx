import axios from "axios"
import { useEffect,useState } from "react"
import "./student_info.css"

export const StudentInfo=()=>{

    const [data,setData]=useState([])
    // const [num,setNum]=useState(1)

    useEffect(()=>{
        getData()
    },[])

    // var num
    const getData=()=>{
        axios.get("http://localhost:3332/student/studentInfo").then((res)=>{
            console.log(res.data)
            // for(var i=1;i<res.data.length;i++){
            //     num=i
            //     i++
            // }
            
            console.log(res.data)
            setData(res.data)
        }).catch((err)=>{
            console.log("Error:"+err)
        })
    }

    return(
        <>
        <div>
            <h1>Students Table</h1>
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
        </>
    )
}