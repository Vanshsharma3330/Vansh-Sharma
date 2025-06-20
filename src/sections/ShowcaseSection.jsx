import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const newProjectRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current, newProjectRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Hands-On Development Experience</h2>
        <div className="showcaselayout flex flex-col">
          {/* Project 1 Block */}
          <div className="w-full mb-10">
            <div ref={rydeRef} className="first-project-wrapper">
              <div className="image-wrapper group relative overflow-hidden">
                <img
                  src="/images/project1.png"
                  alt="Ryde App Interface"
                  className="transition duration-300 group-hover:opacity-60"
                />
                <a
                  href="https://github.com/Vanshsharma3330/QuizNova-IntelliQuiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition">View Repo</button>
                </a>
              </div>
              <div className="text-content">
                <h2>
                Interactive Quizzing Made Engaging with QuizNova
                </h2>
                <p className="text-white-50 md:text-xl">
                A full-stack quiz application built with React.js, Node.js, Express, and MongoDB — designed for real-time participation, dynamic question formats, and competitive leaderboards.
                </p>
              </div>
            </div>
          </div>

          {/* Projects 2, 3, 4 in a horizontal row below */}
          <div className="project-list-wrapper flex flex-row gap-6 justify-center items-start w-full max-w-full overflow-x-auto hide-scrollbar">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] group relative overflow-hidden">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  className="transition duration-300 group-hover:opacity-60"
                />
                <a
                  href="https://github.com/Vanshsharma3330/Medicare-Booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition">View Repo</button>
                </a>
              </div>
              <h2>Medicare Booking Platform</h2>
              <p className="text-white-50 md:text-xl">
                A comprehensive healthcare appointment platform enabling users to book, manage, and track medical appointments with ease. Built with modern web technologies for reliability and security.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] group relative overflow-hidden">
                <img
                  src="/images/project3.png"
                  alt="YC Directory App"
                  className="transition duration-300 group-hover:opacity-60"
                />
                <a
                  href="https://github.com/Vanshsharma3330/Face-Recognition-Attendance-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition">View Repo</button>
                </a>
              </div>
              <h2>Face-Recognition Based Attendance System</h2>
              <p className="text-white-50 md:text-xl">
                An innovative attendance system leveraging face recognition technology to automate and secure the process, ensuring accuracy and efficiency for institutions and organizations.
              </p>
            </div>

            <div className="project" ref={newProjectRef}>
              <div className="image-wrapper bg-[#E0F7FA] group relative overflow-hidden">
                <img
                  src="/images/project4.png"
                  alt="Sidcup Family Golf"
                  className="transition duration-300 group-hover:opacity-60"
                />
                <a
                  href="https://vanshsharma3330.github.io/Sidcup-Family-Golf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition">View Repo</button>
                </a>
              </div>
              <h2>Sidcup Family Golf – Reimagined with Clean Code & Smooth Animations</h2>
              <p className="text-white-50 md:text-xl">
                A visually engaging and interactive website for Sidcup Family Golf, featuring smooth animations and a clean codebase to enhance user experience and accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;