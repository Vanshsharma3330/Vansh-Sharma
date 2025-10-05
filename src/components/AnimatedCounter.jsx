import React from 'react'
import { counterItems } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = () => {
  useGSAP(() => {
    gsap.fromTo('.about-box',
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.about-box',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  return (
    <div id='counter' className='padding-x-lg xl:mt-5 mt-2'>
        <div className='mx-auto'>
            {counterItems.map((item, index) => (
                <div key={index} className='bg-zinc-900 rounded-lg p-6 flex flex-col justify-center about-box'>
                    <div className='text-white-50 text-lg leading-relaxed'>
                        I'm a final-year Computer Science Engineering student with a strong foundation in <span className="text-white font-bold italic">full-stack web development</span> and <span className="text-white font-bold italic">problem-solving</span>. I've built several academic and personal projects using technologies like <span className="text-white font-bold italic">Next.js</span>, <span className="text-white font-bold italic">Node.js</span>, <span className="text-white font-bold italic">Express.js</span>, and <span className="text-white font-bold italic">MongoDB</span>. With <span className="text-white font-bold italic">200+ DSA problems</span> solved and active participation in <span className="text-white font-bold italic">hackathons</span>, I bring both technical expertise and collaborative experience to the table. I also worked as an <span className="text-white font-bold italic">IT Intern Trainee at Cadera Infotech Pvt. Ltd.</span>, where I contributed to the development and optimization of company websites, fixed UI bugs, improved application performance, and assisted in deploying projects on Vultr servers. I'm passionate about learning new technologies, building scalable web solutions, and continuously growing as a developer.
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter
