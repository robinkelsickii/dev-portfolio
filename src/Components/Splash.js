import './Splash.css'
import me from './Img/me.jpg'

// TODO: add button that links to Resume. 

export default function Splash() {
    return (
<div className='Splash'>
    <img className='Me' src={me} alt='me' />
</div>
    )
}