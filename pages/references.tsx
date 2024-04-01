import Layout from '../components/Layout';
import Image from 'next/image';

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
      <div className="container ">
        <h1 className="text-3xl font-bold px-5 m-5">Reference Page</h1>
        <div className='py-24 px-5  mx-auto'>
          <div className="flex flex-wrap -m-4 justify-center">
            {references.map((reference, index) => (
              <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <Image
                    src="/images/hero-image.png"
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    width={20}
                    height={20}
                  />
                  <p className="leading-relaxed">{reference.organization}</p>
                  <p className="text-gray-400">{reference.address}</p>
                  <p className="text-gray-400">{reference.phone}</p>
                  {reference.email && <p className="text-gray-400">{reference.email}</p>}
                  <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-200 font-medium title-font tracking-wider text-sm">{reference.name}</h2>
                  <p className="text-orange-500">{reference.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default References;
