import React, { useState, useEffect } from 'react';

import { Redirect, Link } from 'react-router-dom';

import '../styles/css/loginGod.css';
import logo from '../images/logo.webp';
import TextTransition, { presets } from 'react-text-transition';

function LoginGod() {
  const [redirect, setRedirect] = useState(false);
  const [godname, setGodname] = useState('');
  //let history = useHistory();
  /*   const [input, setInput] = useState({
    login: '',
    password: '',
    email: '',
  }); */

  const onChange = (e) => {
    setGodname(e.target.value);
  };

  const signIn = () => {
    localStorage.setItem('godname', JSON.stringify(godname));
    setRedirect(true);
  };

  const TEXTS = ['See your offerings', 'Deliver them', 'Chill'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500 // every 3 seconds
    );
  }, []);

  return (
    <>
      <div className='loginGod_page'>
        <img
          className='loginGod_logo'
          src={logo}
          alt='homme invoquant les dieux autour du feu'
        />
        <h2 className='loginGod-slide-title'>
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </h2>

        <div className='formGod'>
          <input
            placeholder='login'
            type='text'
            id='login'
            name='login'
            value={godname}
            onChange={onChange}
            className='input'
            required
          />
          <div className='form-dataGod'>
            <button type='button' onClick={() => signIn()}>
              Manage your offerings !
            </button>
            <Link to='/' className='are_you_a_human'>
              Are you a mortal ? Make offerings
            </Link>
            {redirect && <Redirect to='/GodDelivery' />}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginGod;
