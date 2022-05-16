import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";

function Navbar(props) {
  return (
    <div className={classes.navMain}>
      <ul className="">
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
