import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import HomePresenter from './HomePresenter';
import { Query } from 'react-apollo';
import { userProfile } from '../../types/api';
import { USER_PROFILE } from '../../sharedQueries';

interface IProps extends RouteComponentProps {}
interface IState {
  isMenuOpen: boolean;
}

class ProfileQuery extends Query<userProfile> {}

class HomeContainer extends Component<IProps, IState> {
  public state = {
    isMenuOpen: false,
  };
  public render() {
    const { isMenuOpen } = this.state;
    return (
      <ProfileQuery query={USER_PROFILE}>
        {({ loading }) => {
          return (
            <HomePresenter
              isMenuOpen={isMenuOpen}
              toggleMenu={this.toggleMenu}
              loading={loading}
            />
          );
        }}
      </ProfileQuery>
    );
  }
  public toggleMenu = () => {
    this.setState((state) => {
      return {
        isMenuOpen: !state.isMenuOpen,
      };
    });
  };
}

export default HomeContainer;
