import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate =useNavigate();

  const users = [
    { email: 'bibcodes@gmail.com', password: 'ibrahim' },
    { email: 'ibrahim@gmail.com', password: 'khaliel' }
  ];

  function loginCheck(e) {
    e.preventDefault(); 
    const found = users.find(user => user.email === email && user.password === password);
    if (found) {
      navigate('/home')
    } else {
      alert('User not found');
    }
  }

  return (
    <main id="loginPage">
      <form id="loginForm">
        <h1 className="loginh1">Welcome back Login</h1>
        <div className="loginDetails">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="loginEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="loginPassword"
            placeholder="Password"
            value={ password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={loginCheck}>Login</button>
          <p>OR</p>
          <Link to='/signup'><button type="button">SignUp</button></Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
