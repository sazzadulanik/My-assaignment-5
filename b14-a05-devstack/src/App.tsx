import { useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/banner";
import Technology from "./Components/Technology";
import Stack from "./Components/Stack";

function App() {
  const [stack, setStack] = useState<any[]>([]);

  const addToStack = (technology: any) => {
    setStack((prevStack) => {
      const alreadyAdded = prevStack.some(
        (item) => item.name === technology.name
      );

      if (alreadyAdded) {
        return prevStack;
      }

      return [...prevStack, technology];
    });
  };

  const removeFromStack = (name: string) => {
    setStack((prevStack) =>
      prevStack.filter((item) => item.name !== name)
    );
  };

  const removeAllFromStack = () => {
  setStack([]);
};

  return (
    <>
      <Nav />
      <Banner />

      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="flex items-start gap-8">

            {/* Technology */}
            <div className="w-[72%]">
              <Technology
                addToStack={addToStack}
                stack={stack}
              />
            </div>

            {/* Your Stack */}
            <div className="mt-10 w-[28%]">
              <Stack
                stack={stack}
                removeFromStack={removeFromStack}
                removeAllFromStack={removeAllFromStack}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;