import AdminContainer from "@/components/modules/admin/AdminContainer";
import React from "react";

export default function Dashboard() {
    return (
        <AdminContainer>
            <div className="flex flex-col gap-1 font-roboto">
                <span className="text-sm text-neutral">Sunday, Jan 5</span>
                <span className="font-semibold">Good morning, Admin</span>
            </div>
        </AdminContainer>
    );
}
