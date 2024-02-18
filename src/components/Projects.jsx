import React from "react";
import { HorizontalCard } from "./Card";

const Projects = () => {
  const cardsData = [
    {
      imageUrl: "src/assets/dice.jpg",
      title: "Dice Game",
      description:
        "• Dice Game, an engaging and interactive project built using React",
      description1:
        "• This project offers a fun and challenging experience where players can test their luck and intuition by selecting a number, rolling the virtual dice, and earning points based on their guess.",
      git: "https://github.com/AbhishekCdr/Dice_Game",
      live: "https://dice-game-orpin-theta.vercel.app/",
    },
    {
      imageUrl: "src/assets/contact.png",
      title: "FireBase Contact App",
      description:
        "• FireBase Contact App offers seamless user interaction and data management. It ensures real-time updates and synchronization",
      description1:
        "• It uses FireBase as database for storing contact details and CRUD operations are being handeled by FireBase pre defined functions ",
      description2:
        "• It also shows confirmation of update and delete contact using React Toastify",
      git: "https://github.com/AbhishekCdr/Firebase-Contact-App",
      live: "https://firebase-contact-app-one.vercel.app/",
    },
    {
      imageUrl: "src/assets/smart.png",
      title: "Smart-Brain",
      description:
        "• SmartBrain is a Full-Stack application with registration system, utilizing the Artificial Intelligence to let users perform face-detection on images they provided to the app by entering its URL address.",
      description1:
        "• Developed the Front-End using React, Tailwind CSS and various other npm packages for the purpose of creating a compelling UI consisting of functional and reusable components.",
      description2:
        "• Developed the REST API and set up the database using Node.js, Express.js and PostgreSQL, as well as including technologies such as Knex.js for connecting the server and the database, as well as Bcrypt for hashing the passwords.",
      git: "https://github.com/AbhishekCdr/smartBrain-frontEnd_H",
      live: "https://smart-brain-demo.vercel.app/",
    },
    {
      imageUrl: "src/assets/gradient.png",
      title: "Background-Gradient Generator",
      description:
        "• The Background Gradient Color Generator App is a web application designed to empower users to create visually appealing gradient backgrounds effortlessly.",
      description1:
        "• The app is built using a combination of HTML, CSS, and JavaScript, providing an interactive and user-friendly interface for generating and customizing gradient colors for web projects.",
      description2: "• Also added features like Copy to Clipboard.",
      git: "https://github.com/AbhishekCdr/background-generator",
      live: "https://abhishekcdr.github.io/background-generator/",
    },
    {
      imageUrl: "src/assets/robo.jpg",
      title: "RoboFriends",
      description:
        "• robofriends is a Front-End application which filters the gallery of cards, loaded with data fetched from an external source, based on the user's input.",
      description1: "• Created the UI with the React library.",
      git: "https://github.com/AbhishekCdr/roboFriends",
      live: "https://abhishekcdr.github.io/roboFriends/",
    },
    {
      imageUrl: "src/assets/weather.jpg",
      title: "Weather App",
      description:
        "• weatherApp is an api based application which fetch the weather, humidity and wind speed of location.",
      description1: "• Created the UI with the HTML & CSS.",
      git: "https://github.com/AbhishekCdr/weatherWeb",
      live: "https://abhishekcdr.github.io/weatherWeb/",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-self-auto items-center ">
        <div className="text-4xl font-bold py-10">PROJECTS</div>
      </div>
      <div className="grid grid-flow-row auto-rows-max justify-items-center gap-10 px-6">
        {cardsData.map((card, index) => (
          <HorizontalCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            description1={card.description1}
            description2={card.description2}
            git={card.git}
            live={card.live}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
