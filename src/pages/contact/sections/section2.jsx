import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import mediUnida from '../../../assets/img/me/medi-unida.png'
import Success from '../../../layout/Success/Success';

const Section2 = () => {
  const [isTime, setIsTime] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const nameRef = useRef(null);
  const emailRef = useRef(null)
  const mobileRef = useRef(null)
  const messageRef = useRef(null)
  const sendMessage = e => {
    e.preventDefault();
    emailjs.sendForm('service_opv9vu8', 'template_av638dh', form.current, 'knX6Nm08hM8zj2Vtf')
      .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
          nameRef.current.value = '';
          emailRef.current.value = '';
          mobileRef.current.value = '';
          messageRef.current.value = '';
          setIsLoading(false);
      }, (error) => {
          console.log(error.text);
      });
  }
  const format = (value) => {
    return value < 10 ? `0${value}` : value
  }
  useEffect(() => {
    const liveTime = () => {
        fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta').then(res => res.json()).then(result => setIsTime(result));
    }
    liveTime();
    const timeInterval = setInterval(liveTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  const jktTime = new Date(isTime ? isTime.datetime : false);
  return (
    <section className="w-screen h-screen bg-[#7752FE] relative">
        {isSuccess ? <Success onClick={() => setIsSuccess(false)} /> : null}
        <div className="absolute w-full h-[200vh] left-0 bottom-0 bg-[#7752FE] text-white">
            <div className="w-full h-fit pt-10 pb-5 lg:py-0 md:h-screen bord2 border-teal-200 flex justify-center items-end">
                <div className="container h-4/6 bord2 border-orange-400 px-5 sm:px-20 xl:px-32 flex flex-col justify-evenly">
                    <div className="w-full h-fit flex flex-wrap justify-between">
                        <div className="w-full lg:w-4/6 bord2 lg:py-10">
                            <p className="text-xl md:text-5xl lg:text-[64px] font-semibold md:leading-[6vh] lg:leading-[12vh] lg:tracking-tight">Planning a project? <br />Count on me to provide support!</p>
                        </div>
                        <div className="w-full lg:w-2/6 bord2 lg:py-10 flex justify-end">
                            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full flex items-center justify-center overflow-hidden bg-slate-200">
                                <img src={mediUnida} alt="medi" className='w-full h-full object-cover scale-110' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-5 border-b-2 border-white"></div>
                </div>
            </div>
            <div className="w-full h-fit md:h-screen bord2 border-red-400 flex justify-center">
                <div className="container px-5 sm:px-20 xl:px-32 lg:py-10 h-full grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1 h-fit lg:h-full text-xs sm:text-base bord2 border-orange-600 flex flex-col gap-6 lg:gap-10 order-2 lg:order-1">
                        <div className="flex flex-col gap-3 lg:gap-5">
                            <p className="w-fit font-bold pb-1 border-b">Current location</p>
                            <p className="">Indonesia</p>
                        </div>
                        <div className="flex flex-col gap-3 lg:gap-5">
                            <p className="w-fit font-bold pb-1 border-b">Connects</p>
                            <p className=""><a href="">medirudiantoni2@gmail.com</a></p>
                            <p className=""><a href="">+62 812 7362 4740</a></p>
                            <p className=""><a href="">@Oosthavent (Instagram)</a></p>
                            <p className=""><a href="">Facebook</a></p>
                            <p className=""><a href="">Twitter</a></p>
                        </div>
                        <div className="w-fit h-fit py-2 px-4 lg:py-5 lg:px-10 rounded-lg bg-orange-100 text-black">
                            <div className="w-full h-fit flex flex-col gap-2">
                                <p className="text-xs sm:text-base">Current Jakarta Time</p>
                                <p className="text-xl lg:text-5xl font-semibold">{`${format(jktTime.getHours())}:${format(jktTime.getMinutes())}:${format(jktTime.getSeconds())}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 h-fit lg:h-full bord2 border-orange-600 order-1 lg:order-2">
                        <div className="w-full h-fit font-semibold">
                            <form ref={form} onSubmit={sendMessage} className='flex flex-col'>
                                <label htmlFor="name" className='block text-sm sm:text-base'>What's your name?</label>
                                <input type="text" id='name' ref={nameRef} defaultValue={''} name='name' className='mb-4 lg:mb-8 bg-transparent border-b lg:border-b-2 border-violet-400 lg:border-white py-2 focus:outline-0 placeholder:text-white/50' />
                                <label htmlFor="email" className='block text-sm sm:text-base'>What's your email?</label>
                                <input type="email" id='email' ref={emailRef} defaultValue={''} name='email' className='mb-4 lg:mb-8 bg-transparent border-b lg:border-b-2 border-violet-400 lg:border-white py-2 focus:outline-0 placeholder:text-white/50' />
                                <label htmlFor="number" className='block text-sm sm:text-base'>What's your phone number?</label>
                                <input type="number" id='number' ref={mobileRef} defaultValue={''} name='number' className='mb-4 lg:mb-8 bg-transparent border-b lg:border-b-2 border-violet-400 lg:border-white py-2 focus:outline-0 placeholder:text-white/50' />
                                <label htmlFor="message" className='block text-sm sm:text-base'>Your message</label>
                                <textarea id="message" ref={messageRef} defaultValue={''} name="message" className="mb-4 lg:mb-8 p-2 block w-full bg-transparent border-b lg:border-b-2 border-violet-400 lg:border-white focus:outline-none focus:bg-[#5237b2]"></textarea>
                                <div className={`w-full h-fit mb-10 bg-white text-black rounded-md duration-200 group relative text-center overflow-hidden ${ isLoading ? 'cursor-not-allowed' : 'hover:scale-95 active:scale-90' }`}>
                                    <input type="submit" value={"Send"} onClick={() => setIsLoading(true)} className='py-2 lg:py-4 px-8 w-full h-full relative z-10 active:bg-violet-500 cursor-pointer' />
                                    <div className="absolute top-0 left-0 translate-y-full origin-left rotate-12 w-full h-full rounded-md bg-violet-300 group-hover:translate-y-0 group-hover:rotate-0 duration-500 active:bg-violet-500"></div>
                                    <div className={`absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-violet-300 ${isLoading ? 'block' : 'hidden'}`}>
                                        Loading...
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2

