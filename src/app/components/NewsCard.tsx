/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

type Props = {
  data: {
    source: {
      id: string | null;
      name: string | null;
    };
    author: string | null;
    title: string | null;
    description: string;
    url: string | null;
    urlToImage: string | null;
    publishedAt: string | null;
    content: string | null;
  };
};

const NewsCard = (props: Props) => {
  const { data } = props;
  return (
    <div className="flex justify-center items-center">
      {data.urlToImage && data.title ? (
        <div className="bg-white p-4 w-[90%] rounded-lg flex gap-4 flex-col">
          <img
            alt={data.title}
            src={data.urlToImage}
            className="w-full h-full"
          />
          <p className="font-bold flex flex-col gap-2 text-[.8rem]">
            {data.title.substring(0, 100)}
            <span className="text-[.5rem] text-right">
              ... Click for article
            </span>
          </p>
          <hr />
          <p className="text-[.7rem]">{data.description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default NewsCard;
