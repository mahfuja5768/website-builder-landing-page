import rightIcon from "../../assets/rightIcon.png";
import downArrow from "../../assets/downArrow.png";
import greaterImg from "../../assets/greater.png";

const TopHeader = () => {
  const options = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];
  return (
    <div>
      <h1 className="md:text-5xl text-3xl text-center md:text-start">
        Best Website builders in the US
      </h1>
      <div className="flex items-center gap-5  md:flex-row flex-col justify-between border-y border-[#E1E4E6] py-3 my-8">
        <div className="flex items-center gap-5 md:flex-row flex-col">
          <a href="" className="flex items-center gap-2 text-sm text-[#4B5665]">
            <img src={rightIcon} alt="rightIcon" />
            Last Updated - <span>February 22, 2020</span>
          </a>
          <a href="" className="flex items-center gap-2 text-sm text-[#4B5665]">
            <img src={rightIcon} alt="rightIcon" />
            Advertising Disclosure
          </a>
        </div>
        <div className="flex justify-center items-center gap-2 text-sm cursor-pointer">
          <p>Top Relevant</p>
          <img src={downArrow} alt="downArrow" />
        </div>
      </div>
      <div className="max-w-[760px] md:flex gap-6 items-center justify-between md:flex-row flex-col  grid grid-cols-3">
        {options.map((item) => (
          <li
            key={item}
            className=" list-none text-[13px] text-[#4B5665] bg-white w-[138px] rounded-lg h-[36px] flex justify-start ps-4 items-center"
          >
            {item}
          </li>
        ))}
      </div>
      <div>
        <ul className="flex items-center gap-5 text-[#727D87] my-4 mt-7 text-sm">
          <li className="flex items-center gap-5">
            Home <img src={greaterImg} alt="greaterImg" />
          </li>
          <li className="flex items-center gap-5">
            Hosting for all <img src={greaterImg} alt="greaterImg" />
          </li>
          <li className="flex items-center gap-5">
            Hosting <img src={greaterImg} alt="greaterImg" />
          </li>
          <li className="flex items-center gap-5">
            Hosting6 <img src={greaterImg} alt="greaterImg" />
          </li>
          <li className="flex items-center gap-5">Hosting5</li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
