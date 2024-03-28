import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../HomePage/Button";
const LearningLanguageSection = () => {
  return (
    <div className="mt-[150px] mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for
          <HighlightText text={"Learning any Language"} />
        </div>

        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
          Using Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias quaerat provident ab, at numquam vero! Dolore velit quidem,
          architecto iusto ipsa provident. Beatae distinctio.
        </div>

        <div className="flex flex-row items-center justify-center mt-5 ">
          <img
            className="object-contain -mr-32"
            src={know_your_progress}
            alt="know_your_progressImage"
          />
          <img
            className="object-contain"
            src={plan_your_lesson}
            alt="planyourlessonImage"
          />
          <img
            className="object-contain -ml-36"
            src={compare_with_others}
            alt="compare_with_others"
          />
        </div>

        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn more</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
