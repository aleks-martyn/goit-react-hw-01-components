import PropTypes from 'prop-types';
import {
  UserCard,
  Description,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

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
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <Stats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
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
