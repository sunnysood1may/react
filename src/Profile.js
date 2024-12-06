import React, { useState } from "react";
function Profile(){
    const [loggedIn,setLoggedIn]=useState(1);  
    return (
    <div>
    {
        loggedIn==1?<h1>Welcome User1</h1>
        :loggedIn==2?<h1>Welcome User2</h1>
        :<h1>Welcome User3</h1>
    }           
    </div>
    )   
}

export default Profile;