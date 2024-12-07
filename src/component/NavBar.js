import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="navbar">
      <li>
          <NavLink className="nav-bar-link" style={{color:'#fff',backgroundColor:'grey'}} to="/">Home</NavLink>
        </li>
        <li>
          <Link className="nav-bar-link" to="/about">About</Link>
        </li>    
        <li>
          <Link className="nav-bar-link" to="/contact">Contact</Link>
        </li>
        <li>
          <Link className="nav-bar-link" to="/user/sunny">sunny</Link>
        </li>
        <li>
          <Link className="nav-bar-link" to="/user/shilpa">shilpa</Link>
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
