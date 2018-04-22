import React from 'react';
import photographer from '../../assets/images/photographer.jpg';

function Home(){
  const welcomeText='Welcome to Snapshot';
  return (
    <div>
      <h1 className='welcomeText'>{welcomeText}</h1>
      <div className='homeImage'>
      </div>
      <style jsx>{`
        div.homeImage {
          background-image: url(${photographer});
          background-size: cover;
          background-repeat: no-repeat;
          height: 800px;
          width: 1000px;
        }
      `}
      </style>
    </div>
  );
}

export default Home;
