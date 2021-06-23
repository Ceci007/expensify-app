import React from 'react';
import { connect } from 'react-redux';
import {
    startLoginWithGoogle
} from '../actions/auth';

export const LoginPage = ({ startLoginWithGoogle }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button className="button button--google" onClick={startLoginWithGoogle}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
    startLoginWithTwitter: () => dispatch(startLoginWithTwitter()),
    startLoginWithGithub: () => dispatch(startLoginWithGithub()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);