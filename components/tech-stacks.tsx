import { capabilities } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TechStacks = () => {
  return (
    <Marquee
      speed={50}
      pauseOnHover
    >
      {capabilities.map((capability) => (
        <div key={capability.name} className="mx-8 p-4 flex flex-col items-center gap-2">
          <div className="rounded-full bg-white p-2">
            <Image
              src={capability.image}
              alt={capability.name}
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="text-sm text-gray-400 lowercase">{capability.name}</p>
        </div>
      ))}
    </Marquee>
  );
};

export default TechStacks;
