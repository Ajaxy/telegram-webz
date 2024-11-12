"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[9689],{21849:(e,t,o)=>{o.d(t,{A:()=>E});var r=o(84051),n=o(13439),a=o(23174),i=o(31481),s=o(90709),c=o(87357),l=o(95807),d=o(14242),u=o(35049),m=o(4961),f=o(11217),p=o(17712),h=o(62587),v=o(83057),g=o(59030),y=o(65843),A=o(88554),w=o(18276);const I=(0,c.x)("Avatar");I.media=I("media"),I.icon=I("icon");const E=(0,r.ph)((e=>{let{className:t,size:o="large",peer:E,photo:S,webPhoto:C,text:k,isSavedMessages:M,isSavedDialog:b,withVideo:P,withStory:N,forPremiumPromo:T,withStoryGap:x,withStorySolid:L,forceFriendStorySolid:F,forceUnreadStorySolid:$,storyViewerOrigin:O,storyViewerMode:z="single-peer",loopIndefinitely:j,noPersonalPhoto:V,onClick:K}=e;const{openStoryViewer:D}=(0,n.ko)(),Q=(0,r.li)(null),B=(0,r.li)(0),G=E&&"isCustomPeer"in E,J=E&&!G?E:void 0,R=J&&(0,s.QKj)(J)?J:void 0,_=J&&(0,s.Du0)(J)?J:void 0,Y=R&&(0,s.PL2)(R),q=J&&(0,s.kEr)(J.id),U=J&&(0,s.QeI)(J.id),W=_?.isForum;let Z,X;const H=P&&S?.isVideo,ee="jumbo"===o;M||Y||(R&&!V||_?Z=(0,s.cP1)(E,ee?"big":void 0):S?(Z=`photo${S.id}?size=m`,S.isVideo&&P&&(X=(0,s.Pgy)(S))):C&&(Z=(0,s.cy4)(C)));const te=(0,r.Kr)((()=>G?E.avatarIcon:M?b?"my-notes":"avatar-saved-messages":Y?"avatar-deleted-account":q?"reply-filled":U?"author-hidden":void 0),[G,M,Y,q,U,E,b]),oe=(0,h.A)(Z,!1,a.qZ.BlobUrl),re=(0,h.A)(X,!H,a.qZ.BlobUrl),ne=Boolean(oe||re),ae=Boolean(re&&H),ie=(0,v.A)(ne),se=(0,p.A)((e=>{const t=e.currentTarget;re&&(j||(B.current+=1,B.current>=3&&(t.style.display="none")))})),ce=(0,g.A)();let le;const de=R?(0,s.YgS)(R):_?(0,s.JsG)(ce,_):k;if(te)le=r.Ay.createElement(w.A,{name:te,className:I.icon,role:"img",ariaLabel:de});else if(ne)le=r.Ay.createElement(r.Ay.Fragment,null,r.Ay.createElement("img",{src:oe,className:(0,c.A)(I.media,"avatar-media",ie,re&&"poster"),alt:de,decoding:"async",draggable:!1}),ae&&r.Ay.createElement(y.A,{canPlay:!0,src:re,className:(0,c.A)(I.media,"avatar-media","poster"),muted:!0,loop:j,autoPlay:!0,disablePictureInPicture:!0,playsInline:!0,draggable:!1,onEnded:se}));else if(R){const e=(0,s.YgS)(R);le=e?(0,d.Qh)(e,2):void 0}else if(_){const e=(0,s.JsG)(ce,_);le=e&&(0,d.Qh)(e,(0,s.L8L)(_.id)?2:1)}else if(G){const e=E.title||ce(E.titleKey);le=e&&(0,d.Qh)(e,1)}else k&&(le=(0,d.Qh)(k,2));const ue=G&&E.isAvatarSquare||W&&!((N||L)&&J?.hasStories),me=G&&E.withPremiumGradient,fe=G&&E.customPeerAvatarColor,pe=(0,c.A)(`Avatar size-${o}`,t,(0,u.y)(E),!E&&k&&"hidden-user",M&&"saved-messages",U&&"anonymous-forwards",Y&&"deleted-account",q&&"replies-bot-account",me&&"premium-gradient-bg",ue&&"forum",(S||C)&&"force-fit",(N&&J?.hasStories||T)&&"with-story-circle",L&&J?.hasStories&&"with-story-solid",L&&F&&"close-friend",L&&(J?.hasUnreadStories||$)&&"has-unread-story",K&&"interactive",!M&&!oe&&"no-photo"),he=Boolean(M||oe),{handleClick:ve,handleMouseDown:ge}=(0,f.Q)((e=>{if(N&&"disabled"!==z&&J?.hasStories)return e.stopPropagation(),void D({peerId:J.id,isSinglePeer:"single-peer"===z,origin:O});K&&K(e,he)}));return r.Ay.createElement("div",{ref:Q,className:pe,id:J?.id&&N?(0,s.kRw)(J.id):void 0,"data-peer-id":J?.id,"data-test-sender-id":i.W75?J?.id:void 0,"aria-label":"string"==typeof le?de:void 0,style:(0,l.A)(fe&&`--color-user: ${fe}`),onClick:ve,onMouseDown:ge},r.Ay.createElement("div",{className:"inner"},"string"==typeof le?(0,m.A)(le,["jumbo"===o?"hq_emoji":"emoji"]):le),N&&J?.hasStories&&r.Ay.createElement(A.A,{peerId:J.id,size:o,withExtraGap:x}))}))},88554:(e,t,o)=>{o.d(t,{$:()=>E,A:()=>I});var r=o(84051),n=o(13439),a=o(29807),i=o(87357),s=o(76023),c=o(38691);const l={micro:1.125*s.$,tiny:2.125*s.$,mini:1.625*s.$,small:2.25*s.$,"small-mobile":2.625*s.$,medium:2.875*s.$,large:3.5*s.$,giant:5.125*s.$,huge:6.125*s.$,jumbo:7.625*s.$},d=["#34C578","#3CA3F3"],u=["#C9EB38","#09C167"],m=["#A667FF","#55A5FF"],f=.125*s.$,p=.0625*s.$,h=2,v=45,g=Math.PI/4,y=2*Math.PI*.1,A=g-y/2,w=g+y/2,I=(0,r.ph)((0,n.EK)(((e,t)=>{let{peerId:o}=t;const r=(0,a._bp)(e,o),n=(0,a.SJA)(e);return{peerStories:r?.byId,storyIds:r?.orderedIds,lastReadId:r?.lastReadId,appTheme:n}}))((function(e){let{size:t="large",className:o,peerStories:n,storyIds:a,lastReadId:s,withExtraGap:d,appTheme:u}=e;const m=(0,r.li)(null),f=(0,c.A)(),p=(0,r.Kr)((()=>(a||[]).reduce(((e,t)=>(e.total+=1,s&&t<=s&&(e.read+=1),e)),{total:0,read:0})),[s,a]),h=(0,r.Kr)((()=>!(!n||!a?.length)&&a.some((e=>{const t=n[e];if(!t||!("isForCloseFriends"in t))return!1;const o=s&&t.id<=s;return t.isForCloseFriends&&!o}))),[s,n,a]);if((0,r.Nf)((()=>{m.current&&E({canvas:m.current,size:l[t]*f,segmentsCount:p.total,color:h?"green":"blue",readSegmentsCount:p.read,withExtraGap:d,readSegmentColor:"dark"===u?"#737373":"#C4C9CC",dpr:f})}),[u,h,t,p.read,p.total,d,f]),!p.total)return;const v=l[t];return r.Ay.createElement("canvas",{ref:m,className:(0,i.A)("story-circle",t,o),style:`max-width: ${v}px; max-height: ${v}px;`})})));function E(e){let{canvas:t,size:o,color:r,segmentsCount:n,readSegmentsCount:a=0,withExtraGap:i=!1,readSegmentColor:c,dpr:g}=e;n>v&&(a=Math.round(a*(v/n)),n=v);const y=Math.max(Math.max(o-l.large*g,0)/g/s.$/1.5,1)*g,I=t.getContext("2d");if(!I)return;t.width=o,t.height=o;const E=o/2,S=(o-f*y)/2,C=2*Math.PI/n,k=h/100*(2*Math.PI),M=I.createLinearGradient(0,0,Math.ceil(o*Math.cos(Math.PI/2)),Math.ceil(o*Math.sin(Math.PI/2))),b="purple"===r?m:"green"===r?u:d;b.forEach(((e,t)=>{M.addColorStop(t/(b.length-1),e)})),I.lineCap="round",I.clearRect(0,0,o,o),Array.from({length:n}).forEach(((e,t)=>{const o=t<a;let r=t*C-Math.PI/2+k/2,s=r+C-(n>1?k:0);if(I.strokeStyle=o?c:M,I.lineWidth=(o?p:f)*y,i){if(r>=A&&s<=w)return;r<A&&s>w?(I.beginPath(),I.arc(E,E,S,w,s),I.stroke(),s=A):r<A&&s>A?s=A:r<w&&s>w&&(r=w)}I.beginPath(),I.arc(E,E,S,r,s),I.stroke()}))}},2578:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(84051),n=o(59030);const a=(0,r.ph)((e=>{let{fakeType:t}=e;const o=(0,n.A)();return r.Ay.createElement("span",{className:"FakeIcon"},o("fake"===t?"FakeMessage":"ScamMessage"))}))},34431:(e,t,o)=>{o.d(t,{A:()=>g});var r=o(84051),n=o(13439),a=o(31481),i=o(90709),s=o(87357),c=o(85982),l=o(83868),d=o(4961),u=o(17712),m=o(59030),f=o(87412),p=o(2578),h=o(9267);const v=()=>r.Ay.createElement("svg",{className:"VerifiedIcon",viewBox:"0 0 24 24"},r.Ay.createElement("path",{d:"M12.3 2.9c.1.1.2.1.3.2.7.6 1.3 1.1 2 1.7.3.2.6.4.9.4.9.1 1.7.2 2.6.2.5 0 .6.1.7.7.1.9.1 1.8.2 2.6 0 .4.2.7.4 1 .6.7 1.1 1.3 1.7 2 .3.4.3.5 0 .8-.5.6-1.1 1.3-1.6 1.9-.3.3-.5.7-.5 1.2-.1.8-.2 1.7-.2 2.5 0 .4-.2.5-.6.6-.8 0-1.6.1-2.5.2-.5 0-1 .2-1.4.5-.6.5-1.3 1.1-1.9 1.6-.3.3-.5.3-.8 0-.7-.6-1.4-1.2-2-1.8-.3-.2-.6-.4-.9-.4-.9-.1-1.8-.2-2.7-.2-.4 0-.5-.2-.6-.5 0-.9-.1-1.7-.2-2.6 0-.4-.2-.8-.4-1.1-.6-.6-1.1-1.3-1.6-2-.4-.4-.3-.5 0-1 .6-.6 1.1-1.3 1.7-1.9.3-.3.4-.6.4-1 0-.8.1-1.6.2-2.5 0-.5.1-.6.6-.6.9-.1 1.7-.1 2.6-.2.4 0 .7-.2 1-.4.7-.6 1.4-1.2 2.1-1.7.1-.2.3-.3.5-.2z",style:"fill: var(--color-fill)"}),r.Ay.createElement("path",{d:"M16.4 10.1l-.2.2-5.4 5.4c-.1.1-.2.2-.4 0l-2.6-2.6c-.2-.2-.1-.3 0-.4.2-.2.5-.6.7-.6.3 0 .5.4.7.6l1.1 1.1c.2.2.3.2.5 0l4.3-4.3c.2-.2.4-.3.6 0 .1.2.3.3.4.5.2 0 .3.1.3.1z",style:"fill: var(--color-checkmark)"})),g=(0,r.ph)((e=>{let{className:t,peer:o,noVerified:g,noFake:y,withEmojiStatus:A,emojiStatusSize:w,isSavedMessages:I,isSavedDialog:E,noLoopLimit:S,canCopyTitle:C,iconElement:k,allowMultiLine:M,onEmojiStatusClick:b,observeIntersection:P}=e;const N=(0,m.A)(),{showNotification:T}=(0,n.ko)(),x="id"in o?o:void 0,L="isCustomPeer"in o?o:void 0,F=x&&(0,i.QKj)(x),$=x&&(F?(0,i.YgS)(x):(0,i.JsG)(N,x)),O=F&&x.isPremium,z=A&&!I&&x,j=(0,u.A)((e=>{$&&C&&((0,l.A)(e),(0,c.eM)($),T({message:(F?"User":"Chat")+" name was copied"}))})),V=(0,r.Kr)((()=>L?L.title||N(L.titleKey):I?N(E?"MyNotes":"SavedMessages"):(0,i.QeI)(x.id)?N("AnonymousForward"):(0,i.kEr)(x.id)?N("RepliesTitle"):(0,i.Rlt)(x.id)?N("VerifyCodesNotifications"):void 0),[L,E,I,N,x]);return r.Ay.createElement("div",{className:(0,s.A)("title","QljEeKI5",t)},r.Ay.createElement("h3",{dir:"auto",role:"button",className:(0,s.A)("fullName","AS54Cntu",!M&&"SgogACy_",C&&"vr53L_9p"),onClick:j},V||(0,d.A)($||"")),!k&&o&&r.Ay.createElement(r.Ay.Fragment,null,!g&&o?.isVerified&&r.Ay.createElement(v,null),!y&&o?.fakeType&&r.Ay.createElement(p.A,{fakeType:o.fakeType}),z&&x.emojiStatus&&r.Ay.createElement(f.A,{documentId:x.emojiStatus.documentId,size:w,loopLimit:S?void 0:a.J$1,observeIntersectionForLoading:P,onClick:b}),z&&!x.emojiStatus&&O&&r.Ay.createElement(h.A,null)),k)}))},35049:(e,t,o)=>{o.d(t,{a:()=>a,y:()=>n});var r=o(90709);function n(e,t,o){if(!e){if(!o)return;return t?"peer-color-count-1":"peer-color-0"}if("isCustomPeer"in e){if(void 0===e.peerColorId)return;return`peer-color-${e.peerColorId}`}return t?`peer-color-count-${(0,r.PXe)(e)}`:`peer-color-${(0,r.ZgW)(e)}`}function a(e){return`peer-color-${e.color}`}},10722:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(84051),n=o(61433),a=o(66644),i=o(82393),s=o(17712);function c(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}const l=(e,t,o,l,d,u)=>{const[m,f]=(0,r.J0)(!1),[p,h]=(0,r.J0)(void 0),[v,g]=(0,r.J0)(void 0),y=(0,s.A)((e=>{t||2!==e.button||(0,a.RK)((()=>{(0,n.YM)(e.target,"no-selection")}))})),A=(0,s.A)((e=>{(0,a.RK)((()=>{(0,n.HW)(e.target,"no-selection")})),t||o&&e.target.matches("a[href]")||(e.preventDefault(),e.stopPropagation(),p||(f(!0),h({x:e.clientX,y:e.clientY}),g(e.target)))})),w=(0,s.A)((()=>{f(!1)})),I=(0,s.A)((()=>{h(void 0)}));return(0,r.vJ)((()=>{if(t||!i.TF||l||d&&!d())return;const r=e.current;if(!r)return;let n;const a=()=>{n&&(clearTimeout(n),n=void 0)},s=e=>{t||(u&&e.stopPropagation(),a(),n=window.setTimeout((()=>(e=>{a();const{clientX:t,clientY:r,target:n}=e.touches[0];p||o&&n.matches("a[href]")||(document.addEventListener("touchend",(e=>{i.pz&&i._7&&setTimeout((()=>{document.removeEventListener("mousedown",c,{capture:!0}),document.removeEventListener("click",c,{capture:!0})}),100),c(e)}),{once:!0,capture:!0}),i._7&&i.pz&&(document.addEventListener("mousedown",c,{once:!0,capture:!0}),document.addEventListener("click",c,{once:!0,capture:!0})),f(!0),h({x:t,y:r}))})(e)),200))};return r.addEventListener("touchstart",s,{passive:!0}),r.addEventListener("touchcancel",a,!0),r.addEventListener("touchend",a,!0),r.addEventListener("touchmove",a,{passive:!0}),()=>{a(),r.removeEventListener("touchstart",s),r.removeEventListener("touchcancel",a,!0),r.removeEventListener("touchend",a,!0),r.removeEventListener("touchmove",a)}}),[p,t,l,e,o,d,u]),{isContextMenuOpen:m,contextMenuAnchor:p,contextMenuTarget:v,handleBeforeContextMenu:y,handleContextMenu:A,handleContextMenuClose:w,handleContextMenuHide:I}}},11217:(e,t,o)=>{o.d(t,{Q:()=>a});var r=o(82393),n=o(17712);function a(e){const t=(0,n.A)((t=>{"mousedown"===t.type&&t.button!==r.w3.Main||e(t)}));return r.TF?{handleClick:e?t:void 0}:{handleMouseDown:e?t:void 0}}},96374:(e,t,o)=>{o.d(t,{A:()=>d});var r=o(84051),n=o(89925),a=o(87894),i=o(30857),s=o(17712),c=o(73767);function l(e,t,o,r){const{length:a}=e,i=r?e.indexOf(r):0,s=t===n.TN.Forwards?i:i+1||a,c=Math.max(0,s-o),l=s+o-1,d=e.slice(Math.max(0,c),l+1);let u,m;switch(t){case n.TN.Forwards:u=s>=0,m=c>=0;break;case n.TN.Backwards:u=s<a,m=l<=a-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:m,newIsOnTop:d[0]===e[0],fromOffset:c}}const d=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;const u=(0,r.li)(),m=(0,r.li)();if(!m.current&&t&&!o){const{newViewportIds:e,newIsOnTop:o,fromOffset:r}=l(t,n.TN.Forwards,d,t[0]);m.current={viewportIds:e,isOnTop:o,offset:r}}const f=(0,i.A)();o&&(u.current={});const p=(0,c.A)(t),h=(0,c.A)(o);if(!t||o||t===p&&o===h)t||(m.current=void 0);else{const{viewportIds:e,isOnTop:o}=m.current||{},r=e&&!o?e[Math.round(e.length/2)]:void 0,i=r&&t.includes(r)?r:t[0],{offsetId:s=i,direction:c=n.TN.Forwards}=u.current||{},{newViewportIds:f,newIsOnTop:p,fromOffset:h}=l(t,c,d,s);u.current={},e&&(0,a.k)(e,f)||(m.current={viewportIds:f,isOnTop:p,offset:h})}const v=(0,s.A)((o=>{let{direction:r,noScroll:i}=o;const{viewportIds:s}=m.current||{},c=s?r===n.TN.Backwards?s[s.length-1]:s[0]:void 0;if(!t)return void(e&&e({offsetId:c}));const{newViewportIds:p,areSomeLocal:h,areAllLocal:v,newIsOnTop:g,fromOffset:y}=l(t,r,d,c);!h||s&&(0,a.k)(s,p)||(m.current={viewportIds:p,isOnTop:g,offset:y},f()),!v&&e&&(i||(u.current={...u.current,direction:r,offsetId:c}),e({offsetId:c}))}));return o?[t]:[m.current?.viewportIds,v,m.current?.offset]}},37859:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(84051);const n=(e,t,o)=>{const n=(0,r.li)();return(0,r.Nf)((()=>{const o=n.current;return n.current=t,e(o||[])}),t,o)}},32610:(e,t,o)=>{o.d(t,{A:()=>a});const r=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],n=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];function a(e,t,o,a,i,s,c){if(Number.isNaN(s)||s<1)return;s|=0,Number.isNaN(c)&&(c=1),(c|=0)>3&&(c=3),c<1&&(c=1);const l=e.getImageData(t,o,a,i),d=l.data;let u,m,f,p,h,v,g,y,A,w,I,E,S=a-1,C=i-1,k=s+1,M=[],b=[],P=[],N=r[s],T=n[s],x=[],L=[];for(;c-- >0;){for(E=I=0,h=0;h<i;h++){for(u=d[E]*k,m=d[E+1]*k,f=d[E+2]*k,v=1;v<=s;v++)g=E+((v>S?S:v)<<2),u+=d[g++],m+=d[g++],f+=d[g++];for(p=0;p<a;p++)M[I]=u,b[I]=m,P[I]=f,0==h&&(x[p]=((g=p+k)<S?g:S)<<2,L[p]=(g=p-s)>0?g<<2:0),y=E+x[p],A=E+L[p],u+=d[y++]-d[A++],m+=d[y++]-d[A++],f+=d[y++]-d[A++],I++;E+=a<<2}for(p=0;p<a;p++){for(w=p,u=M[w]*k,m=b[w]*k,f=P[w]*k,v=1;v<=s;v++)w+=v>C?0:a,u+=M[w],m+=b[w],f+=P[w];for(I=p<<2,h=0;h<i;h++)d[I]=u*N>>>T,d[I+1]=m*N>>>T,d[I+2]=f*N>>>T,0==p&&(x[h]=((g=h+k)<C?g:C)*a,L[h]=(g=h-s)>0?g*a:0),y=p+x[h],A=p+L[h],u+=M[y]-M[A],m+=b[y]-b[A],f+=P[y]-P[A],I+=a<<2}}e.putImageData(l,t,o)}},14680:(e,t,o)=>{o.d(t,{FD:()=>n,ZJ:()=>i,wb:()=>a});let r=0;function n(){r+=1}function a(){r-=1}function i(){return r>0}},91034:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(84051);function n(e){return function(t){const o=(0,r.li)(t);return t.isOpen?o.current=t:o.current={...o.current,isOpen:!1},e(o.current)}}},9718:(e,t,o)=>{o.d(t,{A:()=>i,E:()=>a});var r=o(41402),n=o(82393);function a(e){e.style.display="none",(0,r.A)(e),e.style.display=""}const i=(e,t)=>{n.pz&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),n.pz&&(e.style.overflow="")}},29441:(e,t,o)=>{function r(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const o=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!o.length)return;const r=o.findIndex((e=>e.isSameNode(document.activeElement)));let n=0;r>=0&&(n=t.shiftKey?r>0?r-1:o.length-1:r<o.length-1?r+1:0),o[n].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}o.d(t,{A:()=>r})}}]);
//# sourceMappingURL=9689.8c5e5cd90bd3feb812c7.js.map