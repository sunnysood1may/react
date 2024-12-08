import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function User(prop) {
  const params = useParams();
  console.log(params.id);
  //const loc = useLocation();
  //sconsole.log(loc);
  return (
    <div>
      <h1>Hi this is user no {params.id}</h1>
      <h1>Hi this is {params.name}</h1>
    </div>
  )
}

export default User;