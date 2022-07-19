/* Import Modules */
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "./AuthRouter";
/* Import CSSs */

/* Import Components */
import IndexPage from './components/Pages/IndexPage/IndexPage';
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage/RegisterPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import OrderPage from "./components/Pages/OrderPage/OrderPage";
import AdministratorPage from "./components/Pages/AdministratorPage/AdministratorPage";

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
          <AuthRoute path="/Order" Permission="user">
            <OrderPage />
          </AuthRoute>

          <AuthRoute path="/Home" Permission="user">
            <HomePage />
          </AuthRoute>

          {/* Below Route For Guest */}
          <AuthRoute path="/Login" Permission="guest">
            <LoginPage />
          </AuthRoute>

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
