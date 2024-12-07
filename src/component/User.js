import { useLocation, useParams } from "react-router-dom";
function User(){
    const params = useParams();
    const {name} = params;
    const location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>This is {name} Page</h1>
        </div>
    )
}

export default User;