/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { NewsType } from "../mockData/singleNewsFeedType";

type Props = {
  data: NewsType;
};

const NewsCard = (props: Props) => {
  const { data } = props;

  return (
    <div className="flex justify-center items-center">
      {data.image && data.category ? (
        <div className="bg-white p-4 w-[90%] rounded-lg flex gap-4 flex-row justify-evenly">
          <div className="w-[7rem] h-full flex flex-col gap-[1rem]">
            <img
              alt={data.name}
              src={data.image.thumbnail.contentUrl}
              className="w-[5rem] h-[5rem]"
            />
            <p className="font-bold flex flex-col gap-2 text-[.8rem]">
              {data.category}
              <span className="text-[.5rem] text-start">
                ... Click for article
              </span>
            </p>
          </div>

          <p className="text-[.7rem] w-[95%]">
            {data.name.substring(0, 80)}...
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default NewsCard;
