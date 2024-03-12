import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const projects = [
    { title: 'Project 1', category: 'mobile' },
    { title: 'Project 2', category: 'website' },
    { title: 'Project 3', category: 'mobile' },
    // Add more projects with appropriate categories
  ];

  const filteredProjects = tabIndex === 0 ? projects : projects.filter((project) => project.category === (tabIndex === 1 ? 'mobile' : 'website'));

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-5">Projects Page</h1>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="mb-8"
      >
        <TabList className="flex p-4 rounded-md">
          <Tab
            className={`${
              tabIndex === 0 ? 'bg-teal-700 text-white' : 'text-gray-400'
            } px-4 py-2 cursor-pointer  hover:text-purple-500 transition duration-300`}
          >
            All
          </Tab>
          <Tab
            className={`${
              tabIndex === 1 ? 'bg-primary-500 text-white' : 'text-gray-400'
            } px-4 py-2 ml-4 cursor-pointer hover:bg-primary-500 hover:text-purple-500 transition duration-300`}
          >
            Mobile Apps
          </Tab>
          <Tab
            className={`${
              tabIndex === 2 ? 'bg-primary-500 text-white' : 'text-gray-400'
            } px-4 py-2 ml-4 cursor-pointer hover:bg-primary-500 hover:text-purple-500 transition duration-300`}
          >
            Websites
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400">Category: {project.category}</p>
                {/* Add more project details as needed */}
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400">Category: {project.category}</p>
                {/* Add more project details as needed */}
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400">Category: {project.category}</p>
                {/* Add more project details as needed */}
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

export default Projects;
