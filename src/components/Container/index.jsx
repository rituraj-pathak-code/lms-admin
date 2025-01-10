import { Box, Grid2 } from '@mui/material'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'
import style from "./index.module.css"
import Topbar from '../Topbar'
import { SidebarProvider } from '../../contexts/SidebarContext'
import Footer from '../Footer'

const Container = ({ children }) => {
    const navigate= useNavigate()

    const handleNavigate = (menuItem , index) => {
        navigate(menuItem?.route)
    }
    return (
        <SidebarProvider>
        <div>
            <Topbar/>
            <div className={style.container}>
                <div>
                    <Sidebar handleNavigate={handleNavigate}/>
                </div>
                <div className='bg-gray-50 w-full px-[30px] py-[70px] min-h-[100vh]'>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
        </SidebarProvider>
    )
}

export default Container