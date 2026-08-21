function Auth({ isSignedIn, setIsSignedIn }) {
  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="card auth-card">
      <div className="card-icon">
        
      </div>

      {isSignedIn ? (
        <>
          <h2>Welcome Home!</h2>

          <p className="card-description">
            You have successfully signed in.
          </p>

          <div className="user-status">
            <span className="status-dot"></span>
            Signed In
          </div>

          <button className="btn signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h2>Welcome Back!</h2>

          <p className="card-description">
            Sign in to continue to your account.
          </p>

          <div className="user-status">
            <span className="status-dot offline"></span>
            Signed Out
          </div>

          <button className="btn signin" onClick={handleSignIn}>
            Sign In
          </button>
        </>
      )}
    </div>
  );
}

export default Auth;