import React from 'react'

const AboutPage = () => {
    return (
        <div className='bg-amber-50 pt-20'>
            <button className=' text-3xl font-bold px-4 py-2 bg-amber-300
         hover:bg-white border-l-4  border-b-4 border-black  '>
                About Me
            </button>
            <div className='p-5 px-10 text-xl sm:p-5'>
                Hi, I'm Imran — a passionate MREN Stack Developer with a strong focus on delivering complete web solutions, from initial design to deployment and long-term maintenance.
                I combine my skills in MongoDB, React, Express.js, Node.js with modern DevOps practices to build scalable, efficient, and user-focused applications
            </div>
            <div className='flex justify-between flex-col md:flex-row lg:flex-row '>

                <div>
                    <button className=' text-3xl font-bold px-4 py-2 md:ml-20 lg:ml-20 ml-0
                   hover:bg-white border-l-4  border-b-4 border-black  '>
                        Frontend
                    </button>
                    <ul className='p-4'>
                        <li className='p-4 text-2xl'>Build responsive, dynamic frontends using React,Next and Tailwind CSS.</li>
                        <li className='p-4 text-2xl'>Focus on performance, accessibility, and user experience.</li>
                    </ul>
                </div>
                <div>
                    <button className=' text-3xl font-bold px-4 py-2 md:mr-20 lg:mr-20 mr-0
                     hover:bg-white border-l-4  border-b-4 border-black  '>
                        Backend
                    </button>
                    <ul className='p-4'>
                        <li className='p-4 text-2xl'>Develop powerful, secure, and scalable backend systems with Node.js and Express.js.</li>
                        <li className='p-4 text-2xl'>Design robust APIs and efficient database structures using MongoDB.</li>
                    </ul>
                </div>

            </div>

            {/* 
            second */}
            <div className='flex justify-between flex-col md:flex-row lg:flex-row '>

                <div>
                    <button className=' text-3xl font-bold px-4 py-2 md:ml-20 lg:ml-20 ml-0
   hover:bg-white border-l-4  border-b-4 border-black  '>
                        Integration & Testing
                    </button>
                    <ul className='p-4'>
                        <li className='p-4 text-2xl'>Seamlessly integrate frontend and backend..</li>
                        <li className='p-4 text-2xl'>Conduct thorough testing to ensure smooth functionality, security, and performance.</li>
                    </ul>
                </div>
                <div>
                    <button className=' text-3xl font-bold px-4 py-2 md:mr-20 lg:mr-20 mr-0
     hover:bg-white border-l-4  border-b-4 border-black  '>
                        Deployment & DevOps
                    </button>
                    <ul className='p-4'>
                        <li className='p-4 text-2xl'>Containerize applications with Docker.</li>
                        <li className='p-4 text-2xl'>Set up CI/CD pipelines for automated testing and deployment..</li>
                        <li className='p-4 text-2xl'>Deploy and manage applications on cloud platforms (like AWS, DigitalOcean, etc.).</li>
                    </ul>
                </div>

            </div>
            {/* Three */}

            <div>
                    <button className=' text-3xl font-bold px-4 py-2 ml-20
                   hover:bg-white border-l-4  border-b-4 border-black  '>
                        Maintenance & Optimization
                    </button>
                    <ul className='p-4'>
                        <li className='p-4 text-2xl'>Continuously monitor applications.</li>
                        <li className='p-4 text-2xl'>Perform updates, fix issues, and optimize systems for better scalability and performance.</li>
                    </ul>
                </div>

                <div>
                    <button className=' text-3xl font-bold px-4 py-2 ml-20
                   hover:bg-white border-l-4  border-b-4 border-black  '>
                      My Focus
                    </button>
                    <ul className='p-4'>
                        <li className='p-4 text-2xl'>Building full-stack web applications that are scalable, secure, and user-centric.</li>
                        <li className='p-4 text-2xl'>Automating workflows and deployments with modern DevOps tools.</li>
                        <li className='p-4 text-2xl'>Continuously learning and improving development and operations best practices..</li>
                    </ul>
                </div>


        </div>
    )
}

export default AboutPage