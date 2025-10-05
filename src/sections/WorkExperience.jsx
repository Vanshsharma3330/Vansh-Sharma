import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { workExperience } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".work-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section id="work-experience" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Professional Experience"
          sub="💼 Work Journey"
        />
        
        <div className="mt-16 space-y-8">
          {workExperience.map((experience, index) => (
            <div key={index} className="work-card">
              <div className="card-border rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo/Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2">
                      <img 
                        src={experience.imgPath} 
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-xl text-blue-400 font-semibold">
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-white-50 text-sm md:text-base">
                        {experience.date}
                      </div>
                    </div>
                    
                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="text-white-50 leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
