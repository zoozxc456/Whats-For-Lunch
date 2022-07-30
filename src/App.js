/* Import Modules */
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "./AuthRouter";
/* Import CSSs */

/* Import Components */
import IndexPage from './components/Pages/IndexPage/IndexPage';
import RegisterPage from "./components/Pages/RegisterPage/RegisterPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import AccountPage from "./components/Pages/AccountPage/AccountPage"
import AdministratorPage from "./components/Pages/AdministratorPage/AdministratorPage";
import RecordPage from "./components/Pages/RecordPage/RecordPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Below Routes For Administrator */}
          <AuthRoute path="/Administrator" Permission="admin">
            <AdministratorPage />
          </AuthRoute>

          {/* Below Routes For MemberUser */}
           <AuthRoute path="/Home" Permission="user">
            {/* 首頁 */}
            <HomePage />
          </AuthRoute>

          <AuthRoute path="/Record" Permission="user">
            {/* 訂餐紀錄 */}
            <RecordPage />
          </AuthRoute>

          <AuthRoute path="/Account" Permission="user">
            {/* 我的帳戶 */}
            <AccountPage />
          </AuthRoute>

          {/* Below Route For Guest */}

          <AuthRoute path="/Register" Permission="guest">
            <RegisterPage />
          </AuthRoute>

          <AuthRoute path="/" type="Index" Permission="guest">
            <IndexPage />
          </AuthRoute>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
