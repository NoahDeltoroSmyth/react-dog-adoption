import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav">
          <Link to="/dogs">Home</Link>
        </div>
        <div className="nav2">
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </>
  );
}
