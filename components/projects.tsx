import { projects } from "@/constants";
import Link from "next/link";
import Project from "./project";

const Projects = () => {
  return (
    <section id="work" className="space-y-10 container">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bebas-neue">
          Featured Projects
        </h2>
        <p className="text-gray-300  lg:w-[500px]">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      <div className="space-y-20">
        {projects.slice(0, 3).map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
      <Link href="/projects" className="text-green-400">
        See all projects
      </Link>
    </section>
  );
};

export default Projects;
