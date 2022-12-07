import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm !== '') {
            if (location.pathname === '/search') {
              getResults(`/organicResults?query=${searchTerm}&num=10`);
            } else {
                getResults(`${location.pathname}?query=${searchTerm}&num=10`)
            }
          }
        }, [searchTerm, location.pathname]);

    if (isLoading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
                    {results?.organic_results?.map(({ title, link }, index) => (
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                            </a>
                        </div>
          ))}
                </div>);
        
        case '/images':
            return (
                <div className="flex flex-wrap justify-center items-center">
                  {results?.image_results?.map(({ image, title, link }, index) => (
                    <a href={link} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                      <img src={image} alt={title} loading="lazy" />
                      <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
                    </a>
                  ))}
                </div>
              );

        case '/videos':
         
            return (
                <div className="flex flex-wrap ">
                  {results?.video_results?.map(({ link }, index) => (
                    <div key={index} className="p-2">
                      <ReactPlayer url={link} controls width="355px" height="200px" />
                    </div>
                  ))}
                </div>
              );
    
        default:
            return 'ERROR';
    }
}