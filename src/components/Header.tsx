import React from "react";

const Header:React.FC = () => {
  return(
    <header>
      <img src="/img/icon.svg" alt="" height="48" width="48" />
      <h1>Quick Docs</h1>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          width: 100%;
          padding-left: var(--l-safe-padding);
          padding-right: var(--l-safe-padding);
          background-color: var(--c-theme-main);
          color: var(--c-theme-light);
        }
        img {
          max-height: 100%;
          width: auto;
        }
        h1 {
          padding-left: 8px;
          font-weight: 400;
        }
      `}</style>
    </header>
  )
}

export default Header;
