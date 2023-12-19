import axios from 'axios';
import hImage from './assets/hi.gif';
import { useState } from 'react';
import Calendar from 'react-calendar';



const AuthPage = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
      <div className="intro">
        <p >Hello! This is Ana Leonardo.</p>
        <p>This is my final project for CMP 464.</p>
        <p>I was inspired by a YouTube video where </p>
        <p>a chat engine was used to make a messaging application.</p>
        <p>My future goal is to be able to make it like Instagram AI</p>
        <p>or Snapchat AI.</p>
      </div>

      <img id="pic1" src={hImage} alt="Welcome to Chat.AI" />
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
        {/* Add Instagram link */}
        <div className="socail-link">
          YouTube: <a href="https://youtu.be/Fzv-rgwcFKk?si=HDO2yKWjM9ijvjIV" target="_blank" rel="noopener noreferrer">@Realtime Chat</a>

        </div>
        <div className="rating">
          Rating:
          {' ★★★★★'}
        </div>
        <div className="calendar">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      </form>
    </div>
  );
};

export default AuthPage;


