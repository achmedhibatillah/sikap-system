import DashboardLayout from "@/layout/dashboard-layout"

interface object_sss {
    usr?: string,
    acs?: string
}

interface IndexDashboardPageProps {
    sss?: object_sss | null
}

const IndexDashboardPage = ({sss}: IndexDashboardPageProps) => {
    return (
        <DashboardLayout>hai</DashboardLayout>
    )
}

export default IndexDashboardPage