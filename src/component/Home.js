import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navToPage = (url) => {
    navigate(url);
  };
  return (
    <>
      <h1>Home page</h1>
      <p>This is a Home Page of our App</p>
      <p>We are learning about router</p>
      <Link to="/about">Go to about</Link>
      <br />
      <button onClick={() => navigate("/about")}>navigate to about</button>
      <br />
      <br />
      <button onClick={() => navigate("/filter")}>navigate to filter</button>
      <br />
      <br />

      <button onClick={() => navToPage("/about")}>About</button>
      <br />
      <br />
      <button onClick={() => navToPage("/filter")}>Filter</button>
    </>
  );
}

export default Home;
