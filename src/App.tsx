import React from "react";
import DocumentSearch from "./components/DocumentSearch";
import SelectProvider from "./components/SelectProvider";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <DocumentSearch></DocumentSearch>
      <SelectProvider></SelectProvider>
      <Footer></Footer>
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
