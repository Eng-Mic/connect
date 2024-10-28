import Navigation from "./_components/Navigation"

interface AdminLayoutProps {
    children: React.ReactNode
}

const AdminLayout = ({ 
    children 
}: AdminLayoutProps) => {
    return (
        <div className="w-[100%] mx-auto min-h-screen">
            <div className="w-[90%]  mx-auto relative lg:w-[95%] lg:max-w-screen-xl">
                <Navigation />
                <main className="w-[100%] pt-4 pb-[1rem]">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AdminLayout