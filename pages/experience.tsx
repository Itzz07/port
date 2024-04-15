import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Experience: React.FC = () => {
  const experiences = [
    { 
      company: 'The University Of Zambia',
      period: '27th November, 2022 - 12th March, 2023',
      position: 'Intern - Networks and Systems Support',
      duties: 
      [
        'Assisting with the installation and maintenance of the client\'s LAN networks.',
        'Offering support solutions to clients LAN problems.',
        'Troubleshooting client’s connectivity problems',
        'Installation of Ethernet Switches',
        'Risk Assessments',
        'Gathering Content for an Awareness Training Course',
        'Making of Technical Specifications for devices',
      ] 
    },
    { 
      company: 'Yuso Investment Limited',
      period: '4th December, 2023 - 12th March, 2024',
      position: 'Receptionist',
      duties: 
      [
        'Guide customers on design options, materials, and the overall customization process.',
        'Stay updated on fabric types, printing methods, and embroidery styles.',
        'Provide customers with detailed information about available options and help them make informed choices.',
        'Follow up with customers post-sale to ensure satisfaction with the customized products.',
        'Stay informed about trends in clothes printing and embroidery.',
        'Greet customers warmly and manage inquiries related to clothes customization.',
        'Direct customers to appropriate sales representatives and provide initial information',
        'Handle customer inquiries about fabric options, design possibilities, and pricing.',
        'Maintain organized documentation of customer orders and customization preferences.',
        'Making of Technical Specifications for devices',
      ] 
    }, 
    // add another 
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);



  return (
    <Layout>
      <div className="pt-36">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="text-center">
              <h2 className="text-3xl text-gray-950 dark:text-zinc-300 font-semibold">Experience</h2>
              <p className="mt-6 text-gray-700 dark:text-orange-300">My Work Experience.</p>
          </div>
       
          {experiences.map((experience, index) => (
          <div key={index} className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10 ">      
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round"  stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M12 0L3 5v14l9-5 9 5V5l-9-5zm5 17.93l-4.23-2.36L12 17.21l-1.77-1.64L7 17.93V6.07l5-2.79 5 2.79v11.86z"/>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-200 text-lg">{experience.company}</h2>
                  <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                  <p className="text-md">{experience.position}</p>
                  <p className="text-sm font-light text-orange-300 mt-5">{experience.period}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-orange-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-start sm:text-left">
                <ul className="text-lg mb-4 list-disc list-inside">
                  {experience.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex}>{duty}</li>
                  ))}
                </ul>
                {/* <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p> */}
                {/* <Link className="text-indigo-500 inline-flex items-center" href={''}>Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>))}
        </div>
      </div>

            

    </Layout>
  );
};

export default Experience;
