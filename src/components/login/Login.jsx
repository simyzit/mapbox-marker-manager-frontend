import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import facebookIcon from '@iconify/icons-mdi/facebook'
import googleIcon from '@iconify/icons-mdi/google'
import twitterIcon from '@iconify/icons-mdi/twitter'
import './form.css'

function Login(props){
	return (
		<form action="/" className="form_login">
			<div className="form_login_header">
				<h2>Login</h2>
				<div className="social">
					<a href="#" className="google"><InlineIcon icon={googleIcon} className="info-icon" /></a>
					<a href="#" className="fb"><InlineIcon icon={facebookIcon} className="info-icon" /></a>
					<a href="#" className="cat"><InlineIcon icon={twitterIcon} className="info-icon" /></a>
				</div>
			</div>
			<div className="form_login_body">
				<input name="email" placeholder="Your E-Mail" />
				<input name="password"placeholder="Your password" />
				<div className="remember">
					<input name="remeber" id="remember" type="checkbox" />
					<label htmlFor="remember">Remember me</label>
				</div>
				<input type="submit" />
			</div>
			<div className="form_login_footer">
				Don't have an account? <a href="#">Sign up</a>
			</div>
		</form>
	)
}

export default Login