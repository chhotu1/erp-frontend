
import { useLocation } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import GeneralRoutes from "./GeneralRoutes";
const CustomRoutes = () => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <>
            {pathname.split('/')[1] ==='public' ? (
                <GeneralRoutes />
            ) : (
                <AdminRoutes />
            )}

        </>
    )
}

export default CustomRoutes
