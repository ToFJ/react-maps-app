import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div>
        <p>React Maps Project</p>
      </div>
      <div>
        <label htmlFor="search">Look up new places</label>
        <AiOutlineSearch />
        <input type="text" name="search" />
      </div>
    </nav>
  );
};

export default Header;
