import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="header-nav">
      <div className="header-logo">
        <p>React Maps Project</p>
      </div>
      <div className="header-search">
        <label htmlFor="search">Look up new places:</label>
        <AiOutlineSearch className="header-icon" />
        <input type="text" name="search" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Header;
