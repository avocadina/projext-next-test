import React from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="content">
            <div >
                {children}
            </div>
        </div>
    )
}