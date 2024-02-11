// components/MyLoader.tsx
import React from "react";
import ContentLoader from "react-content-loader";

export const Skalete = () => {

    return(
        <div className="bg-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="absolute top-[20px]">
          <ContentLoader
            width={900}
            height={300}
            viewBox="0 0 900 300"
            backgroundColor="#e8d0ff"
            foregroundColor="#ffffff"
          >
            <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <circle cx="20" cy="20" r="20" />
          </ContentLoader>
        </div>
        <div className="absolute top-[150px]">
          <ContentLoader
            height="500"
            width="1000"
            viewBox="0 0 265 230"
            backgroundColor="#e8d0ff"
            foregroundColor="#ffffff"
          >
            <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
            <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
            <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
            <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
          </ContentLoader>
        </div>
      </div>
    )
};
