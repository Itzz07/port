import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [detailsVisibility, setDetailsVisibility] = useState<Record<string, boolean>>({});

  const projects = [
    { title: 'Project 1', category: 'mobile', details: 'Details about Project 1.' },
    { title: 'Project 2', category: 'website', details: 'Details about Project 2.' },
    { title: 'Project 3', category: 'mobile', details: 'Details about Project 3.' },
    // Add more projects with appropriate categories
  ];

  const filteredProjects = tabIndex === 0 ? projects : projects.filter((project) => project.category === (tabIndex === 1 ? 'mobile' : 'website'));

  const handleProjectClick = (project: any) => {
    setDetailsVisibility((prevVisibility) => ({
      ...prevVisibility,
      [project.title]: !prevVisibility[project.title],
    }));
  };


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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-around content-center m-12">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400">Category: {project.category}</p>
            {detailsVisibility[project.title] ? (
              <div>
                <p className="text-gray-400 mb-2">{project.details}</p>
                {project.category === 'website' ? (
                  <a href={''} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Website</a>
                ) : (
                  <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg">
                    Download APK
                  </button>
                )}
              </div>
            ) : null}
            <button
              onClick={() => handleProjectClick(project)}
              className="text-purple-500 hover:text-white transition duration-300"
            >
              {detailsVisibility[project.title] ? 'Hide Details' : 'View Details'}
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
