import Project from "@/components/project";
import { projects } from "@/constants";

const ProjectsPage = () => {
  return (
    <section id="work" className="container space-y-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bebas-neue">
        Projects
      </h2>

      <div className="space-y-20">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
