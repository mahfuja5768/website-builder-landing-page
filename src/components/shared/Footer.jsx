import downArrow from "../../assets/downArrow.png";
const Footer = () => {
  return (
    <div className="bg-black text-[#B6BDC4] m-2">
      <div className="max-w-[1024px] mx-auto px-6 py-12 pb-28 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <h3 className=" uppercase text-white">Categories</h3>
          <ul className="flex flex-col gap-5 mt-5 text-[13px]">
            <li className="cursor-pointer">Web Builder</li>
            <li className="cursor-pointer">Hosting</li>
            <li className="cursor-pointer">Data Center</li>
            <li className="cursor-pointer">Robotic-Automation</li>
          </ul>
        </div>
        <div>
          <h3 className=" uppercase text-white">Contact</h3>
          <ul className="flex flex-col gap-5 mt-5 text-[13px]">
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms Of Service</li>
            <li className="cursor-pointer">Categories</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p> United States </p>
          <img src={downArrow} alt="downArrow" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
