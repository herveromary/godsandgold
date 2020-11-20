import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { GGContext } from '../Context';
import Topbar from '../Reusable/Topbar';
import '../styles/css/login.css';
import logo from '../images/logo_GodsAndGold.png';
import { Redirect, Link } from 'react-router-dom';
import '../styles/css/login.css';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
  'Choose Your God',
  'Make your request',
  'Make an offering',
  'wishes come true!',
];

function Login() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
  }, []);

  const [user, setUser] = useState();
  const [redirect, setRedirect] = useState(false);
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

  return (
    <>
      {/* <Topbar /> */}
      <div className='login_page'>
        <img className='login_logo' src={logo} />
        <h3 className='login_app_description'>
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </h3>
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
            <Link to='LoginGod' className='are_you_a_god'>
              Are you a God ? Upgrade to Pro plan
            </Link>
            {redirect && <Redirect to='/ChooseGod' />}
            <p className='are_you_a_god'>Are you a God ? Upgrade to Pro plan</p>
            {redirect && <Redirect to='/ChooseGod' />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
