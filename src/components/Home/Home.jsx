import React from 'react';
import photographer from '../../assets/images/photographer.jpg';

function Home(){

  const welcomeText='Welcome to Snapshot';

  return (
    <div className = 'welcomeContent'>
      <h1 className='welcomeText'>{welcomeText}</h1>
      <img className='homeImage' src={photographer}       alt='photographer photo'></img>
      <style jsx>{`
        div.welcomeContent{

        }
        img.homeImage {
          margin-left: auto;
          margin-right: auto;
          display: block;
          border: 5px solid white;
          box-shadow: #555 1px 1px 8px 1px;
          max-width: 100%;
          height: auto;
          width: auto;
        }
      `}
      </style>
    </div>
  );
}

export default Home;
