import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About page</h1>
      <p>This is a About Page of our App</p>
      <p>We are learning about Router</p>
      <Link to="/">Go to Home</Link>

      <li><a href='/'>Home</a></li>
    </>
  );
}

export default About;
