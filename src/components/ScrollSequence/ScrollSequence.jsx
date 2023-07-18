import React, { useEffect, useState, useRef } from "react";
import "./ScrollSequence.css";
import LoadingBar from "../LoadingBar/LoadingBar";
import Header from "../Header/Header";
import { throttle } from "lodash"; 

const ScrollSequence = () => {
  const startImage = 10000;
  const endImage = 11627;
  const pictureCount = endImage - startImage + 1;
  const scrollResolution = 23;

  const [currentImage, setCurrentImage] = useState(startImage);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const scrollPosition = useRef(window.scrollY);
  const requestId = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const preloadImages = async () => {
      let loadedImagesCount = 0;
      let lastUpdateTime = Date.now();
      const n = 25;
      const x = 300;

      const onLoad = () => {
        loadedImagesCount++;
        if (loadedImagesCount % n === 0 || Date.now() - lastUpdateTime > x) {
          const progress = (loadedImagesCount / pictureCount) * 1000;
          setLoadingProgress(progress);
          lastUpdateTime = Date.now();
        }

        if (loadedImagesCount === pictureCount) {
          setIsLoading(false);
        }
      };

      for (let i = 0; i < pictureCount; i++) {
        const img = new Image();
        const imageIndex = startImage + i;
        img.src = `https://rurdimntxnyqvbtlagsj.supabase.co/storage/v1/object/public/photo/Comp_${imageIndex}.webp`;
        img.onload = onLoad;
      }
    };

    preloadImages();

    const updateImage = () => {
      const imageIndex = Math.floor(scrollPosition.current / scrollResolution);
      setCurrentImage(startImage + imageIndex);
      isScrolling.current = false;
    };

    const handleScroll = throttle(() => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        scrollPosition.current = window.scrollY;
        requestId.current = requestAnimationFrame(updateImage);
      }
    }, 35); 



    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  const containerHeight = 24 * pictureCount;

  return (
    <div className="fresh" style={{ height: `${containerHeight}px` }}>
      {isLoading ? (
        <LoadingBar style={{ width: `${loadingProgress}%` }} />
      ) : (
        <div className="container">
          <Header />
          {Array.from({ length: 2 }, (_, i) => {
          const imageIndex = currentImage + i;
          return (
           <img
              key={i}
              src={`https://rurdimntxnyqvbtlagsj.supabase.co/storage/v1/object/public/photo/Comp_${imageIndex}.webp`}
              className={`animated ${
               i === 0 ? "active" : ""
              }`}
             alt="scrollsequence"
             />
          );
         })}

        </div>
      )}
    </div>
  );
};

export default ScrollSequence;
