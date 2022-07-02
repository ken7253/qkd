import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/ken7253/qkd"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ken7253/qkd/issues"
            target="_blank"
            rel="noreferrer"
          >
            Issue
          </a>
        </li>
      </ul>
      <small>© ken7253</small>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-left: var(--l-safe-padding);
          padding-right: var(--l-safe-padding);
          padding-bottom: 5px;
          background-color: var(--c-theme-dark);
          color: var(--c-theme-light);
        }
        ul {
          display: flex;
          gap: 8px;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: inherit;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
