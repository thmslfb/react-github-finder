import './styles.css';
import axios from '../../../services/axiosConfig';
import moment from 'moment'; // 61k (gzipped: 19.7k)
import { useState, useEffect } from 'react'; // 4.2k (gzipped: 1.8k)
import SearchInput from '../SearchInput';
import SendButton from '../SendButton';
import UserAvatar from '../UserAvatar';
import UserInfo from '../UserInfo';
import UserLinks from '../UserLinks';

export default function Card() {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/thmslfb').then((res) => {
      setUserData(res.data);
    })
  }, [])

  const getValue = (event) => {
    setName(event.target.value);
  }

  async function getUserData() {
    axios.get(`/${name}`)
    .then((res)=> {
      setUserData(res.data);
      setError(null);
    }).catch((err) => {
      setError(err.request.status);
    })
  }

  return (
      <div className='wrapper'>
        <div className='search'>
          <SearchInput onChange={getValue} />
          <SendButton search={getUserData} />
        </div>
        <span className='error'>{error == 404 ? 'User not found' : ''}</span>
        <UserAvatar image={userData?.avatar_url} />
        <p className='user-name'>{userData?.name}</p>
        <p className='user-login'>{'@' + userData?.login}</p>
        <p className='created-at'>Joined {moment(userData?.created_at).utc().format('DD MMM YYYY')}</p>
        <p className='bio'>{userData?.bio == null ? 'Profile has no bio' : userData?.bio}</p>
        <UserInfo
          followers={userData?.followers}
          following={userData?.following}
          repos={userData?.public_repos} 
        />
        <UserLinks
          location={userData?.location}
          blog={userData?.blog}
          twitter_username={userData?.twitter_username}
          company={userData?.company} 
        />
      </div>
  )
}