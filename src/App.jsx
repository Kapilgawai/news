

// import { useState, useEffect } from 'react';
// import Navbar from './Components/Navbar';
// import NewsBoard from './Components/NewsBoard';
// import './index.css';

// const App = () => {
//   const [category, setCategory] = useState('general');
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <Navbar setCategory={setCategory} />
//       <div className="container">
//         <NewsBoard category={category} />
//       </div>
//       <footer className="footer">
//         {/* ... rest of the code ... */}
//       </footer>
//       <div className="time-clock">
//         <strong>{currentTime.toLocaleTimeString()}</strong>
//       </div>
//     </div>
//   );
// };

// export default App;


import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import "./index.css";


const App = () => {
  const [category, setCategory] = useState("general");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <div className="container">
        <NewsBoard category={category} />
      </div>
      <footer className="footer">
        <p>&copy; 2023 TheNewsiZans. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kapil-gawai-52738b170/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Kapilgawai" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p>Founder: Kapil Gawai</p>
        
      </footer>
      <div className="time-clock">
        <strong>{currentTime.toLocaleTimeString()}</strong>
      </div>
    </div>



  );
};

export default App;
