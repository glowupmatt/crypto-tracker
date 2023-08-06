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
    <div className="flex justify-center items-center md:h-[11rem]">
      <div className="bg-white p-4 w-[90%] rounded-lg flex gap-4 flex-row justify-evenly">
        {data.image ? (
          <div className="w-[7rem] h-[50%] flex flex-col gap-[1rem]">
            <img
              alt={data.name}
              src={data.image.thumbnail.contentUrl}
              className="w-[5rem] h-[5rem]"
            />
            <p className="font-bold flex flex-col gap-2 text-[.8rem]">
              {data.category ? data.category : null}
              <span className="text-[.5rem] text-start">
                ... Click for article
              </span>
            </p>
          </div>
        ) : (
          <div className="w-[7rem] h-[50%] flex flex-col gap-[1rem]">
            <div className="w-[5rem] h-[5rem] bg-gray-300 animate-pulse flex justify-center items-center">
              <p className="text-[.5rem] text-center self-center">
                IMG missing
              </p>
            </div>

            <p className="font-bold flex flex-col gap-2 text-[.8rem]">
              {data.category ? data.category : null}
              <span className="text-[.5rem] text-start">
                ... Click for article
              </span>
            </p>
          </div>
        )}
        <p className="text-[.7rem] w-[95%] lg:hidden">
          {data.name.substring(0, 80)}...
        </p>
        <div className="hidden lg:flex flex-col gap-3 w-full">
          <p className="text-[.7rem] w-[95%] lg:block lg:font-bold">
            {data.name}
          </p>
          <p className="text-[.7rem] w-[95%] lg:block">
            {data.description.substring(0, 80)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
