import "./styles.css";
import Offer from "./Offer";
import Features from "./Features";

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Features />
      <Offer />
    </div>
  );
}
function Header() {
  return (
    <header className="app__header">
      <div className="app__header__left">
        <p className="app__header__left__chem">
          Chem<span className="app__header__left__swot">Swot</span>
        </p>
      </div>
      <div className="app__header__right">
        <a>Home</a>
        <a>Resources</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </header>
  );
}

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__left">
        <p className="welcome__h1">Welcome to IB chemistry</p>
        <p className="welcome__h2">
          Structured Complete Course
          <br />
          In Ib Chemistry
        </p>
        <p className="welcome__h3">
          Learn from the best having 20+ Years experience
        </p>
        <button className="welcome__button">Buy Now</button>
      </div>
      <div className="welcome__right">
        <img
          alt=""
          className="welcome__img"
          src="https://classroomclipart.com/images/gallery/Clipart/Science/boy-student-in-laboratory-performing-experiment-science-clipart.jpg"
        />
      </div>
    </div>
  );
}

function Offers() {
  return (
    <div className="welcome">
      <p className="welcome__h1">Welcome to IB Chemistry</p>
      <p className="welcome__h2">
        Structured Complete Course
        <br />
        In Ib Chemistry
      </p>
      <p className="welcome__h3">
        Learn from the best having 20+ Years experience
      </p>
      <button className="welcome__button">Buy Now</button>
    </div>
  );
}
export default App;
