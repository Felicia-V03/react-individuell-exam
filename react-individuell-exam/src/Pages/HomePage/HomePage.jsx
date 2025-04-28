import logo from '../../assets/logo.png';
import './homePage.css';

function HomePage() {
    return (
      <div className='homePage-container'>
        <img src={logo} alt="Logo image" className="logo-image" />
        <h1 className='homePage-title'>Where It's @</h1>
        <p className='homePage-sub'>Ticketing made easy</p>
      </div>
    );
  }
  
  export default HomePage;