import './styles.css'
import { FaMapMarkerAlt, FaTwitter, FaLink, FaBuilding } from 'react-icons/fa' // 5.5k (gzipped: 2.3k)

export default function UserLinks(props) {
    let twitterLink = 'https://twitter.com/' + props.twitter_username;
    let blogLink = props.blog;

    if (blogLink && !blogLink.includes('http')) {
        blogLink = 'https://' + blogLink;
    }

    return (
        <div className='links'>
            <div className='link-container'>
                <div className='data'>
                    <FaMapMarkerAlt />
                    <span>{props.location == null ? 'No location listed' : props.location}</span>
                </div>
                <div className='data'>
                    <FaTwitter />
                    <span>{props.twitter_username == null ? 'No Twitter listed' : <a href={twitterLink} target='_blank'>{props.twitter_username}</a>}</span>
                </div>
            </div>
            <div className='link-container'>
                <div className='data'>
                    <FaLink />
                    <span>{props.blog == '' ? 'No website listed' : <a href={blogLink} target='_blank'>{props.blog}</a> || 'No website listed' }</span>
                </div>
                <div className='data'>
                    <FaBuilding />
                    <span>{props.company == null ? 'No company listed' : props.company}</span>
                </div>
            </div>
        </div>
    )
}