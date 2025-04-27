import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "../custom.css"

const Navber = () => {
    const sideMenuRef = useRef();
    
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
      }
      const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
      }
    return (
        <div className="navbar bg-neutral text-neutral-content w-full flex justify-between">
            <div className='flex'>
                <h1 className=' xs:hidden sm:hidden md:hidden lg:flex'>IMRAN.DEV</h1>
                <img onClick={openMenu} className='md:hidden lg:hidden sm:flex' src="/th.png" alt="menu" width={20} height={20}/>

            </div>
            <ul className='flex-row justify-between gap-20 md:flex lg:flex hidden'>
                <li className='flex'><svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg><Link to="/" > Home</Link> </li>
                <li className='flex'><svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg><Link to="/about" >About me</Link></li>
                <li><Link to="/skills" >Skills</Link></li>
                <li><Link to="/projects" >Projects</Link></li>
                <li><Link to="/contacts" >Contact</Link></li>
            </ul>
        
            {/*--------mobile menu------------*/}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
    top-0 buttom-0 w-64 z-50 h-[650px] backdrop-blur-md transition duration-500 text-green-400'>
      <div className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
        <img src='/Cross.png' alt='' width={25} height={25} />
      </div>
    <li><Link onClick={closeMenu} to="/">Home</Link></li>
    <li><Link onClick={closeMenu} to="/about">About me</Link></li>
    <li><Link onClick={closeMenu} to="/skills">Skills</Link></li>
    <li><Link onClick={closeMenu} to="/projects">My Project</Link></li>
    <li><Link onClick={closeMenu} to="/contacts">Contact me</Link></li>
    </ul>


        </div>
    )
}

export default Navber

