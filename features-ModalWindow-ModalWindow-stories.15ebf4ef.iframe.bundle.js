/*! For license information please see features-ModalWindow-ModalWindow-stories.15ebf4ef.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[685],{"./src/features/ModalWindow/ModalWindow.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleWindow:()=>ExampleWindow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"MyComponents/ModalWindow",component:__webpack_require__("./src/features/ModalWindow/ModalWindow.tsx").D,tags:["autodocs"],parameters:{layout:"fullscreen"}};var ExampleWindow={args:{visible:!0,children:""}};ExampleWindow.parameters={...ExampleWindow.parameters,docs:{...ExampleWindow.parameters?.docs,source:{originalSource:"{\n  args: {\n    visible: true,\n    children: ''\n  }\n}",...ExampleWindow.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleWindow"]},"./src/features/ModalWindow/ModalWindow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>ModalWindow});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ModalWindow_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/features/ModalWindow/ModalWindow.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ModalWindow_module.Z,options);const ModalWindow_ModalWindow_module=ModalWindow_module.Z&&ModalWindow_module.Z.locals?ModalWindow_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Main=function Main(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("main",{className:ModalWindow_ModalWindow_module.modal__main,children})};Main.displayName="Main";var MemoMain=react.memo(Main),ModalWindow=function ModalWindow(_ref2){var visible=_ref2.visible,children=_ref2.children,onClose=_ref2.onClose,memoChildren=(0,react.useMemo)((function(){return children}),[children]);return visible?(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:ModalWindow_ModalWindow_module.modal__overlay}),(0,jsx_runtime.jsxs)("div",{className:ModalWindow_ModalWindow_module.modal,children:[(0,jsx_runtime.jsxs)("header",{className:ModalWindow_ModalWindow_module.modal__header,children:[(0,jsx_runtime.jsx)("h2",{children:"Modal Title"}),(0,jsx_runtime.jsx)("button",{onClick:onClose,className:ModalWindow_ModalWindow_module.close__button,children:"×"})]}),(0,jsx_runtime.jsx)(MemoMain,{children:memoChildren})]})]}),document.querySelector("#modal-root")):null};try{ModalWindow.displayName="ModalWindow",ModalWindow.__docgenInfo={description:"",displayName:"ModalWindow",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/ModalWindow/ModalWindow.tsx#ModalWindow"]={docgenInfo:ModalWindow.__docgenInfo,name:"ModalWindow",path:"src/features/ModalWindow/ModalWindow.tsx#ModalWindow"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/features/ModalWindow/ModalWindow.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".OXYg9djuYmwAplh8iDUV {\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .7);\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n}\n  \n.FQshe3bpvRkVCOexAlJn {\n    position: fixed;\n    z-index: 20;\n    background: #fff;\n    width: 500px;\n  \n    /* Center the modal */\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n}\n  \n.vHSwNLEh7oSLnfhXQfuR {\n    background: orangered;\n    padding: 5px 10px;\n    display: flex;\n    justify-content: space-between;\n}\n  \n.MdfolkrsduH_5MB48fBg {\n    padding: 10px;\n}\n  \n.BgaWdwi4jgQC3Ph3nNNA {\n    border: none;\n    background: transparent;\n    padding: 5px;\n    cursor: pointer;\n    color: #fff;\n    font-size: 36px;\n}\n  \n.BgaWdwi4jgQC3Ph3nNNA:hover {\n    color: yellow;\n}","",{version:3,sources:["webpack://./src/features/ModalWindow/ModalWindow.module.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;AACf;;AAEA;IACI,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,YAAY;;IAEZ,qBAAqB;IACrB,QAAQ;IACR,SAAS;IACT,4CAA4C;AAChD;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB",sourcesContent:[".modal__overlay {\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .7);\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n}\n  \n.modal {\n    position: fixed;\n    z-index: 20;\n    background: #fff;\n    width: 500px;\n  \n    /* Center the modal */\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n}\n  \n.modal__header {\n    background: orangered;\n    padding: 5px 10px;\n    display: flex;\n    justify-content: space-between;\n}\n  \n.modal__main {\n    padding: 10px;\n}\n  \n.close__button {\n    border: none;\n    background: transparent;\n    padding: 5px;\n    cursor: pointer;\n    color: #fff;\n    font-size: 36px;\n}\n  \n.close__button:hover {\n    color: yellow;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={modal__overlay:"OXYg9djuYmwAplh8iDUV",modal:"FQshe3bpvRkVCOexAlJn",modal__header:"vHSwNLEh7oSLnfhXQfuR",modal__main:"MdfolkrsduH_5MB48fBg",close__button:"BgaWdwi4jgQC3Ph3nNNA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);