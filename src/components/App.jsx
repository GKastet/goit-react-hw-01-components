import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../FilesJson/user.json';
import data from '../FilesJson/data.json';
import friends from '../FilesJson/friends.json';
import transactions from '../FilesJson/transactions.json';

export const App = () => {
  return (
    <>
    <Profile   
    username = {user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
    <Statistics title="UPLOAD STATS" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </>
  );
};


