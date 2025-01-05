import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <div className="hidden md:flex w-20 flex-col">
                    <Sidebar />
                </div>
                <main className="md:pl-20 pt-16 h-full">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default RootLayout;