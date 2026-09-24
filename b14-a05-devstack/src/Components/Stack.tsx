import StackIcon from "tech-stack-icons";

interface StackProps {
  stack: any[];
  removeFromStack: (name: string) => void;
  removeAllFromStack: () => void;
}

const Stack = ({
  stack,
  removeFromStack,
  removeAllFromStack,
}: StackProps) => {

  
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mt-12">
     <h2 className="text-center text-2xl font-bold text-gray-900 lg:text-left">
  Your Stack
</h2>
<p className="mt-2 text-center text-sm text-gray-500 lg:text-left">
  {stack.length} {stack.length === 1 ? "Technology" : "Technology"} Selected
</p>
      {stack.length === 0 ? (
        <div className="mt-6 flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-gray-300">
          <p className="text-sm text-gray-400">
            No technologies added yet
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {stack.map((technology) => (

            <div
              key={technology.name}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
            >
              {/* Left side */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                  <StackIcon
                    name={technology.icon}
                    variant="light"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Cross button */}
              <button
                onClick={() => removeFromStack(technology.name)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-xl text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}
          <button
  onClick={removeAllFromStack}
  className="mt-5 w-full rounded-lg border border-red-200  py-2.5 text-xs font-semibold text-red-500 "
>
  Remove All
</button>
        </div>
      )}
    </div>
  );
};

export default Stack;