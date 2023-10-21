import { Link, useLocation } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillDashboard } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { AiOutlineInbox } from "react-icons/ai";
import './index.css';

function KanbasNavigation() {
  const links = [
    { name: "Account", icon: <RiAccountCircleFill style={{ fontSize: '24px' }} /> },
    { name: "Dashboard", icon: <AiFillDashboard style={{ fontSize: '24px' }} /> },
    { name: "Courses", icon: <FaBook style={{ fontSize: '24px' }} /> },
    { name: "Calendar", icon: <SlCalender style={{ fontSize: '24px' }} /> },
    { name: "Inbox", icon: <AiOutlineInbox style={{ fontSize: '24px' }} /> }
  ];
  const { pathname } = useLocation();

  return (
      <div className="wd-Kanbas-navigation list-group">
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link.name}`}
                className={`list-group-item ${pathname.includes(link.name) ? "active" : ""}`}>
              <div className="icon-text-container">
                {link.icon}
                <br />
                {link.name}
              </div>
            </Link>
        ))}
      </div>
  );

}

export default KanbasNavigation;
