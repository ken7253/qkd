import React, { useState } from 'react';
import DocumentSearch from './DocumentSearch';
import SelectProvider from './SelectProvider';

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
      </main>
      <style jsx>{`
        main {
          padding: 0 var(--l-safe-padding);
        }
      `}</style>
    </>
  );
};

export default Contents;
