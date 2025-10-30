import logo from "../assets/images/chef-claude-icon.png";

export default function Header({toggleTheme}) {
  return (
    <header>
      <img src={logo} alt="claude-chef-logo" />
      <h1>Chef Claude</h1>
      <div className="themeToggle">
        <button onClick={toggleTheme} style={{ position: "fixed", top: 0, right: 10 }}>
            togglebtn
      </button>
      </div>
    </header>
  );
}
