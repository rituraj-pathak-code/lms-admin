import AllCourses from "./pages/AllCourses"
import Dashboard from "./pages/Dashboard"
import MyCourses from "./pages/MyCourses"
import MyProfile from "./pages/MyProfile"
import SkillAssesment from "./pages/SkillAssesment"
import TakeQuiz from "./pages/TakeQuiz"

const RoutesHandler = [
    {
        component: <Dashboard />,
        path: "/",
        isLoading: true,
    },
    {
        component: <AllCourses />,
        path: "/allcourses",
        isLoading: true,
    },
    {
        component: <MyProfile />,
        path: "/myprofile",
        isLoading: true,
    },
    {
        component: <MyCourses />,
        path: "/mycourses",
        isLoading: true,
    },
    {
        component: <TakeQuiz />,
        path: "/quiz",
        isLoading: true,
    },
    {
        component: <SkillAssesment />,
        path: "/skillassesment",
        isLoading: true,
    }
]

export default RoutesHandler