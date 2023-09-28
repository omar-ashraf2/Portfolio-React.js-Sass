import { Mail, Person } from "@mui/icons-material";
import "./topbar.scss";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+201122334455</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>email@email.com</span>
          </div>
        </div>
        <div className="right">
          <div className="burgerIcon" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
