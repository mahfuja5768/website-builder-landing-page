const SpecialDeals = () => {
  return (
    <div className="flex justify-between flex-col md:flow-row gap-5 items-center my-20">
      <h2 className="md:text-3xl text-2xl text-[#5C6874] md:w-2/5">
        Sign up and get exclusive special deals
      </h2>
      <div className=" flex justify-center items-center h-[52px] ">
        <input type="text" className="bg-white h-full rounded-l-lg" />
        <button className=" bg-primary h-full rounded-r-lg px-3 text-white text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SpecialDeals;
