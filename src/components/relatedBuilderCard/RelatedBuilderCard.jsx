import monitorImg from "../../assets/monitor.png";
const RelatedBuilderCard = () => {
  return (
    <div className="bg-white p-6 pt-10">
      <img
        className="w-[141px] h-[103px] mx-auto"
        src={monitorImg}
        alt="monitorImg"
      />
      <div className="flex items-center gap-2 mt-8 mb-2">
        <p className=" bg-lightBlue w-[96px] h-[28px] flex justify-center items-center rounded-lg text-[13px] text-[#074786]">
          20% Off
        </p>
        <p className=" bg-lightBlue w-[96px] h-[28px] flex justify-center items-center rounded-lg text-[13px] text-[#074786]">
          Limited time
        </p>
      </div>
      <h3 className="text-[#626E79] font-bold text-center my-2">
        Webbuilder 1
      </h3>
      <p className="text-[#626E79]">Computer Modern clasic with wix support</p>
      <div className="flex items-center gap-7 my-2 mb-3">
        <p className="text-xl text-[#5C6874]">$39.96</p>
        <p className="text-sm text-[#9FA9B3]">$49.96</p>
        <p className="text-[13px] text-[#EF4C5D]">(20% Off)</p>
      </div>
      <button className=" bg-[#1B88F4] w-full text-white h-[48px] rounded-xl">
        View Deal
      </button>
    </div>
  );
};

export default RelatedBuilderCard;
