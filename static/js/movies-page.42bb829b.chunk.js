(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{37:function(e,t,n){"use strict";var r=n(42),a=n.n(r),c="https://api.themoviedb.org/3",o="92dbea49aa4406146839d70707aaf148",i={fetchMovies:function(){return a.a.get("".concat(c,"/trending/all/day?api_key=").concat(o)).then((function(e){return e.data.results}))},searchMovies:function(e){return a.a.get("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.data.results}))},searchMovieDetailsById:function(e){return a.a.get("".concat(c,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US")).then((function(e){return e.data}))},searchMovieCastById:function(e){return a.a.get("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US")).then((function(e){return e.data.cast}))},searchMovieReviewsById:function(e){return a.a.get("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(e){return e.data.results}))}};t.a=i},43:function(e,t,n){e.exports={list:"MovieList_list__2S-Ec",link:"MovieList_link__3Qn78"}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(9),a=n(2),c=n(43),o=n.n(c),i=n(1),u=Object(a.g)((function(e){var t=e.movies,n=e.location,a=e.searchQuery;return Object(i.jsx)("ul",{className:o.a.list,children:t.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{className:o.a.link,to:{pathname:"/movies/".concat(e.id),state:{from:n},search:a},children:(null===e||void 0===e?void 0:e.title)||e.name})},e.id)}))})}))},72:function(e,t,n){e.exports={form:"Searchbar_form__14-AE",input:"Searchbar_input__YHQWG",btn:"Searchbar_btn__3tgqB"}},73:function(e,t,n){"use strict";var r=n(74),a=n(11);function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function o(e){return Array.isArray(e)?e.sort():"object"===typeof e?o(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!==typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),n(decodeURIComponent(a),c,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=o(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[c(t,e),"[",r,"]"].join(""):[c(t,e),"[",c(r,e),"]=",c(n,e)].join("")};case"bracket":return function(t,n){return null===n?c(t,e):[c(t,e),"[]=",c(n,e)].join("")};default:return function(t,n){return null===n?c(t,e):[c(t,e),"=",c(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return c(r,t);if(Array.isArray(a)){var o=[];return a.slice().forEach((function(e){void 0!==e&&o.push(n(r,e,o.length))})),o.join("&")}return c(r,t)+"="+c(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},74:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},82:function(e,t,n){"use strict";n.r(t);var r=n(40),a=n.n(r),c=n(41),o=n(35),i=n(36),u=n(39),s=n(38),l=n(0),h=n(37),f=n(72),p=n.n(f),v=n(1),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(v.jsx)("label",{children:Object(v.jsx)("input",{className:p.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:this.handleChange})}),Object(v.jsx)("button",{className:p.a.btn,type:"submit",children:"Search"})]})}}]),n}(l.Component),b=n(44),m=n(73),y=n.n(m),j=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],searchQuery:""},e.onChangeQuery=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.searchQuery===this.state.searchQuery){e.next=9;break}return r=this.state.searchQuery,c=this.props.location,e.next=6,h.a.searchMovies(r);case 6:o=e.sent,this.setState({movies:o}),this.props.history.push({pathname:c.pathname,search:"query=".concat(r)});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.location,n=Object.values(y.a.parse(t.search)).join("")){e.next=4;break}return e.abrupt("return");case 4:this.onChangeQuery(n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.searchQuery;return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(d,{onSubmit:this.onChangeQuery}),t.length>0&&Object(v.jsx)(b.a,{movies:t,searchQuery:n})]})}}]),n}(l.Component);t.default=j}}]);
//# sourceMappingURL=movies-page.42bb829b.chunk.js.map