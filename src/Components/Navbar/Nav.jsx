import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-[80px] w-[100%] flex justify-between bg-[#DDEBF7]'>
       <section  className='h-[100%] w-[50%] flex items-center justify-evenly'>
        <Link to="/Dashbord">Home</Link>
        <Link to="/Employeepage">Employee List</Link>
       </section>
       <article className='h-[100%] w-[50%] flex items-center justify-evenly'>
        <Link to="#">Hukum Gupta -</Link>
        <Link to="/">Logout</Link>
       </article>
    </div>
  )
}

export default Nav