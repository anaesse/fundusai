import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import '../App.css'
import React, { useState } from 'react'

const Navbar= () => {
    let [open,setOpen]=useState(false);
  return (
    
    <div className='w-full '>
      <div className='md:flex items-center justify-between bg-white md:py-10 py-4 md:pl-20 md:pr-[150px] lg:pr-[200px] px-10'>
          <img src={logo} alt='logo' className='w-[165px]' />
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
       
            <li className= 'md:ml-4 lg:ml-8 text-base font-xl font-medium md:my-0 my-7' ><NavLink to='/' className={({isActive})=>isActive?'link active' : 'link'} >Home</NavLink></li>
            <li className= 'md:ml-4 lg:ml-8 text-base font-xl font-medium md:my-0 my-7' ><NavLink to='/services'>How It Works</NavLink></li>
            <li className= 'md:ml-4 lg:ml-8 text-base font-xl font-medium md:my-0 my-7' ><NavLink to='/about'>About Us</NavLink></li>
            <li className= 'md:ml-4 lg:ml-8 text-base font-xl font-medium md:my-0 my-7' ><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
      </div>
     </div>
  )
}
export default Navbar