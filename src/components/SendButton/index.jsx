import './styles.css'

export default function SendButton(props) {
  return (
    <button 
      className='send-button'
      onClick={props.search}
    >
      Search
    </button>
  )
}