
import { Link } from "react-router-dom";
import styles from "../css/mainLayoutGrid.module.css";
import nikhil from "../images/nikhil.jpg";
import { NSButton } from "../ui-components"



const Home = () => {
    return ( 
        <div className={styles.mainLayout}>
            <img src={nikhil} width="230" height="230" />
            <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
                <p>We all <b>think</b> we like Nikhil. But how does he rate when compared  to other things? Do we like him better than an apple? 
                    How about a toothbrush or a sea urchin? 
                </p>
                <p>
                    Try the <b>BetterThanNikhilInator</b> to find out how he rates against every day objects!
                </p>
            </div>
            <Link to="/Analyzer">
            <NSButton overrides={{ "View.Text[0]": {children:"Get Started!"} }}/>
           </Link>
        </div>
    )
};

export default Home;