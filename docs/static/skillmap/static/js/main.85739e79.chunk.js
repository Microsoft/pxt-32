(this.webpackJsonpskillsmap=this.webpackJsonpskillsmap||[]).push([[0],{33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(2),i=r.n(n),c=r(12),s=r.n(c),o=r(8),d=r(13),l=r(11),u=r(1),p="ADD_SKILL_MAP",v="CLEAR_SKILL_MAPS",h="CHANGE_SELECTED_ITEM",m="SET_HEADERID_FOR_ACTIVITY",b="OPEN_ACTIVITY",f="CLOSE_ACTIVITY",j="SAVE_AND_CLOSE_ACTIVITY",y="RESTART_ACTIVITY",O="SET_USER",g="SET_PAGE_TITLE",k="SET_PAGE_DESCRIPTION",x="SET_PAGE_INFO_URL",w="SHOW_COMPLETION_MODAL",I="SHOW_RESTART_ACTIVITY_MODAL",C="HIDE_MODAL",S=r(5),A=r.n(S),N=r(10),T="https://www.makecode.com/api/md";function E(){var e={cmd:"",arg:""},t=/^#(\w+)(:([:./\-+=\w]+))?/.exec(window.location.hash||"#github:shakao-test/skill-map-test/main/test");return t&&(e={cmd:t[1],arg:t[3]||""}),e}function M(e,t){return P.apply(this,arguments)}function P(){return(P=Object(N.a)(A.a.mark((function e(t,r){var a,n,i,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&r){e.next=2;break}return e.abrupt("return","");case 2:e.t0=t,e.next="docs"===e.t0?5:"github"===e.t0?10:16;break;case 5:return r=r.trim().replace(/^[\\/]/i,"").replace(/\.md$/i,""),n=(null===(a=window.pxtTargetBundle)||void 0===a?void 0:a.name)||"arcade",e.next=9,L("".concat(T,"/").concat(n,"/").concat(r));case 9:return e.abrupt("return",e.sent);case 10:return i=r.trim(),(c=/^(?:(?:https?:\/\/)?[^/]*?github\.com)?(?:\/)?([^/.]+)\/([^/]+)\/(?:blob\/)?([^/]+)\/([^/.]+?)(?:\.md)?$/gi.exec(i))&&(i="https://raw.githubusercontent.com/".concat(c[1],"/").concat(c[2],"/").concat(c[3],"/").concat(c[4],".md")),e.next=15,L(i);case 15:return e.abrupt("return",e.sent);case 16:return e.next=18,L(r);case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return new Promise((function(t,r){var a=new XMLHttpRequest;a.addEventListener("error",(function(e){r(e)})),a.addEventListener("load",(function(){try{t(a.responseText)}catch(e){r(e)}})),a.open("GET",e),a.send()}))}function R(){var e=new Uint8Array(4);return function(e){if(window.crypto)window.crypto.getRandomValues(e);else for(var t=0;t<e.length;++t)e[t]=Math.floor(255*Math.random())}(e),new Uint32Array(e.buffer)[0]}function U(){function e(){return(65536|R()).toString(16).slice(-4)}return e()+e()+"-"+e()+"-4"+e().slice(-3)+"-"+e()+"-"+e()+e()+e()}function D(){return"localhost"===window.location.hostname}function H(e){return"".concat(D()?"":"/static/skillmap","/").concat(e.replace(/^\//,""))}var _=r(9);function W(e,t,r){return t.root.activityId===r||function a(n){if(function(e,t,r){var a;return!!(null===(a=V(e,t,r))||void 0===a?void 0:a.isCompleted)}(e,t.mapId,n.activityId)){if(n.next.some((function(e){return e.activityId===r})))return!0;var i,c=Object(_.a)(n.next);try{for(c.s();!(i=c.n()).done;){var s=i.value;if(a(s))return!0}}catch(o){c.e(o)}finally{c.f()}}return!1}(t.root)}function V(e,t,r){var a;return null===(a=e.mapProgress[t])||void 0===a?void 0:a.activityState[r]}var B={title:"Game Maker Guide",description:"Level up your game making skills by completing the tutorials in this guide.",user:{isDebug:!0,id:U(),mapProgress:{},completedTags:{}},maps:{}};function q(e,t,r,a,n,i){var c,s=V(e,t,r);s||(s={isCompleted:!1,activityId:r,currentStep:n,maxSteps:i,headerId:a});var o=s.isCompleted||void 0!==n&&void 0!==i&&n>=i;return Object(u.a)(Object(u.a)({},e),{},{mapProgress:Object(u.a)(Object(u.a)({},e.mapProgress),{},Object(l.a)({},t,Object(u.a)(Object(u.a)({},e.mapProgress[t]||{mapId:t}),{},{activityState:Object(u.a)(Object(u.a)({},(null===(c=e.mapProgress[t])||void 0===c?void 0:c.activityState)||{}),{},Object(l.a)({},r,Object(u.a)(Object(u.a)({},s),{},{headerId:a,currentStep:n,maxSteps:i,isCompleted:o})))})))})}function F(e,t,r){var a,n=V(e,t,r);return n||(n={isCompleted:!1,activityId:r,headerId:"",currentStep:0}),Object(u.a)(Object(u.a)({},e),{},{mapProgress:Object(u.a)(Object(u.a)({},e.mapProgress),{},Object(l.a)({},t,Object(u.a)(Object(u.a)({},e.mapProgress[t]||{mapId:t}),{},{activityState:Object(u.a)(Object(u.a)({},(null===(a=e.mapProgress[t])||void 0===a?void 0:a.activityState)||{}),{},Object(l.a)({},r,Object(u.a)(Object(u.a)({},n),{},{isCompleted:!0})))})))})}var K=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case p:return Object(u.a)(Object(u.a)({},t),{},{user:Object(u.a)(Object(u.a)({},t.user),{},{mapProgress:Object(u.a)(Object(u.a)({},t.user.mapProgress),{},Object(l.a)({},r.map.mapId,{mapId:r.map.mapId,activityState:{}}))}),maps:Object(u.a)(Object(u.a)({},t.maps),{},Object(l.a)({},r.map.mapId,r.map))});case v:return Object(u.a)(Object(u.a)({},t),{},{maps:{}});case h:return Object(u.a)(Object(u.a)({},t),{},{selectedItem:r.id});case b:return Object(u.a)(Object(u.a)({},t),{},{editorView:{currentMapId:r.mapId,currentActivityId:r.activityId,state:"active",currentHeaderId:null===(e=V(t.user,r.mapId,r.activityId))||void 0===e?void 0:e.headerId}});case j:return Object(u.a)(Object(u.a)({},t),{},{editorView:Object(u.a)(Object(u.a)({},t.editorView),{},{state:"saving"})});case f:return Object(u.a)(Object(u.a)({},t),{},{editorView:void 0,user:r.finished?F(t.user,t.editorView.currentMapId,t.editorView.currentActivityId):t.user});case y:return Object(u.a)(Object(u.a)({},t),{},{modal:void 0,editorView:{state:"active",currentMapId:r.mapId,currentActivityId:r.activityId},user:q(t.user,r.mapId,r.activityId)});case m:return t.editorView?Object(u.a)(Object(u.a)({},t),{},{editorView:Object(u.a)(Object(u.a)({},t.editorView),{},{currentHeaderId:r.id}),user:q(t.user,t.editorView.currentMapId,t.editorView.currentActivityId,r.id,r.currentStep,r.maxSteps)}):t;case O:return Object(u.a)(Object(u.a)({},t),{},{user:r.user});case g:return Object(u.a)(Object(u.a)({},t),{},{title:r.title});case k:return Object(u.a)(Object(u.a)({},t),{},{description:r.description});case x:return Object(u.a)(Object(u.a)({},t),{},{infoUrl:r.infoUrl});case w:return Object(u.a)(Object(u.a)({},t),{},{modal:{type:"completion",currentMapId:r.mapId,currentActivityId:r.activityId}});case I:return Object(u.a)(Object(u.a)({},t),{},{modal:{type:"restart-warning",currentMapId:r.mapId,currentActivityId:r.activityId}});case C:return Object(u.a)(Object(u.a)({},t),{},{modal:void 0});default:return t}},G=Object(d.b)(K),Y=r(3),Q=r(4),$=r(7),z=r(6),J=function(e,t){return{type:b,mapId:e,activityId:t}},X=function(){return{type:j}},Z=function(){return{type:C}},ee=function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(){var e;Object(Y.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onBackClicked=function(){e.props.dispatchSaveAndCloseActivity()},e}return Object(Q.a)(r,[{key:"render",value:function(){var e=this.props.activityOpen;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("div",{className:"header-left",children:e?Object(a.jsx)("i",{className:"icon arrow left",role:"button",onClick:this.onBackClicked}):Object(a.jsx)("div",{className:"header-logo",children:Object(a.jsx)("img",{src:H("assets/logo.svg"),alt:"MakeCode Logo"})})}),Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)("div",{className:"header-right",children:Object(a.jsx)("div",{className:"header-org-logo",children:Object(a.jsx)("img",{src:H("assets/microsoft.png"),alt:"Microsoft Logo"})})})]})}}]),r}(n.Component);var te={dispatchSaveAndCloseActivity:X},re=Object(o.b)((function(e,t){return e?{activityOpen:!!e.editorView}:{}}),te)(ee),ae=function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(){return Object(Y.a)(this,r),t.apply(this,arguments)}return Object(Q.a)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.description,n=e.icon;return Object(a.jsx)("div",{className:"banner",children:Object(a.jsxs)("div",{className:"banner-card",children:[Object(a.jsx)("i",{className:"icon ".concat(n)}),Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsx)("div",{className:"banner-title",children:t}),Object(a.jsx)("div",{className:"banner-description",children:r})]})]})})}}]),r}(n.Component);var ne=Object(o.b)((function(e,t){return{title:e.title,description:e.description}}))(ae),ie=(r(33),function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(){var e;Object(Y.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleModalClick=function(e){e.stopPropagation(),e.preventDefault()},e.handleCloseClick=function(){e.props.onClose&&e.props.onClose(),e.setState({visible:!1})},e}return Object(Q.a)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.actions;return Object(a.jsx)("div",{className:"modal-overlay",onClick:this.handleCloseClick,children:Object(a.jsxs)("div",{className:"modal",onClick:this.handleModalClick,children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("div",{className:"modal-title",children:t}),Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)("div",{className:"modal-close-icon",onClick:this.handleCloseClick,children:Object(a.jsx)("i",{className:"icon close"})})]}),Object(a.jsx)("div",{className:"modal-body",children:this.props.children}),r&&r.length>0&&Object(a.jsx)("div",{className:"modal-actions",children:r.map((function(e,t){return Object(a.jsx)("div",{className:"modal-button ".concat(e.className),onClick:e.onClick,children:e.label},t)}))})]})})}}]),r}(n.Component)),ce=function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(){return Object(Y.a)(this,r),t.apply(this,arguments)}return Object(Q.a)(r,[{key:"render",value:function(){var e=this.props,t=e.activity,r=e.type,n=e.completionType;if(!t&&"map"!==n)return Object(a.jsx)("div",{});switch(r){case"completion":return this.renderCompletionModal();case"restart-warning":return this.renderRestartWarning();default:return Object(a.jsx)("div",{})}}},{key:"renderCompletionModal",value:function(){var e=this.props,t=e.type,r=e.displayName,n=e.dispatchHideModal,i=e.completionType,c=e.actions;if(!t)return Object(a.jsx)("div",{});var s="activity"===i?"Activity Complete!":"Path Complete!",o="Good work! You've completed {0}. Keep going!".split("{0}");return Object(a.jsxs)(ie,{title:s,actions:c,onClose:function(){return n()},children:[o[0],Object(a.jsx)("strong",{children:r}),o[1]]})}},{key:"renderRestartWarning",value:function(){var e=this.props,t=e.mapId,r=e.activity,n=e.dispatchHideModal,i=e.dispatchRestartActivity,c="Are you sure you want to restart {0}? You won't lose your map progress but any code you wrote will be deleted.".split("{0}"),s=[{label:"CANCEL",onClick:function(){return n()}},{label:"RESTART",onClick:function(){i(t,r.activityId)}}];return Object(a.jsxs)(ie,{title:"Restart Activity?",actions:s,onClose:function(){return n()},children:[c[0],Object(a.jsx)("strong",{children:r.displayName}),c[1]]})}}]),r}(n.Component);var se={dispatchHideModal:Z,dispatchRestartActivity:function(e,t){return{type:y,mapId:e,activityId:t}},dispatchOpenActivity:J},oe=Object(o.b)((function(e,t){if(!e)return{};var r,a,n,i=e.modal||{},c=i.currentMapId,s=i.currentActivityId,o=i.type,d=[];if(c){var l=e.maps[c];if(s){var u,p=l.activities[s];n="activity",a=p.displayName,r=null===(u=p.next)||void 0===u?void 0:u[0].activityId,d.push({label:"NEXT",onClick:function(){Z(),J(c,r||"")}})}else n="map",a=l.displayName,d.push({label:"CERTIFICATE",onClick:function(){return window.open(l.completionUrl)}})}return{type:o,completionType:n,displayName:a,nextActivityId:r,actions:d,mapId:c,activity:c&&s?e.maps[c].activities[s]:void 0}}),se)(ce);function de(e){var t=e.label;return Object(a.jsx)("span",{children:t})}function le(e){var t=e.item,r=e.itemTemplate,n=e.selected,i=e.className,c=e.onSelect,s=r||de;return Object(a.jsx)("div",{className:"carousel-item ".concat(n?"selected":""," ").concat(i||""),onClick:function(){c&&c(t.id)},children:Object(a.jsx)(s,Object(u.a)({},t))})}r(34);var ue=function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(e){var a;return Object(Y.a)(this,r),(a=t.call(this,e)).scrollMargin=5,a.carouselRef=void 0,a.handleLeftArrowClick=function(){a.carouselRef.scrollBy({left:-window.innerWidth/2})},a.handleRightArrowClick=function(){a.carouselRef.scrollBy({left:window.innerWidth/2})},a.handleScroll=function(){var e=a.carouselRef.scrollLeft;a.setState({showLeft:e>a.scrollMargin,showRight:a.carouselRef.scrollWidth-a.carouselRef.clientWidth-e>a.scrollMargin})},a.state={showLeft:!1,showRight:!0},a}return Object(Q.a)(r,[{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("resize",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.props,r=t.title,n=t.items,i=t.selectedItem,c=t.itemTemplate,s=t.itemClassName,o=t.onItemSelect,d=t.prependChildren,l=t.appendChildren,u=this.state,p=u.showLeft,v=u.showRight;return Object(a.jsxs)("div",{className:"carousel",children:[r&&Object(a.jsx)("div",{className:"carousel-title",children:r}),p&&Object(a.jsx)("div",{className:"carousel-arrow left",onClick:this.handleLeftArrowClick,children:Object(a.jsx)("i",{className:"icon chevron left"})}),Object(a.jsx)("div",{className:"carousel-items",children:Object(a.jsxs)("div",{className:"carousel-items-inner",onScroll:this.handleScroll,ref:function(t){return e.carouselRef=t},children:[d,n.map((function(e,t){return Object(a.jsx)(le,{className:s,item:e,itemTemplate:c,selected:i===e.id,onSelect:o},t)})),l]})}),v&&Object(a.jsx)("div",{className:"carousel-arrow right",onClick:this.handleRightArrowClick,children:Object(a.jsx)("i",{className:"icon chevron right"})})]})}}]),r}(n.Component),pe=(r(35),function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(){var e;Object(Y.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleActionButtonClick=function(){var t=e.props,r=t.status,a=t.mapId,n=t.id,i=t.dispatchOpenActivity;switch(r){case"locked":break;case"completed":case"inprogress":case"notstarted":default:return i(a,n)}},e.handleRestartButtonClick=function(){var t=e.props,r=t.mapId,a=t.id;(0,t.dispatchShowRestartActivityWarning)(r,a)},e}return Object(Q.a)(r,[{key:"getSkillCardActionText",value:function(){switch(this.props.status){case"locked":return"LOCKED";case"completed":return"VIEW CODE";case"inprogress":return"CONTINUE";case"notstarted":default:return"START"}}},{key:"render",value:function(){var e=this.props,t=e.label,r=e.description,n=e.imageUrl,i=e.tags,c=e.status,s=e.currentStep,o=e.maxSteps;return Object(a.jsxs)("div",{className:"skill-card ".concat(c||""),children:[Object(a.jsxs)("div",{className:"skill-card-display",children:[Object(a.jsx)("div",{className:"skill-card-image",children:n?Object(a.jsx)("img",{src:n,alt:"Preview of activity content"}):Object(a.jsx)("i",{className:"icon ".concat("locked"!==c?"game":"")})}),Object(a.jsxs)("div",{className:"skill-card-label",children:[Object(a.jsxs)("div",{className:"skill-card-title",children:["completed"===c&&Object(a.jsx)("i",{className:"icon check circle"}),"inprogress"===c&&o&&Object(a.jsx)("span",{className:"circular-label",children:"".concat(s,"/").concat(o)}),Object(a.jsx)("span",{children:t})]}),Object(a.jsx)("div",{className:"skill-card-tags",children:null===i||void 0===i?void 0:i.map((function(e,t){return Object(a.jsx)("div",{children:e},t)}))})]}),"locked"===c&&Object(a.jsx)("div",{className:"skill-card-overlay",children:Object(a.jsx)("i",{className:"icon lock"})})]}),Object(a.jsxs)("div",{className:"skill-card-info",children:[Object(a.jsx)("div",{className:"skill-card-title",children:t}),Object(a.jsx)("div",{className:"skill-card-description",children:r}),Object(a.jsx)("div",{className:"spacer"}),Object(a.jsxs)("div",{className:"skill-card-action",children:["completed"===c&&Object(a.jsx)("div",{className:"skill-card-button-icon",role:"button",onClick:this.handleRestartButtonClick,children:Object(a.jsx)("i",{className:"xicon redo"})}),Object(a.jsx)("div",{className:"skill-card-button",role:"button",onClick:this.handleActionButtonClick,children:this.getSkillCardActionText()})]})]})]})}}]),r}(n.Component));var ve={dispatchOpenActivity:J,dispatchShowRestartActivityWarning:function(e,t){return{type:I,mapId:e,activityId:t}}},he=Object(o.b)((function(e,t){var r,a,n,i=e.user&&(null===(r=e.maps)||void 0===r?void 0:r[t.mapId])&&W(e.user,e.maps[t.mapId],t.id)?"notstarted":"locked";if(e.user){var c=V(e.user,t.mapId,t.id);c&&(c.isCompleted?i="completed":c.headerId&&(i="inprogress",a=null===c||void 0===c?void 0:c.currentStep,n=null===c||void 0===c?void 0:c.maxSteps))}return{status:i,currentStep:a,maxSteps:n}}),ve)(pe),me=function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(e){var a;return Object(Y.a)(this,r),(a=t.call(this,e)).items=void 0,a.onItemSelect=function(e){a.props.dispatchChangeSelectedItem(e)},a.handleEndCardClick=function(){a.props.dispatchShowCompletionModal(a.props.map.mapId)},a.items=a.getItems(e.map.mapId,e.map.root),a}return Object(Q.a)(r,[{key:"getItems",value:function(e,t){for(var r=[],a=t;a;)r.push({id:a.activityId,mapId:e,label:a.displayName,description:a.description,tags:a.tags,url:a.url,imageUrl:a.imageUrl}),a=a.next[0];return r}},{key:"getEndCard",value:function(){return Object(a.jsx)("div",{className:"end-card",children:Object(a.jsx)("div",{className:"end-card-icon",onClick:this.handleEndCardClick,children:Object(a.jsx)("i",{className:"icon trophy"})})},"end")}},{key:"render",value:function(){var e=this.props,t=e.map,r=e.user,n=e.selectedItem,i=function(e,t){return!Object.keys(null===t||void 0===t?void 0:t.activities).some((function(r){var a,n;return!(null===e||void 0===e||null===(a=e.mapProgress[t.mapId])||void 0===a||null===(n=a.activityState[r])||void 0===n?void 0:n.isCompleted)}))}(r,t)?[this.getEndCard()]:[];return Object(a.jsx)(ue,{title:t.displayName,items:this.items,itemTemplate:he,itemClassName:"linked",onItemSelect:this.onItemSelect,selectedItem:n,appendChildren:i})}}]),r}(n.Component);var be={dispatchChangeSelectedItem:function(e){return{type:h,id:e}},dispatchShowCompletionModal:function(e,t){return{type:w,mapId:e,activityId:t}}},fe=Object(o.b)((function(e,t){var r,a;return e?{user:e.user,selectedItem:e.selectedItem&&(null===(r=t.map)||void 0===r||null===(a=r.activities)||void 0===a?void 0:a[e.selectedItem])?e.selectedItem:void 0}:{}}),be)(me);function je(e){for(var t,r,a=function(e){var t,r=e.split("\n"),a=[],n=null,i=null,c=null,s=Object(_.a)(r);try{for(s.s();!(t=s.n()).done;){var o=t.value;if(o.trim()){if(o.startsWith("#")){var d=/^(#+)\s*(.+)$/.exec(o);if(d){u(),n={headerKind:1===d[1].length?"single":2===d[1].length?"double":"triple",header:d[2],attributes:{}},i=null,c=null;continue}}if(n){var l=/^[*-]\s+(?:([^:]+):)?(.*)$/.exec(o);l&&(l[1]?(i&&c&&(n.attributes[i]=c.trim()),i=l[1].toLowerCase(),c=l[2]):i&&(c+=l[2]))}}else c&&(c+="\n")}}catch(p){s.e(p)}finally{s.f()}return u(),a;function u(){n&&(i&&c&&(n.attributes[i]=c.trim()),a.push(n))}}(e),n=[],i=-1,c=0;c<a.length;c++)"single"===a[c].headerKind?t={title:(r=a[c]).attributes.name||r.header,description:r.attributes.description,infoUrl:r.attributes.infoUrl}:"double"===a[c].headerKind&&(i>=0&&n.push(ye(a[i],a.slice(i+1,c))),i=c);return(i>0||0===n.length)&&n.push(ye(a[i],a.slice(i+1,a.length))),{maps:n,metadata:t}}function ye(e,t){var r=function(e){var t={mapId:e.header.toLowerCase(),displayName:e.attributes.name||e.header,description:e.attributes.description,completionUrl:e.attributes.completionurl,prerequisites:[],activities:{}};if(e.attributes.required){var r,a=e.attributes.required.split(","),n=Object(_.a)(a);try{for(n.s();!(r=n.n()).done;){var i=r.value,c=/^\s*(?:(\d+) +)?(.+)$/.exec(i);c[1]?t.prerequisites.push({type:"tag",tag:c[2].trim(),numberCompleted:parseInt(c[1])}):t.prerequisites.push({type:"activity",mapId:c[2].trim()})}}catch(s){n.e(s)}finally{n.f()}}return t}(e),a=t.map(Oe);r.root=a[0];var n,i=Object(_.a)(a);try{for(i.s();!(n=i.n()).done;){var c=n.value;r.activities[c.activityId]&&ke("Duplicate activity id '".concat(c.activityId,"' in map '").concat(r.mapId,"'")),r.activities[c.activityId]=c}}catch(j){i.e(j)}finally{i.f()}var s,o=Object(_.a)(a);try{for(o.s();!(s=o.n()).done;){var d,l=s.value,p=Object(_.a)(l.nextIds);try{for(p.s();!(d=p.n()).done;){var v=d.value;r.activities[v]||ke("Unknown activity id '".concat(v,"' in map '").concat(r.mapId,"'")),l.next.push(r.activities[v])}}catch(j){p.e(j)}finally{p.f()}}}catch(j){o.e(j)}finally{o.f()}var h={};!function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a[t.activityId]&&ke("Loop in map '".concat(r.mapId,"' detected"));a[t.activityId]=!0,h[t.activityId]=!0,t.next.length>1&&ke("Branching currently not supported");var n,i=Object(_.a)(t.next);try{for(i.s();!(n=i.n()).done;){var c=n.value;e(c,Object(u.a)({},a))}}catch(j){i.e(j)}finally{i.f()}}(r.root);var m,b=Object(_.a)(a);try{for(b.s();!(m=b.n()).done;){var f=m.value;h[f.activityId]||console.warn("Unreachable activity detected '".concat(f.activityId,"' in map '").concat(r.mapId,"'"))}}catch(j){b.e(j)}finally{b.f()}return r}function Oe(e){var t={activityId:e.header.toLowerCase(),displayName:e.attributes.name||e.header,description:e.attributes.description,url:e.attributes.url,imageUrl:e.attributes.imageurl,tags:ge(e.attributes.tags),next:[],nextIds:ge(e.attributes.next)};if(e.attributes.type){var r=e.attributes.type.toLowerCase();switch(r){case"tutorial":t.type=r}}if(e.attributes.editor){var a=e.attributes.editor.toLowerCase();switch(a){case"py":case"blocks":case"js":t.editor=a;break;default:t.editor="blocks"}}return t.url||ke("Activity '".concat(t.activityId,"' is missing attribute 'url'")),t.type||ke("Activity '".concat(t.activityId,"' is missing attribute 'type'")),t}function ge(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return[];var r=e.split(",").map((function(e){return e.trim().toLowerCase()})).filter((function(e){return!!e}));if(!t){var a={};return r.forEach((function(e){return a[e]=e})),Object.keys(a)}return r}function ke(e){throw e}r(36);var xe,we,Ie=function(){function e(t,r,a,n){Object(Y.a)(this,e),this.name=t,this.version=r,this.upgradeHandler=a,this.quotaExceededHandler=n,this._db=void 0}return Object(Q.a)(e,[{key:"throwIfNotOpened",value:function(){if(!this._db)throw new Error("Database not opened; call IDBWrapper.openAsync() first")}},{key:"errorHandler",value:function(e,t,r){console.error(new Error("".concat(this.name," IDBWrapper error for ").concat(t,": ").concat(e.message))),r(e),"QuotaExceededError"===e.name&&(pxt.log("storage quota exceeded..."),pxt.tickEvent("storage.quotaexceedederror"),this.quotaExceededHandler&&this.quotaExceededHandler())}},{key:"getObjectStore",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"readonly";this.throwIfNotOpened();var r=this._db.transaction([e],t);return r.objectStore(e)}},{key:"openAsync",value:function(){var e=this;return new Promise((function(t,r){var a=(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB).open(e.name,e.version);a.onsuccess=function(){e._db=a.result,t()},a.onerror=function(){return e.errorHandler(a.error,"open",r)},a.onupgradeneeded=function(t){return e.upgradeHandler&&e.upgradeHandler(t,a)}}))}},{key:"getAsync",value:function(e,t){var r=this;return new Promise((function(a,n){var i=r.getObjectStore(e).get(t);i.onsuccess=function(){return a(i.result)},i.onerror=function(){return r.errorHandler(i.error,"get",n)}}))}},{key:"getAllAsync",value:function(e){var t=this;return new Promise((function(r,a){var n=t.getObjectStore(e).openCursor(),i=[];n.onsuccess=function(){n.result?(i.push(n.result.value),n.result.continue()):r(i)},n.onerror=function(){return t.errorHandler(n.error,"getAll",a)}}))}},{key:"setAsync",value:function(e,t){var r=this;return new Promise((function(a,n){var i,c=r.getObjectStore(e,"readwrite");(i="undefined"!==typeof t.id&&null!==t.id?c.put(t):c.add(t)).onsuccess=function(){return a()},i.onerror=function(){return r.errorHandler(i.error,"set",n)}}))}},{key:"deleteAsync",value:function(e,t){var r=this;return new Promise((function(a,n){var i=r.getObjectStore(e,"readwrite").delete(t);i.onsuccess=function(){return a()},i.onerror=function(){return r.errorHandler(i.error,"delete",n)}}))}},{key:"deleteAllAsync",value:function(e){var t=this;return new Promise((function(r,a){var n=t.getObjectStore(e,"readwrite").clear();n.onsuccess=function(){return r()},n.onerror=function(){return t.errorHandler(n.error,"deleteAll",a)}}))}}],[{key:"deleteDatabaseAsync",value:function(e){return new Promise((function(t,r){var a=(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB).deleteDatabase(e);a.onsuccess=function(){return t()},a.onerror=function(){return r(a.error)}}))}}]),e}();function Ce(){return we||(xe=new Re,we=xe.initAsync().then((function(e){return xe}))),we}function Se(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=Object(N.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce();case 2:return r=e.sent,e.abrupt("return",r.getProjectAsync(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(e){return Te.apply(this,arguments)}function Te(){return(Te=Object(N.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce();case 2:return r=e.sent,e.next=5,r.saveProjectAsync(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(){return Me.apply(this,arguments)}function Me(){return(Me=Object(N.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce();case 2:return t=e.sent,e.abrupt("return",t.getUserStateAsync());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pe(e){return Le.apply(this,arguments)}function Le(){return(Le=Object(N.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isDebug){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ce();case 4:return r=e.sent,e.next=7,r.saveUserStateAsync(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Re=function(){function e(){Object(Y.a)(this,e),this.db=void 0,this.db=new Ie(e.databaseName,e.version,(function(t,r){var a=r.result;a.createObjectStore(e.projectTable,{keyPath:e.projectKey}),a.createObjectStore(e.userTable,{keyPath:e.userKey})}))}return Object(Q.a)(e,[{key:"initAsync",value:function(){return this.db.openAsync()}},{key:"getProjectAsync",value:function(t){return this.db.getAsync(e.projectTable,t).then((function(e){return e.project}))}},{key:"saveProjectAsync",value:function(t){return this.db.setAsync(e.projectTable,{id:t.header.id,project:t})}},{key:"getUserStateAsync",value:function(){return this.db.getAsync(e.userTable,"local-user").then((function(e){return null===e||void 0===e?void 0:e.user}))}},{key:"saveUserStateAsync",value:function(t){return this.db.setAsync(e.userTable,{id:"local-user",user:t})}}]),e}();Re.version=6,Re.databaseName="local-skill-map",Re.projectTable="projects",Re.projectKey="id",Re.userTable="users",Re.userKey="id";r(37);var Ue=D()?"http://localhost:3232/index.html":window.pxtTargetBundle.appTheme.embedUrl,De=function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(e){var a;return Object(Y.a)(this,r),(a=t.call(this,e)).ref=void 0,a.messageQueue=[],a.finishedTutorial=!1,a.nextId=0,a.pendingMessages={},a.handleFrameRef=function(e){e&&e.contentWindow&&(window.addEventListener("message",a.onMessageReceived),a.ref=e,a.ref.addEventListener("load",(function(){a.state.unloading&&a.props.dispatchCloseActivity()})))},a.onMessageReceived=function(e){var t=e.data;if("ready"!==t.type){if("pxteditor"===t.type&&t.id&&a.pendingMessages[t.id])return a.onResponseReceived(a.pendingMessages[t.id],e.data),void delete a.pendingMessages[t.id];switch(t.action){case"event":a.handleEditorTickEvent(t);break;case"workspacesync":a.handleWorkspaceSyncRequest(t);break;case"workspacesave":a.handleWorkspaceSaveRequestAsync(t);break;default:console.log(JSON.stringify(t,null,4))}}else a.handleWorkspaceReadyEventAsync()},a.state={loaded:!1,unloading:!1},a}return Object(Q.a)(r,[{key:"componentDidUpdate",value:function(){this.props.save&&this.sendMessage({type:"pxteditor",action:"saveproject",response:!1},!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.onMessageReceived)}},{key:"render",value:function(){var e=this.props,t=e.url,r=e.title,n=e.save,i=this.state,c=i.loaded,s=i.unloading,o=n?"Saving...":"Loading...";return Object(a.jsxs)("div",{className:"makecode-frame-outer",children:[Object(a.jsxs)("div",{className:"makecode-frame-loader ".concat(c&&!n?"hidden":""),children:[Object(a.jsx)("img",{src:H("assets/logo.svg"),alt:"MakeCode Logo"}),Object(a.jsx)("div",{className:"makecode-frame-loader-text",children:o})]}),Object(a.jsx)("iframe",{className:"makecode-frame",src:s?"about:blank":t,title:r,ref:this.handleFrameRef})]})}},{key:"onResponseReceived",value:function(e,t){var r=this.props.save;"saveproject"===e.action&&r&&(this.finishedTutorial?(this.finishedTutorial=!1,this.sendMessage({type:"pxteditor",action:"saveproject"},!0)):this.setState({unloading:!0}))}},{key:"sendMessage",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=function(e){r&&(e.response=!0,e.id=t.nextId+++"",t.pendingMessages[e.id]=e),t.ref.contentWindow.postMessage(e,"*")};if(this.ref)if(this.ref.contentWindow){for(;this.messageQueue.length;)a(this.messageQueue.shift());a(e)}else this.messageQueue.push(e)}},{key:"handleWorkspaceSyncRequest",value:function(e){this.sendMessage(Object(u.a)(Object(u.a)({},e),{},{success:!0,projects:[]}))}},{key:"handleWorkspaceSaveRequestAsync",value:function(){var e=Object(N.a)(A.a.mark((function e(t){var r,a,n,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.props,a=r.dispatchSetHeaderIdForActivity,n=r.activityHeaderId,i=Object(u.a)(Object(u.a)({},t.project),{},{header:Object(u.a)(Object(u.a)({},t.project.header),{},{id:n||t.project.header.id})}),e.next=4,Ne(i);case 4:i.header.tutorial?a(i.header.id,(i.header.tutorial.tutorialStep||0)+1,i.header.tutorial.tutorialStepInfo.length):i.header.tutorialCompleted&&a(i.header.id,i.header.tutorialCompleted.steps,i.header.tutorialCompleted.steps);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleWorkspaceReadyEventAsync",value:function(){var e=Object(N.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.activityHeaderId){e.next=7;break}return e.next=3,Se(this.props.activityHeaderId);case 3:t=e.sent,this.sendMessage({type:"pxteditor",action:"importproject",project:t}),e.next=8;break;case 7:this.sendMessage({type:"pxteditor",action:"startactivity",path:this.props.tutorialPath,activityType:"tutorial"});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleEditorTickEvent",value:function(e){switch(e.tick){case"app.editor":this.onEditorLoaded();break;case"tutorial.complete":this.onTutorialFinished()}}},{key:"onEditorLoaded",value:function(){this.setState({loaded:!0})}},{key:"onTutorialFinished",value:function(){this.finishedTutorial=!0,this.props.dispatchSaveAndCloseActivity()}}]),r}(n.Component);var He={dispatchSetHeaderIdForActivity:function(e,t,r){return{type:m,id:e,currentStep:t,maxSteps:r}},dispatchCloseActivity:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:f,finished:e}},dispatchSaveAndCloseActivity:X},_e=Object(o.b)((function(e,t){var r;if(!e||!e.editorView)return{};var a,n=e.editorView,i=n.currentActivityId,c=n.currentMapId,s=n.currentHeaderId,o=n.state,d=Ue,l=e.maps[c].activities[i];return"/"!==Ue.charAt(Ue.length-1)||D()||(d=Ue.substr(0,Ue.length-1)),d+="?controller=1&skillsMap=1",a=l.displayName,{url:d,tutorialPath:l.url,title:a,activityId:i,activityHeaderId:s,completed:null===(r=V(e.user,c,i))||void 0===r?void 0:r.isCompleted,save:"saving"===o}}),He)(De),We=function(e){Object($.a)(r,e);var t=Object(z.a)(r);function r(e){var a;return Object(Y.a)(this,r),(a=t.call(this,e)).queryFlags={},a.unsubscribeChangeListener=void 0,a.loadedUser=void 0,a.handleHashChange=function(e){var t=E();a.fetchAndParseSkillMaps(t.cmd,t.arg),e.stopPropagation(),e.preventDefault()},a.onStoreChange=Object(N.a)(A.a.mark((function e(){var t,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=G.getState(),(r=t.user)===a.loadedUser||a.loadedUser&&r.id!==a.loadedUser.id){e.next=5;break}return e.next=4,Pe(r);case 4:a.loadedUser=r;case 5:case"end":return e.stop()}}),e)}))),a.state={},window.addEventListener("hashchange",a.handleHashChange),a}return Object(Q.a)(r,[{key:"fetchAndParseSkillMaps",value:function(){var e=Object(N.a)(A.a.mark((function e(t,r){var a,n,i,c,s,o,d,l,u,p,v=this;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t,r);case 2:if(a=e.sent)try{i=je(a),c=i.maps,s=i.metadata,(null===c||void 0===c?void 0:c.length)>0&&(n=c,this.props.dispatchClearSkillMaps(),c.forEach((function(e){v.props.dispatchAddSkillMap(e)}))),s&&(o=s.title,d=s.description,l=s.infoUrl,this.props.dispatchSetPageTitle(o),d&&this.props.dispatchSetPageDescription(d),l&&this.props.dispatchSetPageDescription(l)),this.setState({error:void 0})}catch(h){u="Oops! Couldn't load content, please check the URL and markdown file.",console.error(u),this.setState({error:u})}return e.next=6,Ee();case 6:(p=e.sent)||(p={id:U(),completedTags:{},mapProgress:{}}),this.applyQueryFlags(p,n),this.loadedUser=p,this.props.dispatchSetUser(p);case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.unsubscribeChangeListener=G.subscribe(this.onStoreChange),this.queryFlags=function(){var e={},t=window.location.search;return t&&new URLSearchParams(t).forEach((function(t,r){"true"!==t.toLowerCase()&&"1"!==t||(t="true"),e[r]=t})),e}();var e=E();this.fetchAndParseSkillMaps(e.cmd,e.arg)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("hashchange",this.handleHashChange),this.unsubscribeChangeListener&&this.unsubscribeChangeListener()}},{key:"render",value:function(){var e=this.props,t=e.skillMaps,r=e.activityOpen,n=this.state.error,i=Object.keys(t).map((function(e){return t[e]}));return Object(a.jsxs)("div",{className:"app-container",children:[Object(a.jsx)(re,{}),r?Object(a.jsx)(_e,{}):Object(a.jsxs)("div",{children:[Object(a.jsx)(ne,{title:"Game Maker Guide",icon:"map",description:"Level up your game making skills by completing the tutorials in this guide."}),Object(a.jsx)("div",{className:"skill-map-container",children:n?Object(a.jsx)("div",{className:"skill-map-error",children:n}):null===i||void 0===i?void 0:i.map((function(e,t){return Object(a.jsx)(fe,{map:e},t)}))})]}),Object(a.jsx)(oe,{})]})}},{key:"applyQueryFlags",value:function(e,t){if("true"===this.queryFlags.debugNewUser&&(e.isDebug=!0,e.mapProgress={},e.completedTags={}),"true"===this.queryFlags.debugCompleted&&(e.isDebug=!0,t)){var r,a=Object(_.a)(t);try{for(a.s();!(r=a.n()).done;){var n=r.value;e.mapProgress[n.mapId]={mapId:n.mapId,activityState:{}};for(var i=0,c=Object.keys(n.activities);i<c.length;i++){var s,o=c[i],d=n.activities[o];if(e.mapProgress[n.mapId].activityState[d.activityId]?e.mapProgress[n.mapId].activityState[d.activityId].isCompleted=!0:e.mapProgress[n.mapId].activityState[d.activityId]={activityId:d.activityId,isCompleted:!0},null===(s=d.tags)||void 0===s?void 0:s.length){var l,u=Object(_.a)(d.tags);try{for(u.s();!(l=u.n()).done;){var p=l.value;e.completedTags[p]++}}catch(v){u.e(v)}finally{u.f()}}}}}catch(v){a.e(v)}finally{a.f()}}}}]),r}(i.a.Component);var Ve={dispatchAddSkillMap:function(e){return{type:p,map:e}},dispatchClearSkillMaps:function(){return{type:v}},dispatchSetPageTitle:function(e){return{type:g,title:e}},dispatchSetPageDescription:function(e){return{type:k,description:e}},dispatchSetPageInfoUrl:function(e){return{type:x,infoUrl:e}},dispatchSetUser:function(e){return{type:O,user:e}}},Be=Object(o.b)((function(e,t){return e?{skillMaps:e.maps,activityOpen:!!e.editorView}:{}}),Ve)(We);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(o.a,{store:G,children:Object(a.jsx)(Be,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.85739e79.chunk.js.map