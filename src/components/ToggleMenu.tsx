import React, { ReactElement } from 'react';

interface Props {
  heading: string;
  children: ReactElement;
}

const ToggleMenu: React.FC<Props> = (props: Props) => {
  const { children, heading } = props;

  return (
    <>
      <details>
        <summary className="title">
          <span>{heading}</span>
        </summary>
        <div className="content">{children}</div>
      </details>
      <style jsx>{`
        .title {
          display: grid;
          grid-template-columns: max-content max-content auto;
          gap: 8px;
          align-items: center;
          color: var(--c-theme-dark);
        }
        .title span {
          display: block;
        }
        .title::before {
          content: '▼';
          transform: rotate(-90deg);
          transition: transform 250ms ease;
        }
        details[open] .title::before {
          transform: rotate(0);
          transition: transform 250ms ease;
        }
        .title::after {
          content: '';
          height: 2px;
          border-radius: 100vh;
          background-color: var(--c-theme-main);
        }
        .content {
          margin: 16px 0;
        }
      `}</style>
    </>
  );
};

export default ToggleMenu;
