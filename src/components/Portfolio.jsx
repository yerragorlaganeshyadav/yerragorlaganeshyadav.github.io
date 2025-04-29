import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-6 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Yerragorla Ganesh Yadav</h1>
          <nav className="space-x-6 flex flex-wrap justify-between text-lg">
            <a href="#about" className="hover:text-blue-300">
              About
            </a>
            <a href="#skills" className="hover:text-blue-300">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* My Profile Section */}
      <section className="bg-blue-100 text-center py-28 px-6">
        <h2 className="text-5xl font-bold mb-4 text-blue-900">
          Hi, I’m Yerragorla Ganesh Yadav
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Java Full Stack Developer | React | Spring Boot | AWS | Flutter |
          UI/UX
        </p>
        <div className="mt-6 flex justify-center gap-6 text-2xl text-blue-800">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ganeshyadav.freelancer@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          I'm a passionate full-stack developer with over 6 years of experience.
          I specialize in building dynamic, scalable web and mobile
          applications. My stack includes Java, Spring Boot, Hibernate, React,
          JavaScript, AWS, and Flutter. I’m also skilled in UI/UX design,
          ensuring clean and intuitive interfaces.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              "Java",
              "Spring Boot",
              "Hibernate",
              "Microservices",
              "React JS",
              "JavaScript",
              "AWS",
              "Flutter",
              "UI/UX",
              "SQL/NoSQL",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white py-6 px-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <span className="font-medium text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            "Nissigate",
            "Spring security",
            "SMS Application",
            "Portfolio Website",
          ].map((project) => (
            <div
              key={project}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                {project}
              </h3>
              {project === "Nissigate" ? (
                <p className="text-gray-600">
                  {project} project is a website related to farming, Nissigate
                  will act as a mediator between farmer and consumer where
                  farmer can appraoch Nissigate to sell their agricultural
                  projects and consumers can buy from Nissigate website.
                </p>
              ) : project === "Spring security" ? (
                <p className="text-gray-600">
                  {project} project focuses on implementing a login mechanism
                  using Spring Security and JWT (JSON Web Token) for
                  authentication.
                </p>
              ) : project === "SMS Application" ? (
                <p className="text-gray-600">
                  The application is built using Twilio to send SMS for
                  OTP-based authentication and leverages Kafka to enable a
                  microservice-based architecture.
                </p>
              ) : project === "Portfolio Website" ? (
                <p className="text-gray-600">
                  This portfolio website is designed to showcase the work and
                  skills of a freelancer. It features sections such as an about
                  page, services offered, project showcases, client
                  testimonials, and a contact form. The website is responsive,
                  visually appealing, and optimized for performance, helping the
                  freelancer build credibility and attract potential clients.
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-6"
      >
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            Email:{" "}
            <a
              className="text-blue-800 underline"
              href="mailto:yerragorla@example.com"
            >
              ganeshyadav.freelancer@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-700">
            LinkedIn:{" "}
            <a
              className="text-blue-800 underline"
              href="https://www.linkedin.com/in/yerragorla-ganesh-yadav-58b1a9138/"
            >
              linkedin.com/in/yerragorla
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Yerragorla Ganesh Yadav. Built with React
          and Vite.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
