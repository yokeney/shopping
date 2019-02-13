/*eslint-disable*/
import React,{Component} from "react";
import Css from '../../../assets/css/home/index/index.css'
export default class IndexComponent extends Component{
 constructor(){
     super();

     }
     render(){
         return (
             <div class="app">
             首页
             <div class={Css['header']}>header</div>
             </div>
         )
     }
 }
