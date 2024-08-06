import language from "@/types/language.ts";

const en: language = {
  header: {
    headerText: "Hi, I'm Niels Dobbelaar",
    headerSubText:
      "A motivated and enthusiastic frontend/ web developer and UX designer",
  },
  sectionTitles: [
    {
      title: "About Me",
      slug: "aboutme",
    },
    {
      title: "Experience",
      slug: "experience",
    },
    {
      title: "Projects",
      slug: "projects",
    },
  ],
  aboutSection: {
    imageURL: "images/nielsDobbelaar.png",
    body: [
      "Hi! I’m Niels, a 21 year old frontend developer and designer from The Netherlands with a passion for creating functional and accessible web applications. I am currently doing my graduation internship for Hogeschool Leiden at Rox, a digital agency. Besides my studies I  love to learn more about different parts of programming and frequently make vastly different side projects you can read more about in the Projects section.",
      "I started programming during middle school by learning the basics of python and web development, eventually learning C# and unity for my final year project. Since then I stated (And have almost finished) my bachelor in Computer science, here I have learned far more technology mostly focusing on frontend development with some backend technologies like Laravel and Express.js. ",
    ],
    technologiesTitle: "Technologies",
    technologies: [
      {
        name: "React",
        iconURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJS-A8NEllfqbKf-4GUKetJe8J3GKqKP6A&s",
      },
      {
        name: "TypeScript",
        iconURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      },
      {
        name: "Node.js",
        iconURL:
          "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png",
      },
      {
        name: "Express",
        iconURL:
          "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA",
      },
      {
        name: "vue.js",
        iconURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      },
      {
        name: "MySQL",
        iconURL:
          "https://banner2.cleanpng.com/20180614/bgj/kisspng-mysql-database-logo-node-js-computer-software-5b22000ca56d66.6622869915289548926776.jpg",
      },
      {
        name: "HTML5",
        iconURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
      },
      {
        name: "CSS3",
        iconURL:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "Tailwind",
        iconURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
      },
      {
        name: "expo",
        iconURL:
          "https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png",
      },
      {
        name: "Figma",
        iconURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
      },
      {
        name: "Git",
        iconURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      },
    ],
  },
  experienceSection: {
    titles: {
      company: "Company",
      technologies: "Technologies",
    },
    workExperience: [
      {
        position: "Graduation internship in web development",
        company: "Rox Digital Agency",
        startDate: "Sep 2024",
        endDate: "Feb 2025",
        description:
          'As an intern at Rox Digital Agency, I will be starting my graduation internship focused on web development. The goal of this internship is to improve the interface of the "Woningzoeker", a project by Rox.',
        technologies: ["React", "TypeScript", "API's"],
      },
      {
        position: "Frontend Developer",
        company: "Fancee Nederland",
        startDate: "April 2023",
        endDate: "Juli 2023",
        description:
          "After my internship at Software Bastards, I worked part-time for several months at Fancee Netherlands. During this period, I continued working on the mobile application within the same team.",
        technologies: ["React Native", "TypeScript", "Expo", "API's"],
      },
      {
        position: "Frontend Develoment intern",
        company: "Software Bastards",
        startDate: "Nov 2022",
        endDate: "April 2023",
        description:
          "As an intern at Software Bastards, I worked as a full-fledged developer on a new mobile application for Fancee Netherlands. In this project, I worked with Expo, React Native, TypeScript, and the Backend API.",
        technologies: ["React Native", "TypeScript", "Expo", "API's"],
      },
    ],
    education: [
      {
        institution: "Hogeschool Leiden",
        degree: "Bachelor in Computer Science",
        description:
          "I am currently pursuing my Bachelor's degree in Computer Science with a specialization in Frontend Development and User Experience (UX), along with a minor in Sensor Technology. During my studies, I have focused on designing and implementing user-friendly interfaces, enhancing user interactions.",
      },
      {
        institution: "Stanislascollege",
        degree: "HAVO",
        description:
          "I completed my HAVO in 5 years with a focus on science and technology, and additional subjects in German and computer science. I also obtained the FCE (First Certificate in English) certificate from the Cambridge Assessment Institute.",
      },
    ],
  },
};

export default en;
