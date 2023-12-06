

import { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ setCategory, setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">TheNewsiZans</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("technology")}> technology </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}> business </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("entertainment")}> entertainment </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("general")}> general </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}> health </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("science")}> science </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}> sports </div>
            </li>
          </ul>
          <div className="ms-auto d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn btn-outline-light" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setCategory: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Navbar;

