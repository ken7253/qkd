import React, { ChangeEvent, useState } from "react";

type providerList = Provider[];

interface Provider {
  name: string,
  displayName?: string,
  baseURL: string,
  query: string | 'q=',
  color?: string,
};

const SelectProvider:React.FC = () => {
  const URL_SCHEMA = 'https://';

  const providerList:providerList = [
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

  const [provider, setProvider] = useState(providerList[0].name);
  const [url, setURL] = useState<URL>();

  const changeHandler = (e:ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const current = e.target.value;
      setProvider(current);
      const item = providerList.find((value) => {
        if (e.target instanceof HTMLInputElement) {
          return value.name === e.target.value;
        }
      })
      if (!item) return;
      const absolute = new URL(`${URL_SCHEMA}${item.baseURL}&${item.query}`);
      setURL(absolute);
    }
  }

  return (
    <div className="select-provider">
      {providerList.map((item, index) => {
        return (
          <label key={item.name}>
            <input type="radio" name="provider" value={item.name} defaultChecked={index === 0} onChange={changeHandler}></input>
            <span>{item.displayName || item.name}</span>
          </label>
        )
      })}
      <style jsx>{`
        .select-provider {
          width: 100%;
          display: flex;
          justify-content: space-around;
          gap: 8px;
          margin: 25px 0;
        }
        label {
          position: relative;
          padding: 4px 24px;
          border: solid 1px #333;
          background-color: #fff;
        }
        input {
          position: absolute;
          display: block;
          margin: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
          z-index: -1;
        }
        input:checked + span {
          color: red;
        }
      `}</style>
    </div>
  );
}

export default SelectProvider;
