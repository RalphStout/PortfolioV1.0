import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function App() {

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(document.getAttribute("href")).scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <div className="App">
      {/* Landing Page */}
      <div className="BorderContainer">
          <div className="Border-Top"></div>
          <div className="Border-Left"></div>
          <h1 style={{color: 'white', fontSize: 20, marginTop: 20}}>Hello, I am</h1>
          <h1 className="IntroText">Ralph Stout</h1>
          <h1 className="IntroText SWEtext" style={{opacity: 0.8}}>Software Engineer</h1>
      </div>
      <p className='About'>I am a Software Engineer my main focus is creating complex 
        applications and helping companies grow. I am currently seeking employment!</p>
      <AnchorLink id="Button1" href="#Projects-Container">VIEW PROJECTS</AnchorLink>
      <AnchorLink id="Button2" href="#ContactContainer" >CONTACT ME</AnchorLink>

      {/* Divider Line between components */}
      <div className="Line"></div>
    </div>
  );
}

export default App;
