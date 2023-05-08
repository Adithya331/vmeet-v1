import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    let flag = true;    
    console.log("this is pr " + flag)

    if(flag)
    {
        return <Outlet/>
    }
    else{
        return <Navigate to = "/login"/>
    }
}

export default PrivateRoute;