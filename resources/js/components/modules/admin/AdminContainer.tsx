import SideNav from "@/components/modules/admin/Sidenav";

interface Props {
    children: React.ReactNode;
}
export default function AdminContainer({ children }: Props) {
    return (
        <div className="flex min-h-screen max-w-screen-2xl mx-auto">
            <div>
                <SideNav />
            </div>
            <div className="px-10 py-10 w-full">{children}</div>
        </div>
    );
}
