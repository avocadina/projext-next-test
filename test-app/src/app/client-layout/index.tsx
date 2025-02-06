import React from "react";

import ClientLayout from "~/src/entities/client-layout/ui";

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClientLayout>{children}</ClientLayout>
    )
}