import React, { Component, PropTypes } from 'react'
import s from './User.scss'
import Profile from 'components/Profile'
import Navbar from 'components/Navigation/Navbar'
import Background from 'components/Background'

class User extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render () {
    return (
      <div>
        <Background />
        <Navbar />
        <div className={s.container}>
          <div className={s.container_left}>
            <Profile />
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default User
