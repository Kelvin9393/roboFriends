(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n.n(o),i=n(9),s=n(7),l=n(17),u=n(18),h=(n(28),n(2)),d=n(3),b=n(5),E=n(4),m=n(6),p=(n(30),function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))}),g=function(e){var t=e.robots;return console.log("CardList"),a.a.createElement("div",null,t.map(function(e){return a.a.createElement(p,{key:e.id,id:e.id,name:e.name,email:e.email})}))},f=function(e){var t=e.searchChange;return console.log("SearchBox"),a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t}))},O=function(e){var t=e.children;return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},t)},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(r.Component),j=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log("Header"),a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},"RoboFriends"))}}]),t}(r.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChanged,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())});return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement(j,null),a.a.createElement(f,{searchChange:n}),a.a.createElement(O,null,a.a.createElement(v,null,a.a.createElement(g,{robots:c}))))}}]),t}(r.Component),R=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChanged:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQEUEST_ROBOTS_PENDING"}),fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQEUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQEUEST_ROBOTS_FAILED",payload:t})})})}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S={searchField:""},w={isPending:!1,robots:[],error:void 0},C=(n(32),Object(l.createLogger)()),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQEUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQEUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQEUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(u.a,C));c.a.render(a.a.createElement(i.a,{store:T},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.2a471922.chunk.js.map