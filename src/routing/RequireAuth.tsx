import { Navigate } from 'react-router-dom';
import {useAppState} from "../store/hooks";
import {selectIsAuthorised} from "../components/Auth";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isLogin = useAppState(selectIsAuthorised);
    const auth = localStorage.getItem('auth');

    if (!auth && !isLogin) {
        return  <Navigate to="/" />;
    }
    return children;
};
