const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col md:flex-col items-center justify-center bg-blue-800 p-4 md:p-0">
        {logo}
        <div className="w-full max-w-md px-6 py-8 mt-8 bg-white rounded-lg shadow-md border">
            <div className="w-full">{children}</div>
        </div>
    </div>
)

export default AuthCard
