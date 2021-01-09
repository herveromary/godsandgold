import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import "../styles/css/login.css";
import logo from "../images/logo_GodsAndGold.png";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Choose Your God",
  "Make your request",
  "Make an offering",
  "Wishes come true!",
];

function Login() {
  const [user, setUser] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
  }, []);

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
    console.log("ok");
    const u = {
      login: user,
      password: "123456",
      email: "default@email.com",
    };
    axios.post("http://localhost:3000/api/users", u).then((data) => {
      axios
        .get(`http://localhost:3000/api/users/by_name/${user}`)
        .then((response) =>
          localStorage.setItem("user", JSON.stringify(response.data))
        );
    });
    setRedirect(true);
  };

  return (
    <div className="login_page">
      <img className="login_logo" src={logo} />
      <div className="desktop-flexbox-text-and-form">
        <h3 className="login_app_description">
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
            noOverflow={true}
          />
        </h3>

        <div className="form">
          <input
            placeholder="login"
            type="text"
            id="login"
            name="login"
            value={user}
            onChange={onChange}
            className="input"
            required
          />
          <div className="form-data">
            <button type="button" onClick={() => signIn()}>
              Make an offering !
            </button>
            <p className="are_you_a_god">Are you a God ? Upgrade to Pro plan</p>
            {redirect && <Redirect to="/ChooseGod" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
