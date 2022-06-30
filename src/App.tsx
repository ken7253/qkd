import React from "react";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Contents />
      <Footer />
      <style jsx global>{`
        body {
          width: 350px;
          height: 550px;
        }
      `}</style>
    </div>
  );
}

export default App;
