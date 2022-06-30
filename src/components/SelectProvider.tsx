import React from "react";

type providerList = Provider[];

interface Provider {
  name: string,
  displayName?: string,
  baseURL: string,
  query: string | 'q=',
  color?: string,
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
        return (
          <label key={item.name}>
            <input type="radio" name="provider" value={item.name}></input>
            {item.displayName || item.name}
          </label>
        )
      })}
      <style jsx>{``}</style>
    </>
  );
}

export default SelectProvider;
