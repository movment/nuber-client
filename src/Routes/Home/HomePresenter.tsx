import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from 'react-sidebar';
import styled from '../../typed-components';
import Menu from '../../Components/Menu';

const Container = styled.div``;

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  loading: boolean;
}

const HomePresenter: React.SFC<IProps> = ({
  isMenuOpen,
  toggleMenu,
  loading,
}) => {
  return (
    <Container>
      <Helmet>
        <title>Home | Nuber</title>
      </Helmet>
      <Sidebar
        sidebar={<Menu />}
        open={isMenuOpen}
        onSetOpen={toggleMenu}
        styles={{
          sidebar: {
            width: '80%',
            background: 'white',
            zIndex: '10',
          },
        }}
      >
        {!loading && <button onClick={toggleMenu}>Open Sidebar</button>}
      </Sidebar>
    </Container>
  );
};

export default HomePresenter;
