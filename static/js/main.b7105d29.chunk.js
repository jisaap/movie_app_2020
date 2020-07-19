(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{39:function(e,a,t){e.exports=t(72)},61:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(32),c=t.n(s),o=t(7),i=t(1),l=t(15),m=t.n(l),u=t(21),p=t(9),d=t(10),v=t(12),f=t(11),h=t(22),k=t.n(h);t(61);var g,E,y=function(e){var a=e.id,t=e.year,n=e.title,s=e.summary,c=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie/:".concat(a),state:{year:t,title:n,summary:s,poster:c,genres:i}}},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},n),r.a.createElement("h5",{className:"movie_year"},t),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},s.slice(0,180),"..."))))},b=(t(67),function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function a(){var t,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{clssName:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loding...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component)),w=t(18),_=t.n(w),N=t(34),O=t(35),L=t(36),j=t(37),C=t(38),x=[],M=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0},e}return Object(d.a)(t,[{key:"getLocation",value:function(){navigator.geolocation.getCurrentPosition(this.setLocation)}},{key:"setLocation",value:function(e){g=e.coords.latitude,E=e.coords.longitude;var a=document.createElement("script");a.async=!0,a.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=c1fca52c08d7fa846dec749abccaebb7&autoload=false&libraries=services,clusterer,drawing",document.head.appendChild(a),a.onload=function(){kakao.maps.load((function(){var e=document.getElementById("map"),a={center:new kakao.maps.LatLng(g,E),level:7},t=new window.kakao.maps.Map(e,a),n=new kakao.maps.services.Places,r=new kakao.maps.InfoWindow({zIndex:1});function s(e,a,t){if(a===kakao.maps.services.Status.OK)!function(e){var a=document.getElementById("placesList"),t=document.getElementById("menu_wrap"),n=document.createDocumentFragment(),s=new kakao.maps.LatLngBounds;(function(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)})(a),function(){for(var e=0;e<x.length;e++)x[e].setMap(null);x=[]}();for(var l=0;l<e.length;l++){var m=new kakao.maps.LatLng(e[l].y,e[l].x),u=o(m,l),p=c(l,e[l]);s.extend(m),function(e,a){kakao.maps.event.addListener(e,"mouseover",(function(){i(e,a)})),kakao.maps.event.addListener(e,"mouseout",(function(){r.close()})),p.onmouseover=function(){i(e,a)},p.onmouseout=function(){r.close()}}(u,e[l].place_name),n.appendChild(p)}a.appendChild(n),t.scrollTop=0}(e);else{if(a===kakao.maps.services.Status.ZERO_RESULT)return void alert("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");if(a===kakao.maps.services.Status.ERROR)return void alert("\uac80\uc0c9 \uacb0\uacfc \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}}function c(e,a){var t=document.createElement("li"),n='<span className="markerbg marker_'+(e+1)+'"></span><div className="info">   <h5>'+a.place_name+"</h5>";return a.road_address_name?n+="    <span>"+a.road_address_name+'</span>   <span className="jibun gray">'+a.address_name+"</span>":n+="    <span>"+a.address_name+"</span>",n+='  <span className="tel">'+a.phone+"</span></div>",t.innerHTML=n,t.className="item",t}function o(e,a,n){var r=new kakao.maps.Size(36,37),s={spriteSize:new kakao.maps.Size(36,691),spriteOrigin:new kakao.maps.Point(0,46*a+10),offset:new kakao.maps.Point(13,37)},c=new kakao.maps.MarkerImage("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",r,s),o=new kakao.maps.Marker({position:e,image:c});return o.setMap(t),x.push(o),o}function i(e,a){var n='<div style="padding:5px;z-index:1;">'+a+"</div>";r.setContent(n),r.open(t,e)}!function(){if(!"\uc601\ud654\uad00".replace(/^\s+|\s+$/g,""))return alert("\ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694!"),!1;n.keywordSearch("\uc601\ud654\uad00",s)}()}))}}},{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){return r.a.createElement("div",{className:"map_wrap"},r.a.createElement("div",{id:"map"}),r.a.createElement("div",{id:"menu_wrap",className:"bg_white"},r.a.createElement("div",{className:"option"},r.a.createElement("p",{id:"keyword",size:"15"},"\uc601\ud654\uad00 \ubaa9\ub85d")),r.a.createElement("hr",null),r.a.createElement("ul",{id:"placesList"})))}}]),t}(r.a.Component),S=(t(68),r.a.lazy((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,79))})));var A=function(e){var a=e.charts;return r.a.createElement("div",{className:"about_container"},r.a.createElement("section",{className:"page-content"},r.a.createElement("div",{className:"contentContainer"},r.a.createElement("ul",{className:"movie_charts"},r.a.createElement("p",null,"\uc2e4\uc2dc\uac04 \uc601\ud654 \uc21c\uc704"),a.map((function(e){return r.a.createElement("li",{key:e.rnum,className:"charts_chart"},e.rank,"\uc704 : ",e.movieNm.length>20?e.movieNm.slice(0,20)+"...":e.movieNm,r.a.createElement("span",{className:"chart_dec",id:t(e.rankInten)},function(e){var a;a=e>0?"\u21d1 "+e:e<0?"\u21d3 "+e.slice(1,3):"-";return a}(e.rankInten)))})))),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(S,null))),r.a.createElement("div",{className:"inputContainer"},r.a.createElement(M,null)),r.a.createElement("div",null,r.a.createElement("span",null,"Movie App Practice, 2020")));function t(e){return e>0?"col_blu":e<0?"col_red":"col_gra"}},D="d86c591b572c801bc6dc904564731a84",I=new Date,P=I.getTime(864e5);I.setTime(P);var z=I.getFullYear(),B=I.getMonth()+1,V=I.getDate()-1;B<10&&(B="0"+B),V<10&&(V="0"+V);var R=(z+"-"+B+"-"+V).slice(0,10).replace(/-/g,""),T=function(e){Object(C.a)(t,e);var a=Object(j.a)(t);function t(){var e;Object(O.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).state={},e.renderChart=function(){var a=e.state.charts;return r.a.createElement(A,{charts:a})},e.getCharts=Object(N.a)(_.a.mark((function a(){var t;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.callApi();case 2:t=a.sent,e.setState({charts:t});case 4:case"end":return a.stop()}}),a)}))),e.callApi=function(){return fetch("https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=".concat(D,"&targetDt=").concat(R,"&itemPerPage=10")).then((function(e){return e.json()})).then((function(e){return e.boxOfficeResult.dailyBoxOfficeList})).catch((function(e){return console.log(e)}))},e}return Object(L.a)(t,[{key:"componentDidMount",value:function(){this.getCharts()}},{key:"render",value:function(){var e=this.state.charts;return r.a.createElement("div",{className:e?"App":"App-loading"},e?this.renderChart():"\ub85c\ub529\uc911 ...")}}]),t}(r.a.Component);t(69);var F=function(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,c=e.genres;return r.a.createElement("div",{className:"containerView"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movieView_data"},r.a.createElement("h3",{className:"movieView_title"},t),r.a.createElement("h5",{className:"movieView_year"},a),r.a.createElement("ul",{className:"movieView_genres"},c.map((function(e,a){return r.a.createElement("li",{key:a,className:"genresView_genre"},e)}))),r.a.createElement("p",{className:"movieView_summary"},n)))},H=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.location,t=e.history;void 0===a.state&&t.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement(F,{year:e.state.year,title:e.state.title,summary:e.state.summary,poster:e.state.poster,genres:e.state.genres}):null}}]),t}(r.a.Component);t(70);var J=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/charts"},"About"))};t(71);var K=function(){return r.a.createElement(o.a,null,r.a.createElement(J,null),r.a.createElement(i.a,{path:"/",exact:!0,component:b}),r.a.createElement(i.a,{path:"/charts",component:T}),r.a.createElement(i.a,{path:"/movie/:id",component:H}))};c.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b7105d29.chunk.js.map