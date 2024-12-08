import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="navbar nvw1">
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
      <ul className="navbar nvw2">
        <li>
          <NavLink className="nav-bar-link" to="/previousState">Previous state</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/previousProps">Previous Props</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/stateObject">State Object</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/contextApi">ContextApi</NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/props">Props</NavLink>
        </li> 
          
      </ul>
    </div>
  );
}

export default NavBar;
