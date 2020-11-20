import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import '../styles/css/login.css';
import logo from '../images/logo.webp';
import TextTransition, { presets } from 'react-text-transition';

function Login() {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState('');
  //let history = useHistory();
  /*   const [input, setInput] = useState({
    login: '',
    password: '',
    email: '',
  }); */

  const onChange = (e) => {
    setUser(e.target.value);
  };

  const signIn = () => {
    localStorage.setItem('user', JSON.stringify(user));
    setRedirect(true);
  };

  const TEXTS = [
    'Choose Your God',
    'Make your request',
    'Make an offering',
    'wishes come true!',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 3 seconds
    );
  }, []);

  return (
    <>
      <div className='login_page'>
        <img
          className='login_logo'
          src={logo}
          alt='homme invoquant les dieux autour du feu'
        />
        <h2 className='login-slide-title'>
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </h2>
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
