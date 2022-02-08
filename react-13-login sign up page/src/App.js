import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setIsSignUp(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const signUpHandler = () => {
    setIsSignUp(false);
    setIsLoggedIn(false);
  };

  const headerLoginHandler = () => {
    setIsLoggedIn(false);
    setIsSignUp(false);
  };

  const headerSignUpHandler = () => {
    setIsSignUp(true);
  };

  return (
    <React.Fragment>
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={headerLoginHandler}
        onSignUp={headerSignUpHandler}
        onLogout={logoutHandler}
      />
      <main>
        {!isSignUp && isLoggedIn && <Home onLogout={logoutHandler} />}
        {!isSignUp && !isLoggedIn && (
          <Login onLogin={loginHandler} onLogout={logoutHandler} />
        )}
        {isSignUp && <SignUp onSignUp={signUpHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
