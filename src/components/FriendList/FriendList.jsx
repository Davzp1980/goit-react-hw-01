import FriendListItem from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.ul}>
      {friends.map(friend => {
        return (
          <li className={css.li} key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
