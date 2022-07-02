import React, { useState } from 'react';
import DocumentSearch from './DocumentSearch';
import SelectProvider from './SelectProvider';

const Contents = () => {
  const [url, setURL] = useState<URL | undefined>();

  const getURL = (select: URL | undefined) => {
    setURL(select);
  };

  return (
    <main>
      <DocumentSearch searchURL={url} />
      <SelectProvider onChangeProvider={getURL} />
    </main>
  );
};

export default Contents;
