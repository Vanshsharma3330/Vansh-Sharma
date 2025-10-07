const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  // {
  //   name: "Experience",
  //   link: "#work-experience",
  // },
  {
    name: "Education",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

const counterItems = [
  {
    text: "I'm a final-year Computer Science Engineering student with a strong foundation in full-stack web development and problem-solving. I've built several academic and personal projects using technologies like Next.js, Node.js, Express.js, and MongoDB. With 200+ DSA problems solved and active participation in hackathons, I bring both technical expertise and collaborative experience to the table. I also worked as an IT Intern Trainee at Cadera Infotech Pvt. Ltd., where I contributed to the development and optimization of company websites, fixed UI bugs, improved application performance, and assisted in deploying projects on Vultr servers. I'm passionate about learning new technologies, building scalable web solutions, and continuously growing as a developer."
  }
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Attention to Detail",
    desc: "Striving for clean, optimized, and well-structured code in every project I build.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "Collaborating effectively and keeping teammates or mentors updated during projects.",
  },
  {
    imgPath: "/images/time.png",
    title: "Timely Execution",
    desc: "Committed to meeting deadlines and delivering consistent progress, even in fast-paced environments.",
  },
];

const techStackImgs = [
  {
    name: "Java",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "C++",
    imgPath: "/images/logos/cpp.png",
  },
  {
    name: "C",
    imgPath: "/images/logos/c.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js",
    imgPath: "/images/logos/nextjs.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Express.js",
    imgPath: "/images/logos/expressjs.png",
  },
  {
    name: "MySQL",
    imgPath: "/images/logos/mysql.png",
  },
  {
    name: "Firebase",
    imgPath: "/images/logos/firebase.png",
  },
  {
    name: "HTML",
    imgPath: "/images/logos/html.png",
  },
  {
    name: "CSS",
    imgPath: "/images/logos/css.png",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/javascript.png",
  },
  {
    name: "GSAP",
    imgPath: "/images/logos/gsap.png",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind.png",
  },
  {
    name: "Bootstrap",
    imgPath: "/images/logos/bootstrap.png",
  },
  {
    name: "ShadCN",
    imgPath: "/images/logos/shadcn.png",
  },
  {
    name: "GitHub",
    imgPath: "/images/logos/github.png",
  }
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    imgPath: "/images/exp1.png",
    title: "🧠 QuizNova",
    date: "Tech Stack: React.js, Node.js, Express.js, MongoDB, Firebase",
    responsibilities: [
      "Built a full-stack quiz platform supporting MCQs, fill-in-the-blanks, and one-word answers.",
      "Enabled quiz creation and management through an intuitive admin dashboard.",
      "Developed real-time score tracking and leaderboard functionality to enhance user engagement and competitiveness."
    ],
  },
  {
    imgPath: "/images/exp2.png",
    title: "📸 Face Recognition Attendance System",
    date: "Tech Stack: Python, OpenCV, Tkinter",
    responsibilities: [
      "Developed a facial recognition-based attendance system using OpenCV and Python.",
      "Integrated a GUI using Tkinter for smooth interaction and daily use.",
      "Automated daily CSV report generation with accurate date- and time-stamped attendance records."
    ],
  },
  {
    imgPath: "/images/exp3.png",
    title: "🏥 Medicare Booking Platform",
    date: "Tech Stack: MERN Stack (MongoDB, Express.js, React.js, Node.js), Stripe",
    responsibilities: [
      "Built a doctor appointment booking system with separate user and admin dashboards.",
      "Integrated Stripe for secure online payment handling.",
      "Implemented a calendar-based real-time scheduling system for appointments."
    ],
  },
  {
    imgPath: "/images/exp4.png",
    title: "⛳ Sidcup Family Golf Clone",
    date: "Tech Stack: HTML, CSS, JavaScript, GSAP",
    responsibilities: [
      "Recreated the Sidcup Family Golf website with pixel-perfect responsiveness and modern UI design.",
      "Utilized GSAP animations to implement smooth scroll effects, hover interactions, and section transitions.",
      "Focused on responsive layout, visual hierarchy, and performance optimization for a professional user experience."
    ],
  },
];

const workExperience = [
  {
    imgPath: "/images/logos/cadera_logo.png",
    title: "💼 IT Intern Trainee",
    company: "Cadera Infotech Pvt. Ltd.",
    date: "September 2025 - Present",
    responsibilities: [
      "Fixed UI components, resolved front-end bugs, and improved cross-browser compatibility to enhance user experience.",
      "Assisted in testing and debugging existing modules to ensure stability and smoother performance across pages.",
      "Worked on application performance optimization by removing redundant scripts and unnecessary content, reducing page load time significantly.",
      "Supported the deployment process of web applications on Vultr servers, ensuring successful setup and uptime."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/vanshsharma3330/"
  },
  {
    name: "leetcode",
    imgPath: "/images/leetcode.png",
    link: "https://leetcode.com/u/vanshsharma3330/"
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/Vanshsharma3330"
  },
  {
    name: "instagram",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/vanshsharma3330?igsh=czV2YWFkajFuOXhk"
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  workExperience,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};