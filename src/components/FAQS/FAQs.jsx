import React, { useState, forwardRef } from 'react';

const FAQs = forwardRef((props, ref) => {
  // Array of FAQs
  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a range of services including web development, branding, and digital marketing. Our team works closely with you to understand your needs and deliver tailored solutions to help you achieve your goals.'
    },
    {
      question: 'How can I get in touch with you?',
      answer: 'You can reach us via email at info@example.com. You can also fill out our contact form on the "Let\'s Talk" page, and we\'ll get back to you as soon as possible.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies depending on the scope and complexity of the project. We offer custom quotes based on your specific requirements. Please reach out to us for a detailed proposal and pricing information.'
    },
    {
      question: 'Do you offer support after the project is completed?',
      answer: 'Yes, we provide support and maintenance services to ensure everything runs smoothly after the project is completed. We offer different support packages based on your needs.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'The timeline for completing a project depends on its complexity and scope. We will provide an estimated timeline after discussing your project details. Our goal is to deliver high-quality results within the agreed-upon timeframe.'
    }
  ];

  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Common <span className="text-green-600">Questions</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Everything you need to know about our recruitment platform.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className={`glass overflow-hidden rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-green-500/50 shadow-lg shadow-green-500/10' : 'border-white/40 shadow-sm'}`}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 text-left flex justify-between items-center group"
            >
              <span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-green-600' : 'text-gray-900 group-hover:text-green-600'}`}>
                {faq.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-green-600 text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-600'}`}>
                <span className="text-xl leading-none">{openIndex === index ? '−' : '+'}</span>
              </div>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-8 pb-8 pt-2">
                <p className="text-gray-600 text-lg leading-relaxed border-t border-gray-100 pt-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default FAQs;
