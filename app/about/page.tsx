import Capabilities from "@/components/capabilities";
import DownloadResumeButton from "@/components/download-resume-button";
import Experience from "@/components/experience";
import { Github, Linkedin, Whatsapp } from "@/components/icons";
import { githubUrl, linkedinUrl, whatsappUrl } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <section
        className="container flex justify-between flex-col lg:flex-row gap-6"
        id="about"
      >
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold font-bebas-neue flex-1">
          About <span className="text-green-400">Me</span>
        </h2>
        <div className="flex-1 space-y-5">
          <h3 className="text-base lg:text-lg">
            I am a <span className="text-green-400">front-end</span> developer
            based in Ghana. Has Computer Science background.{" "}
          </h3>
          <p className="text-gray-400  mb-10 text-sm lg:text-base">
            I am a <span className="text-green-400">front-end</span> developer
            based in Ghana looking for exciting opportunities. Has Computer
            Science background. Likes to focus on accessibility when developing.
            Passionate and curious about solving problems. Currently, I’m
            exploring Reactjs, Nextjs and a bit of Nodejs. While I am not
            programming, I enjoy playing games, reading and watching anime.
            Learning more to improve skill.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <DownloadResumeButton
              text="Download Resume"
              showIcon
              className="bg-green-400 text-black-100 py-2 px-4 rounded-full w-fit font-medium uppercase flex items-center gap-2 group text-sm lg:text-base hover:scale-110 transition-all"
            />

            <Link
              href={linkedinUrl}
              target="_blank"
              className="rounded-full bg-gray-500 flex justify-center items-center w-12 h-12 hover:scale-110 transition-all"
              aria-label="Linkedin"
            >
              <Linkedin />
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              className="rounded-full bg-gray-500 flex justify-center items-center w-12 h-12 hover:scale-110 transition-all"
              aria-label="Github"
              >
              <Github />
            </Link>
            <Link
              href={whatsappUrl}
              target="_blank"
              aria-label="Whatsapp"
              className="rounded-full bg-gray-500 flex justify-center items-center w-12 h-12 hover:scale-110 transition-all"
            >
              <Whatsapp />
            </Link>
          </div>
        </div>
      </section>
      <section className="container h-[500px]">
        <Image
          src="https://i.postimg.cc/9XrnSr5P/about-me.png"
          alt=""
          width={500}
          height={500}
          className="object-contain w-full h-full"
        />
      </section>

      <Capabilities />
      <Experience />
    </div>
  );
};

export default AboutPage;
