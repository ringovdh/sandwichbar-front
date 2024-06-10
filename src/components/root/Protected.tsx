import React, {PropsWithChildren, useContext} from "react";
import {Outlet} from "react-router-dom";
import AccessDenied from "./AccessDenied";
import UserContext from "../../store/UserContext";

interface ProtectedProps {
    role: string
}

const Protected = (props: PropsWithChildren<ProtectedProps>) => {
    const userCtx = useContext(UserContext);

    function hasRole(){
        if (props.role === 'USER' && userCtx.isUser) {
            return true;
        } else if (props.role === 'ADMIN' && userCtx.isAdmin) {
            return true;
        } else {
            return false;
        }
    }

    return (
    <>
        <div className="container mt-3">
            { hasRole() && <Outlet/> }
            { !hasRole() && <AccessDenied/> }
        </div>
    </>
    );
}

export default Protected;