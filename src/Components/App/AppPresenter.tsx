import React from 'react';

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => {
  return isLoggedIn ? <span>You are in</span> : <span>You are out</span>;
};

export default AppPresenter;
