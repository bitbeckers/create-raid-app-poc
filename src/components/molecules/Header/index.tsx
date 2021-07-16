import React from 'react';

import { Button } from '../../atoms/Button';
import logo from '../../../assets/swords-black-mid.svg';
import './header.scss';

export interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <header>
    <div className='wrapper'>
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <div>
        {user ? (
          <Button size='small' onClick={onLogout} label='Log out' />
        ) : (
          <>
            <Button size='small' onClick={onLogin} label='Log in' />
            <Button
              primary
              size='small'
              onClick={onCreateAccount}
              label='Sign up'
            />
          </>
        )}
      </div>
    </div>
  </header>
);
