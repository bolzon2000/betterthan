import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Analyzer from "./pages/Analyzer";
import awsconfig from './aws-exports';
import { SignInInator } from './ui-components';
import styles from "./css/mainBoxStyles.module.css"
import { NSheader } from './ui-components';
import heart from "./images/heart.png";

// Amplify Reqs
import { Amplify, AmplifyProvider, Auth} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);


export default function App() {

  return (
  
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route path="/analyzer" element={<Analyzer/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </Router>

  )
}

ReactDOM.render(
  <React.StrictMode>
    
    <div className={styles.center}>
       <Authenticator>
          {({ signOut, user }) => (
          <div className={styles.mainBox}>
            <main>
              <SignInInator overrides={{"View.Text[2]":{children: Auth.user.attributes.email},
              "View.Text[0]":{onClick: signOut}}} />
              <NSheader overrides={
                {'View.Image[0]': {src: heart}, "View": {padding:"0px 0px 10px 0px"}}}
              />
              <App />
            </main>
      </div>
     )}
     </Authenticator>
  </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);


