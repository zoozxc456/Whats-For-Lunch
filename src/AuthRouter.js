import { Redirect, Route } from "react-router-dom";
import { tokenDecoder } from "./utils/tokenDecoder";

const setUserRole = (token) => {
    try {
        return tokenDecoder(token).role;
    } catch (e) {
        return 'guest';
    }
}

const IsAdminUser = (role) => role === 'admin';
const IsGuestUser = (role) => role === 'guest';
const IsMemberUser = (role) => role === 'user';

const IsPermissonToAccess = (role, Permission) => role === Permission;


const AuthRoute = (RouteProps) => {

    const { Permission, type, ...props } = RouteProps;
    const token = localStorage.getItem('accessToken');

    const role = setUserRole(token) ?? 'guest';

    if (IsGuestUser(role) && !IsPermissonToAccess(role, Permission)) {
         return <Redirect to="/" />
    }

    if (IsMemberUser(role) && !IsPermissonToAccess(role, Permission)) {
        return <Redirect to="/Home" />;
    }

    if (IsAdminUser(role) && !IsPermissonToAccess(role, Permission)) {
        return <Redirect to="/Administrator" />;
    }

    return <Route {...props} />;
}

export default AuthRoute;