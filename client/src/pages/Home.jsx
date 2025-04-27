import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../custom.css"

const Home = () => {
    
    const words = ["MREN", "Stack", "Developer", "|", "DevOps"];
    const [displayedWords, setDisplayedWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < words.length) {
            const timer = setTimeout(() => {
                setDisplayedWords((prevWords) => [...prevWords, words[currentIndex]]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 1000); 
            return () => clearTimeout(timer);
        } else {
            const resetTimer = setTimeout(() => {
                setDisplayedWords([]);
                setCurrentIndex(0);
            }, 2000); 
            return () => clearTimeout(resetTimer);
        }
    }, [currentIndex, words]);




    return (
        <>
            <div className='flex mt-5 bg-black'>


                <div className=' relative h-[700px] w-full overflow-hidden hidden md:flex lg:flex'>
                    <div className="absolute  bg-amber-100 " style={{ width: '600px', height: '700px', clipPath: 'polygon(0 0, 100% 0, 66.66% 100% , 0% 100%' }}>
                        <h1 className='text-2xl mt-10 mr-40 font-bold'>IMRAN.DEV</h1>
                        <p className='text-xl font-semibold mt-30  mr-30 '>Hi , I am Imran</p>
                        <div className='mt-10 mr-40  space-x-5 min-h-[100px] '>
                            {displayedWords.map((word, idx) => (
                                <span key={idx} className='inline-block transition-all duration-500 '>{word}</span>
                            ))}

                        </div>
                        <div className='mt-10 mr-30'>
                            <ul className='flex justify-around animate-float'>
                                <li><Link to="https://github.com/Mdimran19">Github</Link></li>
                                <li><Link to="https://www.linkedin.com/in/imranmia/">Linkedin</Link></li>
                                <li><Link to="https://www.facebook.com/profile.php?id=100083191555301">Facebook</Link></li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className=' relative h-[700px] w-full '>
                    <ul className='flex-row justify-between text-xl mt-7 text-amber-50 hidden md:flex lg:flex'>
                        <li><Link className='p-2 mt-5 active:bg-amber-50 active:text-black active:rounded-md hover:bg-amber-50 hover:text-black hover:rounded-xl ' to='/about' >About</Link></li>
                        <li><Link className='p-2 mt-5 active:bg-amber-50 active:text-black active:rounded-md hover:bg-amber-50 hover:text-black hover:rounded-xl' to='/skills'>Skills</Link> </li>
                        <li><Link className='p-2 mt-5 active:bg-amber-50 active:text-black active:rounded-md hover:bg-amber-50 hover:text-black hover:rounded-xl' to='/project'>About</Link> </li>
                        <li><Link className='p-2 mr-2 mt-5 active:bg-amber-50 active:text-black active:rounded-md hover:bg-amber-50 hover:text-black hover:rounded-xl' to='/contacts'>Skills</Link> </li>
                    </ul>
                    <img className='pt-30 ' src="/imran.png" alt="owner" />

                </div>
                <div className="absolute bg-white/40 backdrop-blur-md text-black h-[200px] mt-[520px] w-[91%] md:hidden lg:hidden sm:flex overflow-auto" style={{ clipPath: "polygon(0 100px, 100% 0 , 100% 100% , 0 100%)" }}>

                  
                    <div>
                    <ul className='flex justify-between text-xl mt-7 text-amber-50'>
                        <div className='mt-15 ml-20'>
                          <h1>Hi , I am Imran</h1>
                          <p>MREN STACK DEVELIOPER | DevOps</p>
                        </div>
                        <div className='mt-5 ml-15 '>

                        <li><Link to="https://github.com/Mdimran19">Github</Link></li>
                        <li className='mt-4'><Link to="https://www.facebook.com/profile.php?id=100083191555301">Facebook</Link></li>
                        <li className='mt-4'><Link to="https://www.linkedin.com/in/imranmia/">Linledin</Link></li>
                        </div>
                    </ul>
                    </div>
                </div>

            </div>

           
         
           

        </>




    )
}

export default Home