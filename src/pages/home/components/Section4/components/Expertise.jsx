import React, { useEffect, useState } from 'react'

const Expertise = (props) => {
  const [vh, setVh] = useState(window.innerHeight);
  const text = Array.from(props.text);
  useEffect(()=>{
    window.addEventListener('resize', () => setVh(window.innerHeight))
    return () => window.removeEventListener('resize', () => setVh(window.innerHeight))
  })
  return (
    <div className={`w-full h-fit py-4 sm:py-7 lg:py-10 flex items-center justify-center border-b sm:border-b-2 border-white relative group cursor-default text-xl sm:text-3xl ${vh <= 595 ? 'lg:text-[10vh]' : 'lg:text-6xl'}`}>
        <div className={`w-full h-fit ${props.textEnd ? 'text-end' : ''}`}>
            <p className="">{props.name}</p>
        </div>
        <div className="absolute bottom-0 h-0 w-screen overflow-hidden flex items-center whitespace-nowrap bg-[#222] group-hover:h-full duration-200 origin-bottom">
            <div className="w-fit px-5 flex gap-6 ">
                <div className="flex gap-6 animate-marquee-normal">
                    {text.map((word, i) => {
                        return <p key={i} >{word}</p>
                    })}
                </div>
                <div className="flex gap-6 animate-marquee-normal">
                    {text.map((word, i) => {
                        return <p key={i} >{word}</p>
                    })}
                </div>
                { props.third && <div className="flex gap-6 animate-marquee-normal">
                    {text.map((word, i) => {
                        return <p key={i} >{word}</p>
                    })}
                </div> }
            </div>
        </div>
    </div>
  )
}

Expertise.defaultProps = {
    text : ['HTML', 'CSS', 'Javascript', 'NodeJS', 'ReactJs', 'Bootstrap', 'TailwindCSS', 'Firebase'],
    name: 'Website'
}

export default Expertise