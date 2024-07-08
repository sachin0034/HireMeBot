import React, { useState, useRef } from 'react';
import Select from 'react-select';
import "./App.css";
import QuesList from "./QuesList";
import video1 from "./1.mp4";
import video2 from "./fe.mp4";
import video3 from "./3.mp4";
import interviewImage1 from "./interviewer/interview1.png";
import interviewImage3 from "./interviewer/interview2.png";
import interviewImage2 from "./interviewer/interview3.png";
import landingBackground from "./interviewer/landing_bg.jpg";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [optionSelected, setOptionSelected] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showCameraFeed, setShowCameraFeed] = useState(false);
  const videoRef = useRef(null);

  const options = [
    { value: video1, label: 'Interviewer 1', image: interviewImage1 },
    { value: video2, label: 'Interviewer 2', image: interviewImage2 },
    { value: video3, label: 'Interviewer 3', image: interviewImage3 }
  ];

  const handleVideoChange = (selectedOption) => {
    setSelectedVideo(selectedOption.value);
    setOptionSelected(true);
  };

  const handleGetStarted = () => {
    setShowLandingPage(false);
  };

  const handleMediaStream = (start) => {
    if (start) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }).catch((error) => {
        console.error('Error accessing camera:', error);
      });
    } else {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    }
  };

  const handleCameraToggle = () => {
    setShowCameraFeed(prevShowCameraFeed => {
      const newShowCameraFeed = !prevShowCameraFeed;
      handleMediaStream(newShowCameraFeed);
      return newShowCameraFeed;
    });
  };

  return (
    <div className="App">
      {showLandingPage && (
        <div className="landing-page" style={{ backgroundImage: `url(${landingBackground})` }}>
          <div className="landing-page-content">
            <button onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      )}

      {!optionSelected && !showLandingPage && (
        <div className='avatar-dropdown'>
          <Select
            options={options}
            onChange={handleVideoChange}
            isSearchable={false}
            placeholder="Choose Your AI Interviewer"
            components={{ Option: CustomOption }}
          />
        </div>
      )}

      {selectedVideo && (
        <>
          <video ref={videoRef} className="videoTag" autoPlay loop muted>
            <source src={selectedVideo} type="video/mp4" />
          </video>
          <div className="overlay">
            <QuesList />
          </div>
          <div className="camera-feed" style={{ display: showCameraFeed ? 'block' : 'none' }}>
            <button onClick={handleCameraToggle}>Close Camera</button>
            <video className="videoPreview" autoPlay playsInline ref={videoRef}></video>
          </div>
          {!showCameraFeed && (
            <button onClick={handleCameraToggle} className="camera-button">Turn On Camera</button>
          )}
        </>
      )}
    </div>
  );
}

const CustomOption = ({ innerProps, label, data }) => (
  <div {...innerProps}>
    <img src={data.image} alt={label} className="avatar-image" />
    {label}
  </div>
);

export default App;
