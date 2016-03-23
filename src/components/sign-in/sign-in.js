import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'core/auth';


export class SignIn extends Component {
  render() {
    const {
      signInWithGoogle,
    } = this.props;

    return (
      <div className="g-row sign-in">
        <div className="g-col">
          <h1 className="sign-in__heading">Sign in</h1>
          <button className="sign-in__button" onClick={signInWithGoogle} type="button">Google</button>
        </div>
      </div>
    );
  }
}

export default connect(null, authActions)(SignIn);
