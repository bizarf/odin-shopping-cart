import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

const MainLayout = ({ cart }) => {
    return (
        <>
            <Navbar cart={cart} />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

MainLayout.propTypes = {
    cart: PropTypes.array,
};

export default MainLayout;
