import { useState } from "react";
import { reviews } from "../data";

import Card from "./Card";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const handleNext = () => setIndex((index) => index + 1);
  const handlePrev = () => setIndex((index) => index - 1);
  const handleGetRandom = () =>
    setIndex(Math.floor(Math.random() * reviews.length));

  console.log(index);

  return (
    <div className="mx-auto w-1/2 p-4 ring-2 ring-secondary rounded-xl">
      <Card key={review.id} {...review} />
      <div className="flex gap-8 mx-auto w-1/2 justify-center mt-12">
        <button
          className="btn btn-square"
          onClick={handlePrev}
          disabled={index < 1}
        >
          &lt;
        </button>
        <button
          className="btn btn-square btn-outline"
          onClick={handleNext}
          disabled={reviews.length - 1 === index}
        >
          &gt;
        </button>
      </div>
      <button
        className="btn btn-block mt-8 text-accent"
        onClick={handleGetRandom}
      >
        Get Random
      </button>
    </div>
  );
};
export default Carousel;
