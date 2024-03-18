import React, { useState, useEffect } from "react";
import "../App.css"; // Import your CSS file containing animation styles

function Typewriter() {
  const [text, setText] = useState("");
  const phrases = [
    "Hi, my name is Abhishek Kumar. I'm a Software & Web Developer",
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    const intervalId = setInterval(() => {
      if (currentIndex === phrases.length) {
        clearInterval(intervalId);
        return;
      }
      currentText = phrases[currentIndex].substring(0, currentText.length + 1);
      setText(currentText);
      if (currentText === phrases[currentIndex]) {
        setTimeout(() => {
          currentIndex++;
        }, 2000); // Pause for 2 seconds before typing the next phrase
      }
    }, 110); // Typing speed in milliseconds

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return (
    <h1>
      <div className="typewriter text-blue-950 m-5 my-10 flex animate-gradient text-wrap bg-gradient-to-r from-black via-blue-gray-600 to-blue-gray-900 bg-300% bg-clip-text text-center text-3xl font-bold text-transparent">
        <div>
          {text}
          <span className="cursor">&#9608;</span>
        </div>
      </div>
    </h1>
  );
}

export default Typewriter;
