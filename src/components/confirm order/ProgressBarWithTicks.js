import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ProgressBarWithTicks = ({ value }) => {
  const ticks = [0, 28, 51, 74, 99]; 
  const text = ["Order Confirmed", "Start Production", "Quality Check", "Dispacthed Item", "Product Delivered"]; // Ticks at 20%, 40%, 60%, 80%, and 100%
  // Ticks at 20%, 40%, 60%, 80%, and 100%
  const progressBarStyle = {
    width: `${value}%`, // Set the width based on the value
    backgroundColor: '#F69B26', // Set the color of the progress bar
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="progress custombar" style={{ height: '15px', marginBottom: '10px', backgroundColor: "#D9D9D9" }}>
        <div className="progress-bar" role="progressbar" style={progressBarStyle} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      {ticks.map((tick, index) => (
        <div key={index} className="tick customiiii" style={{ position: 'absolute', left: `${tick}%`, transform: 'translate(-50%, -50%)', top: '50%', padding: '10px', borderRadius: '50%', backgroundColor: value >= tick ? '#F69B26' : '#D9D9D9' }}>
          <FontAwesomeIcon icon={faCheck} style={{ color: "white", fontSize: "24px" }}  className='customiii'/>
        </div>
      ))}
      {ticks.map((tick, index) => (
        <div key={index} className="tick-text" style={{ position: 'absolute', left: `${tick}%`,width:"6rem", transform: 'translate(-50%, -50%)', marginTop:"3rem", textAlign: 'center' }}>
          <p> <b>{text[index]} </b>   </p>
        </div>
      ))}
    </div>
  );
};

export default ProgressBarWithTicks;
