import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">EMS</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/employees">Employees</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/departments">Departments</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;