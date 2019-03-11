/*eslint-disable*/
import React,{Component} from "react";
import {Switch,Route} from 'react-router-dom';
import Css from '../home/index.css';
import AsyncComponent from '../../../components/async/AsyncComponent.js'
 import config from '../../../assets/js/conf/config.js'
 const IndexComponent=AsyncComponent(()=>import('../index/index'))
 const CartComponent=AsyncComponent(()=>import('../cart/index'))
 const UserComponent=AsyncComponent(()=>import('../../user/index'))
export default class HomeComponent extends Component{
     constructor(){
     super();
        this.state={
            bHomeStyle:true,
            bCartStyle:false,
            bUserStyle:false
        }
     }
     goPage(url){
         this.props.history.replace(config.path+url)
     }
     componentWillMount(){
         this.handleNavStyle(this.props);
     }
     componentWillReceiveProps(newProps){
         console.log(newProps);
         this.handleNavStyle(newProps);
     }
     handleNavStyle(Props){
         switch (Props.location.pathname) {
             case config.path+'home/index':
                 this.setState({
                     bHomeStyle:true,
                     bCartStyle:false,
                     bUserStyle:false
                 })
                 break;
             case config.path+'home/cart':
                 this.setState({
                     bHomeStyle:false,
                     bCartStyle:true,
                     bUserStyle:false
                 })
                 break;
             case config.path+'home/user':
                 this.setState({
                     bHomeStyle:false,
                     bCartStyle:false,
                     bUserStyle:true
                 })
                 break;
             default:

         }
     }
     render(){
         return (
             <div class="app">
             <React.Fragment>
                <Switch>
                    <Route path={config.path+'home/index'}   component={IndexComponent}/>
                    <Route path={config.path+'home/cart'}   component={CartComponent}/>
                    <Route path={config.path+'home/user'}   component={UserComponent}/>
                </Switch>
             < /React.Fragment >
             <div class={Css['bottom-nav']}>
                <ul onClick={this.goPage.bind(this,'home/index')}>
                    <li class={this.state.bHomeStyle?Css['home']+" "+Css['active']:Css['home']}></li>
                    <li class={this.state.bHomeStyle?Css['text']+" "+Css['active']:Css['text']}>首页</li>
                </ul>
                <ul onClick={this.goPage.bind(this,'home/cart')}>
                    <li class={this.state.bCartStyle?Css['cart']+" "+Css['active']:Css['cart']}></li>
                    <li class={this.state.bCartStyle?Css['text']+" "+Css['active']:Css['text']}>购物车</li>
                </ul>
                <ul onClick={this.goPage.bind(this,'home/user')}>
                    <li class={this.state.bUserStyle?Css['my']+" "+Css['active']:Css['my']}></li>
                    <li class={this.state.bUserStyle?Css['text']+" "+Css['active']:Css['text']}>我的</li>
                </ul>
             </div>
             </div>
         )
     }
 }
