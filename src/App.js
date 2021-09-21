import './App.css';
import Header from './Header';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />

      <Switch>

        <Route path="/" exact={true} className="App"
          render={routerProps => (
            <HomePage {...routerProps} />
          )}
        />

        <Route path="/about" exact={true}
          render={routerProps => (
            <AboutPage {...routerProps} />
          )}
        />

        <Redirect to="/" />

      </Switch>
    </>
  );
}

export default App;
