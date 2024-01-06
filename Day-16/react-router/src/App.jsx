import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import All from './Components/All/all';
import FSD from './Components/FSD/fullStackDevelopment';
import DataScience from './Components/DataScience/dataScience';
import CyberSecurity from './Components/CyberSecurity/cyberSecurity';
import Career from './Components/Career/career';
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const allInfo = {
  imageUrl : 'https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png',
  title: "Tech Education",
  description: "To make best use of the learning progress practise the day to day tasks and if you have any questions make use of blogs and raise queries if you face any difficulities."
}
const cyberSecurityInfo = {
  title: "CYBER SECURITY",
  description: "Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security."
}

const fSDInfo = {
  title: "FULL STACK DEVELOPMENT",
  description: "Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!"
}

const dataScienceInfo = {
  title: "DATA SCIENCE",
  description: "One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration."
}

const careerInfo = {
  title: "CAREER",
  description: "We have many opportunities in the organization as you learn you can be placed in one of the big MNC's."
}

const cyberSecurityBlogs = [
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title: "What Is Hacking? Types of Hacking & More",
    text: "Hacking is the practice of gaining unauthorized access to computer systems or networks, typically for the purpose of discovering, exploiting, or manipulating vulnerabilities.",
    postTime: "25 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    text: "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
    postTime: "27 December 2022"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    text: "Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook.",
    postTime: "20 December 2022"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    title: "Is coding required for cybersecurity?",
    text: "how crucial is coding for cybersecurity? Think about it this way. Just about all the tools you use in cyber security are written in code, and programming lets you write tools.",
    postTime: "22 June 2022"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png",
    title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
    text: "Cyber security refers to the practice of protecting networks, programs, computer systems, and their components from unauthorized digital access and attacks.",
    postTime: "21 November 2022"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
    title: "8 Different Types of Cybersecurity and Threats Involved",
    text: "Application security constitutes the measures and countermeasures meant to tackle threats and vulnerabilities that arise in the development stage of an application.",
    postTime: "9 November 2022"
  },
];

const dataScienceBlogs = [
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    title: "Top Product-Based Companies for Data Scientists in 2023",
    text: "A huge demand for skilled data scientists who are being offered substantial salaries. The job market for data scientists is thriving, offering a plethora of career opportunities.",
    postTime: "5 October 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
    title: "Useful Python Libraries & Tools for Data Science Beginners",
    text: "In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data.",
    postTime: "29 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    title: "Extraordinary Data Science Projects for Beginners As Well as Veterans",
    text: "Data Scientists continues to soar, it has become crucial for aspiring professionals to stand out from the crowd by showcasing their skills through real-world projects.",
    postTime: "28 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
    title: "Future of Data Science and How You Can Thrive With It",
    text: "Data Science has emerged as a revolutionary field in the technology world, transforming the way computers learn and helping organizations make data-driven decisions.",
    postTime: "28 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
    title: "10 Best Data Science Online Courses for Beginners | 2023",
    text: "Data Science has emerged as one of the most sought-after Technical fields. As businesses strive to leverage the power of data to gain valuable insights and make informed decisions.",
    postTime: "14 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp",
    title: "Data Science Webinars and Workshops",
    text: "One great way is by attending data science webinars and workshops. These interactive virtual events are designed to give you the knowledge.",
    postTime: "9 August 2023"
  }
];

const fSDBlogs = [
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
    title: "7 Best Full-Stack Development Online Courses [2023]",
    text: "Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise.",
    postTime: "31 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png",
    title: "The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
    text: " In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.",
    postTime: "5 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png ",
    title: "The Ultimate Guide to Real-World Full-Stack Development Applications",
    text: "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.",
    postTime: "5 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp",
    title: "Best Ways to Learn Full Stack Development in 2023",
    text: "According to Stack Overflow, there are more than 90,000 developers who responded to the tools being used, in a survey. You would be wondering how to get into this high-paying profession.",
    postTime: "4 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
    title: "How Long Would It Take to Be a Full Stack Developer?",
    text: "Whether you’re already familiar with coding or just starting, you might be curious about the learning process and how long it’ll take to reach your goals.",
    postTime: "4 August 2023 "
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-6.png",
    title: "Top Skills To Become a Full-Stack Developer in 2023",
    text: "Are you interested in becoming a great full-stack developer? If so, then you’re at the right place! In this comprehensive guide, we will explore the skills and knowledge required to excel in this multifaceted role.",
    postTime: "3 August 2023"
  }
];

const careerBlogs = [
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    title: "Top Product-Based Companies for Data Scientists in 2023",
    text: "We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot!",
    postTime: "5 October 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters.webp",
    title: "Everything You Should Know About ChatGPT & Why It Matters?",
    text: "ChatGPT is an advanced language model, developed by OpenAI, represents a leap forward for humankind, in our ability to interact with machines.",
    postTime: "29 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Mechanical-Engineering-Webinars-and-Workshops-That-You-Should-Know.webp",
    title: "6 Mechanical Engineering Webinars and Workshops That You Should Know",
    text: "Mechanical engineering is an exciting field that brings creative ideas to life, be it small like a pen to an idea that is as big as landing a rover on the moon.",
    postTime: "28 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Fascinating-Career-Opportunities-in-Civil-Engineering.webp",
    title: "Fascinating Career Opportunities in Civil Engineering in 2023",
    text: "civil engineering plays a huge role in constructing those tech buildings but have you ever thought of the career opportunities in civil engineering?",
    postTime: "27 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-The-Promising-Scope-of-Civil-Engineering-in-India.webp",
    title: "The Promising Scope of Civil Engineering in India in 2023",
    text: "Think about the roads and bridges you use to get around, the buildings you live and work in, and the clean water that flows from your taps.",
    postTime: "27 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Best-Skills-Required-to-Become-a-Civil-Engineer-1.webp",
    title: "6 Best Skills Required to Become a Civil Engineer",
    text: "The world of civil engineering is constantly evolving in terms of employing technology to meet the demands of the present.",
    postTime: "27 September 2023"
  }
];

const allBlogs = fSDBlogs.concat(dataScienceBlogs, cyberSecurityBlogs, careerBlogs);

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={
            <All blogsHeader={allInfo} blogs = {allBlogs}/>
          } />
          <Route path='/fSD' element={
            <FSD blogsHeader = {fSDInfo} blogs = {fSDBlogs} />
          } />
          <Route path='/dataScience' element={
            <DataScience blogsHeader = {dataScienceInfo} blogs = {dataScienceBlogs} />
          } />
          <Route path='/cyberSecurity' element={
            <CyberSecurity blogsHeader={cyberSecurityInfo} blogs = {cyberSecurityBlogs} />
          } />
          <Route path='/career' element={
            <Career blogsHeader = {careerInfo} blogs = {careerBlogs} />
          } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;