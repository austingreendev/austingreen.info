import React from 'react';

const PageHeader = ({ children }) => (
  <div
    css={`
      background-color: #8ee4af;
      padding: 40px;
    `}
  >
    {children}
  </div>
);

export default PageHeader;
