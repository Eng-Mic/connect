interface AuthLayoutProps {
    children: React.ReactNode
}


const AuthLayout = ({ 
    children 
}: AuthLayoutProps) => {
    return (
        <div className="w-[100%] mx-auto min-h-screen">
            <div className="w-[90%]  mx-auto relative lg:w-[95%] lg:max-w-screen-xl">
                <main className="w-[100%] pt-4 pb-[1rem]">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AuthLayout