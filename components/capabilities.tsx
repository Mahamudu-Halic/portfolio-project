import { capabilities } from "@/constants";

const Capabilities = () => {
  return (
    <section className="container !py-30 flex justify-between flex-col lg:flex-row gap-4">
      <h3 className="font-bebas-neue text-3xl md:text-5xl lg:text-7xl flex-1 font-bold">
        My Capabilities
      </h3>

      <div className="flex-1 space-y-5">
        <p className="text-gray-400">I am always looking to add more skills</p>

        <div className="flex flex-wrap gap-2">
          {capabilities.map((capability) => (
            <p
              key={capability.name}
              className="uppercase text-sm px-4 py-2 border-2 border-gray-500 rounded-full"
            >
              {capability.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
