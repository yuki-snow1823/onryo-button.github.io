"use client";

import Image from "next/image";
import { basePath } from "../next.config";
import { useState } from "react";

const BASE_PATH = basePath ? basePath : "";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [soundImage, setSoundImage] = useState(`${BASE_PATH}/sound-on.svg`);
  const [selectedImage, setSelectedImage] = useState(``);
  const [displayText, setDisplayText] = useState("");

  const handleSoundClick = () => {
    if (!showImage) {
      const images = [
        { src: `${BASE_PATH}/ouryo.png`, text: "横領" },
        { src: `${BASE_PATH}/touryo.png`, text: "棟梁" },
        { src: `${BASE_PATH}/onryo.png`, text: "怨霊" },
        { src: `${BASE_PATH}/inryo.png`, text: "飲料" },
        { src: `${BASE_PATH}/genryo.png`, text: "原料" },
        { src: `${BASE_PATH}/diet.png`, text: "減量" },
      ];
      const randomSelection = images[Math.floor(Math.random() * images.length)];
      setSelectedImage(randomSelection.src);
      setDisplayText(randomSelection.text);
    }

    setShowImage(!showImage);
    if (!showText) {
      setShowText(true);
    }
    setSoundImage(showImage ? `${BASE_PATH}/sound-on.svg` : `${BASE_PATH}/sound-off.svg`);
  };

  const imageStyle = {
    opacity: showImage ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const textStyle = {
    opacity: showText ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const postToTwitter = () => {
    const text = `あなたは ${displayText} ボタンを押しました。`;
    const url = window.location.href;
    const hashtags = "怨霊ボタン";

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black" style={{ height: '100vh' }}>
      <div className="mt-3 mb-10 " style={{ width: 200, height: 300 }}>
        <Image
          src={selectedImage}
          alt="Random Image"
          width={200}
          height={200}
          className="rounded"
          style={imageStyle}
        />
      </div>

      <div className="mt-5 cursor-pointer" onClick={handleSoundClick}>
        <Image
          src={soundImage}
          alt="怨霊ボタン"
          width={200}
          height={200}
          className="rounded"
          priority
        />
      </div>

      <div
        style={{
          ...textStyle,
          width: 300,
          height: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showText && (
          <div className="text-center">
            <p className="text-white mb-3">あなたは {displayText} ボタンを押しました。</p>
            <button
              onClick={postToTwitter}
              className="text-center p-4 bg-white text-black rounded shadow-lg"
            >
              Xにポストしてあげる
            </button>
          </div>
        )}
      </div>

      <footer className="text-white text-center">
        created by <a className='text-red-800' href="https://twitter.com/yuki82511988">ほりゆう</a>
      </footer>
    </div>
  );
}
