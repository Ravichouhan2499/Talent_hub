// FAQAccordion.jsx
import React, { useState } from 'react';
import './faq.css';

const FAQAccordion = () => {
  // State to track which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data - questions and answers
  const faqData = [
    {
      question: 'What is Talent Hub?',
      answer: 'Talent Hub is a platform that connects skilled professionals with companies and opportunities. It helps individuals showcase their talents while enabling recruiters to discover the right candidates quickly and efficiently.'
    },
    {
      question: 'Is Talent Hub just a job board?',
      answer: 'No, Talent Hub is more than just a job board. It offers personalized talent profiles, smart matching algorithms, project-based opportunities, and tools to streamline the hiring and collaboration process.'
    },
    {
      question: 'Why did you create Talent Hub?',
      answer: 'We built Talent Hub to simplify the way talent and opportunities connect. Whether youre a freelancer, full-time job seeker, or a recruiter, our goal is to provide a seamless and effective platform for collaboration and growth.'
    },
    {
      question: 'What can I do on Talent Hub?',
      answer: 'On Talent Hub, you can create a professional profile, showcase your skills and projects, get matched with relevant opportunities, apply to jobs, and connect with potential clients or employers.'
    },
    {
      question: 'Can companies find specific types of talent on the platform?',
      answer: 'Yes! Talent Hub allows companies to search and filter profiles based on skills, experience, industry, availability, and more. It’s perfect for finding the right talent for full-time roles, freelance gigs, or short-term collaborations.'
    },
    {
      question: 'Do I need professional experience to join Talent Hub?',
      answer: 'Not necessarily. Talent Hub is designed for all levels—from students and fresh graduates to seasoned professionals. As long as you can showcase your skills or portfolio, you can create a profile and start exploring opportunities.'
    },
    {
      question: 'How is Talent Hub different from other hiring platforms?',
      answer: 'Unlike traditional hiring platforms, Talent Hub focuses on personalized matchmaking, talent branding, and community building. We highlight more than just resumes—we help talent build visibility and connections across industries.'
    },
    {
      question: 'Can I use Talent Hub for freelance or part-time work?',
      answer: 'Absolutely! Talent Hub supports flexible work models. Whether you’re looking for freelance projects, part-time roles, or full-time positions, our platform helps you find the right fit.'
    }
  ];
  

  // Toggle function to open/close FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div className='faq-container'>
    <div className="faq-container-2">
      <h1 className="faq-title">FAQs</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQAccordion;