import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";


export default function Guest() {
    const token = useSelector((state) => {
        return state.users.token
    });

    if (token) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <><Outlet /></>
    );
}