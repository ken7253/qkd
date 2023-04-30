import React, { ChangeEvent, useEffect, useState } from 'react';
import type { ProviderList } from './Contents';

interface Props {
  items: ProviderList;
}

const Settings: React.FC<Props> = (props: Props) => {
  const { items } = props;

  const [memory, setMemory] = useState('keep-inactive');

  const providerNameList = items.map((v) => v.name);
  const providerMemoryType = ['keep', 'keep-inactive', ...providerNameList];

  const memoryTypeDescription: { [key: string]: string } = {
    keep: '検索対象サイトを維持します',
    'keep-inactive': 'ウインドウを閉じたらリセット',
    mdn: '常時MDNを優先',
    zenn: '常時Zennを優先',
    qiita: '常時Qiitaを優先',
  };

  const changeHandler = (e: ChangeEvent) => {
    if (!(e.currentTarget instanceof HTMLSelectElement)) return;
    const { value } = e.currentTarget;
    setMemory(value);
  };

  useEffect(() => {
    const { storage } = chrome;
    void storage.sync
      .get('provider')
      .then((v) => {
        const typeCheck = typeof v.provider === 'string';
        setMemory(typeCheck ? (v.provider as string) : 'keep-inactive');
      })
      .catch(() => {
        console.error('failed read sync storage');
      });
  }, []);

  useEffect(() => {
    console.log(memory);
    const { storage } = chrome;
    void storage.sync.set({ provider: memory });
  }, [memory]);

  return (
    <div className="settings">
      <details>
        <summary className="title">
          <span>設定</span>
        </summary>
        <ul className="settings-list">
          <li className="setting-item">
            <label>
              <span>検索先サイトの保存方法</span>
              <select onChange={changeHandler} value={memory}>
                {providerMemoryType.map((name) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <span className="description">{memoryTypeDescription[memory]}</span>
          </li>
        </ul>
      </details>
      <style jsx>{`
        .settings {
          display: block;
          padding: 0 20px;
          margin: 20px 0;
        }
        .settings-list {
          list-style-type: none;
          padding: 0;
        }
        .setting-item {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .description {
          font-size: 0.5rem;
        }
        .title {
          display: grid;
          grid-template-columns: min-content auto 1fr;
          column-gap: 8px;
          background-color: var(--c-white);
        }
        .title::before {
          content: '▼';
          rotate: -90deg;
          transition: rotate 250ms ease;
        }
        .title::after {
          content: '';
          width: 100%;
          display: block;
          height: 2px;
          background-color: var(--c-theme-dark);
          align-self: center;
        }
        details[open] .title::before {
          rotate: 0deg;
          transition: rotate 250ms ease;
        }
        label {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default Settings;
