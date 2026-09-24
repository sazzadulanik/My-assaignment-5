import StackIcon from "tech-stack-icons";
import technologies from "../data.json";
import { useEffect, useState } from "react";

interface TechnologyProps {
  addToStack: (technology: any) => void;
  stack: any[];
}

const Technology = ({ addToStack, stack }: TechnologyProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 500);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <p className="py-10 text-center text-gray-500">Loading...</p>;
}
  return (
    <div>
      <div className="mb-6 px-10">
        <h2 className="text-3xl font-bold text-center lg:text-left">
          Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Discover technologies and build your perfect tech stack.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            {/* Badge */}
            <span className="absolute right-4 top-4 rounded-full border border-pink-100 bg-pink-50 px-2.5 py-1 text-[10px] font-semibold text-pink-500">
              {technology.badge}
            </span>

            {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
  <StackIcon
    name={technology.icon}
   variant="light"
  />
</div>

            {/* Name */}
            <h3 className="mt-4 text-base font-semibold text-gray-900">
              {technology.name}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm leading-5 text-gray-500">
              {technology.description}
            </p>

            {/* Category + Rating */}
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-medium text-gray-600">
                {technology.category}
              </span>

              <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-600">
{technology.difficulty}
</span>

              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm font-semibold text-gray-700">
                  {technology.rating}
                </span>
              </div>
            </div>

            {/* Add Button */}
 <button
  onClick={() => addToStack(technology)}
  disabled={stack.some((item) => item.name === technology.name)}
  className="mt-5 w-full rounded-lg bg-[#101828] py-2.5 text-xs font-semibold text-white transition hover:bg-gray-700 disabled:bg-gray-300"
>
  {stack.some((item) => item.name === technology.name)
    ? "Added"
    : "Add to Stack"}
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;