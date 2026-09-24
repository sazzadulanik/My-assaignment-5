const Banner = () => {
  return (
    <section className="bg-white">
    <div className="container mx-auto px-6 py-16">
     <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="px-4 lg:px-8 text-center lg:text-left">
         <h1 className="text-5xl font-bold leading-tight text-gray-900">
           Build Your Ideal{" "}
         <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
               Development Stack
         </span>
            </h1>

        <p className="mt-8 mb-6 text-lg leading-8 text-gray-600">
             Explore frontend, backend, database, and tooling options,
             compare them side by side, and build the stack that fits your
             next project.
        </p>

     <div className="flex justify-center gap-6 lg:justify-start">
       <button className="rounded-lg bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 font-semibold text-white">
           Explore Technologies
      </button>

       <button className="rounded-lg border border-gray-400 px-6 py-3 font-semibold text-black">
               Learn More
       </button>

            </div>

          </div>

          <div>
            <img src="/assets/banner-stack.png" alt="" className="mt-8 w-full lg:mt-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;