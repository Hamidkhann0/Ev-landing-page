import React, { useEffect, useState } from "react";
import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";

const App = () => {
  let herodata = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [herocount, setherocount] = useState(0);
  const [playstatus, setplaystatus] = useState(false);

  useEffect(() => {
    
    const id = setInterval(() => {
      setherocount((prev) => {
        const next = (prev + 1) % herodata.length;
        return next;
      });
    }, 3000);

    return () => clearInterval(id);
  }, [herodata.length]);

  return (
    <div>
      <Background playstatus={playstatus} herocount={herocount} />
      <Navbar />
      <Hero
        setplaystatus={setplaystatus}
        playstatus={playstatus}
        herodata={herodata[herocount]}
        herocount={herocount}
        setherocount={setherocount}
      />
    </div>
  );
};

export default App;
