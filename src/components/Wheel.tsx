import './Wheel.scss';
import { circleclick } from "../functions/functions";
export default function Wheel() {
    return (
        <div id='wheel' onClick={circleclick}>
            <div id='textbox'>
                <p>Get to know me!</p>
                </div>
        </div>
    )
}
