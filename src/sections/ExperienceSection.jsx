import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
// import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(".timeline", {
            height: `${self.progress * 100}%`,
            ease: "none"
          });
        }
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);
  return (
    <section id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
        <div className='w-full h-full md:px-20 px-5'>
          <TitleHeader title="Educational Background

"
          sub="🎓 Academic Journey" />
          {/* EDUCATION SECTION */}
          <div className="mt-32 relative">
            <div className="relative z-50 xl:space-y-16 space-y-8">
              {/* Engineering */}
              <div className="exp-card-wrapper timeline-card">
                <div className="xl:w-4/6 xl:ml-[16.666667%]">
                  <div className="timeline-wrapper absolute left-0">
                    <div className="timeline" />
                    <div className="gradient-line w-1 h-full" />
                  </div>
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-white">Bachelor of Engineering in Computer Science</h3>
                      <p className="text-gray-400 mb-2">Chitkara University, Punjab</p>
                      <p className="text-white-50 mb-2">2022 – 2026</p>
                      <p className="text-white-50 mb-2">CGPA: 8.73</p>
                      <p className="text-[#839CB5] italic mb-2">Relevant Coursework:</p>
                      <p className="text-white-50 mb-4">
                        Algorithms & Data Structures, Operating Systems, DBMS, Full Stack Web Development, Cloud Computing, Object Oriented Programming, Computer Architecture
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 12th */}
              <div className="exp-card-wrapper timeline-card">
                <div className="xl:w-4/6 xl:ml-[16.666667%]">
                  <div className="timeline-wrapper absolute left-0">
                    <div className="timeline" />
                    <div className="gradient-line w-1 h-full" />
                  </div>
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-white">Senior Secondary Education (Class XII)</h3>
                      <p className="text-gray-400 mb-2">Government Model Senior Secondary School, Chandigarh</p>
                      <p className="text-white-50 mb-2">2021 – 2022</p>
                      <p className="text-white-50 mb-2">Board: CBSE</p>
                      <p className="text-white-50 mb-2">Percentage: 84%</p>
                      <p className="text-white-50 mb-2">Stream: Non-Medical</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 10th */}
              <div className="exp-card-wrapper timeline-card">
                <div className="xl:w-4/6 xl:ml-[16.666667%]">
                  <div className="timeline-wrapper absolute left-0">
                    <div className="timeline" />
                    <div className="gradient-line w-1 h-full" />
                  </div>
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-white">Secondary Education (Class 10th)</h3>
                      <p className="text-gray-400 mb-2">St. Mary's School, Chandigarh</p>
                      <p className="text-white-50 mb-2">2019 – 2020</p>
                      <p className="text-white-50 mb-2">Board: CBSE</p>
                      <p className="text-white-50 mb-2">Percentage: 80%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Experience;
