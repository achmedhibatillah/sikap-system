import { useState } from "react"
import { FiMenu, FiHome, FiUsers, FiLogOut, FiChevronLeft } from "react-icons/fi"

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarCollapse, setSidebarCollapse] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {sidebarOpen && (
                <div
                className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`
                fixed inset-y-0 left-0 z-40
                bg-green-900 text-white
                transition-all duration-300 ease-in-out
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0
                ${sidebarCollapse ? "lg:w-20" : "lg:w-64"}
                w-64
                `}
            >
                <div className={`h-16 flex items-center justify-between px-4 border-b border-white/10 
                ${sidebarCollapse && 'lg:flex lg:justify-center'}`}>
                {!sidebarCollapse && (
                    <span className="font-extrabold text-lg tracking-wide">
                    SIKAP
                    </span>
                )}

                <button
                    onClick={() => setSidebarCollapse(!sidebarCollapse)}
                    className="hidden lg:flex p-1 rounded hover:bg-white/10 cursor-pointer"
                >
                    <FiChevronLeft
                    className={`transition-transform ${
                        sidebarCollapse ? "rotate-180" : ""
                    }`}
                    />
                </button>
                </div>

                <nav className={`px-3 py-4 space-y-2 ${sidebarCollapse && 'lg:flex lg:flex-col lg:items-center'}`}>
                    <MenuItem icon={<FiHome />} label="Dashboard" collapsed={sidebarCollapse} />
                    <MenuItem icon={<FiUsers />} label="Pegawai" collapsed={sidebarCollapse} />
                    <MenuItem icon={<FiLogOut />} label="Logout" collapsed={sidebarCollapse} />
                </nav>
            </aside>

                <div
                className={`
                    flex-1 flex flex-col
                    transition-all duration-300
                    ml-0
                    ${sidebarCollapse ? "lg:ml-20" : "lg:ml-64"}
                `}
                >
                <header className="h-16 bg-white shadow-sm flex items-center px-4 gap-3">
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setSidebarOpen(true)}
                >
                    <FiMenu size={22} />
                </button>

                <h1 className="text-lg font-semibold text-gray-800">
                    Dashboard
                </h1>
                </header>

                <main className="flex-1 p-4">
                {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout

const MenuItem = ({
    icon,
    label,
    collapsed
    }: {
    icon: React.ReactNode
    label: string
    collapsed?: boolean
}) => {
    return (
        <div className="
            flex items-center gap-3
            px-3 py-2 rounded-md
            cursor-pointer
            hover:bg-white/10
            transition
        ">
            <span className="text-lg">{icon}</span>
            {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap">
                {label}
                </span>
            )}
        </div>
    )
}
