import React from 'react';

import SocialLoginPresenter from './SocialLoginPresenter';
import { Mutation } from 'react-apollo';
import { facebookConnect, facebookConnectVariables } from '../../types/api';
import { FACEBOOK_CONNECT } from './SocialLoginQueries';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LOG_USER_IN } from '../../sharedQueries';

class LoginMutation extends Mutation<
  facebookConnect,
  facebookConnectVariables
> {}

interface IState {
  firstName: string;
  lastName: string;
  email?: string;
  fbId: string;
}
interface IProps extends RouteComponentProps<any> {}

class SocialLoginContainer extends React.Component<IProps, IState> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    fbId: '',
  };
  public facebookMutation;
  public render() {
    return (
      <Mutation mutation={LOG_USER_IN}>
        {(logUserIn) => {
          return (
            <LoginMutation
              mutation={FACEBOOK_CONNECT}
              onCompleted={(data) => {
                const { FacebookConnect } = data;
                if (FacebookConnect.ok) {
                  if (FacebookConnect.token) {
                    logUserIn({
                      variables: {
                        token: FacebookConnect.token,
                      },
                    });
                  }
                } else {
                  toast.error(FacebookConnect.error);
                }
              }}
            >
              {(facebookMutation, { loading }) => {
                this.facebookMutation = facebookMutation;
                return (
                  <SocialLoginPresenter loginCallback={this.loginCallback} />
                );
              }}
            </LoginMutation>
          );
        }}
      </Mutation>
    );
  }
  public loginCallback = (response) => {
    const { name, first_name, last_name, email, id } = response;
    if (response.accessToken) {
      toast.success(`Welcome ${name}!`);
      this.facebookMutation({
        firstName: first_name,
        lastName: last_name,
        email,
        fbId: id,
      });
    } else {
      toast.error('Could not log you in ');
    }
  };
}

export default SocialLoginContainer;
