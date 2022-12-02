import React, { ChangeEvent, useState } from 'react';

interface Props {
  href: string;
}

const DocumentSearch: React.FC<Props> = (props: Props) => {
  const { href } = props;

  const [word, setWord] = useState('');

  const link = href && word ? `${href}?q=${word}` : undefined;

  const changeHandler = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const safeText = encodeURI(e.target.value);
    setWord(safeText);
  };

  return (
    <div className="document-search">
      <input type="search" onChange={(e) => changeHandler(e)} autoFocus></input>
      <a href={link} target="_blank" rel="noreferrer">
        Search
      </a>
      <style jsx>{`
        .document-search {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 25px 0;
        }
        a {
          text-decoration: none;
          border: solid 2px var(--c-theme-dark);
          background-color: var(--c-theme-main);
          color: var(--c-theme-light);
          padding: 4px 24px;
          opacity: 0.5;
        }
        a[href] {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default DocumentSearch;
