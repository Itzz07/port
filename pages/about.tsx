import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About: React.FC = () => {

  const skills = [
    { name: 'HTML', percentage: 80, color: '#FF0000' },
    { name: 'JavaScript', percentage: 80, color: '#FFA500' },
    { name: 'Laravel', percentage: 75, color: '#FFFF00' },
    { name: 'PHP', percentage: 90, color: '#32CD32' },
    { name: 'WordPress', percentage: 50, color: '#008000' },
    { name: 'Express', percentage: 65, color: '#0000FF' },
    { name: 'Flutter', percentage: 45, color: '#4B0082' },
    { name: 'React', percentage: 66, color: '#8E4585' },
  ];



  const certificationsContent = (
    <ul className="list-none pl-8">
      {/* Add your certification items here */}
      <li>Computer Systems(CISCO)</li>
      <li>Introduction to Cybersecurity(CISCO)</li>
      <li>Cybersecurity Essentials(CISCO)</li>
      <li>HCIA_Security Certificate(HAUWEI)</li>
      <li>Python Certification(CISCO)</li>
      <li>CCNA 1 & 2(CISCO)</li>
    </ul>
  );

   return (
    <Layout>
      <div className="pt-36">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="text-center">
              <h2 className="text-3xl text-gray-950 dark:text-zinc-300 font-semibold">Info</h2>
              <p className="my-6 text-gray-700 dark:text-orange-300 ">Insight Info.</p>
          </div>
          <div className="flex justify-center items-center bg-gradient-to-r from-zinc-900 via-slate-800 to-neutral-700 p-4 md:py-8">
            <div className="px-2">
              <div className="flex items-center justify-center space-x-10">
                <div className="md:ml-[6px] flex flex-col items-center lg:flex-row">
                  <Image src="/images/person.png" width={500} height={500} alt={'about me pic'} className="relative flex-col m-10 w-60 md:w-80 mx-auto object-cover rounded-full shadow-2xl shadow-zinc-600" />
                  <div className="px-24 py-10 text-zinc-200 flex flex-col w-full lg:w-[70%] ">
                    <q className="text-sm  -mt-5 -ml-5 md:-ml-0  text-left">
                    I am a full stack web developer with a passion for creating
                    interactive and responsive web applications. I have experience
                    working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                    Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                    looking to expand my knowledge and skill set. I am a team player and
                    I am excited to work with others to create amazing applications.
                    </q>
                    <div className="mt-5 text-left -ml-5 md:text-right ">
                        <h1 className="font-bold text-lg">~ Joel K. Zimba</h1>
                        <p className="text-sm">Computer Systems Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="flex items-center justify-center text-center bg-gradient-to-r from-neutral-800 via-zinc-900 to-zinc-950">
            <div className="flex flex-col p-2 m-2  max-w-7xl ">
              <div className="text-xl mt-8 md:text-3xl text-zinc-300 font-medium">Skills</div>
              <div className="text-sm my-6 mx-2 md:text-xl text-orange-300">list of skills, Programming tools and Frameworks.</div>
              <div className="flex flex-wrap items-center justify-evenly md:px-40 px-10 space-x-7">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="md:w-32 h-32 w-20 flex flex-col items-center justify-evenly m-4  rounded-full "
                  >
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      className=""
                      styles={buildStyles({
                        pathColor: skill.color,
                        textColor: 'white',
                        trailColor: '#d6d6d6',
                        backgroundColor: 'red',
                      })}
                    />
                    <p className="text-center text-slate-300 mt-2">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
