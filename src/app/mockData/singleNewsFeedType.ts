export const singleFeedType = {
  _type: "NewsArticle",
  name: "Founder of bankrupt crypto lender Celsius must face NY fraud lawsuit",
  url: "https://www.msn.com/en-us/money/companies/founder-of-bankrupt-crypto-lender-celsius-must-face-ny-fraud-lawsuit/ar-AA1eOyx3",
  image: {
    _type: "ImageObject",
    thumbnail: {
      _type: "ImageObject",
      contentUrl:
        "https://www.bing.com/th?id=OVFT.qxTZr-syk2UWcOzgK3E7oy&pid=News",
      width: 700,
      height: 366,
    },
  },
  description:
    "Alex Mashinsky, the founder and former chief of the now-bankrupt cryptocurrency lender Celsius Network, must face a lawsuit by New York Attorney General Letitia James accusing him of civil fraud, a Manhattan state court judge ruled on Friday.",
  about: [
    {
      _type: "Thing",
      readLink:
        "https://api.cognitive.microsoft.com/api/v7/entities/caeb7b9a-f5d7-4686-8fb5-cf7628296b13",
      name: "New York",
    },
    {
      _type: "Thing",
      readLink:
        "https://api.cognitive.microsoft.com/api/v7/entities/9f417f89-9a37-e0d0-912e-99dccfb8982d",
      name: "Reuters",
    },
  ],
  mentions: [
    {
      _type: "Thing",
      name: "New York",
    },
    {
      _type: "Thing",
      name: "Reuters",
    },
    {
      _type: "Thing",
      name: "Supreme Court of the United States",
    },
  ],
  provider: [
    {
      _type: "Organization",
      name: "Reuters on MSN.com",
      image: {
        _type: "ImageObject",
        thumbnail: {
          _type: "ImageObject",
          contentUrl:
            "https://www.bing.com/th?id=ODF.jFXbg3L7Ce_1pS4_IOR8CA&pid=news",
        },
      },
    },
  ],
  datePublished: "2023-08-04T23:43:59.0000000Z",
  category: "Business",
};

export type NewsType = typeof singleFeedType;
