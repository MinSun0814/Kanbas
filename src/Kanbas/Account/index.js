import './index.css';
import { RiAccountCircleFill } from 'react-icons/ri'; // Assuming you're using react-icons

function Account() {
  return (
      <div>
        <li className="d-flex justify-content-between align-items-center">
          <div>
            <RiAccountCircleFill style={{ fontSize: '120px' }} />
          </div>
          <div style={{ marginRight: "40px" }}>
            <button type="button" className="btn btn-secondary btn-sm">
              <a href="/Kanbas/Account/Profile/EditProfile/screen.html">
                <i className="fa fa-pencil" aria-hidden="true"></i>
                Edit Profile
              </a>
            </button>
          </div>
        </li>
        <h1>Min Sun</h1>
        <h3>Contact</h3>
        <p>No registered service, you can add some on the settings page.</p>
        <h3>Biography</h3>
        <textarea className="TextAreaNoBorder" cols="40" rows="3" defaultValue="Student at Northeastern University."></textarea>
        <h3>Links</h3>
        <p><a href="https://www.google.com" className="wd-fg-color-red">Google</a></p>
        <p><a href="https://www.youtube.com" className="wd-fg-color-red">Youtube</a></p>
      </div>
  );
}

export default Account;
