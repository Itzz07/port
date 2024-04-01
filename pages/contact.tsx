"use client";
import React, { FormEvent, useState } from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

const Contact: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    type: '',
    message: '',
  });

  // State for form fields
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const JSONdata = JSON.stringify(formData);
    const endpoint = "/api/sendEmail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        setNotification({ type: 'success', message: 'Email sent successfully!' });

        // Clear notification after 3 seconds
        setTimeout(() => {
          setNotification({ type: '', message: '' });
        }, 3000);

        // Clear form fields
        setFormData({
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({ type: 'error', message: 'Failed to send email. Please try again.' });

      // Clear error notification after 3 seconds
      setTimeout(() => {
        setNotification({ type: '', message: '' });
      }, 3000);
    } finally {
      setLoading(false);
    }
  };
  
    return (
    <Layout>
 

<div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0"  title="map"   scrolling="no" 
      src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" 
      style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}}></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-orange-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    
    <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-orange-600 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-orange-900">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div>
  {notification.message && (
    <div className={`notification ${notification.type === 'success' ? 'text-green-500' : 'text-red-500'} text-sm mt-2`}>
      {notification.message}
    </div>
  )}

  <form className="flex flex-col" onSubmit={(e) => handleSubmit(e as FormEvent<HTMLFormElement>)}>
    {/* ... (your form input fields) */}
      <div className="relative mb-4">
      <label
        htmlFor="email"
        className="text-white block mb-2 text-sm font-medium"
      >
        Email
      </label>
      <input
        name="email"
        type="email"
        id="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="jacob@google.com"
      />
      </div>
      <div className="relative mb-4">
      <label
        htmlFor="subject"
        className="text-white block text-sm mb-2 font-medium"
      >
        Subject
      </label>
      <input
        name="subject"
        type="text"
        id="subject"
        required
        value={formData.subject}
        onChange={handleChange}
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Just saying hi"
      />
      </div>
      <div className="relative mb-4">
      <label
        htmlFor="message"
        className="text-white block text-sm mb-2 font-medium"
      >
        Message
      </label>
      <textarea
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Let's talk about..."
      />
      </div>
      <button
        type="submit"
        className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      </form>
</div>
      <p className="text-xs text-orange-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>

    </Layout>
  );
};

export default Contact;
