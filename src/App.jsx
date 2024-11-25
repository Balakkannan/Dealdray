import React from 'react'
import Loginpage from './Components/Loginpage/Loginpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashbord from './Components/Dashbord/Dashbord'
import Createuser from './Components/CreateUser/Createuser'
import Editpage from './Components/EditUser/Editpage'
import Employeepage from './Components/EmployeeList/Employeepage'
import SignupPage from './Components/Loginpage/SignupPage'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route element={<Loginpage/>} path='/'/>
          <Route element={<SignupPage/>} path='/Signup'/>
          <Route element={<Dashbord/>} path='/Dashbord'/>
          <Route element={<Employeepage/>}path='/Employeepage'/>
          <Route element={<Createuser/>} path='/CreateUser'/>
          <Route element={<Editpage/>} path='/Editpage/:id'/>
        </Routes> 
        
        </BrowserRouter>

    </div>
  )
}

export default App