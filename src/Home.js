import React, { useState, useEffect } from "react";

export default function Home() {
  const roles = ["💻 Application Developer, Frontend Developer, Backend Developer, Web Developer, Programmer", "📊 Data Analyst & Data Scientist", "🎨 Graphic Designer", "📱 UI / UX Designer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px", background: "#4fc2fc"}}>
      <br/>
      <br />
        <h1 className="animate__animated animate__slideInRight animate__infinite animate__slower animate__delay-1s" style={{fontSize: "40px"}}>Welcome to Priscilla Jessica's Portfolio 👋</h1>
        <h3 style={{ transition: "opacity 1s ease-in-out" }}>
        {roles[index]}
      </h3>
    </div>
  );
}

// import "./Home.css";
// import { Typewriter } from "react-simple-typewriter";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
//         <h1 className="animate__animated animate__slideInRight animate__infinite animate__slower animate__delay-1s">Welcome, I'm Priscilla Jessica 👋</h1>
//         <div className="slideshow">
//             <span>💻 Web Developer</span>
//             <span>🎨 Graphic Designer</span>
//             <span>📱 UI/UX Enthusiast</span>
//         </div>
      {/* <h1 className="text-xl text-gray-800 h-10">
        <Typewriter
          words={[
            "Welcome, I'm Priscilla Jessica 👋",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1> */}

      {/* <h2 className="text-lg text-gray-600 mt-4 h-10">
        <Typewriter
          words={[
            "I am a Software Engineer",
            "Application Developer | Frontend Developer | Backend Developer | Fullstack Engineering 💻",
            "Data Enthusiast 📊",
            "UI/UX Designer 🎨",
            "Graphic Designer 🎨✏️💡",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={60}
          delaySpeed={1200}
        />
      </h2> */}

//       <button className="animate__animated animate__pulse animate__infinite mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
//         Explore My Work
//       </button>
//     </div>
//   );
// }
