import { Link, useLocation } from "react-router-dom";

function Home() {
  //const location = useLocation();
  //console.log(location);
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
