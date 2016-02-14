import React from 'react';
import {connect} from 'react-redux';
import {routeActions} from 'react-router-redux';

export function requireAuthentication (Component) {
  class AuthenticatedComponent extends React.Component {

        componentWillMount () {
          this.checkAuth();
        }

        componentWillReceiveProps (nextProps) {
          this.checkAuth();
        }

        checkAuth () {
          if (!this.props.authenticated) {
            // let redirectAfterLogin = this.props.location.pathname;
            this.props.dispatch(routeActions.push('/login'));
          }
        }

        render () {
          return (
                <div>
                    {this.props.authenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )
        }
    }

  const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated
  });

  AuthenticatedComponent.propTypes = {
    authenticated: React.PropTypes.bool.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }
  AuthenticatedComponent.defaultProps = {
    authenticated: false
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
}
