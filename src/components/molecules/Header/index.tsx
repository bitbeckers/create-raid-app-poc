import React from 'react';

import { Button } from '../../atoms/Button';
import './header.scss';

export interface HeaderProps {
  children?: any;
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  user,
  onLogin,
  onLogout,
}) => (
  <header>
    <div className='wrapper'>
      {children}
      <div>
        {user ? (
          <Button size='large' onClick={onLogout} label='Log out' primary />
        ) : (
          <Button size='large' onClick={onLogin} label='Log in' primary />
        )}
      </div>
    </div>
  </header>
);
