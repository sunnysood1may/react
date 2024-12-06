import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <p>This is a Home Page of our App</p>
      <p>We are learning about router</p>
      <Link to="/about">Go to about</Link>
    </>
  );
}

export default Home;
