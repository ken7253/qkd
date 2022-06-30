import React, {ChangeEvent, useState} from "react";

const DocumentSearch:React.FC = () => {

  const [word, setWord] = useState('');

  const [link, setLink] = useState('');

  const changeHandler = (e:ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const safeText = encodeURI(e.target.value);
      console.log(word);
      setWord(safeText);
    }
  }

  return (
    <div className="document-search">
      <input type="search" onChange={(e) => changeHandler(e)}></input>
      <a href="link" target="_blank">Search</a>
      <style jsx>{`
        .document-search {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 25px 0;
        }
        a {
          text-decoration: none;
          border: solid 1px #333;
          padding: 4px 24px;
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default DocumentSearch;
