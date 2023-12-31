import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./ScrollSequence.css";
import LoadingBar from "../LoadingBar/LoadingBar";
import Header from "../Header/Header";
import { throttle } from "lodash";

const ScrollSequence = () => {
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  const startImage = 10000;
  const firstBatchSize = 300;
  const totalBatchSize = 600;
  const finalBatchSize = isMobileDevice() ? 925 : 1026;
  const maxImageIndex = isMobileDevice()
    ? 11525 + finalBatchSize
    : 11626 + finalBatchSize;
  const isScrolling = useRef(false);

  const [endImage, setEndImage] = useState(startImage + totalBatchSize - 1);
  const [currentImage, setCurrentImage] = useState(startImage);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showScrollMessage, setShowScrollMessage] = useState(false);
  const [showHiddenLoader, setShowHiddenLoader] = useState(false);
  const photoHeight = isMobileDevice() ? 10 : 23.6;
  const pictureCount = isMobileDevice() ? 1527 : 1627;
  const [windowHeight, setWindowHeight] = useState();

  const scrollResolution = isMobileDevice() ? 9 : 23;

  // console.log(isMobileDevice());

  useEffect(() => {
    const eventType = isMobileDevice() ? "touchmove" : "scroll";
    window.addEventListener(eventType, handleScroll, { passive: true });
    return (windowHeight) => {
      window.removeEventListener(eventType, handleScroll);
    };
  }, []);

  const handleWindowResize = () => {
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const getImageSrc = (imageIndex) => {
    if (isMobileDevice()) {
      return `https://rurdimntxnyqvbtlagsj.supabase.co/storage/v1/object/public/mobile-photos/Comp_${imageIndex}.webp`;
    } else {
      return `https://rurdimntxnyqvbtlagsj.supabase.co/storage/v1/object/public/phone/Comp_${imageIndex}.webp`;
    }
  };

  useEffect(() => {
    const preloadFirstBatch = async () => {
      let loadedImagesCount = 0;
      let lastUpdateTime = Date.now();
      const n = 25;
      const x = 300;

      const onLoad = () => {
        loadedImagesCount++;
        console.log(`Loaded image ${loadedImagesCount} of ${totalBatchSize}`);
        if (loadedImagesCount % n === 0 || Date.now() - lastUpdateTime > x) {
          const progress = isMobileDevice
            ? (loadedImagesCount / totalBatchSize) * 900
            : (loadedImagesCount / totalBatchSize) * 1000;
          setLoadingProgress(progress);
          lastUpdateTime = Date.now();
        }

        if (loadedImagesCount === firstBatchSize) {
          setShowScrollMessage(true);
          setIsLoading(false);
        }

        if (loadedImagesCount === totalBatchSize) {
          setIsLoading(false);
          setShowScrollMessage(false);
          setShowHiddenLoader(true);
        }
      };

      for (let i = startImage; i < startImage + firstBatchSize; i++) {
        const img = new Image();
        const imageIndex = i;
        img.src = getImageSrc(imageIndex);
        img.onload = onLoad;
      }
    };

    preloadFirstBatch();
  }, []);

  useEffect(() => {
    const preloadRestOfImages = async () => {
      let loadedImagesCount = firstBatchSize;
      const n = 25;
      const x = 300;
      let batchIndex = 1;
      let lastUpdateTime = Date.now();

      const onLoad = () => {
        loadedImagesCount++;
        console.log(`Loaded image ${loadedImagesCount} of ${totalBatchSize}`);
        if (loadedImagesCount % n === 0 || Date.now() - lastUpdateTime > x) {
          const progress = isMobileDevice()
            ? (loadedImagesCount / totalBatchSize) * 900
            : (loadedImagesCount / totalBatchSize) * 1000;
          setLoadingProgress(progress);
          lastUpdateTime = Date.now();
        }

        if (loadedImagesCount === totalBatchSize) {
          setIsLoading(false);
          setShowScrollMessage(false);
          setShowHiddenLoader(true);
        }
      };

      const loadNextBatch = () => {
        const start = startImage + batchIndex * firstBatchSize;
        const end = Math.min(
          startImage + (batchIndex + 1) * firstBatchSize,
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

    if (showScrollMessage) {
      preloadRestOfImages();
    }
  }, [showScrollMessage]);

  useEffect(() => {
    const preloadHiddenImages = async () => {
      const hiddenLoaderStartImage = startImage + totalBatchSize;
      let loadedHiddenImagesCount = 0;
      const n = 25;
      const x = 300;
      let lastUpdateTime = Date.now();

      const onLoadHidden = () => {
        loadedHiddenImagesCount++;
        console.log(
          `Loaded hidden image ${loadedHiddenImagesCount} of ${finalBatchSize}`
        );
        if (
          loadedHiddenImagesCount % n === 0 ||
          Date.now() - lastUpdateTime > x
        ) {
          const progress = isMobileDevice()
            ? (loadedHiddenImagesCount / totalBatchSize) * 900
            : (loadedHiddenImagesCount / totalBatchSize) * 1000;
          setLoadingProgress(progress);
          lastUpdateTime = Date.now();
        }

        if (loadedHiddenImagesCount === finalBatchSize) {
          setIsLoading(false);
        }
      };

      for (
        let i = hiddenLoaderStartImage;
        i < hiddenLoaderStartImage + finalBatchSize;
        i++
      ) {
        const img = new Image();
        const imageIndex = i;
        img.src = getImageSrc(imageIndex);
        img.onload = onLoadHidden;
      }
    };

    if (showHiddenLoader) {
      preloadHiddenImages();
    }
  }, [showHiddenLoader]);

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

    if (imageIndex + startImage === startImage && startImage !== 10000) {
      setEndImage(11626);
      setCurrentImage(10000);
      isScrolling.current = false;
    }
    if (
      isMobileDevice() &&
      imageIndex + startImage === startImage &&
      startImage !== 10000
    ) {
      setEndImage(11525);
      setCurrentImage(10000);
      isScrolling.current = false;
    }
  };

  const handleScroll = throttle(
    () => {
      if (endImage < (isMobileDevice() ? 11527 : 11627) && !showScrollMessage) {
        if (!isScrolling.current) {
          isScrolling.current = true;
          requestAnimationFrame(() => {
            updateImage();
            isScrolling.current = false;
          });
        }
      }
    },
    isMobileDevice() ? 15 : 20
  );
  useEffect(() => {
    if (endImage < (isMobileDevice() ? 11527 : 11627)) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const containerHeight = photoHeight * pictureCount;
  return (
    <div
      className="fresh"
      style={{
        height: `${containerHeight}px`,
        minHeight: windowHeight,
      }}
    >
      {isLoading ? (
        <LoadingBar style={{ width: `${loadingProgress}%` }} />
      ) : showScrollMessage ? (
        <div className="scroll-message">SCROLL FOR A BETTER EXPERIENCE</div>
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
                style={{ height: isMobileDevice() ? "100lvh" : "auto" }}
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
