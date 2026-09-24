import { useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/banner";
import Technology from "./Components/Technology";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [stack, setStack] = useState<any[]>([]);

 const addToStack = (technology: any) => {
  const alreadyAdded = stack.some(
    (item) => item.name === technology.name
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack((prevStack) => [...prevStack, technology]);

  toast.success(`${technology.name} added to your Stack!`);
};

const removeFromStack = (name: string) => {
  setStack((prevStack) =>
    prevStack.filter((item) => item.name !== name)
  );

  toast.info(`${name} removed from your Stack!`);
};

  const removeAllFromStack = () => {
  setStack([]);

  toast.info("All technologies removed from your Stack!");
};

  return (
    <>
      <Nav />
      <Banner />

      <section className="py-16">
        <div className="container mx-auto px-5">
        <div className="flex flex-col gap-8 lg:flex-row">
            {/* Technology */}
           <div className="w-full lg:w-[72%]">
              <Technology
                addToStack={addToStack}
                stack={stack}
              />
            </div>

            {/* Your Stack */}
          <div className="mt-0 w-full lg:mt-10 lg:w-[28%]">
              <Stack
                stack={stack}
                removeFromStack={removeFromStack}
                removeAllFromStack={removeAllFromStack}
              />
            </div>

          </div>
        </div>
      </section>
<Footer />

<ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;