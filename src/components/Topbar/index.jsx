
import styles from './index.module.css'
import { CiMenuBurger } from "react-icons/ci";
import { useSidebarContext } from '../../contexts/SidebarContext';
import { Avatar } from '@mui/material';
import profile from "/admin.jpg"




const Topbar = () => {
  const {isCollapsed,setIsCollapsed} = useSidebarContext()
  return (
    <div className={styles.container} >
        <div className='flex items-center'>
          <button onClick={()=>setIsCollapsed(!isCollapsed)}><CiMenuBurger/></button>
          <img src="/logo.png" className='w-16' alt="" />
        </div>
        <div className='flex items-center gap-2'>
          <div className='text-[12px]'>
            <h3 className='font-bold'>Emma Watson</h3>
            <p className='text-gray-500'>Admin</p>
          </div>
          <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 30, height: 30 }}
            />
        </div>
    </div>
  )
}

export default Topbar