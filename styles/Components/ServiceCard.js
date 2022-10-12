import React from "react";
import Image from "next/image";
import Text from "../../public/Text.png";

export default function ServiceCard() {
  return (
    <div>
      <div className="text-center p-10 rounded-lg py-10 shadow-xl">
        <Image src={Text} width={200} height={200} />
        <h3 className="text-3xl font-medium py-10">Design</h3>
        <p className="py-4">
          I think that beautiful and simple design is the key to turn user stay
          longer and convert.
        </p>
        <h3 className="text-2xl py-3 text-[#2980B9]">Design tools I use:</h3>
        <p className="text-gray-800">Photoshop</p>
        <p className="text-gray-800">Illustrator</p>
        <p className="text-gray-800">Figma</p>
        <p className="text-gray-800">Adobe XD</p>
        <p className="text-gray-800">Zeplin</p>
        <p className="text-gray-800">Canva</p>
      </div>
    </div>
  );
}
