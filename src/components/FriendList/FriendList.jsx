import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { ListOfFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
