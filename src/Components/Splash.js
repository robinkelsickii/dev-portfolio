import './Splash.css'
import me from './Img/me.jpg'

// TODO: add button that links to Resume. 

export default function Splash() {
    return (
        <div className='Splash'>
            <div className='center'>
                <img className='Me' src={me} alt='me' /> 
                <h3>I am Robin Kelsick II</h3>
                <h5>Hello World! Welcome to my Website Built with React and some Bootstrap. See what else I can build and learn my story.</h5>
                <h2>Sorry that there isn't much going on here... Yet... Tune in as I build my own websites and apps better and better than they were before.</h2>
            </div>
        </div>
    )
}