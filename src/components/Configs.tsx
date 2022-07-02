import React from 'react';
import providerList from '../util/providerList';
import ToggleMenu from './ToggleMenu';

const Configs: React.FC = () => {
  const providerName = providerList.map((provider) => provider.name);
  const defaultProviderList = ['keepCurrent', ...providerName];

  return (
    <ToggleMenu heading="設定">
      <label>
        デフォルトの検索サイト
        <select>
          {defaultProviderList.map((value) => {
            return (
              <option value={value} key={value}>
                {value === 'keepCurrent' ? '変更を維持' : value}
              </option>
            );
          })}
        </select>
      </label>
    </ToggleMenu>
  );
};

export default Configs;
