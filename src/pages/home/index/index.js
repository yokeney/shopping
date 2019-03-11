/*eslint-disable*/
import React,{Component} from "react";
import Css from '../../../assets/css/home/index/index.css'
import Swiper from '../../../assets/js/libs/swiper.min.js'
import '../../../assets/css/common/swiper.css'
export default class IndexComponent extends Component{
componentDidMount(){
    new Swiper('.'+Css['swiper-wrap'], {
	       autoplay: 5000,//可选选项，自动滑动
           pagination : '.swiper-pagination',
       })
}
     render(){
         return (
             <div>
                 <div class={Css['search-header']}>
                    <div class={Css['search_classify']}>
                    </div>
                    <div class={Css['search-wrap']}>
                    <div class={Css['search-icon']}></div>
                    <div class={Css['search-text']}>请输入宝贝</div>
                    </div>
                    <div class={Css['login-wrap']}>
                        <div class={Css['login-text']}>登录</div>
                    </div>
                 </div>
                 <div class={Css['swiper-wrap']}>
                      <div class="swiper-wrapper">
                        <div class="swiper-slide"><a href="http://www.baidu.com"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552053302800&di=0915bd8335fa359e368cf5220e077348&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc995785ee750000012e7e3c7c8a.jpg" alt=""/></a></div>
                        <div class="swiper-slide"><a href="http://www.baidu.com"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552053302799&di=77a459a2dafe93daf57d4228450eec71&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dd89599121ada80121560370fad1.jpg" alt=""/></a></div>
                        <div class="swiper-slide"><a href="http://www.baidu.com"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552053302800&di=0915bd8335fa359e368cf5220e077348&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc995785ee750000012e7e3c7c8a.jpg" alt=""/></a></div>
                      </div>
                      <div class="swiper-pagination"></div>
                 </div>
                 <div class={Css['quick-nav']}>
                 <div class={Css['item']}></div>
                 <div class={Css['item']}></div>
                 <div class={Css['item']}></div>
                 <div class={Css['item']}></div>
                 </div>
             </div>
         )
     }
 }
