import { createRef, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ setQuery, setCoords, autocomplete }) => {
  const queryRef = useRef("");

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(queryRef.current.value);
    console.log(autocomplete);
    setCoords({
      lat: autocomplete.data[0].result_object.latitude,
      lng: autocomplete.data[0].result_object.longitude,
    });
    // setQuery("");
  };

  return (
    <nav className="header-nav">
      <div className="header-logo">
        <p>React Maps Project</p>
      </div>
      <div className="header-search">
        <form onSubmit={e => handleSubmit(e)}>
          <label htmlFor="search">Look up new places:</label>
          <AiOutlineSearch className="header-icon" />
          <input type="text" name="search" placeholder="Search..." ref={queryRef} />
        </form>
      </div>
    </nav>
  );
};

export default Header;
