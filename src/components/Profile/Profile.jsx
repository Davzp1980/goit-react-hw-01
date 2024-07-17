/* eslint-disable react/prop-types */
import css from './Profile.module.css';
import userData from '../../userData.json';

function Profile({ username, tag, location, stats, image }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.li}>
          <span className={css.spanName}>Followers</span>
          <span className={css.spanNumber}>{stats.followers}</span>
        </li>
        <li className={css.li}>
          <span className={css.spanName}>Views</span>
          <span className={css.spanNumber}>{userData.stats.views}</span>
        </li>
        <li className={css.li}>
          <span className={css.spanName}>Likes</span>
          <span className={css.spanNumber}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
