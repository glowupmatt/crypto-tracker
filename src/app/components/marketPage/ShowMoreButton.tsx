import classNames from "classnames";
import React from "react";

type Props = {
  setShowMore: React.Dispatch<React.SetStateAction<number>>;
  setShowIndex: React.Dispatch<React.SetStateAction<number>>;
  showMore: number;
};

const ShowMoreButton = (props: Props) => {
  const { setShowMore, setShowIndex, showMore } = props;
  const nextPage = () => {
    setShowMore((prev) => prev + 1);
    setShowIndex((prev) => prev * 2);
  };

  const topOfPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setShowMore(0);
    setShowIndex(9);
  };
  return (
    <div className="flex justify-center items-center p-4 cursor-pointer">
      {showMore === 3 ? (
        <div
          onClick={topOfPage}
          className={classNames(
            "flex justify-center items-center w-[8rem] bg-blue-700 rounded-md p-4 text-white text-[.8rem]"
          )}
        >
          <p>Top of the page</p>
        </div>
      ) : (
        <div
          onClick={nextPage}
          className={classNames(
            "flex justify-center items-center w-[8rem] bg-blue-700 rounded-md p-4 text-white text-[.8rem]"
          )}
        >
          <p>Show More</p>
        </div>
      )}
    </div>
  );
};

export default ShowMoreButton;
