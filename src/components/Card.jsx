import { BsGraphUp } from "react-icons/bs";

const Card = ({title, amount,icon}) => {
  return (
    <div className="border-[1px] border-gray-200 rounded shadow-sm w-[24%] py-4 px-4 flex flex-col gap-6 bg-white">
        <div className="flex justify-between items-center">
            <h3 className="text-gray-500 text-sm">{title}</h3>
            <div className="bg-gray-200 p-[5px] rounded">
                {icon}
            </div>

        </div>
        <div>
            <h2 className="font-bold text-3xl">{amount}</h2>
        </div>
        
    </div>
  )
}

export default Card