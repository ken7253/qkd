import React, { ChangeEvent, useEffect, useState } from 'react';
import DocumentSearch from './DocumentSearch';
import SelectProvider from './SelectProvider';
import Settings from './Settings';

export type ProviderList = Provider[];

interface Provider {
  name: string;
  displayName?: string;
  baseURL: `https://${string}`;
  query: string;
  color?: `#${string}`;
}

const Contents = () => {
  const providerList = [
    {
      name: 'MDN' as const,
      baseURL: 'https://developer.mozilla.org/ja/search' as const,
      query: 'q=',
    },
    {
      name: 'Zenn' as const,
      baseURL: 'https://zenn.dev/search' as const,
      query: 'q=',
    },
    {
      name: 'Qiita' as const,
      baseURL: 'https://qiita.com/search' as const,
      query: 'q=',
    },
  ] satisfies ProviderList;

  const { storage } = chrome;
  const fallbackURL = providerList[0].baseURL;
  const [searchURL, setSearchURL] = useState<string>(fallbackURL);

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
      <Settings items={providerList}></Settings>
    </main>
  );
};

export default Contents;
