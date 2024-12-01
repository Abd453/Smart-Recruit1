import React, { useState , forwardRef } from 'react';

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
    <div ref={ref} id="faq" className="text-black py-12 px-4">
      <div className="col-span-full">
        <h1 className="bg-gradient-to-r from-green-800 text-black text-5xl font-bold mb-10 text-center">
          FAQS
        </h1>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-lg shadow-lg border-2 border-green-700">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-xl font-semibold flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-lg text-white">
                  {faq.answer}
                </p>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default FAQs;
