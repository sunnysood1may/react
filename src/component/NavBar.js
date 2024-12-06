import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <li>
            <a href="/">Home</a>
          </li>
        </li>
        <li>
          <li>
            <a href="/about">About</a>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
