import React, { useState } from 'react';
import DocumentSearch from './DocumentSearch';
import SelectProvider from './SelectProvider';
import Configs from './Configs';

const Contents = () => {
  const [url, setURL] = useState<URL | undefined>();

  const getURL = (select: URL | undefined) => {
    setURL(select);
  };

  return (
    <>
      <main>
        <DocumentSearch searchURL={url} />
        <SelectProvider onChangeProvider={getURL} />
        <Configs />
      </main>
      <style jsx>{`
        main {
          padding: 10px var(--l-safe-padding);
        }
      `}</style>
    </>
  );
};

export default Contents;
