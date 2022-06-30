import React from "react";

const DocumentSearch:React.FC = () => {
  return (
    <>
      <input type="search"></input>
      <p className="test">test</p>
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </>
  );
}

export default DocumentSearch;
