import { useNavigate, useLocation } from "react-router-dom";
import "./pageSwitch.css";

function PageSwitch() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  }

  return (
    <footer className="page-footer">
      <nav className="footer-nav">
        <button 
          onClick={() => navigate('/')} 
          className={`footer-nav__item footer-nav__home ${isActive('/')}`}>
        </button>
        <button 
          onClick={() => navigate('/events')} 
          className={`footer-nav__item footer-nav__events ${isActive('/events')}`}>
        </button>
        <button 
          onClick={() => navigate('/ticket')} 
          className={`footer-nav__item footer-nav__ticket ${isActive('/ticket')}`}>
        </button>
      </nav>
    </footer>
  );
}

export default PageSwitch;
