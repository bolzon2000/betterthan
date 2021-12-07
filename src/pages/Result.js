import { GaugeInator } from '../ui-components';
import styles from '../css/mainLayoutGrid.module.css';
import { NSButton } from "../ui-components"
import { Link, useLocation } from "react-router-dom";
import gauge0 from '../images/gauge0.png';


const Result = () => {
    const location = useLocation()
    const gaugeSrc = 'gauge' + (Math.trunc(location.state.votes) + Math.trunc(location.state.votes) % 2)*10;
    console.log(gaugeSrc); 

    return (
    <div className = {styles.mainLayout}>
        <GaugeInator overrides={{"View.Image[0]":{src: gauge0}}} />
        <p style={{padding:"20px"}}>Thanks for playing. Hopefully this application has given you some insight
            into how much you appreciate Nikhil. Not having a score in the green area of the 
            gauge may indicate a lack of appreciation for your awesome PM.
        </p>

        <p style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px"}}>Ease your conscience and play again? </p>
        <Link to="/Analyzer">
            <NSButton overrides={{"View.Text[0]": {children:"Play Again!"} }}/>
        </Link>
    </div>
    )
};

export default Result;
