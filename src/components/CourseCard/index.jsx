import softwarePoster from "../../images/learn_software.jpg"

const CourseCard = ({title,pic}) => {
  return (
    <div className="w-[auto] rounded-lg overflow-hidden flex flex-col gap-2 shadow-xl bg-white">
        <img src={pic} alt="" className="w-[300px] h-[200px] object-cover" />
        <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
            <p className="text-[#E584E8] bg-[#e584e832] p-2 rounded-lg w-fit text-[10px] font-semibold">Insurance</p>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="text-gray-400 text-sm">Dr. Bikash Kalita & Rituraj Pathak</p>
            <p className="bg-[#437043] text-white font-bold text-sm px-2 py-[3px] w-fit rounded">Active</p>
            <div className="flex justify-between items-end">
                <p className="text-[10px] font-bold">157 employees enrolled</p>
                <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg w-fit">View Course</button>
            </div>
        </div>
    </div>
  )
}

export default CourseCard