import React,{Component} from "react";
 import {HashRouter as Router,Route,Link,Switch} from "react-router-dom"
 import App from './App'
 import AsyncComponent from './components/async/AsyncComponent.js'
 const HomeComponent=AsyncComponent(()=>import('./pages/home/home/index.js'))
 export default class RouterComponent extends Component{
     render(){
         return (
             <React.Fragment>
                <Router>
                     <React.Fragment>
                        <Switch>
                            <Route path="/" exact  component={HomeComponent}/>
                        </Switch>
                     </React.Fragment >
                </Router>
             < /React.Fragment >
         )
     }
 }
