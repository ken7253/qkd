import React, { ChangeEvent, useState, useEffect } from 'react';
import { type ProviderList } from './Contents';

interface Props {
  url: string;
  items: ProviderList;
  update: (url: string) => void;
}

const SelectProvider: React.FC<Props> = (props: Props) => {
  const [queryURL, setQueryURL] = useState(props.url);

  useEffect(() => {
    document.cookie = `URL=${queryURL}`;
    props.update(queryURL);
  }, [queryURL]);

  const changeHandler = (e: ChangeEvent) => {
    const element = e.target;
    if (!(element instanceof HTMLInputElement)) return;
    setQueryURL(element.value);
  };

  return (
    <div className="select-provider">
      {props.items.map((item) => {
        return (
          <label key={item.name}>
            <input
              type="radio"
              name="provider"
              value={item.baseURL}
              defaultChecked={props.url === item.baseURL}
              onChange={changeHandler}
            ></input>
            <span>{item.displayName || item.name}</span>
          </label>
        );
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
};

export default SelectProvider;
