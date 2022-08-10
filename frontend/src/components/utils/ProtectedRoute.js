import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }) => {

    const isAuthorized = useSelector(state => state.auth.auth);
    const authToken = useSelector(state => state.auth.authToken);

    if (!isAuthorized || !authToken) {
        return <Navigate to="/login" />;
    }
    
    return children;
};
