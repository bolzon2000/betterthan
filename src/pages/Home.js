
import { Link } from "react-router-dom";
import styles from "../css/mainLayoutGrid.module.css";
import nikhil from "../images/nikhil.jpg";


const Home = () => {
    return ( 
        <div className={styles.mainLayout}>
            <h1>home</h1>
            <img style={{ height: "180px", width: "280px"}} src={nikhil} />
            <p style={{margin: "20px"}}>We all <b>think</b> we like Nikhil. But how does he rate when we compare him to other things? Do we like him better than an apple for example? 
                Better than a toothbrush? A sea urchin? Try the <b>BetterThanNikhilInator</b> and find out how you'd rate Nikhil against every day objects!</p>
            <Link to="/Analyzer">Get Started</Link>
        </div>
    )
};

export default Home;