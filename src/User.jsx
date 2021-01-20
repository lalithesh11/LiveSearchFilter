import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  // useLocation will be used to get the current url of the page

  const location = useLocation();
  // console.log(location);

  
  const history = useHistory();
  console.log(history);

  return (
    <>
      <h1>
        This is {fname} {lname} Page
      </h1>
      <p>My current url is {location.pathname}</p>

      {/* we will be navigated to the previous page */}
      {/* {location.pathname===`/user/lalithesh/akula` ? <button onClick={()=>history.goBack()}>Go Back</button> : null} */}

      {/* we will be navigated to the respective page based on path we given inside push method */}
      {location.pathname === `/user/lalithesh/akula` ? (
        <button onClick={() => history.push("/")}>About Us Page </button>
      ) : null}
    </>
  );
};

export default User;
