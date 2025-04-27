

import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
                 <Link to="/about"><span className='flex justify-center text-blue-900 text-2xl font-bold  cursor-pointer mt-5 '>IMRAN</span></Link>
        <div className='w-max flex items-center gap-2 mx-auto'>
          
            imran32472@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400  mx-[10%] mt-12 py-6'>
            <p>@<span className='px-3'>2025.</span> <span>IMRAN</span> All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><Link to="https://github.com/Mdimran19">GitHub</Link></li>
                <li><Link to="https://www.facebook.com/profile.php?id=100083191555301">Facebook</Link></li>
                <li><Link to="https://www.linkedin.com/in/imranmia/">Linkedin</Link></li>
            </ul>
        </div>
           
        </div>

  )
}

export default Footer