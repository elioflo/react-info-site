import logo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h2 className="header__logo">
          <img className="logo" src={logo} alt="React Logo" />
          ReactFacts
        </h2>
        <h3 className="header__text">React Course - Project 1</h3>
      </nav>
    </header>
  );
}
