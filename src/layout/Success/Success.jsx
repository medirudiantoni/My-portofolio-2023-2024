import React, { useEffect, useState } from 'react'
import success500 from '../../assets/img/icons/success500.png'

const Success = (props) => {
  const [isScaled, setIsScaled] = useState(false);
  const [isMove, setIsMove] = useState(false);
  useEffect(()=> {
    setTimeout(()=>{
        setIsScaled(true);
        setTimeout(() => {
            setIsMove(true);
        }, 1000);
    }, 10);
  }, [])
  return (
    <div className="fixed z-[1099] w-screen h-screen top-0 left-0 flex items-center justify-center">
        <div className={`absolute bg-white rounded-full aspect-square w-0 ${isScaled ? 'w-[300vw] duration-1000' : ''}`}></div>
        <div className={`absolute z-10 bg-green-600 rounded-full aspect-square w-0 ${isScaled ? 'w-[300vw] duration-1000 delay-100' : ''}`}></div>
        <div className={`absolute z-10 bg-white rounded-full aspect-square w-0 ${isScaled ? 'w-[300vw] duration-1000 delay-200' : ''}`}></div>
        <div className={`absolute z-10 rounded-full aspect-square w-32 ease-out ${isScaled ? 'scale-100 duration-700 delay-300' : 'scale-0'} ${isMove ? '-translate-y-16 duration-100' : ' ease-[cubic-bezier(.42,1.81,.54,.54)]'} flex items-center justify-center`}>
            <img src={success500} alt="success" className='w-full h-full object-cover' />
        </div>
        <div className={`absolute z-30 translate-y-16 w-fit h-fit ${isScaled ? 'scale-100' : 'scale-0'}`}>
            <div onClick={props.onClick} className={`relative flex items-center flex-col gap-2 ease-out ${ isMove ? 'translate-y-0 duration-500  delay-500 opacity-100' : 'translate-y-full opacity-0' }`}>
                <p className="text-xl font-semibold">Success</p>
                <p className="pb-1 hover:border-b-2 text-green-500 border-green-500 cursor-pointer">okay</p>
            </div>
        </div>
    </div>
  )
}

export default Success