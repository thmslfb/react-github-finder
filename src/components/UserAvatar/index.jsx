import './styles.css'

export default function UserAvatar(props) {
  return (
    <img
    className='user-avatar'
        src={props.image || 'https://avatars.githubusercontent.com/u/583231?v=4'}
        alt='Searched user avatar'
    />
  )
}