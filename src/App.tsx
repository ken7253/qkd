import React from "react";
import DocumentSearch from "./components/DocumentSearch";

const App: React.FC = () => {
  return (
    <>
      <DocumentSearch></DocumentSearch>
      <p className="test">test</p>
      <style jsx global>{`
        body {
          width: 350px;
          height: 550px;
        }
      `}</style>
    </>
  );
}

export default App;
