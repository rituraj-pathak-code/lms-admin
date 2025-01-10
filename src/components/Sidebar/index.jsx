import style from "./index.module.css"
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosBook } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { useSidebarContext } from '../../contexts/SidebarContext';
import { RiAccountCircleFill } from "react-icons/ri";

const Sidebar = ({handleNavigate}) => {
    const {isCollapsed} = useSidebarContext()

    const SIDEBAR_ITEMS = [
        {
            label: "Dashboard",
            subMenuItems: [],
            route: "/",
            expanded: false,
            icon: <MdSpaceDashboard color='#b87aff'/>
        },
        {
            label: "All Courses",
            subMenuItems: [],
            route: "/allcourses",
            expanded: false,
            icon: <IoIosBook color='#b87aff'/>
        },
        {
            label: "My Profile",
            subMenuItems: [],
            route: "/myprofile",
            expanded: false,
            icon: <RiAccountCircleFill color='#b87aff'/>
        },
        // {
        //     label: "My Courses",
        //     subMenuItems: [],
        //     route: "/mycourses",
        //     expanded: false,
        //     icon: <FaBookmark color='#b87aff' size={15}/>
        // },
        // {
        //     label: "Take Quiz",
        //     subMenuItems: [],
        //     route: "/quiz",
        //     expanded: false,
        //     icon: <MdQuiz color='#b87aff'/>
        // },
        // {
        //     label: "Skill Assesment",
        //     subMenuItems: [],
        //     route: "/skillassesment",
        //     expanded: false,
        //     icon: <GiSkills color='#b87aff'/>
        // },
    ]
    return (
        <div className={`${style.sidebarContainer} ${isCollapsed ? style.collapsed : style.expanded} subHeadingText`}>
            {SIDEBAR_ITEMS?.map((item, key) =>
                <div className={style.sidebarBox} key={key}>
                    <div className={`${style.sidebarDivwithIcons} ${window.location.pathname == item.route && style.activeMenu}`} onClick={()=>{handleNavigate(item,key)}}>
                        <span>{item?.icon}</span>
                        {!isCollapsed && <p className={style.navItem} >{item.label}</p>}
                    </div>
                    {!isCollapsed && item?.subMenuItems?.length > 0 && <div >
                        {item.expanded ? <img src={<FaAngleUp/>} alt="arrowIcon" width={"10px"} /> : <img src={<FaAngleDown/>} alt="arrowIcon" width={"10px"} />}
                    </div>}
                </div>
            )}
        </div>
    )
}

export default Sidebar