import React from "react";

const App: React.FC = () => {
  return (
    <>
      <p>test</p>
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
