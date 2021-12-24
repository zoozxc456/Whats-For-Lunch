/* Import Modules */
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "./AuthRouter";
/* Import CSSs */

/* Import Components */
import IndexPage from './components/IndexPage/IndexPage';
import HomePage from "./components/HomePage/HomePage";
import OrderPage from "./components/OrderPage/OrderPage";
import AdministratorPage from "./components/AdministratorPage/AdministratorPage";
function App() {



  return (
    <div className="App">
      <Router>
        <Switch>
        <AuthRoute path="/Administrator" Permission="admin">
            <AdministratorPage />
        </AuthRoute>

          <AuthRoute path="/Order" Permission="member">
            <OrderPage />
          </AuthRoute>

          <AuthRoute path="/Home" Permission="member">
            <HomePage />
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
