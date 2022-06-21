import { useState } from "react";
import classes from "./ExampleImage.module.css";

const ExampleImage = () => {
  const images = [
    "https://img.freepik.com/free-vector/pink-pixel-heart-isolated_1308-67237.jpg?t=st=1655820676~exp=1655821276~hmac=e06764e162577d47c70700546ebf368a448b4a178dae3ec812deae87efdc9797&w=996",
    "https://img.freepik.com/free-vector/8-bit-pixel-carrot-kawaii-vegetables-game-assets-vector-illustration_614713-328.jpg?w=740",
    "https://img.freepik.com/free-vector/8-bit-pixel-sushi-foods-pixel-game-assets-cross-stitch-patterns-vector-illustrations_614713-888.jpg?w=740",
    "https://img.freepik.com/free-vector/8-bit-pixel-taxi-car-pixel-vector-illustration-game-assets-cross-stitch-pattern_614713-892.jpg?w=740",
    "https://static.vecteezy.com/system/resources/previews/007/721/094/large_2x/target-with-arrow-on-point-achievement-pixel-art-8-bit-icon-illustration-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/270/535/large_2x/retro-coffee-cup-8-bit-pixel-concept-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/006/942/145/large_2x/8-bit-pixel-logo-yin-yang-in-illustrations-for-game-assets-or-cross-stitch-patterns-vector.jpg",
  ];

  const randomNumber = () => Math.floor(Math.random() * images.length);

  const [showImage, setShowImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(randomNumber());
  const [buttonText, setButtonText] = useState("Inspire yourself! 🔥 ");

  const handleImageShuffle = () => {
    setShowImage(true);
    setButtonText("Reshuffle 🔀")
    setImageIndex(randomNumber())
  };

  return (
    <div className={classes.imageContainer}>
      <button className={classes.button} onClick={handleImageShuffle}>{buttonText}</button>
      {showImage && (
        <img
          className={classes.image}
          src={images[imageIndex]}
          alt={"Template"}
        />
      )}
    </div>
  );
};

export default ExampleImage;
