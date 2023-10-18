/** @format */
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './_components/ChatFeed';
import LoginForm from './_components/LoginForm';

const projectID = process.env.REACT_APP_ID_KEY;

export default function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
        ).play()
      }
    />
  );
}
