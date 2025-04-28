import logo from '../../assets/logo.png';
import './homePage.css';

function HomePage() {
    return (
      <div className='home-page page-container'>
        <img src={logo} alt="Logo image" className="logo-image" />
        <h1 className='home-page_title'>Where It's @</h1>
        <p className='home-page_sub'>Ticketing made easy</p>
      </div>
    );
  }
  
  export default HomePage;