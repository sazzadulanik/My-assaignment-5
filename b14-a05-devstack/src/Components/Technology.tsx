import StackIcon from "tech-stack-icons";
import technologies from "../data.json";

const Technology = () => {
  return (
    <section>
      <div className="container mx-auto px-5">

        <div>
          <h2 className="text-3xl font-bold">
            Explore the{" "}
            <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-gray-500 ">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="mt-8">
       </div>
       
    </div>
     


      <div className="container mx-auto px-5">

        <div className="grid grid-cols-3 gap-5">

     {technologies.map((technology) => (

      <div key={technology.name}
       className="rounded-xl border border-gray-200 p-4">
        
     <div className="flex items-center justify-between">
      <div className="flex flex-col items-center">

       <StackIcon name={technology.icon as any}
       className="h-12 w-12" />
        <h3 className="mt-3 font-semibold">
           {technology.name} </h3>
          
        </div>

          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
          {technology.badge}  </span>

          </div>
            <p className="mt-3 text-xs text-gray-500">
                {technology.description} </p> 
            
               
              <div className="mt-3 flex justify-between text-xs text-gray-500">
                <span>{technology.category}</span>
                <span>{technology.level}</span>
                <span>★{technology.rating}</span>
              </div>
       
 <button className="mt-3 w-full rounded-md bg-[#101828] py-2 text-xs text-white">
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