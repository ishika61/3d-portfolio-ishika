import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
     Hello! I’m Ishika Savita, a passionate Full Stack Developer with hands-on experience in building scalable and responsive web applications. 
     I’m currently pursuing a B.Tech in Electrical Engineering from Madhav Institute of Technology & Science, Gwalior (2022–Present).
I have practical experience as a Full Stack Developer Intern at iNeuron Intelligence Pvt. Ltd., where I worked on developing end-to-end web applications using React.js, Node.js, Express.js, MongoDB, and RESTful APIs. I’ve also completed professional training in Full Stack Development at PS Softech Pvt. Ltd., gaining strong exposure to React.js, Next.js, backend integration, and database-driven applications.
My technical expertise includes Java, Python, JavaScript, modern 
frontend frameworks like React and Next.js, and backend technologies such as
 Node.js, Express.js, MySQL, and MongoDB. I’ve built impactful projects like a JWT-secured 
 Mini Loan Management System and an AI-powered Code Review platform, showcasing my ability to
  design secure, efficient, and user-centric applications.

With a solid foundation in Data Structures & Algorithms, OOPS, DBMS, and REST 
architecture, I enjoy solving real-world problems through clean code and scalable system design.
 I’m always eager to learn, collaborate, and grow as a software developer in challenging 
 environments.
          <br className="sm:block hidden" />
          Let&apos;s collaborate to bring your ideas to life!
        </div>
        <div className="w-fit break-words">
          <Link
            href="mailto:ishikasavita946@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            ishikasavita946@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          // href="Ishika_Savita_Resume.pdf"
          href="/document/Ishika_Savita_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
