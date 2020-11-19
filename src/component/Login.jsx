import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { GGContext } from '../Context';

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
    <div className='login_page'>
      <h2>Login</h2>
      <p>
        Lockdown due to Covid - -532 prevents you to make offerings ?
        GodsandGold is here for youuu
      </p>
      <div>
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
            Sign In
          </button>
          <p>{input.userText}</p>
          {redirect && <Redirect to='/ChooseGod' />}
        </div>
      </div>
    </div>
  );
}

export default Login;
