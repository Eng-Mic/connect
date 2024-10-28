import TopNav from "./_components/TopNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const ClientSideLayout = ({
  children,
}: DashboardLayoutProps) => {
    return (
        <div className='w-full min-h-screen'>
            <main className=''>
                {children}
            </main>
        </div>
    )
}

export default ClientSideLayout