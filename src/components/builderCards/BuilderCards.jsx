import { useEffect, useState } from "react";
import cardData from '../../../public/cardData'

const BuilderCards = () => {
  // const [data, setData] = useState([])
      const getData = cardData
      const allData = getData.data
      console.log(allData);

  return (
    <div>
      {allData?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default BuilderCards;
