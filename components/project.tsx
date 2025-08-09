import Image from "next/image";
import Link from "next/link";
import { ArrowDiagonal, Github } from "./icons";
import InfoCard from "./info-card";

interface ProjectProps {
  name: string;
  description: string;
  year: string;
  role: string;
  image: string;
  githubLink?: string;
  client?: string;
  deployedLink?: string;
}

const Project = ({
  name,
  description,
  year,
  role,
  image,
  githubLink,
  client,
  deployedLink,
}: ProjectProps) => {
  return (
    <div className="flex gap-6 justify-between lg:items-center lg:flex-row flex-col">
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className="object-cover rounded-2xl w-full h-full"
        />
      </div>
      <div className="space-y-4 flex-1">
        <h3 className="text-lg lg:text-xl font-medium">{name}</h3>
        <p className="text-gray-300 text-sm lg:text-base">{description}</p>

        <InfoCard title="Project Info" className="!text-base lg:!text-lg text-gray-200" />
        {client && <InfoCard title="Client" description={client} />}
        <InfoCard title="Year" description={year} />
        <InfoCard title="Role" description={role} />

        {(deployedLink || githubLink) && (
          <div className="">
            {deployedLink && (
              <Link
                href={deployedLink}
                target="_blank"
                className="flex items-center gap-2 text-green-400 border-b border-green-400 w-fit py-2 text-sm lg:text-base"
              >
                View Project <ArrowDiagonal />
              </Link>
            )}
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                className="flex items-center gap-2 text-green-400 border-b border-green-400 w-fit py-2 text-sm lg:text-base"
              >
                See on Github <Github width={24} height={24} />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
