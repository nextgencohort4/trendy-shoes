import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const {userInfo} = useSelector((state: RootState) => state.auth);
    return userInfo ? <Outlet/> : <Navigate to="/login" replace/>;
};

export default PrivateRoute;
