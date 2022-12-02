import React, { useState } from 'react';
import DocumentSearch from './DocumentSearch';
import SelectProvider from './SelectProvider';
import Settings from './Settings';
import cookie from '../util/cookie';

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

  const defaultURL = providerList[0].baseURL;
  const lastSelect = cookie.parse(document.cookie).URL;
  const [searchURL, setSearchURL] = useState(lastSelect ?? defaultURL);

  const changeHandler = (url: string) => {
    setSearchURL(url);
  };

  return (
    <main>
      <DocumentSearch href={searchURL} />
      <SelectProvider
        items={providerList}
        url={searchURL}
        update={changeHandler}
      />
      <Settings items={providerList}></Settings>
    </main>
  );
};

export default Contents;
