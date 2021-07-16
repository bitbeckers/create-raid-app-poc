import React from 'react';

import './footer.scss';

export interface FooterProps {
  children?: {};
}

export const Footer: React.FC<FooterProps> = ({ children }) => (
  <footer className='storybook-footer'>
    <div>{children}</div>
  </footer>
);
