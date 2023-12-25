import React from 'react'

const AboutSection_3 = () => {
  return (
    <section className="w-screen px-5 h-fit flex items-center justify-center py-28">
        <div className="container px-5 sm:px-20 xl:px-32">
            
            <div className="w-full py-5 border-b-2 border-b-black dark:border-b-white flex items-center justify-center relative group hover:px-5 duration-200">
                <div className="w-full h-0 absolute bg-violet-600 duration-200 group-hover:h-full"></div>
                <div className="w-full h-full flex items-end justify-between flex-wrap relative z-10 group-hover:text-white">
                    <p className="sm:text-3xl lg:text-5xl font-bold sm:font-medium">Languages</p>
                    <p className=''>HTML, CSS, Javascript</p>
                </div>
            </div>

            <div className="w-full py-5 border-b-2 border-b-black dark:border-b-white flex items-center justify-center relative group hover:px-5 duration-200">
                <div className="w-full h-0 absolute bg-violet-600 duration-200 group-hover:h-full"></div>
                <div className="w-full h-full flex items-end justify-between flex-wrap relative z-10 group-hover:text-white">
                    <p className="sm:text-3xl lg:text-5xl font-bold sm:font-medium">Frameworks</p>
                    <p className=''>Bootstrap, Tailwind, React js</p>
                </div>
            </div>

            <div className="w-full py-5 border-b-2 border-b-black dark:border-b-white flex items-center justify-center relative group hover:px-5 duration-200">
                <div className="w-full h-0 absolute bg-violet-600 duration-200 group-hover:h-full"></div>
                <div className="w-full h-full flex items-end justify-between flex-wrap relative z-10 group-hover:text-white">
                    <p className="sm:text-3xl lg:text-5xl font-bold sm:font-medium">Technologies</p>
                    <p className=''>Github, Wordpress, Webflow, Figma, Firebase</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default AboutSection_3;