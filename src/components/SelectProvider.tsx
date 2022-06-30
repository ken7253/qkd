import React from "react";

type providerList = Provider[];

interface Provider {
  name: string,
  baseURL: string,
  query: string | 'q=',
};

const SelectProvider:React.FC = () => {
  const provider:providerList = [
    {
      name: 'mdn',
      baseURL: 'developer.mozilla.org/ja/search',
      query: 'q=',
    },
    {
      name: 'zenn',
      baseURL: 'zenn.dev/search',
      query: 'q=',
    },
    {
      name: 'qiita',
      baseURL: 'qiita.com/search',
      query: 'q='
    }
  ];

  return (
    <>
      {provider.map((item) => {
        return <input type="radio" name="provider" key={item.name} value={item.name}></input>
      })}
      <style jsx>{``}</style>
    </>
  );
}

export default SelectProvider;
