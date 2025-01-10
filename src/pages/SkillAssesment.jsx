import Lottie from "react-lottie-player";
import animationData from "../images/coming_soon.json";

const SkillAssesment = () => {
  return (
    <>
    <h1>Skill Assesment - Coming Soon!</h1>
    <div className="flex justify-center items-center flex-col gap-2 h-full">
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 500, height: 500 }}
      />
    </div>
    </>
  );
};

export default SkillAssesment;
