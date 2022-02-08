import classes from './Header.module.css';

const Header = props => {
  return (
    <header>
      <h1>Login/Sign Up Application</h1>
      <div className={classes.actions}>
        {!props.isLoggedIn && <button onClick={props.onLogin}>Login</button>}
        {!props.isLoggedIn && <button onClick={props.onSignUp}>Sign up</button>}
        {props.isLoggedIn && <button onClick={props.onLogout}>Logout</button>}
      </div>
    </header>
  );
};

export default Header;
