import React from "react";

import classes from "./client-layout.module.scss";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="content">
            <div className={`${classes.client_layout}`}>
                {children}
            </div>
        </div>
    )
}