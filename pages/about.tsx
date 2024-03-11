import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

const About: React.FC = () => {
  const [activeContent, setActiveContent] = useState('skills');

  const skillsContent = (
    <div className="flex space-x-4 items-center">
      <div className="w-1/5 text-white">Node.js</div>
      <div className="bg-gray-300 h-2 w-48 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-3/4"></div>
      </div>
      
      {/* Repeat for other skills */}
    </div>
  );

  const certificationsContent = (
    <ul className="list-none pl-8">
      {/* Add your certification items here */}
      <li>Certification 1</li>
      <li>Certification 2</li>
    </ul>
  );

  const educationContent = (
    <ul className="list-none pl-8">
      {/* Add your education items here */}
      <li>Education 1</li>
      <li>Education 2</li>
    </ul>
  );

  return (
    <Layout>
      <div className="sm:grid md:grid-cols-2 gap-20 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative h-full flex-col p-10 w-full md:w-96 mx-auto">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image src="/images/about-image.png" width={700} height={700} alt={''} className="object-cover rounded-full" />
          </div>
        </div>          
        <div className="md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-4">
            <button onClick={() => setActiveContent('skills')} className={`text-white focus:outline-none ${activeContent === 'skills' ? 'text-purple-500' : ''}`}>Skills</button>
            <button onClick={() => setActiveContent('education')} className={`text-white focus:outline-none ${activeContent === 'education' ? 'text-purple-500' : ''}`}>Education</button>
            <button onClick={() => setActiveContent('certifications')} className={`text-white focus:outline-none ${activeContent === 'certifications' ? 'text-purple-500' : ''}`}>Certifications</button>
          </div>
          <div className="mt-4 text-white">
            {activeContent === 'skills' && skillsContent}
            {activeContent === 'education' && educationContent}
            {activeContent === 'certifications' && certificationsContent}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
