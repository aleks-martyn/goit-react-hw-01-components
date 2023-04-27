import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { UserCard, Description, UserImage, UserName, Stats } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <UserCard>
      <Description>
        <UserImage src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </Description>

      <Stats>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </Stats>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
