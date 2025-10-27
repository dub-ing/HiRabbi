import Header from './Header'
import SideNav from './SideNav'
import { Outlet } from 'react-router'
function AppLayout() {
    return (
        <div class='h-screen grid grid-cols-1 grid-rows-[70px_1fr]'>
            <Header />
            <SideNav />
            <main class='w-full h-full px-4 py-4'>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
