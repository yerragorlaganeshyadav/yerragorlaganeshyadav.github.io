import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import image from "/Freelancer.jpg";
import resume from "/Ganesh Yadav_Yerragorla_Java developer.pdf";
import FreelanceVideo from "/FreelancerVideo.mp4";

const skills = [
  "Java",
  "Spring Boot",
  "Microservice",
  "Hibernate",
  "Kafka",
  "SQL/NOSQL",
  "JavaScript",
  "React JS",
  "TailwindCSS",
  "Flutter",
];
const services = [
  {
    title: "Web Development",
    desc: "Creating responsive, static and dynamic websites.",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces.",
  },
];
const projects = [
  {
    title: "Food Delivery App",
    desc: "A web application for cloud kitchen, where customers can place orders, and also we have catering option and we serve for all types of functions",
    stack: "React JS• Java •  Spring Boot",
    link: "",
  },
  {
    title: "Nissigate",
    desc: "A website related to agriculture, where farmers can sell their products and consumers can buy here with affordable prices",
    stack: "React JS • AWS",
    link: "https://nissigate.com/",
  },
];

const Portfolio = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#181c2a] to-[#232946] text-white font-sans">
    {/* Header */}
    <header className="max-w-6xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1 className="text-4xl font-bold text-center md:text-left">
          Yerragorla
          <br />
          Ganesh Yadav
        </h1>
        <p className="text-xl text-gray-300">Full Stack Developer</p>
        <p className="text-gray-400 text-sm mt-1">
          Building full-stack digital experiences.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition"
          >
            Hire Me
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#232946] border border-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            View Resume
          </a>
        </div>
      </div>
      <div className="w-32 h-32 md:w-44 md:h-44 rounded-full flex items-center justify-center shadow-lg mt-8 md:mt-0 md:mr-[50%]">
        <img
          src={image}
          className="w-full h-full object-cover object-top rounded-full"
        />
      </div>
    </header>

    {/* About Me */}
    <section className="max-w-6xl mx-auto py-8 px-6 flex flex-col gap-5 md:flex-row md:gap-3 justify-between items-center ">
      <div>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-300 mb-4">
          I am a full stack developer specialising in building exceptional
          digital solutions using modern technologies.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="bg-[#232946] px-3 py-1 rounded-lg text-blue-400 text-sm"
            >
              {s}
            </span>
          ))}
        </div>
        <a
          href={resume}
          download
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition"
        >
          Download Resume
        </a>
      </div>
      <div className="w-full h-full md:w-[250px] md:h-44 overflow-hidden shadow-lg">
        <video
          src={FreelanceVideo}
          controls
          loop
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* Services */}
    <section className="max-w-5xl mx-auto mt-5 px-6">
      <h2 className="text-2xl font-semibold mb-6">Services</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-[#232946] rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Projects */}
    <section className="max-w-5xl mx-auto mt-16 px-6">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-[#232946] rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-400 mb-2">{proj.desc}</p>
            <p className="text-blue-400 text-sm">{proj.stack}</p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline text-sm"
              >
                Visit website
              </a>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="max-w-xl mx-auto mt-16 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="flex justify-center gap-6 text-2xl mb-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:ganeshyadav.freelancer@gmail.com"
          className="hover:text-blue-400"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
      </div>
      <a
        class="text-blue-800 underline"
        href="mailto:ganeshyadav.freelancer@gmail.com"
      >
        <p>ganeshyadav.freelancer@gmail.com</p>
      </a>
      <a
        className="text-blue-800"
        href="https://www.linkedin.com/in/yerragorla-ganesh-yadav-58b1a9138/"
      >
        <p>linkedin.com/in/yerragorla</p>
      </a>
    </section>

    {/* Footer */}
    <footer className="mt-16 bg-[#181c2a] text-gray-400 py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Yerragorla Ganesh Yadav.
      </p>
    </footer>
  </div>
);

export default Portfolio;
