import { createContext } from "react";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const arrayData = [
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
    {
      name: "Michaels",
      description: "Deal on Creaative Tech",
      img: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/69109fce-715a-443d-bcb7-2ba67e581473.png&w=3840&q=75",
    },
  ];
  return (
    <DataContext.Provider value={{ arrayData }}>
      {children}
    </DataContext.Provider>
  );
};
