//import my-pik form "./components/Animation/pik-my.png"
//I Would Highly Recommend You To Customize The Theme According To Your Taste.
//import imgpic from "./components/Animation/pik-my.png"
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#0e8cfb,#53fc96)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#31aefb",
  "--t_color":"#05d2a2d0",
  "--f_color": "#0ac76f",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Surajit>";

// Main Page
export const main = {
  name: "Surajit Dhar",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/file/d/1SINVHlYHmOgizjehCZSb6fXV0L0QUPII/view?usp=sharing",
};

// AboutMe
export const aboutme = {
  
 imgLink: "https://raw.githubusercontent.com/surajit00/Photos/main/11zon_cropped.png",
  p1: "Hey, My name is Surajit Dhar. I have completed my Bachelor of Engineering from Techno India University, Kolkata(W.B.).",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
  p3: "Apart from coding I also like travelling and gaming. And I like to explore historical places with vlogging.",
};

// Skills 
export const whatido = {
  title: "Full Stack Web Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    {
      name: "Tailwind",
      iconifyClassName: "logos:tailwindcss-icon",
      id: "12",
    },
    {
      name: "Material-UI",
      iconifyClassName: "logos:material-ui",
      id: "13",
    },
    {
      name: "Ant Design",
      iconifyClassName: "logos:ant-design",
      id: "14",
    },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "Pluralsight-clone",
    desc: `In this project we have tried to make a look alike clone of Pluralsight.com. With our efforts and the technology stack, that we have learned till now in Unit-4 in Masai School, we were able to clone the front end, integrated it with backend and added similar looks and features.`,
    feature: `Sign-in/Sign-up,
              backend database is use to show product and add to cart, explore course pages,
              Payment pages.`,
    tech: `Tech Stack: EJS | CSS | JavaScript | nodeJS | express | MongoDB `,
    img: "https://raw.githubusercontent.com/surajit00/Photos/main/Screenshot%20(102).png",
    link: "https://earnest-starburst-f45c8f.netlify.app/",
    github: "https://github.com/Surajit-Dhar/Pluralsight_main",
    
  },
  {
    id: 2,
    title: "ITC Store.in Clone",
    desc: `This is a clone of E-commerce website. that's provide E-buying facility and Grocery items.`,
    feature: `Sign-in/Sign-up,
              corousel image,
              product page with sorting,
              payment gateway,Dynamic cart page with coupon functionality.`,
    tech: `Tech Stack: HTML | CSS | JavaScript`,
    img: "https://raw.githubusercontent.com/Surajit-Dhar/Photos/main/Screenshot%20(108).png",
    github: "https://github.com/Surajit-Dhar/ITC-Store-project",
    link: "https://whimsical-treacle-5d3296.netlify.app"
  },
  
  {
    id: 6,
    title: "Bobbi Brown.com",
    desc: `Bobbi Brown Cosmetics is a global premium beauty brand that empowers women to embrace and enhance their individual beauty. The website of bobbi-brown provides all the beauty products that are offered by the company.`,
    feature: `SignUp/Login,
              Landing page with responsiveness
              Products Page sorting Functionality
              Cart Page,
              Payment Page
              `,
    tech: `Tech Stack: React Js | CSS | Redux | MongoDB`,
    img: "https://raw.githubusercontent.com/Surajit-Dhar/Photos/main/Screenshot%20(156).png",
    link: "https://bobbibrown.vercel.app/",
    github: "https://github.com/Surajit-Dhar/BobbiBrown.com",
  },
];

// Social Media Links
export const links = [
  
  "https://www.linkedin.com/in/surajit-dhar-ab3390230/",
  "https://api.whatsapp.com/send/?phone=918900054116&text&app_absent=0",
  //"mailto:rajarsimukerjee@gmail.com",
  "https://github.com/Surajit-Dhar",
];
