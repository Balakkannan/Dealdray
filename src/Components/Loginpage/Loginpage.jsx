import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Loginpage = () => {
    let [sno,setSno]=useState("")
    let [username,setUsername]=useState("")
    let [psw,setPsw]=useState("")
    let regsno=localStorage.getItem("Sno")
    let regUsername=localStorage.getItem("UserName")
    let regsPassword=localStorage.getItem("Password")
   let navigator =useNavigate()
    
    let submit=(e)=>{
        e.preventDefault()
        let error=document.querySelectorAll("spen")
       if(sno!=regsno||username!=regUsername||psw!=regsPassword){
        if(sno==""){
            error[0].innerText="Sno is required"
        }
        else if(sno!=regsno){
            error[0].innerText="MisMatch Serial Number"   
        }
        else{
            error[0].innerText=""   
        }
        if(username==""){
            error[1].innerText="Username is required"
        }else if(username!=regUsername){
            error[1].innerText="MisMatch Username"   

        }
        else{
            error[1].innerText=""   
        }
        if(psw==""){
            error[2].innerText="Password is required"
        }else if(psw != regsPassword){
            error[2].innerText="MisMatch Password "   

        }
        else{
            error[2].innerText=""   
        }
       }
       else{
        navigator("/Dashbord")
       }
        
    }

  return (
    <div className='h-[100vh] w-[100%] flex flex-col justify-center items-center border border-red-700'>
            <h2 className='text-[30px] relative -top-[100px] font-serif'>Login</h2>
        <form  className='h-[300px] w-[300px] border border-black rounded relative -top-[35px] shadow-lg shadow-red-500/75'>
          <table className='h-[100%] w-[100%]'>
            <tr>
                    <td className='ps-3'><label htmlFor="sno">S.No</label> </td>
                    <td>: <input type="text" name='sno' id='sno' className='border border-black  outline-none' onChange={(e)=>{setSno(e.target.value)}} />
                    <br />
                    <spen className="text-red-500 text-[13px] absolute ps-2"></spen>
                    </td>
                </tr>
                <tr>
                    <td className='ps-3'><label htmlFor="username">User Name</label> </td>
                    <td>: <input type="text" name='username' id='username' className='border border-black outline-none' onChange={(e)=>{setUsername(e.target.value)}}/>
                    <br />
                    <spen className="text-red-500 text-[13px] absolute ps-2"></spen>
                    </td>
                </tr>
                <tr>
                    <td className='ps-3'><label htmlFor="psw">Password</label> </td>
                    <td>: <input type="password" name='psw' id='psw'className='border border-black outline-none' onChange={(e)=>{setPsw(e.target.value)}}/>
                    <br />
                    <spen className="text-red-500 text-[13px] absolute ps-2"></spen>    
                    </td>
                </tr>
                <tr className='h-[100px]'>
                    <td colSpan={2} className='ps-[100px]'><button onClick={submit} className='h-[40px] w-[100px] border border-green-600 bg-green-500 rounded outline-none relative'>Login</button><br></br>
                    <Link to="/Signup" className=' ms-2 relative top-2 text-violet-500'>Create User</Link>
                    </td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default Loginpage