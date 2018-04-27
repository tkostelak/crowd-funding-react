import React from 'react';

function Upload(){

  return (
    <div className = 'uploadContent'>
      <h1>Upload</h1>
      <progress/>
      <br/>
      <button className='uploadButton'>Upload</button>
      <style jsx>{`
        .uploadContent {
          color: #111;
          margin-top: 12%;
          background-color: #fbfbfb;
          width: auto;
          padding: 5%;
          border-radius: 3px;
          box-shadow: #555 1px 1px 8px 1px;
        }

        .uploadButton{
           margin-top: 5%;
        }
      `}
      </style>
    </div>
  );
}

export default Upload;
