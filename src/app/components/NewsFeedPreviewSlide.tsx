import React, { useEffect, useState } from "react";
import { broadCryptoNews } from "../fetchApi/newsFetch";
import { singleFeedType, NewsType } from "../mockData/singleNewsFeedType";
import { newsCardMockType } from "../mockData/fullNewsData";
import NewsCard from "./NewsCard";
import Link from "next/link";

type Props = {};

const NewsFeedPreviewSlide = (props: Props) => {
  const [newsFeed, setNewsFeed] = useState<NewsType[]>();
  useEffect(() => {
    broadCryptoNews().then((data) => setNewsFeed(data));
  }, []);

  // const newsFeed: NewsType[] = previewDataFeed;

  if (newsFeed !== undefined) {
    const slicedFeed: NewsType[] = newsFeed.filter((data) => data.image);

    return (
      <div className="bg-slate-200 rounded-md flex flex-col gap-2 justify-center items-center py-4  md:h-full md:p-4">
        <div className="flex justify-center items-center flex-col gap-3 md:bg-gray-300  md:h-[25rem] md:rounded-xl md:w-full">
          <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
            Crypto News
          </h2>
          <p className="text-[.8rem] w-[90%] text-center md:w-[50%]">
            Stay up-to-date with the latest developments and trends in the
            cryptocurrency world through our comprehensive and reliable crypto
            news site.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          {slicedFeed.map((data: NewsType, index) => {
            return (
              <Link
                href={data.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard data={data} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        role="status"
        className="flex justify-center items-center w-full h-full"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
};

export default NewsFeedPreviewSlide;
