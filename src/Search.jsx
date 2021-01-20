import React, { useState } from "react";
import SResult from "./SResult";

const Search = () => {
    
  const[img, setImg] = useState("");

  const InpEvnt = (e) => {
    const data = e.target.value;
    console.log(data);
    
    setImg(data);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          val={img}
          placeholder="Search Anything"
          onChange={InpEvnt}></input>

        {/* <h1>This is Search page</h1> */}
      </div>
      <div className="SResult">
              {img===""?null:<SResult inpVal={img}/>}
      </div>
    </>
  );
};

export default Search;
