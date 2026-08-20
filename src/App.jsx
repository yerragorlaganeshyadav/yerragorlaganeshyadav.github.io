import React, { useState, useEffect } from "react";
import "./styles.css";
import Portfolio from "./components/Portfolio";
import GaneshDeepikaWedding from "./components/GaneshDeepikaWedding";

const App = () => {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname + window.location.hash + window.location.search
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(
        window.location.pathname + window.location.hash + window.location.search
      );
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const isWeddingRoute =
    currentPath.toLowerCase().includes("ganesh") ||
    currentPath.includes("Ganesh&Deepika") ||
    currentPath.includes("Ganesh%26Deepika");

  if (isWeddingRoute) {
    return (
      <div className="w-full">
        <GaneshDeepikaWedding />
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {/* Portfolio view */}
      <Portfolio />

      {/* Direct Link Banner to Wedding Invitation */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="/Ganesh&Deepika"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, "", "/Ganesh&Deepika");
            setCurrentPath("/Ganesh&Deepika");
          }}
          className="bg-[#4A0E17] text-white border-2 border-[#D4AF37] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-xl hover:bg-[#6b1422] transition flex items-center gap-2"
        >
          <span>💍 Ganesh & Deepika Wedding Invitation</span>
        </a>
      </div>
    </div>
  );
};

export default App;
