webpackJsonp([2],{jh3r:function(t,e){},m40h:function(t,e,i){"use strict";e.b=function(){var t=a()({},c.b,{platform:"h5",uin:0,needNewCode:1});return Object(o.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},e.a=function(){var t=a()({},c.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return l.a.get("/api/getDiscList",{params:t}).then(function(t){return n.a.resolve(t.data)})},e.c=function(t){var e=a()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return Object(o.a)("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",e,c.c)};var s=i("//Fk"),n=i.n(s),r=i("woOf"),a=i.n(r),o=i("Gak4"),c=i("T452"),d=i("mtWM"),l=i.n(d)},nuEX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("m40h"),a=i("T452"),o=i("43Vb"),c=i.n(o),d=i("3Q4o"),l={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._play(),console.log(2121)},20),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},activated:function(){this.autoPlay&&this._play()},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,i=this.$refs.slider.clientWidth,s=0;s<this.children.length;s++){var n=this.children[s];Object(d.a)(n,"slider-item"),n.style.width=i+"px",e+=i}this.loop&&!t&&(e+=2*i),this.$refs.sliderGroup.style.width=e+"px"},_initSlider:function(){var t=this;this.slider=new c.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400,click:!0}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e,t.autoPlay&&(clearTimeout(t.timer),t._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},this.interval)}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"dots"},t._l(t.dots,function(e,s){return i("span",{key:s,staticClass:"dot",class:{active:t.currentPageIndex===s}})}),0)])},staticRenderFns:[]};var h=i("VU/8")(l,u,!1,function(t){i("yMxF")},"data-v-2b951b5e",null).exports,m=i("bh5B"),f=i("qqiS"),p=(i("mtWM"),i("NYxO")),v={name:"recommend",data:function(){return{recommends:[],discList:[],checkLoad:!1}},mounted:function(){var t=this;this._getRecommend(),setTimeout(function(){t._getDiscList()},20)},components:{Slider:h,Scroll:m.a,loading:f.a},methods:n()({_getRecommend:function(){var t=this;Object(r.b)().then(function(e){e.code===a.a&&(t.recommends=e.data.slider)})},_getDiscList:function(){var t=this;Object(r.a)().then(function(e){e.code===a.a&&(t.discList=e.data.list)})},loadImage:function(){this.checkLoad||(this.$refs.scroll.refresh(),this.checkLoad=!0)},selectItem:function(t){this.$router.push({path:"/recommend/"+t.dissid}),this.setDisc(t)}},Object(p.d)({setDisc:"SET_DISC"}))},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[i("div",[t.recommends.length?i("div",{ref:"sliderWrapper",staticClass:"slider-wrapper"},[i("slider",t._l(t.recommends,function(e){return i("div",{key:e.id},[i("img",{staticClass:"needsclick",attrs:{src:e.picUrl},on:{load:t.loadImage}})])}),0)],1):t._e(),t._v(" "),i("div",{staticClass:"recommend-list"},[i("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),i("ul",t._l(t.discList,function(e,s){return i("li",{key:s,staticClass:"item",on:{click:function(i){return t.selectItem(e)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),t._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}),0)])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var _=i("VU/8")(v,g,!1,function(t){i("jh3r")},"data-v-1a7b3c90",null);e.default=_.exports},yMxF:function(t,e){}});
//# sourceMappingURL=2.3d53e7da57dbae95e4cb.js.map