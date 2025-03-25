import React, { useState } from 'react';
import './Question.css';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

const questionSection = {
    quize: [
        {
            id: 1, 
            title: "How does the Process work?",
            description: "My process is structured to ensure efficiency and quality. I start with a discovery phase to understand your needs and goals. Then, I move into wireframing and design, where we create the visual layout. After approval, I begin development, building the core functionalities and integrating necessary features. Once the app is developed, we conduct testing and quality assurance to ensure everything runs smoothly. Finally, I handle deployment and post-launch support to ensure a seamless transition and ongoing maintenance if needed.",
        },
        {
            id: 2, 
            title: "How do I share feedback during development?",
            description: "You can share feedback at key milestones—during design reviews, development updates, and testing phases. I keep communication open through meetings, emails, or a project management tool for seamless collaboration.",
        },
        {
            id: 3, 
            title: "How long will it take to complete the development?",
            description: "The timeline depends on the project's complexity, features, and revisions. On average, a basic app takes a few weeks, while a more complex one can take several months. We'll provide a detailed timeline after the initial discussion.",
        },
        {
            id: 4, 
            title: "What tech do I use?",
            description: "I use modern technologies tailored to your project’s needs. This includes React for front-end development, Flask and Django for back-end APIs, and SQL databases for data management. I also integrate tools like Swiper and AOS for enhanced functionality and design.",
        },
        {
            id: 5, 
            title: "Do I offer maintenance after launching?",
            description: "Yes, I offer post-launch maintenance, including bug fixes, updates, and performance improvements to keep your app running smoothly.",
        },
        {
            id: 6, 
            title: "Why should I hire you?",
            description: "I provide high-quality, tailored solutions with a focus on user experience, performance, and scalability. With expertise in React, Flask, Django, and modern development tools, I ensure a smooth process from design to deployment, along with reliable post-launch support.",
        }
    ]
};

const Question = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className='question-container'>
      <div className='question-container-heading'>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="questions-list">
        {questionSection.quize.map((question) => (
          <div key={question.id} className="question-item">
            <div className="question-title" onClick={() => toggleQuestion(question.id)}>
              <span>{question.title}</span>
              <div className='question-arrow-icons'>
                {openQuestion === question.id ? (
                  <IoIosArrowRoundUp size={30} />
                ) : (
                  <IoIosArrowRoundDown size={30} />
                )}
              </div>
            </div>
            {openQuestion === question.id && (
              <p className="question-description">{question.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
