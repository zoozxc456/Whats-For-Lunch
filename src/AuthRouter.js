import { Redirect, Route } from "react-router-dom";
import { tokenDecoder } from "./utils/tokenDecoder";

const setUserRole = (token) => {
    try {
        return tokenDecoder(token).role;
    } catch (e) {
        return 'guest';
    }
}

const IsAdminUser = (Role) => Role === 'admin';
const IsGuestUser = (Role) => Role === 'guest';
const IsMemberUser = (Role) => Role === 'member';

const IsPermissonToAccess = (Role, Permission) => Role === Permission;


const AuthRoute = (RouteProps) => {

    const { Permission, type, ...props } = RouteProps;
    const token = localStorage.getItem('token');

    const Role = setUserRole(token) ?? 'guest';

    console.log(RouteProps,token,Role);
    if (IsGuestUser(Role) && !IsPermissonToAccess(Role, Permission)) {
        return <Redirect to="/" />
    }

    if (IsMemberUser(Role) && !IsPermissonToAccess(Role, Permission)) {
        return <Redirect to="/Home" />;
    }

    if (IsAdminUser(Role) && !IsPermissonToAccess(Role, Permission)) {
        return <Redirect to="/Administrator" />;
    }

    return <Route {...props} />;
}

export default AuthRoute;