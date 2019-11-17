import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Hello() {

    return (

        <Router>
            <div>

                <div id="test">
               

                    <div id="iconText">
                        <img class="bottom" src={require('./kindredtwittertext.png')} />


                    </div>
                    <div id="birdImage">
                        <img class="top" src={require('./twitterlogogreen.png')} />

                    </div>


                   



                </div>


                <div id="wrapper">
                    <div className="searchPopOut">
                    <input className="text" type="text" placeholder="Search.."></input>

                    <div id="searchIcon">
                        <img className="search" src={require('./searchicon.png')} />

                    </div>

                      
                        


                    </div>
                 
                </div>
                <div className = "longSide">
                        
                </div>






                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>



            </div>
        </Router >

    )
}

export default Hello;