import React from 'react'
import Nav from '../Navbar/Nav'

const Dashbord = () => {
  return (
    <>
    <Nav/>
    <div className='h-[89Vh] w-[100%] flex-col align-baseline justify-center'>
            <section className='h-[40px] w-[100%]' >
            <h2 className='bg-yellow-400 h-[40px] pt-2 ps-5'>DashBord</h2>
            </section>
            <section className='h-[300px] w-[600px] relative start-[500px] top-[100px] flex justify-center items-center'>
                <h1 className='text-[30px] fw-bold'>Welcome Admin Panel</h1>
            </section>
    </div>
    </>
  )
}

export default Dashbord