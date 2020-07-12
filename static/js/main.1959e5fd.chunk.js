(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),s=a.n(c),i=a(7),o=a(1),l=a(13),m=a.n(l),u=a(15),v=a(9),p=a(10),h=a(12),f=a(11),d=a(30),E=a.n(d);a(55);var g=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,s=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie/:".concat(t),state:{year:a,title:n,summary:c,poster:s,genres:o}}},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},n),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},c.slice(0,180),"..."))))},y=(a(61),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{clssName:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loding...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var b=function(e){var t=e.charts;return console.log(t[0]),r.a.createElement("div",{className:"about_container"},r.a.createElement("span",null,"Come With Me !!!"),r.a.createElement("section",{className:"page-content"},r.a.createElement("div",{className:"contentContainer"},r.a.createElement("ul",{className:"movie_charts"},t.map((function(e){return r.a.createElement("li",{key:e.rnum,className:"charts_chart"},e.rank,"\uc704 : ",e.movieNm,r.a.createElement("span",{className:"chart_dec",id:a(e.rankInten)},function(e){var t;t=e>0?"\u21d1 "+e:e<0?"\u21d3 "+e.slice(1,3):"-";return t}(e.rankInten)))})))),r.a.createElement("div",{className:"ratingContainer"},r.a.createElement("p",null,"\ub0a0\uc528?"))),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("p",null,"\uc601\ud654\uad00 \uc704\uce58")),r.a.createElement("span",null,"Movie App Practice, 2020"));function a(e){return e>0?"col_blu":e<0?"col_red":"col_gra"}},N="d86c591b572c801bc6dc904564731a84",_=new Date,k=_.getTime(864e5);_.setTime(k);var w=_.getFullYear(),j=_.getMonth()+1,O=_.getDate()-1;j<10&&(j="0"+j),O<10&&(O="0"+O);var x=(w+"-"+j+"-"+O).slice(0,10).replace(/-/g,""),C=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.renderChart=function(){var t=e.state.charts;return console.log(t),r.a.createElement(b,{charts:t})},e.getCharts=Object(u.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.callApi();case 2:a=t.sent,console.log(a),e.setState({charts:a});case 5:case"end":return t.stop()}}),t)}))),e.callApi=function(){return fetch("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=".concat(N,"&targetDt=").concat(x,"&itemPerPage=10")).then((function(e){return e.json()})).then((function(e){return e.boxOfficeResult.dailyBoxOfficeList})).catch((function(e){return console.log(e)}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getCharts()}},{key:"render",value:function(){var e=this.state.charts;return r.a.createElement("div",{className:e?"App":"App-loading"},e?this.renderChart():"\ub85c\ub529\uc911 ...")}}]),a}(r.a.Component);a(63);var A=function(e){var t=e.year,a=e.title,n=e.summary,c=e.poster,s=e.genres;return r.a.createElement("div",{className:"containerView"},r.a.createElement("img",{src:c,alt:a,title:a}),r.a.createElement("div",{className:"movieView_data"},r.a.createElement("h3",{className:"movieView_title"},a),r.a.createElement("h5",{className:"movieView_year"},t),r.a.createElement("ul",{className:"movieView_genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"genresView_genre"},e)}))),r.a.createElement("p",{className:"movieView_summary"},n)))},M=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement(A,{year:e.state.year,title:e.state.title,summary:e.state.summary,poster:e.state.poster,genres:e.state.genres}):null}}]),a}(r.a.Component);a(64);var D=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/charts"},"About"))};a(65);var V=function(){return r.a.createElement(i.a,null,r.a.createElement(D,null),r.a.createElement(o.a,{path:"/",exact:!0,component:y}),r.a.createElement(o.a,{path:"/charts",component:C}),r.a.createElement(o.a,{path:"/movie/:id",component:M}))};s.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1959e5fd.chunk.js.map