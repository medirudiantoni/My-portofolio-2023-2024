import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import works from '../../../../assets/data/works.json'

const ProjectSection_2 = () => {
  const [vw, setVw] = useState(window.innerWidth);
  const minVw = (val) => {
    let min = 0;
    if(vw <= 700){
      min = 0;
    } else {
      min = -(val)
    };
    return min;
  }

  console.log(minVw())

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const transUp1 = gsap.to('.item1', {
      y: minVw(50),
      scrollTrigger: {
        trigger: '.item1',
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
      }
    })
    const transUp2 = gsap.to('.item3', {
      y: minVw(100),
      scrollTrigger: {
        trigger: '.item3',
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
      }
    });
    window.addEventListener('resize', () => setVw(window.innerWidth))
    return () => {
      transUp1.kill()
      transUp2.kill()
      window.removeEventListener('resize', () => setVw(window.innerWidth))
    }
  })
  
  return (
    <section className="w-full px-5 min-h-screen pb-96 relative">
      {/* <div className="container sm:px-20 xl:px-32 mb-20 mx-auto relative">
        <div className="flex gap-4 flex-wrap text-6xl">
          <div className="">All Projects</div>
        </div>
      </div> */}
      <div className="container sm:px-20 xl:px-32 mx-auto relative grid gap-x-10 gap-y-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {
          works && works.map((work, i) => {
            return (
            <div key={i} className={`work-item col-span-1 h-fit group relative ${ i % 4 == 0 ? 'item2' : i % 2 == 0 ? 'item3' : 'item1' }`}>
              <Link to={`/projects/${work.name}`}>
                {vw <= 900 ? '' : <div data-cursor-text="View work" className="w-full h-full absolute left-0 top-0 z-10"></div>}
                <div className="w-full aspect-[3/4] rounded-[20px] lg:rounded-[80px] bg-slate-200 group-hover:scale-95 group-hover:rounded-[80px] lg:group-hover:rounded-[160px] duration-500 flex overflow-hidden relative">
                  <img src={work.poster} alt={work.poster} className='w-full h-full object-center group-hover:scale-110 duration-500' />
                </div>
                <div className="w-full h-fit py-5">
                  <p className="text-3xl font-semibold mb-5">{work.name}</p>
                  <p className="text-xl">{work.Category}</p>
                </div>
              </Link>
            </div>)
            }
          )
        }

      </div>
    </section>
  )
}

export default ProjectSection_2

