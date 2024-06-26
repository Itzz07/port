
import 'react-tabs/style/react-tabs.css';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const Projects: React.FC = () => {
  const projects = [
    { 
      image: "/images/projects/ask.png",
      title: 'Ask', 
      details: 'Integrating the Gemini API, It\'s simply a chatbot that provides an interface for intuitive interaction. enabling seamless integration with cryptocurrency markets, providing users with real-time data and insights.',
      urlDonwnload: 'https://drive.google.com/drive/folders/1vg4HkWlqYdt8t3vAf9TpTcmvPCONcBNe',
      urlSourceCode: 'https://github.com/Itzz07/ask',
    },
    { 
      image: '/images/projects/unzaweather.jpg',
      title: 'UnzaWeather',
      details: 'Developed a comprehensive departmental weather station project,hence this mobile application provides real-time weather updates, integrating hardware components with software solutions to deliver a seamless user experience',
      urlDonwnload: 'https://drive.google.com/drive/folders/1vg4HkWlqYdt8t3vAf9TpTcmvPCONcBNe',
      urlSourceCode: 'https://github.com/Itzz07/unza_weather',
    },
    { 
      image: '/images/projects/word.jpg',
      title: 'Revelation Word', 
      details: 'Revelation Word is a mobile application tailored for efficient communication and information sharing amongest it\'s members.', 
      urlDonwnload: 'https://drive.google.com/drive/folders/1vg4HkWlqYdt8t3vAf9TpTcmvPCONcBNe',
      urlSourceCode: 'https://github.com/Itzz07/word',
     },
    { 
      image: '/images/projects/qr_genie.png',
      title: 'QR Genie', 
      details: 'QR Genie is a mobile application simply used to generate qr codes from url\'s.', 
      urlDonwnload: 'https://drive.google.com/drive/folders/1vg4HkWlqYdt8t3vAf9TpTcmvPCONcBNe',
      urlSourceCode: 'https://github.com/Itzz07/qr_genie',
     },
    // Add more projects with appropriate categories
  ];



  return (
    <Layout>
      <div className="pt-36">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
              <h2 className="text-3xl text-gray-950 dark:text-zinc-300 font-semibold">Projects</h2>
              <p className="mt-6 text-gray-700 dark:text-orange-300">Here are Some of My Recent Projects</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((projects, index) => (
              <div key={index} className="relative group overflow-hidden p-[--card-padding] rounded-3xl bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b  to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"></div>
                  <div className="relative py-5 px-10">
                    <div className="border border-warning-500/10 flex relative *:relative *:size-12 *:m-auto size-16 rounded-2xl dark:bg-gray-900 dark:border-white/15 before:rounded-xl before:absolute before:inset-0 before:border-t before:border-white before:from-warning-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                      <Image
                        src={projects.image}
                        alt="testimonial"
                        className="w-25 h-25 mb-8 object-cover object-center rounded-3xl inline-block border-2 border-gray-200 bg-gray-100"
                        width={25}
                        height={25}
                      />
                      {/* <svg className="text-[#000014] dark:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
                        <defs>
                            <linearGradient id="deviconAstro0" x1="882.997" x2="638.955" y1="27.113" y2="866.902" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="currentColor"/>
                                <stop offset="1" stopColor="currentColor"/>
                            </linearGradient>
                            <linearGradient id="deviconAstro1" x1="1001.68" x2="790.326" y1="652.45" y2="1094.91" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#ff1639"/>
                                <stop offset="1" stopColor="#ff1639" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                        <path fill="url(#deviconAstro0)" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"/>
                        <path fill="#ff5d01" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"/>
                        <path fill="url(#deviconAstro1)" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"/>
                      </svg> */}

                    </div>

                    <div className="mt-6 pb-6 rounded-xl">
                        <p className="text-gray-700 dark:text-gray-200 font-serif">{projects.title}</p>
                        <p className="text-gray-700 dark:text-gray-300">{projects.details}</p>
                    </div>

                    <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                      <Link href={projects.urlDonwnload} download="/" className="group rounded-3xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200  hover:shadow-gray-600 shadow-sm  active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                          <span>Download</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"/></svg>
                      </Link>
                      <Link href={projects.urlSourceCode} className="group flex items-center rounded-3xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-900 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200  hover:shadow-gray-600 shadow-md active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                          <span className="sr-only">Source Code</span>
                          <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                      </Link>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Projects;
