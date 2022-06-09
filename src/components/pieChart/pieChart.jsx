import axios from "axios"
import { useEffect, useState } from "react"
import { Dashboard } from "../dashboard/dashboard"
import { Navbar } from "../navbar/navbar"
import "./pieChart.css"

export const PieChart=()=>{

    const [data,setData]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios.get("http://localhost:3332/student/studentInfo").then((res)=>{
            setData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log("Error:"+err)
        })
    }

    return(
        <>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <h3>Static Data</h3>
        <br/>
        <div style={{background:"conic-gradient(brown 0.00%, black 0.00% 0.55%, blue 0.55% 6.08%, green 6.08% 13.68%, yellow 13.68% 23.27%, orange 23.27% 40.47%, red 40.47%)"}} id="pieChartCircle">
        </div>
        </>
    )
}