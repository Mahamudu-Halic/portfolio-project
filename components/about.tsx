import Link from "next/link";

const About = () => {
  return (
    <section className="border-t border-gray-500 lg:py-30 py-10" id="about">
      <div className="container flex justify-between flex-col lg:flex-row gap-6">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold font-bebas-neue flex-1">
          About <span className="text-green-400">Me</span>
        </h2>
        <div className="flex-1 space-y-5">
          <h4 className="text-base lg:text-lg">
            I am a <span className="text-green-400">front-end</span> developer based in Ghana. Has Computer Science
            background.{" "}
          </h4>
          <p className="text-gray-400  mb-10 text-sm lg:text-base">
            I am a <span className="text-green-400">front-end</span> developer based in Ghana looking for exciting
            opportunities. Has Computer Science background. Likes to focus on
            accessibility when developing. Passionate and curious about solving
            problems. Currently, I’m exploring Reactjs, Nextjs and a bit of
            Nodejs. While I am not programming, I enjoy playing games, reading
            and watching anime. Learning more to improve skill.
          </p>
          <Link
            href="/about"
            className="text-green-400 border-b border-green-400 uppercase py-2 text-sm lg:text-base"
          >
            More about me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
