import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import Nav from '../Navbar/Nav'

const Employeepage = () => {
  let [empData,setEmpData]=useState([])
  let[Count,setCount]=useState(0)
  let[fleg,setfleg]=useState(false)
  const [searchQuery, setSearchQuery] = useState(''); 
useEffect(()=>{
  axios.get("http://localhost:5000/Empolyee")
  .then((e)=>{setEmpData(e.data);setfleg(false);setCount(e.data.length);
    console.log(e);
    
  ;})
  .catch(()=>{console.log("not get data");
  })
},[fleg])
  
let Handledelete=(id)=>{
  axios.delete(`http://localhost:5000/Empolyee/${id}`)
  setfleg(true)
}

let handleSearch=()=>{
  const filteredData = empData.filter((employee) =>
    ['empName', 'empEmail', 'empMobile', 'empDesignation']
      .some((field) =>
        employee[field].toLowerCase().includes(searchQuery.toLowerCase())
      )
  );
}


  return (
    <>
    <Nav/>
    <div className='h-[89vh] w-[100%] flex-col justify-center items-center relative'>
       <h2 className='bg-yellow-400 h-[40px] pt-2 ps-5'>Employee list</h2>
       <div className='h-[50px] w-[100%] flex items-center justify-end relative end-[70px]' >
                <h3 className='mr-[100px]'>Total Count : {Count}</h3>
                <Link to="/Createuser"><button className='h-[30px] w-[300px] border border-black rounded bg-[#A9D08E]'>Create Employee</button></Link>
       </div>
       <div className='h-[85%] w-[100%] relative flex-col flex-wrap'>
          <div className='h-[10%] w-[100%] bg-[#BDD7EE]'>
            <section className='h-[100%] w-[40%] float-end flex items-center'>
                <button className='text-black mr-9' onClick={handleSearch}>Search</button>
                <input type="text" placeholder='Enter Search Keyword'className='w-[50%] text-black outline-none ps-[50px]'value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}  />
            </section>
          </div>
                <table border={2} className='w-[100%] h-[90%] flex-col justify-center items-center '>
                  <tr className=' bg-[#BDD7EE] h-[2px]'>
                    <th>Unique Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>Designation</th>
                    <th>gender</th>
                    <th>course</th>
                    <th>create date</th>
                    <th>Action</th>
                  </tr>
                  {empData.map((data)=>{
                    return(
                      <tr key={data.id}>
                          <td className='border border-black ps-8'>{data.id}</td>
                          <td className='border border-black ps-8'><img src={data.empImg} height={'50px'} width={"70px"} /></td>
                          <td className='border border-black ps-8'>{data.empName}</td>
                          <td className='border border-black ps-8'>{data.empEmail}</td>
                          <td className='border border-black ps-8'>{data.empMobile}</td>
                          <td className='border border-black ps-8'>{data.empDesignation}</td>
                          <td className='border border-black ps-8'>{data.empGender}</td>
                          <td className='border border-black ps-8'>{data.empCourse}</td>
                          <td className='border border-black ps-6'>{data.createDate}</td>
                          <td className='border border-black  '>
                            <button  className='border border-black ms-3 mr-5 h-[40px] w-[60px]'><Link to={`/Editpage/${data.id}`}>Edit</Link></button>
                            <button onClick={()=>{Handledelete(data.id)}} className='border border-black  h-[40px] w-[60px]'>Delete</button>
                          </td>
                      </tr>
                    )
                  })}
                </table>
       </div>
    </div>
    </>
  )
}

export default Employeepage