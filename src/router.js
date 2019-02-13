import React,{Component} from "react";
 import {HashRouter as Router,Route,Link,Switch} from "react-router-dom"
 import App from './App'
 import IndexComponent from './pages/home/index/index.js'
 export default class RouterComponent extends Component{
     render(){
         return (
             <React.Fragment>
                <Router>
                     <React.Fragment>
                        <Switch>
                            <Route path="/" exact  component={IndexComponent}/>
                        </Switch>
                     </React.Fragment >
                </Router>
             < /React.Fragment >
         )
     }
 }