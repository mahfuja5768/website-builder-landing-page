import cardData from "../../data/cardData";
import BuilderCard from "./BuilderCard";

const BuilderCards = () => {
  const getData = cardData;
  const allData = getData.data;
  console.log(allData);

  return (
    <div className="grid grid-cols-1 gap-8 my-12">
      {allData?.map((item) => (
        <BuilderCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BuilderCards;
