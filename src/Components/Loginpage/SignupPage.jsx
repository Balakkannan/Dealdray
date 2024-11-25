import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
    let [sno, setSno] = useState("")
    let [username, setUsername] = useState("")
    let [psw, setPsw] = useState("")
    let navigate = useNavigate()

    let submit = (e) => {
        e.preventDefault()
        let error = document.querySelectorAll("spen")
        if(sno==""||username==""||psw==""){
        if (sno == "") {
            error[0].innerText = "Sno Is Required"
        } else {
            error[0].innerText = " "
        }
        if (username == "") {
            error[1].innerText = "Username Is Required"
        } else {
            error[1].innerText = " "
        }
        if (psw == "") {
            error[2].innerText = "Password Is Required"
        } else {
            error[2].innerText = " " 

        }}
     else{
            localStorage.setItem("Sno",sno)
            localStorage.setItem("UserName",username)
            localStorage.setItem("Password",psw)
            navigate("/")   
            }
    
    }
    return (
        <div className='h-[89vh] w-[100%] flex flex-col justify-center items-center '>
            <h1 className='text-[30px] relative -top-[100px] font-serif'>Sign-Up </h1>
            <form className='h-[300px] w-[300px] border border-black rounded shadow-lg shadow-blue-500/50'>
                <table className='h-[100%] w-[100%]'>
                    <tr>
                        <td className='ps-3'><label htmlFor="sno">S.No</label> </td>
                        <td>: <input type="text" name='sno' id='sno' className='border border-black outline-none ' onChange={(e) => { setSno(e.target.value) }} />
                            <br />
                            <spen className="text-red-500 text-[13px] absolute ps-2"></spen>
                        </td>
                    </tr>
                    <tr>
                        <td className='ps-3'><label htmlFor="username">User Name</label> </td>
                        <td>: <input type="text" name='username' id='username' className='border border-black outline-none relative' onChange={(e) => { setUsername(e.target.value) }} />
                            <br />
                            <spen className="text-red-500 text-[13px] absolute ps-2"></spen></td>
                    </tr>
                    <tr>
                        <td className='ps-3'><label htmlFor="psw">Password</label> </td>
                        <td>: <input type="password" name='psw' id='psw' className='border border-black outline-none relative' onChange={(e) => { setPsw(e.target.value) }} />
                            <br />
                            <spen className="text-red-500 text-[13px] absolute ps-2"></spen></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={submit} className='h-[40px] w-[100px] border border-green-600 bg-green-500 outline-none relative start-[100px]'>Signup</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default SignupPage