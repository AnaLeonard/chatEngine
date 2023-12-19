import axios from 'axios';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.username;

    axios.post(
      'http://localhost:3001/authenticate',
      { username: value }
    )
      .then((response) => props.onAuth({ ...response.data, secret: value }))
      .catch((error) => console.log('error', error));
  };

  return (
    <div className="background">

<img id="pic1" src="/h.jpeg" alt="Welcome Image" />
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome to Chat.AI</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" id="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
