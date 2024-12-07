import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="navbar">
      <li>
          <NavLink 
          style={({isActive})=>{return{backgroundColor: isActive? 'green': 'yellow'}}}     
          className="nav-bar-link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/about">About</NavLink>
        </li>    
        <li>
          <NavLink className="nav-bar-link" to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/filter?age=39&city=gurugram">Filter</NavLink>
        </li>
        <li>
          <Link className="nav-bar-link" to="/user/sunny">sunny</Link>
        </li>
        <li>
          <Link className="nav-bar-link" to="/user/shilpa">shilpa</Link>
        </li>

        <li>
          <NavLink className="nav-bar-link" to="/login">Login</NavLink>
        </li>

        <li>
          <NavLink className="nav-bar-link" to="/users/listing">Users</NavLink>
        </li>

        
      </ul>
    </div>
  );
}

export default NavBar;
