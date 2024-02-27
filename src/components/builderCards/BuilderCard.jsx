import arrow from "../../assets/blueDownArrow.png";
import rightIcon from "../../assets/rightIcon2.png";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

export default function BuilderCard({ item }) {
  const {
    description,
    whyLove,
    title,
    tagImage,
    tag,
    ratingTag,
    rating,
    points,
    name,
    img,
    id,
    ratingValue,
    highlights,
  } = item || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-between items-center bg-white px-5 md:px-9 rounded-xl relative">
      <div>
        {tag && tagImage && (
          <p className=" bg-orange flex items-center gap-2 rounded-r-md h-[34px] px-3 text-white justify-center absolute -left-2 -top-3">
            <span>
              <img src={tagImage} alt="" />
            </span>
            <span>{tag}</span>
          </p>
        )}
        <p className="text-xl absolute top-9 -left-4 border border-gray-200 rounded-full w-[44px] flex justify-center items-center h-[44px] bg-white">
          {id}
        </p>
        <img
          className="mt-6 md:mt-0 w-[141px] h-[103px] mx-auto"
          src={img}
          alt="img"
        />
        <p className="text-[#626E79] text-sm text-center my-5">{name}</p>
      </div>
      <div className=" md:col-span-3 py-7">
        <p>
          <span className="font-bold text-textLight">{title}</span>
          {description}
        </p>
        <h3 className="font-bold text-textLight my-2">Main highlights</h3>
        {highlights && <p className="text-textLight ms-5">{highlights}</p>}
        {points && (
          <ul className="bg-lightOrange px-3 py-2 rounded-xl">
            {points.map((listItem, idx) => (
              <li key={idx} className="mt-1 pb-2">
                <span className="bg-white p-1 px-1.5 rounded-lg text-primary me-3">
                  {listItem?.number}
                </span>
                <span className="text-sm text-textLight">{listItem?.line}</span>
              </li>
            ))}
          </ul>
        )}
        {whyLove && (
          <ul className="my-4">
            <p className=" text-[#2C384A] mb-2">Why we love it</p>
            {whyLove.map((listItem, idx) => (
              <li key={idx} className="flex items-center gap-2 ">
                <span>
                  <img src={rightIcon} alt="" />
                </span>
                <span className="text-sm text-textLight">{listItem}</span>
              </li>
            ))}
          </ul>
        )}

        <button className=" cursor-pointer flex items-center text-primary my-2">
          Show more
          <span className="ps-1">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </div>
      <div className="p-0 flex flex-col justify-between items-center gap-6 relative h-full ">
        <div className=" bg-[#F3F9FF] w-[132px] h-[118px] rounded-b-xl flex flex-col justify-center items-center">
          <h2 className=" text-[32px] text-[#074786]">{rating}</h2>
          <h2 className=" text-[14px] text-[#074786]">{ratingTag}</h2>
          <Rating
            className="text-[#FFB80F] my-1"
            readOnly
            style={{ maxWidth: 60 }}
            value={ratingValue}
          />
        </div>

        <button className=" bg-primary w-full rounded-lg py-2 mb-7 text-white">
          View
        </button>
      </div>
    </div>
  );
}
