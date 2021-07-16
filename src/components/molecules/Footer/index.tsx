import React from 'react';

import './footer.scss';

export interface FooterProps {
  children?: {};
}

export const Footer: React.FC<FooterProps> = ({ children }) => (
  <footer>
    <div className='wrapper'>{children}</div>
  </footer>
);
