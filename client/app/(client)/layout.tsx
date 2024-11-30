import Footer from "./_components/Footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const ClientSideLayout = ({
  children,
}: DashboardLayoutProps) => {
    return (
        <div className='w-full min-h-screen'>
            <main className='h-full'>
                {children}
            </main>
            <div className="w-[90%] mx-auto lg:w-[82%] lg:max-w-screen-xl">
              <Footer />
            </div>
        </div>
    )
}

export default ClientSideLayout