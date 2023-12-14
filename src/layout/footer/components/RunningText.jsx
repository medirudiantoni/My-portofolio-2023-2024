import React, { forwardRef } from 'react'

const RunningText_footer = forwardRef((props, ref) => {
  const theText = <p className="font-bebas-neue text-2xl lg:text-5xl lg:translate-y-1">Medi Rudiant, 2023 - </p>
  const textLength = 10;
  const textArray = Array.from({ length: textLength }, (_, index) => index);

  return (
    <div ref={ref} className={`absolute z-10 left-0 w-[120%] h-12 lg:h-20 bg-[#242424] text-white flex gap-2 items-center whitespace-nowrap ${props.bottom ? 'bottom-0': 'top-0'}`}>
        <div className="w-fit h-fit flex gap-2 animate-marquee">
            {
                textArray.map((index) => (
                    <div key={index}>{theText}</div>
                ))
            }
        </div>
        <div className="w-fit h-fit flex gap-2 animate-marquee">
            {
                textArray.map((index) => (
                    <div key={index}>{theText}</div>
                ))
            }
        </div>
    </div>
  )
})

export default RunningText_footer


