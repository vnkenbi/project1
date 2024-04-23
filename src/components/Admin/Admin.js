import SideBar from "./SideBar";
import { FaBars } from 'react-icons/fa';
import './Admin.scss';
import { useState } from "react";
import { Outlet } from 'react-router-dom'; //them

const Admin = () => {
    const [collapsed, setcollapsed] = useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                {/* truyền props sang cho thang sidebar */}
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setcollapsed(!collapsed)} />
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default Admin;