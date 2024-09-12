import React from "react";
import BullsEyeImg from "../assets/Emojis/bulls-eye.webp";
import MehImg from "../assets/Emojis/meh.webp";
import ThumbsUpImg from "../assets/Emojis/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: MehImg, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUpImg, alt: "Recommended", boxSize: "25px" },
    5: { src: BullsEyeImg, alt: "Exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
