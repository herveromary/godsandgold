import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { GGContext } from '../Context';
import Topbar from '../Reusable/Topbar';
import '../styles/css/login.css';
import logo from '../images/logo.webp';

function Login() {
  const [user, setUser] = useContext(GGContext);
  const [redirect, setRedirect] = useState(false);
  const [input, setInput] = useState({
    login: '',
    password: '',
    email: '',
  });

  const onChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  //console.log(input);

  const signIn = () => {
    setUser({ input });
    //     axios
    //       .get(`https://hookspendables.herokuapp.com/api/users/`, {user.login})
    //       .then((response) => response.data)
    //       .then((data) => data.filter((user) => user.login) === input.login)
    //       //   .then((data) => data.filter((user) => console.log(user.login)))
    //       .then((data) => setUser(data[0]));
    //     //   .then(() => setRedirect(false));
  };

  console.log('user', user);

  return (
    <>
      {/* <Topbar /> */}
      <div className='login_page'>
        <img className='login_logo' src={logo} />
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
            onChange={onChange}
            value={input.login}
            className='input'
            required
          />
          <div className='form-data'>
            <button type='button' onClick={() => signIn()}>
              Make an offering !
            </button>
            <p className='are_you_a_god'>Are you a God ? Upgrade to Pro plan</p>
            <p>{input.userText}</p>
            {redirect && <Redirect to='/ChooseGod' />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
