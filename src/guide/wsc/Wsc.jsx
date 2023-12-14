import React, { useEffect, useState } from 'react'

const Wsc = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [classWidth, setClassWidth] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      if(window.innerWidth <= 494){
          setClassWidth('very low')
      } else if(window.innerWidth >= 494 && window.innerWidth <= 595){
          setClassWidth('low')
      } else if(window.innerWidth >= 595 && window.innerWidth <= 739){
          setClassWidth('normal')
      } else {
          setClassWidth('high')
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='fixed z-[1100] bottom-9 text-sm right-0 py-2 px-4 bg-blue-600 text-white flex'>
        <span className="sm:hidden">Mobile :</span>
        <span className="hidden sm:block md:hidden">sm :</span>
        <span className="hidden md:block lg:hidden">md :</span>
        <span className="hidden lg:block xl:hidden">lg :</span>
        <span className="hidden xl:block 2xl:hidden">xl :</span>
        <span className="hidden 2xl:block">2xl</span>
      <span className="ml-2">{viewportWidth}</span>
    </div>
  )
}

export default Wsc