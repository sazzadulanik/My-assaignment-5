import StackIcon from "tech-stack-icons";
import technologies from "../data.json";

const Technology = () => {
  return (
    <section>
      <div className="container mx-auto">

        <div className="px-12 ">
          <h2 className="text-3xl font-bold">
            Explore the{" "}
            <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="   rounded-2xl border border-gray-200  p-5  transition duration-300  hover:shadow-lg">

              {/* Top */}
              <div className="flex items-start justify-between">
                <div>

                  <StackIcon
                    name={technology.icon}
                    className="h-12 w-12"/>
                  

                  <h3 className="mt-4 text-lg font-semibold">
                    {technology.name}
                  </h3>

                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-500">
                  {technology.badge}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 min-h-[60px] text-sm text-gray-500">
                {technology.description}
              </p>

              {/* Info */}
              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                <span className="rounded border border-gray-300 px-2 py-1 text-xs text-gray-600">{technology.category}</span>

                <span>{technology.level}</span>

                <span className="font-medium text-gray-700">
                  <span className="text-yellow-400">★</span> {technology.rating}
                </span>
              </div>

              {/* Button */}
              <button className="mt-5 w-full rounded-lg bg-[#101828] py-2.5 text-sm font-medium text-white transition duration-300 group-hover:bg-pink-500">
                Add to Stack
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Technology;