(this["webpackJsonptextpanel-util"]=this["webpackJsonptextpanel-util"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(8),s=n.n(a),r=(n(14),n(15),n(16),n(2)),o=n(3),l=n(6),h=n(5),d=n(4),u=n(9),p=n(0),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).selfRef=i.a.createRef(),c}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("button",{className:"character-cell",ref:this.selfRef,onClick:function(){e.props.copyFunc(e.selfRef.current.getBoundingClientRect(),e.props.char)},children:this.props.char})}}]),n}(i.a.Component);var b=function(e){var t=Object(u.a)(e.line).map((function(t,n){return Object(p.jsx)(j,{char:t,copyFunc:e.copyFunc},n)}));return Object(p.jsx)("div",{className:"character-line",children:t})};var m=function(e){var t=e.category.lines.map((function(t,n){return Object(p.jsx)(b,{line:t,copyFunc:e.copyFunc},n)}));return Object(p.jsxs)("div",{className:"noselect",children:[Object(p.jsx)("p",{className:"category-name",children:e.category.name}),Object(p.jsx)("div",{className:"telegrama",children:t})]})};var f=function(e){var t=e.isVisible?"copied-popup-visible":"";return Object(p.jsx)("div",{className:"copied-popup-container noselect "+t,style:{left:e.left,top:e.top},children:Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"\u2714 Copied !"})})})},x=["starbase-charmap: Find and copy-paste special characters for Starbase Text Panels!","This website uses the same font as the game: characters will look the same.","Ingame text is tiny! Some of these characters are particularly thin and hard to read in most situations. Remember to test how things look directly in the game.","Some characters are not monospace.","Please report any issues or missing characters!"],O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={hintIndex:420},c.hintsLength=x.length,c.nextHint=c.nextHint.bind(Object(l.a)(c)),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initIndex()}},{key:"setIndex",value:function(e){localStorage.setItem("lastHintID",e),this.setState({hintIndex:e})}},{key:"nextHint",value:function(e){var t=e+1>=this.hintsLength?0:e+1;this.setIndex(t)}},{key:"initIndex",value:function(){var e=parseInt(localStorage.getItem("lastHintID"));"number"!==typeof e||isNaN(e)?this.setIndex(0):this.nextHint(e)}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"hints-container noselect",onClick:function(){e.nextHint(e.state.hintIndex)},children:[Object(p.jsxs)("p",{children:[" ",x[this.state.hintIndex]," "]}),Object(p.jsxs)("div",{className:"hints-button telegrama",children:["Next Hint",Object(p.jsxs)("span",{children:[" ",this.state.hintIndex+1+"/"+this.hintsLength," "]})]})]})}}]),n}(i.a.Component);var v=function(e){return Object(p.jsx)("div",{className:"container ".concat(e.addClass),children:e.children})};var y=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"header-spacer"}),Object(p.jsx)("div",{className:"header-spacer"}),Object(p.jsx)("div",{className:"bottom-header-container",children:Object(p.jsxs)(v,{addClass:"header bottom border",children:[Object(p.jsx)("img",{src:"/assets/lmb.svg",alt:"LMB"}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:"Leftclick to copy a character."})})]})})]})},g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).inputElementRef=i.a.createRef(),c}return Object(o.a)(n,[{key:"copyNow",value:function(e){this.inputElementRef.current.select(),document.execCommand("copy")}},{key:"render",value:function(){return Object(p.jsx)("input",{readOnly:!0,type:"text",ref:this.inputElementRef,value:this.props.copyContent,className:"noselect",style:{opacity:0,position:"fixed",top:"200%"}})}}]),n}(i.a.Component);var k=function(e){return Object(p.jsx)("div",{id:"version-badge",className:"telegrama",children:Object(p.jsx)("div",{children:" \u23af starbase-charmap \u23af v1.1.3 \u23af "})})};var I=function(e){return Object(p.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.children})},N=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={copiedPopupVisible:!1,copiedPopupX:"100px",copiedPopupY:"100px",character:"\u0d9e"},c.copyFunc=c.copyFunc.bind(Object(l.a)(c)),c.copyTextboxRef=i.a.createRef(),c.list=c.props.database.map((function(e,t){return Object(p.jsx)(m,{category:e,copyFunc:c.copyFunc},t)})),c}return Object(o.a)(n,[{key:"copyFunc",value:function(e,t){this.triggerPopup(e),this.triggerCopy(t)}},{key:"triggerPopup",value:function(e,t){var n=this,c=e.left-(e.left-e.right)/2,i=e.top-13;this.setState({copiedPopupVisible:!0,copiedPopupX:c,copiedPopupY:i}),setTimeout((function(){n.setState({copiedPopupVisible:!1})}),300)}},{key:"triggerCopy",value:function(e){var t=this;this.setState({character:e}),setTimeout((function(){t.copyTextboxRef.current.copyNow()}),100)}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(v,{addClass:"page-content",children:[Object(p.jsx)(k,{}),Object(p.jsx)("h1",{className:"centered",children:"Character List"}),Object(p.jsx)(O,{}),Object(p.jsx)("div",{children:this.list}),Object(p.jsxs)("div",{style:{opacity:.7},children:[Object(p.jsx)("h1",{className:"centered",children:"About"}),Object(p.jsx)("p",{children:"This is a utility website for the game Starbase. It lets you find and copy special characters, previewing them with the same font used in the game."}),Object(p.jsx)("p",{children:"The main purpose of this is to create nicer text panel UI."}),Object(p.jsx)("h4",{children:"Contact me"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"DM me on Discord: mrchip#4403"}),Object(p.jsxs)("li",{children:["Email: ",Object(p.jsx)("a",{href:"mailto:mrchip2k@gmail.com",children:"mrchip2k@gmail.com"})]})]}),Object(p.jsx)("p",{className:"highlight",children:"Found a character that works in game and should be included here? Is anything here broken? Have any suggestions or feedback? Feel free to contact me! "}),Object(p.jsx)("h4",{children:"About Telegrama, the font."}),Object(p.jsxs)("p",{children:["The font can be found ",Object(p.jsx)(I,{href:"http://yoworks.com/telegrama/index.html",children:"here"}),"."]}),Object(p.jsx)("p",{children:"Starbase disabled many special characters. This means you will find new characters in the original font linked above, but most that aren't included in this website do not display correctly ingame. (Every character in this website is confirmed to work in Starbase.)"}),Object(p.jsx)("p",{children:"It's not entirely clear to me if its license allows the font to be used in a website like this - if you are the font's author and have an issue with this, please contact me!"}),Object(p.jsx)("h4",{children:"Github repository"}),Object(p.jsxs)("p",{children:["The source code is available ",Object(p.jsx)(I,{href:"https://github.com/mrchip2k/starbase-textpanel-util",children:"here"}),"."]})]})]}),Object(p.jsx)(g,{copyContent:this.state.character,ref:this.copyTextboxRef}),Object(p.jsx)(f,{isVisible:this.state.copiedPopupVisible,left:this.state.copiedPopupX,top:this.state.copiedPopupY}),Object(p.jsx)(y,{})]})}}]),n}(i.a.Component),C=[{name:"Miscellaneous",lines:["\u2039<\xab\u3008\u300a\u300b\u3009\xbb>","\u300c\u300e\u3010\u3013\u3011\u300f\u300d\u3014\u3018\u3015","'\xa6\xb7\u2022\xb0\u2013\u2014\u2015\u2018\u201c\u201d\u2019+\xb1\xd7\xf7\u203b\u25ce\u2660\u2661\u2663\u2664\u2665\u2667\u2669\u266a\u266c","\u2122\xa9\xae\xbf\xa1\xa7$\xa2\xa3\xa5\u20ac\u0131\u0142\u0141\u0152\u0153\u0160\u0161\u0178\u017d\u017e\u03bc","\u2460\u2461\u2462\u2463\u2464\u2465\u2466\u2467\u2468\u2469\u246a\u246b\u246c\u246d\u246e\u246f\u2470"]},{name:"Wide Symbols",lines:["\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a","\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a","\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19","\uff06\uff08\uff09\uff0a\uff0d\uff0f\uff1a\uff1d\uff3b\uff3d\uff5b\uff5d\uffe3"]},{name:"Accents",lines:["^`~\xa8\xaf\xb4\xb8\u02c7\u02d8\u02d9\u02da\u02dc\u02dd","\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcd\xcc\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xdf","\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff"]}];var w=function(){return Object(p.jsx)(N,{database:C})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),F()}},[[18,1,2]]]);
//# sourceMappingURL=main.8552c65c.chunk.js.map