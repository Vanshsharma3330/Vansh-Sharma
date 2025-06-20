import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackImgs } from "../constants";

const TechStack = () => {
  useGSAP(() => {
   
    gsap.fromTo(
      ".tech-card",
      {
    
        y: 50, 
        opacity: 0, 
      },
      {
      
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2, 
        scrollTrigger: {
          trigger: "#skills", 
          start: "top center", 
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-16">
          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group rounded-lg h-44"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content h-full flex flex-col justify-center items-center gap-4">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" className="w-16 h-16" />
                </div>
                <div className="padding-x w-full text-center">
                  <p className="text-lg">{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;