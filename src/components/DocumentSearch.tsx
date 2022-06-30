import React, {ChangeEvent, useState} from "react";

interface Props {
  searchURL: URL | undefined;
}

const DocumentSearch:React.FC<Props> = (props: Props) => {
  const { searchURL } = props;

  const [word, setWord] = useState('');

  const link = (searchURL && word) ? `${searchURL.toString()}${word}` : undefined;

  const changeHandler = (e:ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const safeText = encodeURI(e.target.value);
      console.log(word);
      setWord(safeText);
    }
  }

  return (
    <div className="document-search">
      <input type="search" onChange={(e) => changeHandler(e)} placeholder={searchURL?.toString()} autoFocus></input>
      <a href={link} target="_blank">Search</a>
      <style jsx>{`
        .document-search {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 25px 0;
        }
        a {
          text-decoration: none;
          border: solid 1px var(--c-darker);
          padding: 4px 24px;
          color: var(--c-darker);
          opacity: .5;
        }
        a[href] {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default DocumentSearch;
