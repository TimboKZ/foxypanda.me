/* http://prismjs.com/download.html?themes=prism-okaidia&plugins=line-highlight+line-numbers+show-language+autoloader+command-line */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),l=0;r=i[l++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s=t.textContent,u={element:t,language:i,grammar:l,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var c=new Worker(n.filename);c.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},tokenize:function(e,t){var a=n.Token,r=[e],i=t.rest;if(i){for(var l in i)t[l]=i[l];delete t.rest}e:for(var l in t)if(t.hasOwnProperty(l)&&t[l]){var o=t[l];o="Array"===n.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],c=u.inside,g=!!u.lookbehind,h=!!u.greedy,f=0,d=u.alias;if(h&&!u.pattern.global){var p=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,p+"g")}u=u.pattern||u;for(var m=0,y=0;m<r.length;y+=(r[m].matchedStr||r[m]).length,++m){var v=r[m];if(r.length>e.length)break e;if(!(v instanceof a)){u.lastIndex=0;var b=u.exec(v),k=1;if(!b&&h&&m!=r.length-1){if(u.lastIndex=y,b=u.exec(e),!b)break;for(var w=b.index+(g?b[1].length:0),_=b.index+b[0].length,A=m,S=y,P=r.length;P>A&&_>S;++A)S+=(r[A].matchedStr||r[A]).length,w>=S&&(++m,y=S);if(r[m]instanceof a||r[A-1].greedy)continue;k=A-m,v=e.slice(y,S),b.index-=y}if(b){g&&(f=b[1].length);var w=b.index+f,b=b[0].slice(f),_=w+b.length,x=v.slice(0,w),O=v.slice(_),j=[m,k];x&&j.push(x);var N=new a(l,c?n.tokenize(b,c):b,d,b,h);j.push(N),O&&j.push(O),Array.prototype.splice.apply(r,j)}}}}}return r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.matchedStr=a||null,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}n.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=(o?" ":"")+s+'="'+(i.attributes[s]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
!function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function n(e,n,i){for(var o,a=n.replace(/\s+/g,"").split(","),l=+e.getAttribute("data-line-offset")||0,d=r()?parseInt:parseFloat,c=d(getComputedStyle(e).lineHeight),s=0;o=a[s++];){o=o.split("-");var u=+o[0],m=+o[1]||u,h=document.createElement("div");h.textContent=Array(m-u+2).join(" \n"),h.setAttribute("aria-hidden","true"),h.className=(i||"")+" line-highlight",t(e,"line-numbers")||(h.setAttribute("data-start",u),m>u&&h.setAttribute("data-end",m)),h.style.top=(u-l-1)*c+"px",t(e,"line-numbers")?e.appendChild(h):(e.querySelector("code")||e).appendChild(h)}}function i(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var i=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(i&&!document.getElementById(t)){var r=t.slice(0,t.lastIndexOf(".")),o=document.getElementById(r);o&&(o.hasAttribute("data-line")||o.setAttribute("data-line",""),n(o,i,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var r=function(){var e;return function(){if("undefined"==typeof e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),o=0;Prism.hooks.add("complete",function(t){var r=t.element.parentNode,a=r&&r.getAttribute("data-line");r&&a&&/pre/i.test(r.nodeName)&&(clearTimeout(o),e(".line-highlight",r).forEach(function(e){e.parentNode.removeChild(e)}),n(r,a),o=setTimeout(i,1))}),window.addEventListener&&window.addEventListener("hashchange",i)}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,s=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(s.test(t.className)||s.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){s.test(e.element.className)&&(e.element.className=e.element.className.replace(s,"")),s.test(t.className)||(t.className+=" line-numbers");var n,a=e.code.match(/\n(?!$)/g),l=a?a.length+1:1,r=new Array(l+1);r=r.join("<span></span>"),n=document.createElement("span"),n.setAttribute("aria-hidden","true"),n.className="line-numbers-rows",n.innerHTML=r,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}}})}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e={html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",asciidoc:"AsciiDoc",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",graphql:"GraphQL",http:"HTTP",inform7:"Inform 7",json:"JSON",latex:"LaTeX",livescript:"LiveScript",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",parigp:"PARI/GP",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",properties:".properties",protobuf:"Protocol Buffers",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",xojo:"Xojo (REALbasic)",yaml:"YAML"};Prism.hooks.add("before-highlight",function(s){var a=s.element.parentNode;if(a&&/pre/i.test(a.nodeName)){var t,i,r=a.getAttribute("data-language")||e[s.language]||s.language.substring(0,1).toUpperCase()+s.language.substring(1),p=a.previousSibling;p&&/\s*\bprism-show-language\b\s*/.test(p.className)&&p.firstChild&&/\s*\bprism-show-language-label\b\s*/.test(p.firstChild.className)?i=p.firstChild:(t=document.createElement("div"),i=document.createElement("div"),i.className="prism-show-language-label",t.className="prism-show-language",t.appendChild(i),a.parentNode.insertBefore(t,a)),i.innerHTML=r}})}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.createElement){var e={javascript:"clike",actionscript:"javascript",aspnet:"markup",bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",fsharp:"clike",glsl:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup",haxe:"clike",jade:"javascript",java:"clike",kotlin:"clike",less:"css",markdown:"markup",nginx:"clike",objectivec:"c",parser:"markup",php:"clike","php-extras":"php",processing:"clike",protobuf:"clike",qore:"clike",jsx:["markup","javascript"],ruby:"clike",sass:"css",scss:"css",scala:"java",smarty:"markup",swift:"clike",textile:"markup",twig:"markup",typescript:"javascript",wiki:"markup"},c={},a=Prism.plugins.autoloader={languages_path:"components/",use_minified:!0},s=function(e,c,a){var s=document.createElement("script");s.src=e,s.async=!0,s.onload=function(){document.body.removeChild(s),c&&c()},s.onerror=function(){document.body.removeChild(s),a&&a()},document.body.appendChild(s)},r=function(e){return a.languages_path+"prism-"+e+(a.use_minified?".min":"")+".js"},n=function(e,a){var s=c[e];s||(s=c[e]={});var r=a.getAttribute("data-dependencies");!r&&a.parentNode&&"pre"===a.parentNode.tagName.toLowerCase()&&(r=a.parentNode.getAttribute("data-dependencies")),r=r?r.split(/\s*,\s*/g):[],i(r,function(){t(e,function(){Prism.highlightElement(a)})})},i=function(e,c,a){"string"==typeof e&&(e=[e]);var s=0,r=e.length,n=function(){r>s?t(e[s],function(){s++,n()},function(){a&&a(e[s])}):s===r&&c&&c(e)};n()},t=function(a,n,t){var u=function(){var e=!1;a.indexOf("!")>=0&&(e=!0,a=a.replace("!",""));var i=c[a];if(i||(i=c[a]={}),n&&(i.success_callbacks||(i.success_callbacks=[]),i.success_callbacks.push(n)),t&&(i.error_callbacks||(i.error_callbacks=[]),i.error_callbacks.push(t)),!e&&Prism.languages[a])l(a);else if(!e&&i.error)o(a);else if(e||!i.loading){i.loading=!0;var u=r(a);s(u,function(){i.loading=!1,l(a)},function(){i.loading=!1,i.error=!0,o(a)})}},p=e[a];p&&p.length?i(p,u):u()},l=function(e){c[e]&&c[e].success_callbacks&&c[e].success_callbacks.length&&c[e].success_callbacks.forEach(function(c){c(e)})},o=function(e){c[e]&&c[e].error_callbacks&&c[e].error_callbacks.length&&c[e].error_callbacks.forEach(function(c){c(e)})};Prism.hooks.add("complete",function(e){e.element&&e.language&&!e.grammar&&n(e.language,e.element)})}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,a=/\s*\bcommand-line\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(a.test(t.className)||a.test(e.element.className))&&!e.element.querySelector(".command-line-prompt")){a.test(e.element.className)&&(e.element.className=e.element.className.replace(a,"")),a.test(t.className)||(t.className+=" command-line");var n=new Array(1+e.code.split("\n").length),s=t.getAttribute("data-prompt")||"";if(""!==s)n=n.join('<span data-prompt="'+s+'"></span>');else{var r=t.getAttribute("data-user")||"user",l=t.getAttribute("data-host")||"localhost";n=n.join('<span data-user="'+r+'" data-host="'+l+'"></span>')}var m=document.createElement("span");m.className="command-line-prompt",m.innerHTML=n;var o=t.getAttribute("data-output")||"";o=o.split(",");for(var i=0;i<o.length;i++){var d=o[i].split("-"),p=parseInt(d[0]),c=p;if(2===d.length&&(c=parseInt(d[1])),!isNaN(p)&&!isNaN(c))for(var u=p;c>=u&&u<=m.children.length;u++){var N=m.children[u-1];N.removeAttribute("data-user"),N.removeAttribute("data-host"),N.removeAttribute("data-prompt")}}e.element.innerHTML=m.outerHTML+e.element.innerHTML}}})}();