import React,{Component} from "react";
 import {HashRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom"
 import App from './App'
 import AsyncComponent from './components/async/AsyncComponent.js'
 import config from './assets/js/conf/config.js'
 console.log(config);
 const HomeComponent=AsyncComponent(()=>import('./pages/home/home/index.js'))
 export default class RouterComponent extends Component{
     render(){
         return (
             <React.Fragment>
                <Router>
                     <React.Fragment>
                        <Switch>
                            <Route path={config.path+'home'}   component={HomeComponent}/>
                            <Redirect to={config.path+'home/index'}></Redirect>
                        </Switch>
                     </React.Fragment >
                </Router>
             < /React.Fragment >
         )
     }
 }
