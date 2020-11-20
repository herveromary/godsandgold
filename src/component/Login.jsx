import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import '../styles/css/login.css';
import logo from '../images/logo.webp';

function Login() {
  const [redirect, setRedirect] = useState(false);
  let history = useHistory();
  /*   const [input, setInput] = useState({
    login: '',
    password: '',
    email: '',
  }); */

  const onChange = (e) => {
    setUser(e.target.value);
  };

  const signIn = () => {
    localStorage.setItem('user', JSON.stringify(input));
    setRedirect(true);
  };

  return (
    <>
      <div className='login_page'>
        <img
          className='login_logo'
          src={logo}
          alt='homme invoquant les dieux autour du feu'
        />
        <h2 className='login_title'>GodsandGold</h2>
        <p className='login_app_description'>
          Can't make offerings because of lockdown amid Covid-546 B.C. ? We got
          you covered ! LogIn, offer, relax... Dieu vous le rendra.
        </p>
        <div className='form'>
          <input
            placeholder='login'
            type='text'
            id='login'
            name='login'
            value={user}
            onChange={onChange}
            className='input'
            required
          />
          <div className='form-data'>
            <button type='button' onClick={() => signIn()}>
              Make an offering !
            </button>
            <p className='are_you_a_god'>Are you a God ? Upgrade to Pro plan</p>
            {redirect && <Redirect to='/ChooseGod' />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
