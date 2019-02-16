/*eslint-disable*/
import React,{Component} from "react";
import Css from '../home/index.css'
export default class HomeComponent extends Component{
 constructor(){
     super();

     }
     render(){
         return (
             <div class="app">
             <div class={Css['bottom-nav']}>
                <ul>
                    <li class={Css['home']+" "+Css['active']}></li>
                    <li class={Css['text']+" "+Css['active']}>首页</li>
                </ul>
                <ul>
                    <li class={Css['cart']}></li>
                    <li class={Css['text']}>购物车</li>
                </ul>
                <ul>
                    <li class={Css['my']}></li>
                    <li class={Css['text']}>我的</li>
                </ul>
             </div>
             </div>
         )
     }
 }
