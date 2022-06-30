import React, {useState} from "react";

const DocumentSearch:React.FC = () => {

  const [word, setWord] = useState('');

  return (
    <div className="document-search">
      <input type="search" onChange={(e) => {setWord(e.target.value)}}></input>
      <button>Search</button>
      <style jsx>{`
        .document-search {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 25px 0;
        }
        button {
          appearance: none;
        }
      `}</style>
    </div>
  );
}

export default DocumentSearch;
