import './App.css';
import Profile from './components/Profile/Profile';
import userData from '../src/userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import transactions from "./transaction.json"
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
        image={userData.avatar}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </>
  );
}

export default App;
