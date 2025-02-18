"use client";
import React, { useState } from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you can handle form submission (e.g., send data to backend)
      alert("Form submitted!");
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <motion.p className="text-gray-200 text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4">
                HEY, I AM <br />
                <span className="text-purple-500">MUHAMMAD AQEEL</span>
              </motion.p>

              <motion.p className="text-lg sm:text-xl text-gray-300 mb-6">
                🚀 <strong>Python Backend Developer | Django | FastAPI</strong>
              </motion.p>

              <motion.p className="text-gray-400 text-sm sm:text-md leading-relaxed">
                I am a passionate <strong>Python Developer</strong> with
                expertise in <strong>Django, Django Rest Framework (DRF), and FastAPI</strong>.
              </motion.p>

              <ul className="text-gray-400 mt-4 space-y-2 text-sm sm:text-md">
                <motion.li>🔹 <strong>Backend Development</strong> - Building RESTful APIs</motion.li>
                <motion.li>🔹 <strong>Database Management</strong> - PostgreSQL, MySQL, MongoDB</motion.li>
              </ul>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  5 <span>+</span>
                </h3>
                <p className="text-xs md:text-base"><span>Projects</span></p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base"><span>Years of experience</span></p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  10 <span>+</span>
                </h3>
                <p className="text-xs md:text-base"><span>Happy clients</span></p>
              </div>
            </div>

            {/* Add your phone number here */}
            <div className="mt-6">
              <p className="text-gray-300 text-lg">
                📞 <strong>Contact me at:</strong>
                <a href="tel:+92 3227131980" className="text-purple-500 ml-2">+92 3227131980</a>
              </p>
            </div>
          </div>

          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
            onSubmit={handleSubmit}
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}

            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              value={formData.message}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
