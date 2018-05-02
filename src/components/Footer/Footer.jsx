import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footerContent">
      <Link className="link active" to="/admin/funding">Admin</Link> 
      <style jsx>{`  
        .footerContent {
          margin-top: 96%;
          background-color: #02C39A;;
          height: 10%;
          padding: 2%;
          color: black;    
        }
        
        .navbarContent .link{
        font-size: 2em;
        font-family: 'Amatic SC', cursive;
        font-weight: bold;

        }
      `}
      </style>
    </div>
  );
}

export default Footer;