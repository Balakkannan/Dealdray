import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../Navbar/Nav'

const Editpage = () => {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let[mobile,setMobile]=useState("")
    let [designation,setDesignation]=useState("")
    let[gender,setGender]=useState("Male")
    let[course,setCourse]=useState([]) 
    let[img,setImg]=useState(null)
    let obj=useParams()
    let navigator=useNavigate()
 const today = new Date();
const day = String(today.getDate()).padStart(2, '0'); 
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = String(today.getFullYear()).slice(-2);
const formattedDate = `${day}-${month}-${year}`;

let handleCourse=(e)=>{
    const {value,checked}=e.target;
    if(checked){
setCourse(prevCourse =>[...prevCourse,value]);
    }else{
        setCourse(prevCourse =>prevCourse.filter(course=>course!=value))
    }
}
let handleImage=(e)=>{
    const file= e.target.files[0];
    if(file){
        const objectURL = window.URL.createObjectURL(file);
        setImg(objectURL);
    }
}
useEffect(()=>{
    axios.get(`http://localhost:5000/Empolyee/${obj.id}`)
    .then((res)=>{
        setName(res.data.empName) 
        setEmail(res.data.empEmail)
        setMobile(res.data.empMobile)
        setDesignation(res.data.empDesignation)
        setGender(res.data.empGender)
        setCourse(res.data.empCourse)
        setImg(res.data.empImg)
    })
},[])

let  handleSubmit=(e)=>{
    let error=document.querySelectorAll("span")
    let emailformat=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let mobileformat= /^(\+\d{1,3}[- ]?)?\d{10}$/;
    e.preventDefault()
    console.log(error);
    let palyloed={
        empName:name, empEmail:email,empMobile:mobile,empDesignation:designation,empGender:gender,empCourse:course, empImg:img,createDate:formattedDate
    }
    axios.put(`http://localhost:5000/Empolyee/${obj.id}`,palyloed)
    .then(()=>{console.log("Data is updated");
        navigator("/Employeepage")
    })

    
}
  return (
    <>
    <Nav/>
    <div className='h-[89Vh] w-[100%] flex-col align-baseline justify-center'>
    <section className='h-[40px] w-[100%]' >
    <h2 className='bg-yellow-400 h-[40px] pt-2 ps-5'>Create Employee</h2>
    </section>
    <section className='h-[550px] w-[600px] relative start-[500px] top-[30px] flex justify-center items-center border border-black rounded'>
        <form action="" className='h-[100%] w-[100%] '>
             <table className='h-[100%] w-[100%] bg-slate-200'>
                <tr>
                    <td className=' ps-10'><label htmlFor="">Name </label></td>
                    <td className='ps-2'>: <input type="text" className='h-[30px] w-[70%] border-b-2 relative border-black outline-none bg-slate-200 'value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <br/>
                    <span className='text-red-500 text-[13px] ms-3 absolute '></span>
                    </td>
                </tr>
                <tr>
                    <td className='ps-10'><label htmlFor="">Email</label></td>
                    <td className='ps-2'> :<input type="text" className='h-[30px] w-[70%] border-b-2 relative border-black outline-none bg-slate-200' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <br/>
                    <span className='text-red-500 text-[13px] ms-3 absolute '></span></td>
                </tr>
                <tr>
                    <td className='ps-10'><label htmlFor="">Mobile No</label></td>
                    <td className='ps-2'>:<input type="text"className='h-[30px] w-[70%] border-b-2 relative border-black outline-none bg-slate-200'value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
                    <br/>
                    <span className='text-red-500 text-[13px] ms-3 absolute '></span></td>
                </tr>
                <tr>
                    <td className='ps-10'><label htmlFor="">Designation</label></td>
                    <td className='ps-2'>:<select name="Role" id="" className='h-[30px] w-[70%] border-b-2 border-black relative outline-none bg-slate-200 ps-2'value={designation} onChange={(e)=>{setDesignation(e.target.value)}}>
                        <option value="select">Select Designation</option>
                        <option value="Hr">Hr</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                        </select>
                        <br/>
                    <span className='text-red-500 text-[13px] ms-3 absolute '></span></td>
                </tr>
                <tr>
                    <td className='ps-10'><label htmlFor="">Gender</label></td>
                    <td className='ps-2'>:
                <input type="radio" value="Male" name='gender' className="h-[15px] w-[15px] ms-4" onChange={(e)=>{setGender(e.target.value)}} /> Male 
                <input type="radio" value="Female" name='gender' className="h-[15px] w-[15px] ms-4 " onChange={(e)=>{setGender(e.target.value)}}/> Female</td>
                <br/>
                <span className='text-red-500 text-[13px] absolute '></span>
                </tr>
                <tr>
                    <td className=' ps-10'><label htmlFor="">Course</label></td>
                    <td className='ps-2'>:
                    <input type="checkbox" value="MCA" name='course' className='h-[15px] w-[15px] ms-2' onChange={handleCourse}/> MCA
                    <input type="checkbox" value="BCA" name='course' className='h-[15px] w-[15px] ms-3' onChange={handleCourse}/> BCA 
                    <input type="checkbox" value="BSC" name='course' className='h-[15px] w-[15px] ms-3' onChange={handleCourse}/> BSC 
                    </td>
                </tr>
                <tr>
                    <td className='ps-10'> <label htmlFor="">Img Upload</label></td>
                    <td className='ps-2'>:<input className='ms-2 bg-slate-200' type="file" name="" id="" accept='image/png, image/jpeg' onChange={handleImage}/></td>
                </tr>
                <tr >
                    <td colSpan={2} className='flex-col justify-center items-center relative'>
                        <button type='submit' onClick={handleSubmit} className='bg-[#92D050] h-[75%] w-[25%] rounded relative start-[33%] text-black'>Update</button></td>
                </tr>
             </table>
        </form>
       
    </section>
</div>
</>
  )
}

export default Editpage