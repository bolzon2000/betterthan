
import { DataStore } from '@aws-amplify/datastore';
import { Comparisons } from '../models';
import thumbsUp from '../images/thumbs-up.png'
import thumbsDown from '../images/thumb-down.png'
import { Comparinator } from '../ui-components';
import React, { useState, useEffect } from 'react';
import { NSButton } from "../ui-components"
import { Link } from "react-router-dom";
import styles from "../css/mainLayoutGrid.module.css";


const Analyzer = () => {
    
 
   const [count, setCount] = useState(0);
   const [isComplete, setComplete] = useState(false);
   var [votes, setVote] = useState(0);
   var [imageDescription, setDescription] = useState('...loading');
   var [imageURL, setURL] = useState("https://eu-west-2.admin.amplifyapp.com/static/media/amplify-logo.512cb92e.svg");
   const [externalData, setExternalData] = useState([]);
   
   useEffect(() => {
        const getData = async () => {
            const models = await DataStore.query(Comparisons);
            setExternalData (models);
        }
        getData()
    }, [externalData]);

    //first run will set items as soon as the external Data length 
    //changes over to have items. Length only changes once.
    useEffect(() => {
        if (externalData.length) {
            setDescription(externalData[count].description);
            setURL(externalData[count].itemURL);
        }
    }, [externalData.length]);

    useEffect(() => {
        if ((count +1  > externalData.length) && (externalData.length != 0)) {
            setComplete(true);
        } else if (externalData.length > 0) {
            setDescription(externalData[count].description);
            setURL(externalData[count].itemURL);
        }

    }, [count] );


   // if we try to setcount here, the update does not happen quickly enough
   // because the setCount is batched or async     
    const handleClick = (i) => {
        if (isComplete) {
            return;
        }
        setCount(count + 1);
        setVote(votes + i);
        console.log(votes);
    };

    const profileOverrides = {
        "View.Image[0]": {src:thumbsUp,  onClick: () => handleClick(1)},
        "View.Image[1]": {src:thumbsDown, onClick: () => handleClick(0)},
        "View.Text[1]": {children:imageDescription},
        "View.Image[2]": {src: imageURL},
        "View": {height: "360px"}
      }
    
    if (isComplete)  {
        return (
            <div className={styles.mainLayout}>
                <Comparinator overrides={profileOverrides} />
                <Link to="/Result" state={{votes: votes}}>
                <NSButton overrides={{"View.Text[0]": {children:"See the Results!"} }}/>
                </Link>
            </div>
        )
    } else {
        return (
            <div className={styles.mainLayout}>
                <Comparinator overrides={profileOverrides} />
            </div>
        )
    }
    
};

export default Analyzer;