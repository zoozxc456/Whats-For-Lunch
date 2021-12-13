import logo from './logo.svg';
import './App.css';
import LoginService from'./services/Login/LoginService'
import GoogleLogin from 'react-google-login';
function App() {

  const googleClientID="705353102436-2ske0a0p7pgjh71ms5nadjdgn6mi8h2p.apps.googleusercontent.com";

  return (
    <div className="App">
      <GoogleLogin
          clientId={googleClientID}
          buttonText="使用 Google 登入"
          onSuccess={LoginService.responseGoogleLoginSuccess}
          onFailure={LoginService.responseGoogleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      <button onClick={LoginService.login} >click me</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
