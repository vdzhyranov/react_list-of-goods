(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(6),s=n.n(o),c=n(1),i=n(2),l=n(4),u=n(3),h=(n(12),r.a.memo((function(t){var e=t.action,n=t.text;return r.a.createElement("button",{type:"button",onClick:e},n)}))),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={maxGoodsLength:1},t}return Object(i.a)(n,[{key:"render",value:function(){for(var t=this,e=[],n=1;n<=10;n+=1)e.push(n);return r.a.createElement("select",{name:"number",value:this.state.maxGoodsLength,onChange:function(e){t.setState({maxGoodsLength:+e.target.value},(function(){return t.props.takeChildrenState(t.state.maxGoodsLength)}))}},e.map((function(t,e){return r.a.createElement("option",{key:"".concat(t," + index"),value:e+1},t)})))}}]),n}(r.a.PureComponent),d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={sortBy:"id",isReverse:!1,maxGoodsLength:1},t.takeChildrenState=function(e){t.setState({maxGoodsLength:e})},t.reverseGoods=function(){t.setState((function(t){return{isReverse:!t.isReverse}}))},t.sortByLength=function(){t.setState({sortBy:"length"})},t.sortByABC=function(){t.setState({sortBy:"ABC"})},t.clearGoods=function(){t.setState({isReverse:!1,sortBy:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props.allGoods.filter((function(e){return e.length>t.state.maxGoodsLength}));return e.sort((function(e,n){switch(t.state.sortBy){case"length":return e.length-n.length;case"ABC":return e.localeCompare(n);default:return 0}})),this.state.isReverse&&e.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t},t)}))),r.a.createElement(h,{action:this.sortByLength,text:"Sort by length"}),r.a.createElement(h,{action:this.sortByABC,text:"Sort by Name"}),r.a.createElement(h,{action:this.clearGoods,text:"Clear"}),r.a.createElement(h,{action:this.reverseGoods,text:"Reverse"}),r.a.createElement(m,{maxGoodsLength:this.state.maxGoodsLength,takeChildrenState:this.takeChildrenState}))}}]),n}(r.a.PureComponent),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isActive:!1,allGoods:[].concat(f)},t.showUI=function(){t.setState((function(t){return{isActive:!t.isActive}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isActive,n=t.allGoods,a=t.sortBy,o=t.cleanGoods;return r.a.createElement(r.a.Fragment,null,!e&&r.a.createElement("button",{type:"button",onClick:this.showUI},"Start"),e&&r.a.createElement(d,{allGoods:n,sortBy:a,cleanGoods:o}))}}]),n}(r.a.Component);s.a.render(r.a.createElement(v,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.650ea9df.chunk.js.map