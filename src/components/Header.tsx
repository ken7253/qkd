import React from 'react';

const Header: React.FC = () => {
  const { version, name } = chrome.runtime.getManifest();

  return (
    <header>
      <img src="/img/icon.svg" alt="" height="48" width="48" />
      <h1>{name}</h1>
      <small>{version}</small>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          max-width: 100%;
          padding: 5px var(--l-safe-padding);
          background-color: var(--c-theme-main);
          color: var(--c-theme-light);
        }
        img {
          max-height: 100%;
          width: auto;
        }
        h1 {
          flex: 1 1 auto;
          padding-left: 8px;
          font-weight: 400;
          margin: 0;
        }
        small {
          align-self: flex-end;
          letter-spacing: 0.1em;
        }
      `}</style>
    </header>
  );
};

export default Header;
