import React, { ChangeEvent } from 'react';
import { type ProviderList } from './Contents';

interface Props {
  selected: string;
  provider: ProviderList;
  onUpdatedProvider: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SelectProvider: React.FC<Props> = (props: Props) => {
  const { onUpdatedProvider, provider, selected } = props;

  return (
    <div className="select-provider">
      {provider.map((item) => {
        return (
          <label key={item.name}>
            <input
              type="radio"
              name="provider"
              value={item.baseURL}
              defaultChecked={item.baseURL === selected}
              onChange={onUpdatedProvider}
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
          color: var(--c-lightest);
          border-radius: 5px;
          font-weight: 700;
          background-color: var(--c-theme-main);
        }
        input:checked + span::before {
          content: '✔';
          padding-right: 4px;
        }
        input:checked + span {
          background-color: var(--c-theme-dark);
        }
      `}</style>
    </div>
  );
};

export default SelectProvider;
