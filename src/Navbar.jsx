import React from "react";
// import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Navbar=()=>{
return(
    <>
    <div className="menu_style">

{/*Both Link & NavLink are same.But for NavLink, we can use the activeClassName attribute to show which class is active when clicked */}
{/* If we dont use exact, alreday active link wont be inactivated */}
            <NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
            <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
            <NavLink exact activeClassName="active_class" to="/services">Services</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact/name">Names</NavLink>
            {/* <NavLink exact activeClassName="active_class" to="/user">User</NavLink> */}

            {/* If user click on user, by default, we can route to the lalithesh/akula*/}
            <NavLink exact activeClassName="active_class" to="/user/lalithesh/akula">User</NavLink>


    </div>
    </>
)
}

export default Navbar;