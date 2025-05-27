import React from "react";

const faqData = [
  {
    category: "General Questions",
    faqs: [
      {
        question: "What is YGEIAN FOCUS?",
        answer:
          "YGEIAN FOCUS is an aggregator for medical news, providing the latest updates from top medical news sites.",
      },
      {
        question: "How do I create an account?",
        answer:
          'You can create an account by clicking on the "Sign Up" button and following the registration process.',
      },
      {
        question: "Is there a free version of the app?",
        answer:
          "Yes, we offer a free plan with access to the latest medical news and limited article summaries.",
      },
    ],
  },
  {
    category: "Specialties and News",
    faqs: [
      {
        question: "How do I choose my specialty?",
        answer:
          "During sign-up, you must select the specialty you want to be informed about. You can also optionally choose additional specialties.",
      },
      {
        question: "Can I change my specialty later?",
        answer:
          "Yes, you can update your specialty preferences in your profile settings.",
      },
      {
        question: "What specialties are available?",
        answer:
          "All general medical specialties are available. You can view the list of specialties here.",
      },
    ],
  },
  {
    category: "Subscription and Billing",
    faqs: [
      {
        question: "What are the benefits of the premium plan?",
        answer:
          "The premium plan offers unlimited article summaries, in-depth explanations, AI-generated insights, advanced search filters, and an ad-free experience.",
      },
      {
        question: "How much does the premium plan cost?",
        answer: "The premium plan costs $8 per month.",
      },
      {
        question: "How do I upgrade to the premium plan?",
        answer:
          "You can upgrade to the premium plan by going to the 'Billing and Plan' section in your profile and selecting 'Upgrade to Premium.'",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Find answers to common questions.
        </p>

        {faqData.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {section.category}
            </h3>
            <div className="space-y-4">
              {section.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-md font-medium text-gray-800 mb-1">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
