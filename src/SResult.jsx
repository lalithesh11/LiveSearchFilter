import React from "react";

const SResult=(props)=>{

    // Go to https://source.unsplash.com/
    const imgUrl=`https://source.unsplash.com/400x300?${props.inpVal}`;
    return (
        <>
        {/* alternative(alt) is mandatory in React */}
        <img src={imgUrl} alt="search"/>
        </>
    )

}

export default SResult;