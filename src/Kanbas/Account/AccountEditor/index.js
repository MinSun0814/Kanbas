import React, { useState } from 'react';
import '/styles.css';
import '/lib/font-awesome/css/font-awesome.css';
import '/lib/bootstrap/bootstrap.css';
import './index.css';

function AccountEditor() {
  const [name, setName] = useState("Min Sun");
  const [title, setTitle] = useState("Student");
  const [bio, setBio] = useState("Student at Northeastern University.");
  const [linkTitles, setLinkTitles] = useState(["Google", "Youtube"]);
  const [linkURLs, setLinkURLs] = useState(["https://www.google.com", "https://www.youtube.com"]);

  return (
      <div>
        <ul className="info-list">
          <li className="d-flex justify-content-between align-items-center">
            <div>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div style={{ marginRight: "40px" }}>
              <button type="button" className="btn btn-secondary btn-sm">
                <a href="/Kanbas/Account/Profile/screen.html">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  Cancel Editing
                </a>
              </button>
            </div>
          </li>

          <li>Name: <input className="form-control" value={name} onChange={e => setName(e.target.value)} /></li>
          <li>Pronouns:
            <select>
              <option>He/Him</option>
              <option>She/Her</option>
              <option>They/Them</option>
              <option>Other</option>
            </select>
          </li>
          <li>Title: <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} /></li>
          <li><h2>Contact</h2></li>
          <li>No registered service, you can add some on the settings page.</li>
          <li><h2>Biography</h2></li>
          <li><textarea className="form-control" cols="40" rows="5" value={bio} onChange={e => setBio(e.target.value)}></textarea></li>
          <li><h2>Links</h2></li>
        </ul>

        <div className="container">
          <div className="row">
            <div className="col">
              <p>Title</p>
              {linkTitles.map((title, index) => (
                  <input key={index} className="form-control" value={title} onChange={e => {
                    const updatedTitles = [...linkTitles];
                    updatedTitles[index] = e.target.value;
                    setLinkTitles(updatedTitles);
                  }} />
              ))}
            </div>
            <div className="col">
              <p>URL</p>
              {linkURLs.map((url, index) => (
                  <input key={index} className="form-control" value={url} onChange={e => {
                    const updatedURLs = [...linkURLs];
                    updatedURLs[index] = e.target.value;
                    setLinkURLs(updatedURLs);
                  }} />
              ))}
            </div>
          </div>
        </div>
        <br />
        <button type="button" className="btn btn-secondary btn-sm">
          <a href="/Kanbas/Account/Profile/screen.html">Cancel</a>
        </button>
        <button type="button" className="btn btn-danger btn-sm">
          <a href="/Kanbas/Account/Profile/screen.html">Save Profile</a>
        </button>
      </div>
  );
}

export default AccountEditor;
