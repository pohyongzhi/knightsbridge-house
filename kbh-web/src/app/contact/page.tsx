'use client';

// Import Statements
import React, { FormEvent } from 'react';
import { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faSun } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

interface Status {
  success?: boolean;
  message?: string;
}

// Add custom error interface
interface ContactError extends Error {
  message: string;
}

// Add email validation helper
const isValidEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

// Update phone validation helper to allow any length of digits
const isValidPhone = (phone: string) => {
  return phone === '' || /^\d+$/.test(phone);
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState<Status>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButtonText('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: result.message });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error: unknown) {
      console.error('Error:', error);
      const contactError = error as ContactError;
      setStatus({
        success: false,
        message:
          contactError.message ||
          'Message failed to send. Please try again later.',
      });
    } finally {
      setButtonText('Send Message');
      setTimeout(() => setStatus({}), 3000);
    }
  };

  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4"> Contact Us </h1>
        <p className="text-lg text-gray-600">We'd love to hear from you.</p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-16 px-4">
        <div className="flex-1 bg-white shadow-lg rounded-[12px] p-8 text-center w-full max-w-xl">
          <div className="flex justify-center items-center mb-4">
            <span className="bg-blue-500 text-white p-3 rounded-full">
              <FontAwesomeIcon icon={faSmile} className="text-lg" />
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {' '}
            Our Contact Information{' '}
          </h3>
          <p className="text-gray-600 mb-4">
            Reach out to us via our email or LINE chat!
          </p>
          <p className="text-gray-800 font-medium mb-2">
            Line:{' '}
            <a
              href="https://line.me/R/ti/p/@444zvfzq?ts=12311529&oat_content=url"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {' '}
              Chat with us on LINE{' '}
            </a>
          </p>
          <p className="text-gray-800 font-medium">
            Email Address:{' '}
            <a
              href="mailto:admissions@kbh.co.th"
              className="text-blue-500 underline"
            >
              {' '}
              admissions@kbh.co.th{' '}
            </a>
          </p>
        </div>

        <div className="flex-1 bg-white shadow-lg rounded-[12px] p-8 text-center w-full max-w-xl mb-5">
          <div className="flex justify-center items-center mb-4">
            <span className="bg-green-500 text-white p-3 rounded-full">
              <FontAwesomeIcon icon={faSun} className="text-lg" />
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Contact Form
          </h3>
          <p className="text-gray-600 mb-4">
            Need help? Fill out the form below, and we'll get back to you soon.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-non focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div>
              <label
                htmlFor="lastName"
                className="flex text-gray-700 font-medium ml-1 left-0 text-justify"
              >
                If you prefer to receive a call from us instead, leave your
                phone number below.
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg 
                            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none  [&::-webkit-inner-spin-button]:appearance-none
                             focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 w-full"
            >
              {buttonText}
            </button>
            <p
              className={`text-sm mt-2 transition-opacity duration-200 ${
                status.success ? 'text-green-500' : 'text-red-500'
              } 
                                ${status.message ? 'opacity-100' : 'opacity-0'}`}
            >
              {status.message}
            </p>
          </form>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-8">
        <a
          href="https://www.instagram.com/kbhnonthaburi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-pink-600 transform hover:scale-150 transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-blue-700 transform hover:scale-150 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
        </a>
        <a
          href="https://www.facebook.com/people/Knightsbridge-House-Nonthaburi/61570369682424/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-blue-900 transform hover:scale-150 transition duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
        </a>
      </div>
    </section>
  );
}
