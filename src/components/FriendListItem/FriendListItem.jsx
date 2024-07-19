import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    // <li className={css.li} key={friend.id}>
    <div className={css.liContent}>
      <img className={css.liImage} src={avatar} alt="Avatar" width="48" />
      <p className={css.pName}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>Online</p>
    </div>
    // </li>
  );
}

export default FriendListItem;
