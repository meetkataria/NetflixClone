(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),s=c.n(i),o=(c(11),c(12),c(2)),r=c.n(o),l=c(3),u=c(4),f=(c(14),c(0));var h=function(e){var t=e.title,c=e.url,n=a.a.useState([]),i=Object(u.a)(n,2),s=i[0],o=i[1];return a.a.useEffect((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.results),o(n.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h2",{className:"category",children:t}),Object(f.jsx)("div",{className:"posters",children:s.map((function(e){if(e.poster_path)return Object(f.jsx)("img",{src:"".concat("https:/image.tmdb.org/t/p/original/").concat(e.poster_path)})}))})]})},j="5c6f8859dbdd57d1377aff7f2af7f3fa",d="https://api.themoviedb.org/3",m={fetchTrending:"".concat(d,"/trending/all/week?api_key=").concat(j,"&language=en-US"),fetchNetflixOriginals:"".concat(d,"/discover/tv?api_key=").concat(j,"&with_networks=213"),fetchTopRated:"".concat(d,"/movie/top_rated?api_key=").concat(j,"&language=en-US"),fetchActionMovies:"".concat(d,"/discover/movie?api_key=").concat(j,"&with_genres=28"),fetchComedyMovies:"".concat(d,"/discover/movie?api_key=").concat(j,"&with_genres=35"),fetchHorrorMovies:"".concat(d,"/discover/movie?api_key=").concat(j,"&with_genres=27"),fetchRomanceMovies:"".concat(d,"/discover/movie?api_key=").concat(j,"&with_genres=10749"),fetchDocumentaries:"".concat(d,"/discover/movie?api_key=").concat(j,"&with_genres=99")};c(16);var p=function(){var e=a.a.useState({}),t=Object(u.a)(e,2),c=t[0],n=t[1];return a.a.useEffect((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m.fetchNetflixOriginals);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.results[Math.floor(Math.random()*c.results.length)]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(c),Object(f.jsxs)("header",{className:"banner",children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(null===c||void 0===c?void 0:c.backdrop_path)}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h1",{className:"movieName",children:c.name}),Object(f.jsx)("button",{className:"button",children:"Play"}),Object(f.jsx)("button",{className:"button",children:"Wishlist"}),Object(f.jsx)("h2",{className:"description",children:c.overview})]})]})};c(17);var v=function(){return Object(f.jsxs)("div",{className:"navbar",children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",className:"logo"}),Object(f.jsx)("img",{className:"avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})]})};var b=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(p,{}),Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"allRows",children:[Object(f.jsx)(h,{title:"Netflix Trending",url:m.fetchTrending}),Object(f.jsx)(h,{title:"Netflix Originals",url:m.fetchNetflixOriginals}),Object(f.jsx)(h,{title:"Top Rated",url:m.fetchTopRated}),Object(f.jsx)(h,{title:"Action Movies",url:m.fetchActionMovies}),Object(f.jsx)(h,{title:"Comedy Movies",url:m.fetchComedyMovies}),Object(f.jsx)(h,{title:"Horror Movies",url:m.fetchHorrorMovies}),Object(f.jsx)(h,{title:"Romance Movies",url:m.fetchRomanceMovies}),Object(f.jsx)(h,{title:"Documentaries",url:m.fetchDocumentaries})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.b44beb08.chunk.js.map