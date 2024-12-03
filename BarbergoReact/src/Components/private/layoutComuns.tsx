import React from "react";
import {Outlet} from "react-router-dom"
import { Footer } from "../Footer/Footer";
import { Nav } from "../Navbar/Nav";

export const Layout:React.FC =()=>{
return(
    <div  className="container-fluid">
        <Nav/>        
        <main>
            {<Outlet/>}
        </main>
        <Footer/>   
        
    </div>

)
}