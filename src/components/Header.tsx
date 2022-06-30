import React from "react";

const Header:React.FC = () => {
  return(
    <header>
      <h1>Quick Docs</h1>
      <style jsx>{`
        header {
          width: 100%;
          padding-left: var(--l-safe-padding);
          padding-right: var(--l-safe-padding);
          background-color: var(--c-theme-main);
          color: var(--c-theme-light);
        }
      `}</style>
    </header>
  )
}

export default Header;
