import React, { forwardRef } from 'react'

const Medi_2023 = forwardRef((props, ref) => {
  const theText = <p className="font-bebas-neue text-2xl lg:text-4xl lg:translate-y-1">Medi Rudiant, 2024 - </p>
  const textLength = 20;
  const textArray = Array.from({ length: textLength }, (_, index) => index);
  return (
    <div ref={ref} className={`w-screen h-fit py-2 font-bebas-neue flex gap-2 items-center ${props.className}`}>
      <div className="w-fit h-fit py-3 bg-[#222] text-white flex items-center whitespace-nowrap">
        <div className="w-fit h-fit flex gap-2 animate-medi-2023 bord2 border-orange-400">
            {
                textArray.map((index) => (
                    <div key={index}>{theText}</div>
                ))
            }
        </div>
        <div className="w-fit h-fit flex gap-2 animate-medi-2023 bord2 border-green-500">
            {
                textArray.map((index) => (
                    <div key={index}>{theText}</div>
                ))
            }
        </div>
      </div>
    </div>
  )
})

export default Medi_2023