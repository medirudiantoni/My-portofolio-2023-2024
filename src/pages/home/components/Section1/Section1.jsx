import React, { useContext, useEffect, useRef, useState } from 'react'
import Baffle from 'baffle'
import SplitType from 'split-type'
import mediUnida from "../../../../assets/img/me/medi-unida.png"
import homeStar from "../../../../assets/img/icons/homeStar.png"
import { RootContext } from '../../../../context/RootContext'

const Section1 = () => {
  const imgRef = useRef(null);
  const {firstLoad} = useContext(RootContext)
  const mediRef = useRef(null)
  const rudiantRef = useRef(null)
  const [vw, setVw] = useState(window.innerWidth)
  const [vh, setVh] = useState(window.innerHeight)
  const [isBaffle, setIsBaffle] = useState(true)
  useEffect(() => {
    const inwidth = () => {
      setVw(window.innerWidth)
    }
    const inHeight = () => {
      setVh(window.innerHeight)
    }
    window.addEventListener('resize', inwidth)
    window.addEventListener('resize', inHeight)
    return () => {
      window.removeEventListener('resize', inwidth)
      window.removeEventListener('resize', inHeight)
    }
  }, [])

  const baffleSplit = (e, delay) => {
    const mediChar = new SplitType(e, {types: "chars"})
    mediChar.chars.map((letter, i) => {
      const char = Baffle(letter)
      char.start();
      setTimeout(() => {
        char.reveal()
      }, 3500 + (i * delay));
    })
  }

  useEffect(() => {
    if(firstLoad){
      baffleSplit('.animate-baffle', 200)
      baffleSplit('.animate-baffle-bg', 150)
      baffleSplit('.animate-baffle-status', 75)
      baffleSplit('.animate-baffle-p', 20)
    }

  }, []);


  return (
    <section className="w-screen min-h-screen pb-20 lg:pb-0 lg:h-screen relative flex items-start lg:items-center justify-center">
      <div className="relative z-10 container bord2 border-blue-600 h-fit bg-transparent grid grid-cols-12 mx-auto px-5">
        <div className="col-span-12 lg:col-span-4 w-full bord2 flex items-end">
          <p className="absolute -left-5 -translate-y-4 -rotate-6 text-8xl font-bold hidden lg:inline-block">"</p>
          <div className="relative w-full h-fit hidden lg:inline-block pr-10">
            <p className="text-lg animate-baffle-p">
              Hello, I am Medi, an appreciator of visually stunning graphic
              content, striving to bring it to life in tangible forms.
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:hidden w-full h-fit">
            <p className="font-semibold text-4xl sm:text-7xl">
              Medi <br />
              Rudiant
            </p>
            <p className="">
              Graphic Designer <br />& Developer
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 w-full bord2 border-orange-600">
          <div className="relative w-full h-fit flex items-center justify-center py-10">
            <div className="w-60 aspect-[3/3.8] rounded-full overflow-hidden bg-slate-600">
              <img
                ref={imgRef}
                src={mediUnida}
                alt="me"
                className="w-full h-full object-cover"
              />
            </div>
            <p ref={mediRef} className="medi animate-baffle absolute -left-8 -top-4 text-8xl font-semibold hidden lg:block">
              Medi
            </p>
            <p ref={rudiantRef} className="rudiant animate-baffle absolute left-3/4 top-1/3 text-8xl font-semibold hidden lg:flex tracking-tight">
              Rudiant
            </p>
            <div className="absolute left-0 bottom-0 flex flex-col w-24 lg:w-32 h-24 lg:h-32">
              <div className="w-1/2 aspect-square bg-violet-600 self-end"></div>
              <div className="w-1/2 aspect-square bg-violet-600"></div>
            </div>
            <div className="absolute -z-10 -right-2 lg:-right-14 -top-2 lg:-top-14 w-28 aspect-square p-1">
              <img
                src={homeStar}
                alt="star"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 w-full bord2 flex items-end">
          <p className="hidden lg:inline-block animate-baffle-status">
            Graphic Designer <br />& Developer
          </p>
          <div className="w-full h-32 flex justify-end items-end lg:hidden relative">
            <div className="w-4/5 sm:w-1/2 relative">
              <p className="text-5xl font-semibold absolute -top-4 -left-4">"</p>
              <p className="text-[13px] sm:text-base text-end">
                Hello, I am Medi, an appreciator of visually stunning graphic
                content, striving to bring it to life in tangible forms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background absolute top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden lg:whitespace-nowrap">
        <p className="absolute text-[20rem] font-outline-2-slate-200 text-transparent font-semibold dark:opacity-10 animate-baffle-bg">
          Portfolio
        </p>
      </div>
    </section>
  )
}

export default Section1