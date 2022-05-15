import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/universities">Universities</Link>
        </li>
        <li>
          <Link to="/postal">Postal lookup</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
