import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Register } from './components/signup/signup'
import { Login } from './components/login/login'
import { AllRoutes } from './components/router/router'
import { Dashboard } from './components/dashboard/dashboard'
import { StudentInfo } from './components/students/student_info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <AllRoutes/>
     {/* <Dashboard/> */}
     {/* <StudentInfo/> */}
    </div>
  )
}

export default App
