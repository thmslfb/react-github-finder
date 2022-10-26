import './styles.css'

export default function UserStats(props) {
    return (
        <div className='info'>
            <div className='data'>
                <p>Repos</p>
                <span>{props.repos == 0 ? '0' : props.repos || '⛌'}</span>
            </div>
            <div className='data'>
                <p>Followers</p>
                <span>{props.followers == 0 ? '0' : props.followers || '⛌'}</span>
            </div>
            <div className='data'>
                <p>Following</p>
                <span>{props.following == 0 ? '0' : props.following || '⛌'}</span>
            </div>
        </div>
    )
}