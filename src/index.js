import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Analyzer from "./pages/Analyzer";
import styles from "./css/mainBoxStyles.module.css"

// Amplify Reqs
import Amplify from 'aws-amplify';
//import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/analyzer" element={<Analyzer/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    
    <div className={styles.center}>
        <div className={styles.mainBox}>
<<<<<<< HEAD
          <AmplifyProvider>
            <App />
           </AmplifyProvider>
=======
          <App />
>>>>>>> 5978584cfaa4a5f1d56f7d2c9da8a3391e00f38b
        </div>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);


