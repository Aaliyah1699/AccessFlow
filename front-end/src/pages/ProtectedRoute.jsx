/* eslint-disable react/prop-types */
import { Route, Navigate } from 'react-router-dom';
// import { useUserContext } from '../context/user_context'
import { useGlobalContext } from '../context';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useGlobalContext();
    return (
        <Route
            {...rest}
            render={() => {
                return user ? children : <Navigate to='/'></Navigate>;
            }}
        ></Route>
    );
};
export default PrivateRoute;
