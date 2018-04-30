import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbarContent">
      <Link className="link active" id="navTitleText" to="/">SquadFund</Link> |
      <Link className="link" to="/browse">Browse</Link> |
      <Link className="link" to="/funding">Funding</Link> |
      <Link className="link" to="/about">About</Link>
    
      <style jsx>{`
            .App {
        text-align: left;
        }
        
        .navbarContent {
          background-color: #02C39A;;
          height: 10%;
          padding: 2%;
          color: black;
          
        }
        
        #navTitleText {
          font-size: 300px;
          font-family: 'Amatic SC', cursive;
          font-weight: bold;

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

export default Navbar;