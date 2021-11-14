import "./App.css";
//Profile
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
//Statistics
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";
//Friends
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";
//Transactions
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";

const {
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

function App() {
  return (
    <>
      <Profile
        avatar={avatar}
        name={name}
        tag={tag}
        location={location}
        followers={followers}
        views={views}
        likes={likes}
      />

    </>
  );
}

export default App;
