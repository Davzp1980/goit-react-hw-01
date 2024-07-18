import css from './FriendList.module.css';


function FriendList({ friends }) {
  return (
    <ul className={css.ul}>
      {friends.map(friend => {
        return (
          <li className={css.li} key={friend.id}>
            <div className={css.liContent}>
              <img className={css.liImage} src={friend.avatar} alt="Avatar" width="48" />
              <p className={css.pName}>{friend.name}</p>
              <p className={friend.isOnline ? css.isOnline : css.isOffline}>Online</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
