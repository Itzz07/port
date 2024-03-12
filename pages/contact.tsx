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
    <div
      className="grid md:grid-cols-2 m-12 md:my-12 py-24 gap-4 relative"
    >
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
      {notification.message && (
        <div className={`notification ${notification.type === 'success' ? 'text-green-500' : 'text-red-500'} text-sm mt-2`}>
          {notification.message}
        </div>
      )}

      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e as FormEvent<HTMLFormElement>)}>
        {/* ... (your form input fields) */}
       
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
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
            <div className="mb-6">
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
            <div className="mb-6">
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
          className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;
