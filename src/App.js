import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';

import {CategoryContext} from './CategoryContext';


function App() {

    const [category,setcategory] = React.useState('Top News');

    return (

        <>
        <Router>


            <CategoryContext.Provider value={{category,setcategory}} >

            <Navigation  />
            <Switch>
                <Route path="/" component={Home} ></Route>
            </Switch>

            </CategoryContext.Provider >
        </Router>
        
        </>

        

    )
}

export default App;