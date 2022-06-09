import {CodeSquare} from 'react-bootstrap-icons'
import {Controller} from 'react-bootstrap-icons'
import { Flag } from 'react-bootstrap-icons'


export default function Splash(){
    return(
        <div id="splash">
        <h1 id="Name"> I am Robin Kelsick II</h1>
        <ul id="flip">
            <li id='developer'>
                Developer
                <CodeSquare color='white' />
            </li>
            <li id='gamer'>
                Gamer
                <Controller color='white' />
            </li>
            <li id='marine'>
                Marine
                <Flag color='white' />
            </li>
        </ul>
        </div>
    )
}