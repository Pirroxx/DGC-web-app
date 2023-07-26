import React, { useEffect, useState, useRef } from "react";
import "./ScrollSequence.css";
import LoadingBar from "../LoadingBar/LoadingBar";
import Header from "../Header/Header";

const ScrollSequence = () => {
  const startImage = 10000;
  const [endImage, setEndImage] = useState(11626);
  const pictureCount = endImage - startImage + 1;
  const scrollResolution = 23;
  const batchSize = 50;
  const maxImageIndex = 11626; // Replace this with the actual maximum index for your images

  const [currentImage, setCurrentImage] = useState(startImage);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const isScrolling = useRef(false);

  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const getImageSrc = (imageIndex) => {
    if (isMobileDevice()) {
      return `https://rurdimntxnyqvbtlagsj.supabase.co/storage/v1/object/public/phone-photos/Comp_${imageIndex}.webp`;
    } else {
      return `https://rurdimntxnyqvbtlagsj.supabase.co/storage/v1/object/public/phone/Comp_${imageIndex}.webp`;
    }
  };

  useEffect(() => {
    const preloadImages = async () => {
      let loadedImagesCount = 0;
      let lastUpdateTime = Date.now();
      const n = 25;
      const x = 300;
      let batchIndex = 0;

      const onLoad = () => {
        loadedImagesCount++;
        if (loadedImagesCount % n === 0 || Date.now() - lastUpdateTime > x) {
          const progress = (loadedImagesCount / pictureCount) * 1000;
          setLoadingProgress(progress);
          lastUpdateTime = Date.now();
        }

        if (loadedImagesCount === pictureCount) {
          setIsLoading(false);
        } else if (loadedImagesCount === (batchIndex + 1) * batchSize) {
          batchIndex++;
          loadNextBatch();
        }
      };

      const loadNextBatch = () => {
        const start = startImage + batchIndex * batchSize;
        const end = Math.min(
          startImage + (batchIndex + 1) * batchSize,
          endImage + 1
        );

        for (let i = start; i < end; i++) {
          const img = new Image();
          const imageIndex = i;
          img.src = getImageSrc(imageIndex);
          img.onload = onLoad;
        }
      };

      loadNextBatch();
    };

    preloadImages();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  const updateImage = () => {
    const imageIndex = Math.floor(window.scrollY / scrollResolution);

    if (imageIndex + startImage <= maxImageIndex) {
      setEndImage(startImage + imageIndex + 100);
      setCurrentImage(startImage + imageIndex);
      isScrolling.current = false;
    }

    // If scrolling up and at the beginning of the sequence, reset to initial values
    if (imageIndex + startImage === startImage && startImage !== 10000) {
      setEndImage(11626);
      setCurrentImage(10000);
      isScrolling.current = false;
    }
  };

  const handleScroll = () => {
    if (endImage < 11627) {
      if (!isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(() => {
          updateImage();
          isScrolling.current = false;
        });
      }
    }
  };

  useEffect(() => {
    if (endImage < 11627) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const containerHeight = 24 * pictureCount;

  console.log(containerHeight);

  return (
    <div className="fresh" style={{ height: `${38000}px` }}>
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
                src={getImageSrc(imageIndex)}
                className={`animated ${i === 0 ? "active" : ""}`}
                alt="scrollsequence"
              />
            );
          })}
          {currentImage >= 10330 && currentImage <= 10560 && (
            <div className="border-container">
              <div
                className={`border ${currentImage === 10560 ? "fade-in" : ""}`}
              ></div>
              <a href="#utilities">Go to Utilities</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScrollSequence;
