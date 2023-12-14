import React, { useEffect, useState } from 'react';

const Hsc = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [classHeight, setClassHeight] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      if(window.innerHeight <= 494){
          setClassHeight('very low')
      } else if(window.innerHeight >= 494 && window.innerHeight <= 595){
          setClassHeight('low')
      } else if(window.innerHeight >= 595 && window.innerHeight <= 739){
          setClassHeight('normal')
      } else {
          setClassHeight('high')
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='fixed z-[1000] right-0 bottom-0 py-2 px-4 text-sm bg-orange-600 text-white'>
      <p>{classHeight} : {viewportHeight}</p>
    </div>
  );
}

export default Hsc;
