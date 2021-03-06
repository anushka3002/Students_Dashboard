import { Register } from "../signup/signup";
import { Login } from "../login/login";
import {Routes,Route} from "react-router"
import { Homepage } from "../homepage/homepage";
import { StudentInfo } from "../students/student_info";
import { Dashboard } from "../dashboard/dashboard";
import { EventInfo } from "../event/event";
import { PieChart } from "../pieChart/pieChart";

export const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Register/>}/>
            {/* <Route exact path="/register" element={<Register/>}/> */}
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/student" element={<StudentInfo/>}/>
            <Route exact path="/event" element={<EventInfo/>}/>
            <Route exact path="/pieChart" element={<PieChart/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </>
    )
}