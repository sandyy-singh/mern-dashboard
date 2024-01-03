import { useState, useEffect } from "react";

import "./App.scss";

import Navbar from "./components/Dashboard/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Dashboard/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tokenNo, setTokenNo] = useState("");
  useEffect(() => {
    const tocken = localStorage.getItem("token");
    setTokenNo(tocken);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the width based on your mobile breakpoint
    };
    // Initial check and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="d-flex parent text-light">
          {tokenNo && <div>{!isMobile && <Sidebar />}</div>}

          <div className="col  h-80 wave-back">
            {tokenNo && <Navbar />}
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
            </Routes>

              <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#007aff"
                  fill-opacity="1"
                  d="M0,32L12,69.3C24,107,48,181,72,208C96,235,120,213,144,181.3C168,149,192,107,216,101.3C240,96,264,128,288,128C312,128,336,96,360,74.7C384,53,408,43,432,58.7C456,75,480,117,504,117.3C528,117,552,75,576,90.7C600,107,624,181,648,186.7C672,192,696,128,720,101.3C744,75,768,85,792,106.7C816,128,840,160,864,197.3C888,235,912,277,936,293.3C960,309,984,299,1008,266.7C1032,235,1056,181,1080,154.7C1104,128,1128,128,1152,128C1176,128,1200,128,1224,117.3C1248,107,1272,85,1296,96C1320,107,1344,149,1368,176C1392,203,1416,213,1428,218.7L1440,224L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"
                ></path>
              </svg>
        
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
