import React from 'react';

const AboutPage = () => {
  return (
    <div className='pt-14 w-full p-5'>
        <div className="max-w-4xl mx-auto mt-8 p-8 bg-gray-900 rounded-lg shadow-lg text-white">
      <h1 className="text-3xl font-bold mb-4">About Me and the Project</h1>
      <hr className="border-gray-600 mb-6" />
      <div className="text-lg">
        <p>
          Hello👋, I'm Rahul Verma, the creator of this YouTube clone project. I've dedicated a significant amount of time and effort to develop this project, striving to create a platform that emulates the core functionalities of YouTube.
        </p>
        <p className="mt-4">
          This project has been a labor of love, and I've poured countless hours into designing, developing, and refining it to ensure a seamless and user-friendly experience for viewers.
        </p>
        <p className="mt-4">
          The technologies used in this project include React for the frontend, Material-UI for styling and UI components, and various APIs for fetching and displaying video content. Additionally, I've employed React Router for navigation and state management libraries like useState and useEffect for managing component state and lifecycle.
        </p>
        <p className="mt-4">
          My goal🎯 with this project was to not only showcase my skills as a developer but also to provide a practical demonstration of my ability to create a fully functional web application that closely resembles a popular platform like YouTube.
        </p>
        <p className="mt-4">
          Thank you🙏 for visiting my about page and taking the time to learn more about me and this project. If you have any feedback or suggestions, feel free to reach out!
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
