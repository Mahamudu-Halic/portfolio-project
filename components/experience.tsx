import { experiences } from "@/constants";

const Experience = () => {
  return (
    <section className="border-t border-gray-500">
      <div className="container flex flex-col lg:flex-row justify-between gap-4 !py-10">
        <h3 className="font-bebas-neue text-3xl md:text-5xl lg:text-7xl font-bold flex-1">
          Experience
        </h3>
        <div className="flex-1 space-y-15">
          {experiences.map((experience) => (
            <div
              key={`${experience.name}-${crypto.randomUUID()}`}
              className="space-y-5"
            >
              <div className="flex justify-between lg:items-center gap-2 flex-col lg:flex-row">
                <h4 className="text-base md:text-lg lg:text-xl">
                  {experience.name}
                </h4>

                <p className="text-sm lg:text-base text-gray-400">
                  {experience?.startYear} - {experience?.endYear}
                </p>
              </div>

              <div className="flex gap-2 flex-wrap">
                {experience.company && (
                  <p className="text-sm text-green-400 px-4 py-2 border border-green-400 rounded-full w-fit">
                    {experience.company}
                  </p>
                )}
                {experience.jobType && (
                  <p className="text-sm text-gray-400 px-4 py-2 border border-gray-400 rounded-full w-fit">
                    {experience.jobType}
                  </p>
                )}
              </div>
              <p className="text-gray-400 text-sm lg:text-base">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
