import React from 'react';
import s from './Login.scss';
import { connect } from 'react-redux';
import { logIn } from '../../redux/modules/auth';
import { NoAccount } from './Same';

class LoginForm extends React.Component {
  invalidLogin () {
    this.login.focus();
  }
  invalidPassword () {
    this.password.value = '';
    this.password.focus();
  }
  logIn () {
    if (this.login.value === '') {
      return this.invalidLogin();
    }
    if (this.password.value === '') {
      return this.invalidPassword();
    }
    this.props.logIn(this.login.value, this.password.value);
  }
  render () {
    return (
      <div>
        <div className={s.loginFormContainer}>
          <div className={s.logotype}></div>
          <div className={s.titleAction}>Войдите, чтобы узнать, что думают от Вас ваши друзья.</div>
          <div className='input--container'>
            <input className='input--form input--block' placeholder='Имя пользователя'
                    ref={(r) => this.login = r}/>
          </div>
          <div className='input--container'>
            <input className='input--form input--block' placeholder='Пароль' type='password'
                    ref={(r) => this.password = r}/>
          </div>
          <button
            className='button button--register button--block button--container'
            onClick={ () => this.logIn()}
            disabled={this.props.isFetching.status}>Войти
          </button>
          {this.props.isFetching.message && (
            <div className={s.errorMessage}>
              {this.props.isFetching.message}
            </div>
          )}
        </div>
        <NoAccount/>
      </div>
    )
  }
};

LoginForm.propTypes = {
  isFetching: React.PropTypes.object.isRequired,
  logIn: React.PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching.logIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (login, password) => dispatch(logIn(login, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
