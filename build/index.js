!function(){"use strict";var e,t={259:function(){var e=window.wp.blocks,t=window.wp.element,n=(window.wp.i18n,window.wp.blockEditor),o=window.wp.components,r=JSON.parse('{"u2":"advanced-image-block/advanced-image-block"}');(0,e.registerBlockType)(r.u2,{edit:function(e){let{attributes:r,isSelected:a,setAttributes:l}=e;const i=[{key:"h1",name:"h1",style:{fontSize:"2em",margin:".67em 0"}},{key:"h2",name:"h2",style:{fontSize:"1.5em",margin:".75em 0"}},{key:"h3",name:"h3",style:{fontSize:"1.17em",margin:".83em 0"}},{key:"h4",name:"h4",style:{fontSize:"1em",margin:"1em 0"}},{key:"h5",name:"h5",style:{fontSize:".83em",margin:"1.5em 0"}},{key:"h6",name:"h6",style:{fontSize:".75em",margin:"1.67em 0"}}],{message:s,color:c,size:m,img:u}=r,[f,d]=(0,t.useState)(u||[]),[v,g]=(0,t.useState)(s||""),[h,p]=(0,t.useState)(c||"#000"),[b,k]=(0,t.useState)(m||i[0]);return(0,t.createElement)("div",(0,n.useBlockProps)(),(0,t.createElement)(o.TextControl,{label:"Enter text",value:v,onChange:e=>(e=>{g(e),l({message:e})})(e)}),(0,t.createElement)(o.CustomSelectControl,{__nextUnconstrainedWidth:!0,label:"Choose a size:",options:i,onChange:e=>{let{selectedItem:t}=e;return k((n=t).key),void l({size:n.key});var n},value:i.find((e=>e.key===b))}),(0,t.createElement)("label",null,"Choose a color:"),(0,t.createElement)(o.ColorPalette,{clearable:!1,disableCustomColors:!0,colors:[{name:"black",color:"#000"},{name:"red",color:"#f00"},{name:"white",color:"#fff"},{name:"blue",color:"#00f"}],value:h,onChange:e=>{return p(t=e),void l({color:t});var t}}),(0,t.createElement)("label",null,"Add image:"),(0,t.createElement)(o.FormFileUpload,{multiple:!1,accept:"image/*",onChange:e=>(e=>{e.target.files&&(d(e.target.files),l({image:e.target.files})),console.log(e.target.files)})(e)},"Upload"))},save:function(e){let{attributes:o}=e;const r=n.useBlockProps.save(),{message:a,size:l,color:i}=o,s=React.createElement(l,{style:{color:i}},a);return(0,t.createElement)("div",r,s)}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=function(t,n,r,a){if(!n){var l=1/0;for(m=0;m<e.length;m++){n=e[m][0],r=e[m][1],a=e[m][2];for(var i=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,l=n[0],i=n[1],s=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(s)var m=s(o)}for(t&&t(n);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(m)},n=self.webpackChunkadvanced_image_block=self.webpackChunkadvanced_image_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[431],(function(){return o(259)}));r=o.O(r)}();