import { githubUrl, linkedinUrl, name, whatsappUrl } from "@/constants";
import { Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Whatsapp } from "./icons";

const Landing = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:justify-between lg:items-center container gap-6">
      <div className="">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-bebas-neue">
          Hi, I am <br /> {name}.
        </h1>
        <p className="text-gray-300 text-sm md:text-base  mb-6 lg:w-[500px]">
          A Ghana based front-end developer passionate about building accessible
          and user friendly websites.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href={"#contact"}
            className="rounded-full bg-gray-500 flex justify-center items-center w-12 h-12 hover:scale-110 transition-all text-green-400"
          >
            <Headphones />
          </Link>
          <Link
            href={linkedinUrl}
            target="_blank"
            className="rounded-full bg-gray-500 flex justify-center items-center w-12 h-12 hover:scale-110 transition-all"
          >
            <Linkedin />
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            className="rounded-full bg-gray-500 flex justify-center items-center w-12 h-12 hover:scale-110 transition-all"
          >
            <Github />
          </Link>
          <Link
            href={whatsappUrl}
            target="_blank"
            className="rounded-full bg-gray-500 flex justify-center items-center w-12 h-12 hover:scale-110 transition-all"
          >
            <Whatsapp />
          </Link>
        </div>
      </div>

      <div className="relative flex items-center justify-center mx-auto lg:mx-0 max-w-[500px] max-h-[500px] bg-transparent shadow-2xl shadow-green-400 rounded-full overflow-hidden">
        <Image
          src="https://i.postimg.cc/mghcBgt3/hero.png"
          alt="Hero"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Landing;
