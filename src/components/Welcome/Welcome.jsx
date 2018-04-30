import React from 'react';
import welcomePhoto from '../../assets/images/welcome-photo.png';

function Welcome() {
  return (
    <div className="welcomeContent">
      <h1>Welcome to Squadfund!</h1>
      <img src={welcomePhoto} id="welcomePhoto"></img>
      <style jsx>{`
        #welcomePhoto {
          border: 5px solid white;
          box-shadow: #555 1px 1px 8px 1px;
          display: block;
          margin-top: 30px;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
          height: 90%;
          width: 90%;
        }
        h1{
          text-align: center;
          font-family: Amatic SC;
          font-weight: bold;
          font-size: 4em;
        }
        
      `}
      </style>    
    </div>
  );
}

export default Welcome;