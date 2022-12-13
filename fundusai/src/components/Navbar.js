import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import '../App.css'

import React, { useState } from 'react'
// import Button from './Button';

const Navbar= () => {
    // let Links =[
    //   {name:"Home",link:"/"},
    //   {name:"How It Works",link:"/"},
    //   {name:"About Us",link:"/"},
    //   {name:"CONTACT",link:"/"},
    // ];
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
            {/* {
              Links.map((link)=>(
                <li key={link.name} className='md:ml-4 lg:ml-8 text-base font-xl font-medium md:my-0 my-7'>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>

                </li>
              ))
            } */}
            {/* <Button>
              Get Started
            </Button> */}
          </ul>
      </div>
     </div>
  )
}

export default Navbar

// import React, { useState } from 'react';
// import {Link} from 'react-router-dom'

// function Navbar() {
  // let [open,setOpen]=useState(false)
//   return (
//     <nav>
//         <div className='px-20 py-8 sm:flex items-center justify-between'>
//             <img src={logo} alt='logo' className='w-[90px]' />
//             <ol className='py-3 sm:flex items-center gap-3 sm:gap-5 lg:gap-10 md:pr-36'>
//                 <li className='py-2 '><a href={'/'}>Home</a></li>
//                 <li className='py-2 '><a href={'/'} > How it works</a></li>
//                 <li className='py-2 '><a href={'/'} > About Us</a></li>
//                 <li className='py-2 '><a href={'/'} > Contact</a></li>
//             </ol>
//         </div>
//       </nav>



// );
// }

// export default Navbar;

// <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//   <div className="container flex flex-wrap items-center justify-between mx-auto">
//     <a href="https://flowbite.com/" className="flex items-center">
//         <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
//         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//     </a>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//       <span className="sr-only">Open main menu</span>
//       <svg name={open ? 'close':'menu'} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>