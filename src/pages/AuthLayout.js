import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../content/styles/Base2.scss";

const AuthLayout = () => {
   
    return (
        <>
          
            <main>
                <div className="c-wrapper">
                    <Outlet />
                </div>
            </main>
 
        </>
    )
};

export default AuthLayout;