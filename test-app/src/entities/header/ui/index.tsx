import React from "react";

// import classes from './header.module.scss';
import Logo from "~/public/shared/Logo.svg";
import Navigation from "~/src/entities/header/ui/nav";

export default function Header() {
    return (
        <div className={`grid align-center space-between`}>
            {/* <Logo />
            <Navigation /> */}
        </div>
    )
}