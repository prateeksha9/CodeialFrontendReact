import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://static.vecteezy.com/system/resources/previews/002/694/858/non_2x/search-lupe-icon-free-vector.jpg"
            alt="search-icon"
          />
          <input placeholder="Search" />

          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219989.png"
              alt="user-dp"
              id="user-dp"
            />
            <span>John Doe</span>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              {/* <li>
                <Link>Log in</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
