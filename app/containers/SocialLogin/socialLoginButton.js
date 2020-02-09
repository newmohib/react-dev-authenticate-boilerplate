import React, { Component } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebook, FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import  {googleClientId,facebookAppid}  from "../../config";
import CustomSocialButton from './customSocialButton'
import './socialLogin.css';

class SocialLoginButton extends Component {
    state = {};
    onSuccessGoogle = () => {
        console.log('success');
    };

    render() {
        const githubDeployPath = process.env.GITHUB_DEPLOY_PATH ? process.env.GITHUB_DEPLOY_PATH : '';
        console.log(process.env.GOOGLE_CLIENTID);
        const { loginSuccess, loginFailure } = this.props;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {/* <div className="col-6 col-lg-6 col-md-6 ">

                    <GoogleLogin
                        clientId={googleClientId}
                        buttonText="Signin With"
                        onSuccess={loginSuccess}
                        onFailure={loginFailure}
                        cookiePolicy="single_host_origin"
                    />
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 ">

                    <FacebookLogin
                        appId={facebookAppid}
                        autoLoad={false}
                        textButton="Signin With"
                        cssClass="kep-login-facebook"
                        fields="name,email,picture"
                        //onClick={this.onSuccessGoogle}
                        callback={loginSuccess}
                        size="small"
                        icon={<FaFacebook size="25px" style={{ marginRight: '5px', color: '#4c69ba' }} />}
                    />
                    </div> */}
                    <div className="col-6 col-lg-6 col-md-6 ">

                    <NavLink className="btn btn-light text-center mx-2 mt-1" to={`${githubDeployPath}/signup`}>Sign Up</NavLink>
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 ">

                    <NavLink className="btn btn-light text-center mx-2 mt-1" to={`${githubDeployPath}/signup`}>Forgot Password</NavLink>
                    </div>
                    {/*
                     <GoogleLogout
                        clientId="909305170958-gqfn20l33jdp39agblp9dh2t487hsi7p.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    >
                    </GoogleLogout> */}

                </div>
            </div>
        );
    }
}

export default SocialLoginButton;
