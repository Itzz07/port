import Layout from '../components/Layout';

const References: React.FC = () => {
  const references = [
    {
      name: 'Prof. Jackson Phiri',
      position: 'Lecturer – Computer Science Department',
      organization: 'The University of Zambia',
      address: 'P. O. Box 32379, Lusaka.',
      phone: 'Phone: 0966693731',
      email: 'Email: jackson.phiri@cs.unza.zm',
    },
    {
      name: 'Mr. Malama',
      position: 'Salesperson',
      organization: 'Yuso Investments Limited',
      address: 'Lusaka',
      phone: 'Phone: 0960208888',
    },
    {
      name: 'Mr. Frank Jere',
      position: 'Acting Senior ICT Security Officer',
      organization: 'University Of Zambia',
      address: 'Lusaka',
      phone: 'Phone: 0973341448',
      email: 'Email: frank.jere@unza.zm',
    },
  ];

  return (
    <Layout>
      <div className="m-5">
      <h1 className="text-3xl font-bold mb-5">Reference Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {references.map((reference, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-2">{reference.name}</h2>
            <p className="text-gray-400">{reference.position}</p>
            <p className="text-gray-400">{reference.organization}</p>
            <p className="text-gray-400">{reference.address}</p>
            <p className="text-gray-400">{reference.phone}</p>
            {reference.email && <p className="text-gray-400">{reference.email}</p>}
          </div>
        ))}
      </div>
      </div>
    </Layout>
  );
};

export default References;
