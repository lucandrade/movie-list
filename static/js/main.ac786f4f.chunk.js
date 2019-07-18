(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),s=(a(40),a(2)),c=a(3),l=a(6),u=a(5),m=a(7),d=a(13),p=a(14),h="/movie-list/",v="".concat(h,"logs"),f="".concat(h,"search"),b="".concat(h,"movie/:id"),g=function(e){return"".concat(h,"movie/").concat(e)},y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).input=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(this.props.location.search).get("q");e&&(this.input.current.value=decodeURI(e))}},{key:"onGoToPath",value:function(e,t){t.preventDefault(),e&&this.props.location.pathname!==e&&(this.input.current.value="",this.props.history.push(e))}},{key:"onSubmit",value:function(e){var t;e.preventDefault(),this.props.history.push((t=this.input.current.value,encodeURI("".concat(h,"search?q=").concat(t))))}},{key:"render",value:function(){return r.a.createElement("nav",{className:"w-full fixed top-0 left-0 p-6 flex items-center bg-black text-white"},r.a.createElement("div",null,r.a.createElement("a",{href:"/",onClick:this.onGoToPath.bind(this,"/movie-list/")},"Movie List")),r.a.createElement("form",{className:"pl-6",onSubmit:this.onSubmit.bind(this)},r.a.createElement("input",{type:"text",ref:this.input,className:"shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Search"})),r.a.createElement("div",{className:"hidden md:block pl-6 flex-1 text-right"},r.a.createElement("div",{className:"text-sm text-gray-400"},r.a.createElement("a",{href:"/",onClick:this.onGoToPath.bind(this,v)},"Requests Log"))))}}]),t}(n.Component),x=Object(p.e)(y),E=a(1),k=a.n(E),j=a(9),O=a(34),w=a.n(O),N=window.localStorage,L="request_log",M=new(function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,[{key:"add",value:function(e,t){var a=this.get();a.push({duration:e,endpoint:t});var n=JSON.stringify(a);N.setItem(L,n)}},{key:"get",value:function(){var e=N.getItem(L);try{return JSON.parse(e)||[]}catch(t){return[]}}},{key:"clear",value:function(){N.removeItem(L)}}]),e}()),S=w.a.create({baseURL:"https://movie-list.listenin.io"});S.interceptors.request.use(function(e){return e.metadata={startTime:new Date},e},function(e){return Promise.reject(e)}),S.interceptors.response.use(function(e){e.config.metadata.endTime=new Date;var t=e.config.metadata.endTime-e.config.metadata.startTime,a=e.config.url.replace(e.config.baseURL,"");return M.add(t,a),e},function(e){return Promise.reject(e)});var C=S,R=new(function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,[{key:"listPopular",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t,a,n=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,C.get("/?page=".concat(t));case 4:if((a=e.sent).data.status){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",a.data.payload);case 10:e.prev=10,e.t0=e.catch(1),console.error("Error listing movies",e.t0);case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(j.a)(k.a.mark(function e(t){var a,n,r=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:1,e.prev=1,e.next=4,C.get("/search?q=".concat(t,"&page=").concat(a));case 4:if((n=e.sent).data.status){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",n.data.payload);case 10:e.prev=10,e.t0=e.catch(1),console.error("Error listing movies",e.t0);case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(j.a)(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/get/".concat(t));case 3:if((a=e.sent).data.status){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",a.data.payload);case 9:e.prev=9,e.t0=e.catch(0),console.error("Error getting movies",e.t0);case 12:return e.abrupt("return",null);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()}]),e}()),q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=null;return e.image&&(t=r.a.createElement("div",{className:"rounded-t overflow-hidden"},r.a.createElement(d.b,{to:g(e.id)},r.a.createElement("img",{src:e.image,alt:e.title})))),r.a.createElement("div",{className:"flex w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 px-3 mb-6"},r.a.createElement("div",{className:"flex-1 flex flex-col border border-white rounded"},t,r.a.createElement("div",{className:"p-4"},r.a.createElement(d.b,{to:g(e.id)},e.title))))}}]),t}(n.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderMovie",value:function(e,t){return r.a.createElement(q,{movie:e,key:"".concat(e.id,"-").concat(t)})}},{key:"render",value:function(){var e=this.props.movies;return e?e.length<1?null:r.a.createElement("div",{className:"flex flex-wrap -mx-3 mt-4"},e.map(this.renderMovie.bind(this))):null}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0,movies:[],page:0,total:0,canLoad:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadMovies()}},{key:"loadMovies",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t,a,n,r,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,R.listPopular(this.state.page+1);case 3:if(t=e.sent){e.next=7;break}return this.setState({loading:!1}),e.abrupt("return");case 7:a=t.page,n=t.total,r=t.items,o=[],Array.prototype.push.apply(o,this.state.movies),Array.prototype.push.apply(o,r),this.setState({page:a,total:n,movies:o,loading:!1,canLoad:n>o.length});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderLoadMoreButton",value:function(){var e=this.state,t=e.loading;return e.canLoad?r.a.createElement("button",{type:"button",onClick:this.loadMovies.bind(this),disabled:t,className:"btn primary"},t?"Loading...":"Load More"):r.a.createElement("span",{disabled:!0,className:"btn primary disabled"},"No More Results")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-3xl font-semibold mb-2"},"Popular Movies"),r.a.createElement(I,{movies:this.state.movies}),this.renderLoadMoreButton())}}]),t}(n.Component),P=function(e){return e.id?e.id:null},B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0,movie:{},movieId:P(e.match.params)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadMovie()}},{key:"loadMovie",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,R.get(this.state.movieId);case 3:if(t=e.sent){e.next=7;break}return this.setState({loading:!1,movie:{}}),e.abrupt("return");case 7:this.setState({loading:!1,movie:t});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderLoading",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-3xl font-semibold"},"Loading"))}},{key:"renderNotFound",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-3xl font-semibold mb-4"},"Movie not found"),r.a.createElement(d.b,{className:"btn primary",to:"/"},"Back"))}},{key:"renderImage",value:function(e){return e.image?r.a.createElement("div",{className:"flex-1 rounded-lg overflow-hidden"},r.a.createElement("img",{src:e.image,alt:e.title})):null}},{key:"renderGenres",value:function(e){return e.genres&&Array.isArray(e.genres)?r.a.createElement("p",{className:"badges"},e.genres.map(function(e){return r.a.createElement("span",{className:"badge",key:e},e)})):null}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.movie;return t?this.renderLoading():a.id?r.a.createElement("div",{className:"flex flex-col md:flex-row mt-4"},this.renderImage(a),r.a.createElement("div",{className:"flex-1 px-0 pt-4 md:px-4 md:pt-0"},r.a.createElement(d.b,{className:"text-red-500 underline text-sm",to:"/"},"Back"),r.a.createElement("h1",{className:"text-3xl font-semibold leading-none mt-2"},a.title),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.link,className:"text-sm underline"},"Website"),this.renderGenres(a),r.a.createElement("div",{className:"mt-6"},a.description))):this.renderNotFound()}}]),t}(n.Component),T=function(e){return new URLSearchParams(e.search).get("q")},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0,movies:[],page:0,total:0,loaded:!1,query:T(e.location),canLoad:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadMovies()}},{key:"loadMovies",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t,a,n,r,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,R.search(this.state.query,this.state.page+1);case 3:if(t=e.sent){e.next=7;break}return this.setState({loading:!1,loaded:!0}),e.abrupt("return");case 7:a=t.page,n=t.total,r=t.items,o=[],Array.prototype.push.apply(o,this.state.movies),Array.prototype.push.apply(o,r),this.setState({page:a,total:n,movies:o,loading:!1,loaded:!0,canLoad:n>o.length});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderTitle",value:function(){var e=this.state,t=e.loaded,a=e.total,n=e.query;return t?r.a.createElement("h1",{className:"text-3xl font-semibold mb-2"},a," movies found with ",r.a.createElement("em",null,'"',decodeURI(n),'"')):r.a.createElement("h1",{className:"text-3xl font-semibold mb-2"},"Loading")}},{key:"renderLoadMoreButton",value:function(){var e=this.state,t=e.loaded,a=e.loading,n=e.canLoad;return t?n?r.a.createElement("button",{type:"button",onClick:this.loadMovies.bind(this),disabled:a,className:"btn primary"},a?"Loading...":"Load More"):r.a.createElement("span",{disabled:!0,className:"btn primary disabled"},"No More Results"):null}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",null,this.renderTitle(),this.renderLoadMoreButton(),r.a.createElement(I,{movies:e}),this.renderLoadMoreButton())}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={logs:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadLogs()}},{key:"loadLogs",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.get();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:this.setState({logs:t});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onClear",value:function(){var e=Object(j.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.clear();case 2:return e.next=4,this.loadLogs();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderLogs",value:function(){var e=this.state.logs;if(!e)return null;var t=e.map(function(e,t){return r.a.createElement("tr",{className:"border-b text-sm",key:t},r.a.createElement("td",{className:"px-4 py-1"},"".concat(e.duration/1e3,"s")),r.a.createElement("td",{className:"px-4 py-1"},e.endpoint))});return r.a.createElement("tbody",null,t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-3xl font-semibold mb-2"},"Requests Log",r.a.createElement("button",{type:"button",onClick:this.onClear.bind(this),className:"btn primary btn-xs ml-2 align-text-bottom"},"Clear")),r.a.createElement("table",{className:"border-collapse w-full text-left"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"border-b border-t"},r.a.createElement("th",{className:"p-4"},"Duration"),r.a.createElement("th",{className:"p-4"},"Endpoint"))),this.renderLogs()))}}]),t}(n.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"h-full min-h-screen bg-gray-800 text-white p-6 pt-24"},r.a.createElement(d.a,null,r.a.createElement(x,null),r.a.createElement(p.a,{path:"/movie-list/",exact:!0,component:D}),r.a.createElement(p.a,{path:f,component:U}),r.a.createElement(p.a,{path:b,component:B}),r.a.createElement(p.a,{path:v,component:A})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.ac786f4f.chunk.js.map