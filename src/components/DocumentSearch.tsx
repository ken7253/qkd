import React, { ChangeEvent, useState } from 'react';

interface Props {
  searchURL: URL | undefined;
}

const DocumentSearch: React.FC<Props> = (props: Props) => {
  const { searchURL } = props;

  const [word, setWord] = useState('');

  const link = searchURL && word ? `${searchURL.toString()}${word}` : undefined;

  const changeHandler = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const safeText = encodeURI(e.target.value);
      console.log(word);
      setWord(safeText);
    }
  };

  return (
    <div className="document-search">
      <input type="search" onChange={(e) => changeHandler(e)} autoFocus></input>
      <a href={link} target="_blank" rel="noreferrer">
        Search
      </a>
      <style jsx>{`
        .document-search {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin: 25px 0;
        }
        input[type='search'] {
          grid-column: 1 / 3;
          border-radius: 100vh;
          border: solid 2px var(--c-dark);
          padding: 8px 16px;
          font-size: 1rem;
        }
        a {
          grid-column: 3 / 4;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          border: solid 2px var(--c-theme-dark);
          background-color: var(--c-theme-main);
          color: var(--c-theme-light);
          padding: 4px 24px;
          opacity: 0.5;
          border-radius: 100vh;
        }
        a[href] {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default DocumentSearch;
