import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    }

    return (
        <div className="grid grid-cols-12">
            <div className="menu col-span-2 bg-gray-300 min-h-screen p-8 flex flex-col">
                <ul>
                    <li className="border border-black rounded px-4 py-2 w-full my-1">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="border border-black rounded px-4 py-2 w-full my-1">
                        <Link to={"home"}>Dashboard</Link>
                    </li>
                    <li className="border border-black rounded px-4 py-2 w-full my-1">
                        <Link to={"all-products"}>All Products</Link>
                    </li>
                    <li className="border border-black rounded px-4 py-2 w-full my-1">
                        <Link to={"add-product"}>Add Product</Link>
                    </li>
                    <li className="border border-black rounded px-4 py-2 w-full my-1">
                        <Link to={"profile"}>Profile</Link>
                    </li>
                </ul>
                <div className="mt-5">
                    <button onClick={handleLogout} className="btn bg-red-500 text-white w-full">Logout</button>
                </div>
            </div>
            <div className="col-span-10 p-20">
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;