import RelatedBuilderCard from "./RelatedBuilderCard";

export default function RelatedBuilderCards() {
  return (
    <div className="mt-20 ">
      <h2 className="md:text-3xl text-2xl text-[#5C6874]">
        Related deals you might like for
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <RelatedBuilderCard />
        <RelatedBuilderCard />
        <RelatedBuilderCard />
      </div>
    </div>
  );
}
