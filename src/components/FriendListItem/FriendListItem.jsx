import css from '../FriendList/FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.liContent}>
      <img className={css.liImage} src={avatar} alt="Avatar" width="48" />
      <p className={css.pName}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
