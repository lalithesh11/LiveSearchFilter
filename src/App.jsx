import React from "react";
import {Route,Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar"
import Services from "./Services";
import User from "./User";
import Search from "./Search";

const App=()=>{

    const Name=()=>{
        return <h1>This is Name Page</h1>
    }

    return (
        <>

        <Navbar />



<Switch>

<Route exact path="/" render={()=><About name={'Lalithesh'}/>}/>
<Route exact  path="/contact" component={Contact}/>
   <Route path="/services" render={()=><Services val={'will do all kind of services'}/>}/>
   <Route path="/contact/name" component={Name}/>
   {/* If user gives anything extra after user, we can take that value by writing /:name(not mandatory name , we can give anything). So user given value will be stored /accessed by name variable */}
   {/* <Route path="/user/:name" component={User}/> */}

   {/* In case , if we have multiple parameters in url, we can add extra variable.But, we should pass two parameters without missing. In case if we pass only one parameter, it will route to error component*/}
   <Route path="/user/:fname/:lname" component={User}/>
   <Route path="/search" component={Search}/>
   <Route component={()=><Error/>}/>

</Switch>
        </>
    )
}

export default App;