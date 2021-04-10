import ReactDOM from 'react-dom';
// import UserSearch from './classes/UserSearch';
// import { users } from './users';
// import EventComponent from './events/EventComponent';
// import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
