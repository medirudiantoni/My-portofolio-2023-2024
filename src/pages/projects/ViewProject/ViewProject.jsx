import React from "react";
import { Navigate, useParams } from "react-router";
import works from '../../../assets/data/works.json';
import RunningText_footer from "../../../layout/footer/components/RunningText";
import transitionPage from "../../../layout/transition/Transition";
import { Link } from "react-router-dom";

const ViewProject = () => {
  let { projectId } = useParams();

  const work = works.find(work => work.name === projectId)

  const previosWork = works.find(theWork => theWork.id === work.id - 1);
  const nextWork = works.find(theWork => theWork.id === work.id + 1);

  return (
    <div className="w-screen min-h-screen">
      <section className="w-full min-h-screen flex gap-20 flex-col pt-44 pb-32 justify-center items-center px-5 sm:px-20 bord2 border-orange-600">
        <div className="container flex flex-wrap md:flex-nowrap gap-2 sm:gap-10 items-center justify-between bord2 border-blue-600">
          <div className="min-w-fit">
            <p className="text-3xl sm:text-5xl font-semibold">
              {work.name}
            </p>
          </div>
          <div className="w-full h-1 border-b-2"></div>
          <p className="sm:text-2xl">{work.Category}</p>
        </div>
        <div className="container">
          <div className="w-full flex justify-between flex-wrap border-red-600">
            <div className="sm:w-[300px] sm:h-[375px] lg:w-[400px] lg:h-[500px] rounded-3xl flex overflow-hidden border-orange-600">
              <img
                src={work.poster}
                alt={work.poster}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="sm:w-full py-10 lg:py-0 lg:w-1/2 xl:w-3/5 2xl:w-2/3 h-fit flex flex-col gap-10 border-teal-600">
              <div
                className="detail-project flex flex-col gap-3 text-sm"
                dangerouslySetInnerHTML={{
                  __html: work.detail
                }}
              />
              {
                work.link && (
                  <a
                    href={work.link}
                    className="flex gap-4 duration-100 items-center justify-start w-full md:w-1/2 py-4 px-8 text-xl font-medium rounded-2xl bg-slate-200 dark:bg-neutral-800 group relative hover:scale-95 overflow-hidden"
                    target="_blank"
                  >
                    <div className="relative z-10 min-w-fit">Live Site</div>
                    <div className="relative z-10 w-0 group-hover:w-full h-1 border-b-2 border-[#222] dark:border-white duration-1000 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"></div>
                    <div className="w-full h-full absolute left-0 top-full rounded-2xl bg-violet-300 dark:bg-primary-dark group-hover:top-0 duration-500 origin-left rotate-12 group-hover:rotate-0"></div>
                  </a>
                )
              }
            </div>
          </div>
        </div>

      </section>

      <section className="w-full min-h-fit flex items-start justify-center px-5 sm:px-20">
        <div className="container my-10 sm:my-0">
          <div className="w-full h-fit grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div className="col-span-1 sm:col-span-2 aspect-video rounded-lg lg:rounded-3xl bg-slate-200 dark:bg-neutral-800 flex overflow-hidden shadow-2xl">
              <img src={work.images.major} alt={work.images.major} className="w-full h-full object-cover" />
            </div>
            {work.images.additional ? (
              work.images.additional.map((img, i) => {
                return (
                  <div key={i} className="col-span-1 h-fit rounded-lg lg:rounded-3xl flex overflow-hidden shadow-2xl">
                    <img src={work.images.additional[i]} alt={work.images.additional[i]} className="w-full h-fit object-cover" />
                  </div>
                )
              })
            ) : null}
          </div>
        </div>
      </section>

      <section className="w-full h-fit flex items-center justify-center px-5">
        <div id="next-prev" className="container sm:px-20 xl:px-32 h-40 sm:h-80 grid gap-2 grid-cols-1 sm:grid-cols-2">
          <div className="col-span-1 flex items-center justify-start">
            {previosWork !== undefined ?(
                <Link to={`/projects/${previosWork.name}`}>
                  <div className="min-w-fit py-2 sm:py-4 px-4 sm:px-8 font-medium rounded-2xl bg-slate-200 dark:bg-neutral-800 relative group overflow-hidden hover:scale-95 duration-100">
                    <div className="relative z-10">Previous: <br /><span className="font-bold">{previosWork.name}</span></div>
                    <div className="absolute w-full h-full left-0 top-full rounded-2xl bg-violet-300 dark:bg-primary-dark group-hover:top-0 origin-left rotate-12 group-hover:rotate-0 ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500"></div>
                  </div>
                </Link>
              ) : null }
          </div>
          <div className="col-span-1 flex items-center justify-end">
            {nextWork !== undefined ? (
                <Link to={`/projects/${nextWork.name}`}>
                  <div className="min-w-fit py-2 sm:py-4 px-4 sm:px-8 font-medium rounded-2xl bg-slate-200 dark:bg-neutral-800 relative group overflow-hidden hover:scale-95 duration-100">
                    <div className="relative z-10">Next: <br /><span className="font-bold">{nextWork.name}</span></div>
                    <div className="absolute w-full h-full left-0 top-full rounded-2xl bg-violet-300 dark:bg-primary-dark group-hover:top-0 origin-left rotate-12 group-hover:rotate-0 ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500"></div>
                  </div>
                </Link>
              ) : null}
          </div>
        </div>
      </section>
      <section className="w-full h-20 relative">
        <RunningText_footer bottom={true} />
      </section>
    </div>
  );
};

export default transitionPage(ViewProject);
