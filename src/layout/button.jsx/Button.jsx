import React, { useEffect, useRef } from 'react'

const Button = () => {
  const overlayRef = useRef(null)
  useEffect(() => {
    overlayRef.current.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        overlayRef.current.style.left = x + 'px';
        overlayRef.current.style.top = y + 'px';
    })
  }, [])
  return (
    <div className="w-full aspect-square bg-slate-300 relative flex items-center justify-center group">
        <div ref={overlayRef} id='overlay-hover-button' className="absolute top-0 left-0 w-[200%] rounded-full aspect-square bg-gray-900 scale-50 group-hover:scale-100 duration-200"></div>
        <div className="relative z-20 text-white mix-blend-difference">
            <p className="text-xl">Click me</p>
        </div>
    </div>
  )
}

export default Button