import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: FC = () => {
    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export { Layout };
