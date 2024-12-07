import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <h2>Here we have some other businesss</h2>
      <p>
        <Link to="company">Company</Link>
      </p>
      <p>
        <Link to="channel">Channel</Link>
      </p>
      <p>
        <Link to="other">Other</Link>
      </p>
      <Outlet />
    </div>
  );
}

export default Contact;
