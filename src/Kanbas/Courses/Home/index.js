import React from 'react';
import ModuleList from "../Modules/ModuleList";
import Status from "./Status";
import './index.css';

function Home() {
  return (
      <div className="home-container">
        <h2>Home</h2>
        <div className="content">
          <div className="module-list">
            <ModuleList />
          </div>
          <Status />
        </div>
      </div>
  );
}

export default Home;
