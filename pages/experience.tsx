import { useState } from 'react';
import Layout from '../components/Layout';

const Experience: React.FC = () => {
  const experiences = [
    { company: 'Company 1', position: 'Position 1', duties: ['Duty 1', 'Duty 2', 'Duty 3'] },
    { company: 'Company 2', position: 'Position 2', duties: ['Duty 4', 'Duty 5', 'Duty 6'] },
    { company: 'Company 3', position: 'Position 3', duties: ['Duty 7', 'Duty 8', 'Duty 9'] },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDuties = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-5">Work Experience</h1>
      <div className="grid grid-cols-1 gap-3 my-10 mx-10 md:mx-20 xl:mx-30">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-2">
            <div
              className="flex items-center bg-gray-800 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleDuties(index)}
            >
              <img
                src="/images/about-image.png"
                alt={experience.company}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h2 className="text-xl font-bold text-white">{experience.company}</h2>
                <p className="text-gray-400">{experience.position}</p>
              </div>
            </div>
            {expandedIndex === index && (
              <ul className="text-gray-400 mt-2 list-disc list-inside pl-8">
                {experience.duties.map((duty, dutyIndex) => (
                  <li key={dutyIndex}>{duty}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
