import logo from "../assets/images/katanemo-logo.png";

export default function Header({ toggleTheme }) {

  return (
    <header>
      <img src={logo} alt="katanemo-chef-logo" />
      <h1>Chef katanemo</h1>
      <div className="themeToggle">
        <input
          id="toggle"
          class="toggle"
          type="checkbox"
          onChange={toggleTheme}
        ></input>
      </div>
    </header>
  );
}
