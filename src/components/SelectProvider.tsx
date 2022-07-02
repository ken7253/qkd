import React, { ChangeEvent, useState, useEffect } from "react";

type providerList = Provider[];

interface Provider {
  name: string,
  displayName?: string,
  baseURL: string,
  query: string | 'q=',
  color?: string,
};

interface Props {
  onChangeProvider?: (select: URL | undefined) => void;
}

const SelectProvider:React.FC<Props> = (props:Props) => {
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

  const { onChangeProvider } = props;

  const URL_SCHEMA = 'https://' as const;
  const COOKIE_NAME = 'selectedProvider' as const;
  const getDefaultProvider = ():string | undefined => {
    const rawCookie = document.cookie;
    return rawCookie.split('; ').find(row => row.startsWith(COOKIE_NAME))?.split('=')[1];
  }

  const [current, setCurrent] = useState<URL>(new URL(`${URL_SCHEMA}${providerList[0].baseURL}?${providerList[0].query}`));
  const [provider, setProvider] = useState(getDefaultProvider() || providerList[0].name);

  const changeHandler = (e:ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const item = providerList.find((value) => {
        if (e.target instanceof HTMLInputElement) {
          return value.name === e.target.value;
        }
      })

      if (!item) return;
      const absolute = new URL(`${URL_SCHEMA}${item.baseURL}?${item.query}`);
      setProvider(item.name);
      setCurrent(absolute);
      if (onChangeProvider) { onChangeProvider(absolute) };
    }
  }

  useEffect(() => {
    if (onChangeProvider) onChangeProvider(current);

    return (() => { if (onChangeProvider) onChangeProvider(undefined)})
  }, []);

  useEffect(() => {
    /** @todo Retains side effects and should be considered for modification. */
    document.cookie = `${COOKIE_NAME}=${provider}`;
  }, [provider])

  return (
    <div className="select-provider">
      {providerList.map((item) => {
        return (
          <label key={item.name}>
            <input type="radio" name="provider" value={item.name} defaultChecked={item.name === provider} onChange={changeHandler}></input>
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
          min-height: 30px;
          min-width: 80px;
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
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: var(--c-theme-light);
          border-radius: 5px;
          font-weight: 700;
          background-color: var(--c-theme-main);
        }
        input:checked + span {
          background-color: var(--c-theme-dark);
          color: var(--c-theme-light);
        }
      `}</style>
    </div>
  );
}

export default SelectProvider;
