import React from "react";
import inClass from "../../../../assets/img/bg/inClass.png";
import e6 from "../../../../assets/img/bg/e6.png";

const AboutSection_4 = () => {
  return (
    <section className="w-screen min-h-screen h-fit lg:h-screen bg-[#222] text-white">
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="container h-[80%] bord2 relative z-20 flex flex-col justify-between">
          <div className="md:w-4/6">
            <p className="text-lg">
              I'm thrilled to share with you how I can assist in bringing your
              creative ideas and online projects to life. As a web developer and
              graphic designer, my mission is to provide solutions that meet
              your unique needs with compelling visual appeal. I believe that
              every project has its own story, and I'm ready to help you tell it
              through stunning design and remarkable web functionality.
            </p>
          </div>
          <div className="text-center text-4xl font-semibold">
            Let's Work Togather
          </div>
          <div className="md:w-[75%] flex justify-between self-end">
            <div className="w-2/5">
              <h5 className="text-xl">Web Development</h5>
              <div className="my-2 border-b w-full"></div>
              <p className="">
                I specialize in creating engaging and user-friendly online
                experiences. From responsive website development to performance
                optimization, I focus on every detail to ensure your website is
                not only visually captivating but also effective in achieving
                your business goals.
              </p>
            </div>
            <div className="w-2/5">
              <h5 className="text-xl">Graphic Design</h5>
              <div className="my-2 border-b w-full"></div>
              <p className="">
                Graphic design is the visual art that can enhance your brand.
                From memorable logos to attention-grabbing marketing materials,
                I work hard to create designs that reflect your unique identity
                and business values.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-[90%] h-[90%] bord2 border-slate-600 flex justify-between">
          <div className="self-end w-80 h-fit rounded-2xl overflow-hidden relative">
            <img
              src={inClass}
              alt="inClass"
              className="w-full h-fit object-cover"
            />
          </div>
          <div className="w-72 h-fit rounded-2xl overflow-hidden relative">
            <img src={e6} alt="e6" className="w-full h-fit object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection_4;
