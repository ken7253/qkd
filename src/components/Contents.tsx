import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import DocumentSearch from './DocumentSearch';
import SelectProvider from './SelectProvider';

export type ProviderList = Provider[];

interface Provider {
  name: string;
  displayName?: string;
  baseURL: string;
  query: string | 'q=';
  color?: string;
}

const Contents = () => {
  const providerList: ProviderList = [
    {
      name: 'mdn',
      baseURL: 'https://developer.mozilla.org/ja/search',
      query: 'q=',
    },
    {
      name: 'zenn',
      baseURL: 'https://zenn.dev/search',
      query: 'q=',
    },
    {
      name: 'qiita',
      baseURL: 'https://qiita.com/search',
      query: 'q=',
    },
  ];

  const { storage } = chrome;
  const fallbackURL = providerList[0].baseURL;
  const [searchURL, setSearchURL] = useState(fallbackURL);

  const providerUpdateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchURL(value);
  };

  useEffect(() => {
    void storage.local.set({
      lastSelectURL: searchURL,
    });
  }, [searchURL]);

  return (
    <main>
      <DocumentSearch href={searchURL} />
      <SelectProvider
        provider={providerList}
        selected={searchURL}
        onUpdatedProvider={providerUpdateHandler}
      />
    </main>
  );
};

export default Contents;
