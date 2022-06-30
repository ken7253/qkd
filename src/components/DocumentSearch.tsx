import React, {useState} from "react";

const DocumentSearch:React.FC = () => {

  const [word, setWord] = useState('');

  return (
    <>
      <input type="search" onChange={(e) => {setWord(e.target.value)}}></input>
      <button>検索</button>
    </>
  );
}

export default DocumentSearch;
