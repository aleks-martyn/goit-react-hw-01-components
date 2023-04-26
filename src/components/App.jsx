import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
