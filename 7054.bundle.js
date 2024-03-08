"use strict";(self.webpackChunkxml_editor_project=self.webpackChunkxml_editor_project||[]).push([[7054],{7054:(e,t,n)=>{n.r(t),n.d(t,{getJavaScriptWorker:()=>K,getTypeScriptWorker:()=>M,setupJavaScript:()=>E,setupTypeScript:()=>T});var r,i,o=n(1012),s=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return e=this,t=void 0,r=function(){var e,t;return function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e||t.updateExtraLibs(this._defaults.getExtraLibs()),[2]}}))},new((n=void 0)||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}));var e,t,n,r},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=o.EN.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(o.EN.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),a={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0},u=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function p(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var o=0,s=e.next;o<s.length;o++)r+=p(s[o],t,n);return r}function f(e){return e?e.map((function(e){return e.text})).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(i||(i={}));var d,h=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}(),m=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&0===e.path.indexOf("/lib.")&&!!a[e.path.slice(1)]},e.prototype.getOrCreateModel=function(e){return o.EN.getModel(e)||(this.isLibFile(e)&&this._hasFetchedLibFiles?o.EN.createModel(this._libFiles[e.path.slice(1)],"javascript",e):null)},e.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return c(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();!function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(d||(d={}));var g=function(e){function t(t,n,r,i){var s=e.call(this,i)||this;s._libFiles=t,s._defaults=n,s._selector=r,s._disposables=[],s._listener=Object.create(null);var a=function(e){if(e.getModeId()===r){var t,n=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return s._doValidate(e)}),500)}));s._listener[e.uri.toString()]={dispose:function(){n.dispose(),clearTimeout(t)}},s._doValidate(e)}},u=function(e){o.EN.setModelMarkers(e,s._selector,[]);var t=e.uri.toString();s._listener[t]&&(s._listener[t].dispose(),delete s._listener[t])};s._disposables.push(o.EN.onDidCreateModel(a)),s._disposables.push(o.EN.onWillDisposeModel(u)),s._disposables.push(o.EN.onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),s._disposables.push({dispose:function(){for(var e=0,t=o.EN.getModels();e<t.length;e++){var n=t[e];u(n)}}});var c=function(){for(var e=0,t=o.EN.getModels();e<t.length;e++){var n=t[e];u(n),a(n)}};return s._disposables.push(s._defaults.onDidChange(c)),s._disposables.push(s._defaults.onDidExtraLibsChange(c)),o.EN.getModels().forEach(a),s}return u(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return c(this,void 0,void 0,(function(){var t,n,r,i,s,a,u,c,p,f=this;return l(this,(function(l){switch(l.label){case 0:return[4,this._worker(e.uri)];case 1:return t=l.sent(),e.isDisposed()?[2]:(n=[],r=this._defaults.getDiagnosticsOptions(),i=r.noSyntaxValidation,s=r.noSemanticValidation,a=r.noSuggestionDiagnostics,i||n.push(t.getSyntacticDiagnostics(e.uri.toString())),s||n.push(t.getSemanticDiagnostics(e.uri.toString())),a||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(u=l.sent())||e.isDisposed()?[2]:(c=u.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(f._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),p=c.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?o.zn.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(p)]);case 3:return l.sent(),e.isDisposed()||o.EN.setModelMarkers(e,this._selector,c.map((function(t){return f._convertDiagnostics(e,t)}))),[2]}}))}))},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,i=e.getPositionAt(n),s=i.lineNumber,a=i.column,u=e.getPositionAt(n+r),c=u.lineNumber,l=u.column,f=[];return t.reportsUnnecessary&&f.push(o.d_.Unnecessary),t.reportsDeprecated&&f.push(o.d_.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:s,startColumn:a,endLineNumber:c,endColumn:l,message:p(t.messageText,"\n"),code:t.code.toString(),tags:f,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var n=this;if(t){var r=[];return t.forEach((function(t){var i=e;if(t.file){var s=o.zn.parse(t.file.fileName);i=n._libFiles.getOrCreateModel(s)}if(i){var a=t.start||0,u=t.length||1,c=i.getPositionAt(a),l=c.lineNumber,f=c.column,d=i.getPositionAt(a+u),h=d.lineNumber,m=d.column;r.push({resource:i.uri,startLineNumber:l,startColumn:f,endLineNumber:h,endColumn:m,message:p(t.messageText,"\n")})}})),r}},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case d.Error:return o.cj.Error;case d.Message:return o.cj.Info;case d.Warning:return o.cj.Warning;case d.Suggestion:return o.cj.Hint}return o.cj.Info},t}(h),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,i){return c(this,void 0,void 0,(function(){var r,i,s,a,u,c;return l(this,(function(l){switch(l.label){case 0:return r=e.getWordUntilPosition(n),i=new o.Q6(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),s=e.uri,a=e.getOffsetAt(n),[4,this._worker(s)];case 1:return[4,l.sent().getCompletionsAtPosition(s.toString(),a)];case 2:return!(u=l.sent())||e.isDisposed()?[2]:(c=u.entries.map((function(r){var u,c=i;if(r.replacementSpan){var l=e.getPositionAt(r.replacementSpan.start),p=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);c=new o.Q6(l.lineNumber,l.column,p.lineNumber,p.column)}var f=[];return-1!==(null===(u=r.kindModifiers)||void 0===u?void 0:u.indexOf("deprecated"))&&f.push(o.eo.CompletionItemTag.Deprecated),{uri:s,position:n,offset:a,range:c,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:f}})),[2,{suggestions:c}])}}))}))},t.prototype.resolveCompletionItem=function(e,n){return c(this,void 0,void 0,(function(){var n,r,i,o,s;return l(this,(function(a){switch(a.label){case 0:return r=(n=e).uri,i=n.position,o=n.offset,[4,this._worker(r)];case 1:return[4,a.sent().getCompletionEntryDetails(r.toString(),o,n.label)];case 2:return(s=a.sent())?[2,{uri:r,position:i,label:s.name,kind:t.convertKind(s.kind),detail:f(s.displayParts),documentation:{value:t.createDocumentationString(s)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case C.primitiveType:case C.keyword:return o.eo.CompletionItemKind.Keyword;case C.variable:case C.localVariable:return o.eo.CompletionItemKind.Variable;case C.memberVariable:case C.memberGetAccessor:case C.memberSetAccessor:return o.eo.CompletionItemKind.Field;case C.function:case C.memberFunction:case C.constructSignature:case C.callSignature:case C.indexSignature:return o.eo.CompletionItemKind.Function;case C.enum:return o.eo.CompletionItemKind.Enum;case C.module:return o.eo.CompletionItemKind.Module;case C.class:return o.eo.CompletionItemKind.Class;case C.interface:return o.eo.CompletionItemKind.Interface;case C.warning:return o.eo.CompletionItemKind.File}return o.eo.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=f(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++)t+="\n\n"+v(r[n]);return t},t}(h);function v(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text.split(" "),r=n[0],i=n.slice(1);t+="`"+r+"`",i.length>0&&(t+=" — "+i.join(" "))}else e.text&&(t+=" — "+e.text);return t}var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return u(t,e),t.prototype.provideSignatureHelp=function(e,t,n){return c(this,void 0,void 0,(function(){var n,r,i,o;return l(this,(function(s){switch(s.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,s.sent().getSignatureHelpItems(n.toString(),r)];case 2:return!(i=s.sent())||e.isDisposed()?[2]:(o={activeSignature:i.selectedItemIndex,activeParameter:i.argumentIndex,signatures:[]},i.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:f(e.documentation)},t.label+=f(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var o=f(n.displayParts),s={label:o,documentation:{value:f(n.documentation)}};t.label+=o,t.parameters.push(s),r<i.length-1&&(t.label+=f(e.separatorDisplayParts))})),t.label+=f(e.suffixDisplayParts),o.signatures.push(t)})),[2,{value:o,dispose:function(){}}])}}))}))},t}(h),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideHover=function(e,t,n){return c(this,void 0,void 0,(function(){var n,r,i,o,s,a;return l(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,u.sent().getQuickInfoAtPosition(n.toString(),r)];case 2:return!(i=u.sent())||e.isDisposed()?[2]:(o=f(i.documentation),s=i.tags?i.tags.map((function(e){return v(e)})).join("  \n\n"):"",a=f(i.displayParts),[2,{range:this._textSpanToRange(e,i.textSpan),contents:[{value:"```typescript\n"+a+"\n```\n"},{value:o+(s?"\n\n"+s:"")}]}])}}))}))},t}(h),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return c(this,void 0,void 0,(function(){var n,r,i,s=this;return l(this,(function(a){switch(a.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,a.sent().getOccurrencesAtPosition(n.toString(),r)];case 2:return!(i=a.sent())||e.isDisposed()?[2]:[2,i.map((function(t){return{range:s._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?o.eo.DocumentHighlightKind.Write:o.eo.DocumentHighlightKind.Text}}))]}}))}))},t}(h),S=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return u(t,e),t.prototype.provideDefinition=function(e,t,n){return c(this,void 0,void 0,(function(){var n,r,i,s,a,u,c,p,f;return l(this,(function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,l.sent().getDefinitionAtPosition(n.toString(),r)];case 2:return!(i=l.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(i.map((function(e){return o.zn.parse(e.fileName)})))];case 3:if(l.sent(),e.isDisposed())return[2];for(s=[],a=0,u=i;a<u.length;a++)c=u[a],p=o.zn.parse(c.fileName),(f=this._libFiles.getOrCreateModel(p))&&s.push({uri:p,range:this._textSpanToRange(f,c.textSpan)});return[2,s]}}))}))},t}(h),x=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return u(t,e),t.prototype.provideReferences=function(e,t,n,r){return c(this,void 0,void 0,(function(){var n,r,i,s,a,u,c,p,f;return l(this,(function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,l.sent().getReferencesAtPosition(n.toString(),r)];case 2:return!(i=l.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(i.map((function(e){return o.zn.parse(e.fileName)})))];case 3:if(l.sent(),e.isDisposed())return[2];for(s=[],a=0,u=i;a<u.length;a++)c=u[a],p=o.zn.parse(c.fileName),(f=this._libFiles.getOrCreateModel(p))&&s.push({uri:p,range:this._textSpanToRange(f,c.textSpan)});return[2,s]}}))}))},t}(h),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideDocumentSymbols=function(e,t){return c(this,void 0,void 0,(function(){var t,n,r,i,s=this;return l(this,(function(a){switch(a.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return[4,a.sent().getNavigationBarItems(t.toString())];case 2:return!(n=a.sent())||e.isDisposed()?[2]:(r=function(t,n,i){var a={name:n.text,detail:"",kind:F[n.kind]||o.eo.SymbolKind.Variable,range:s._textSpanToRange(e,n.spans[0]),selectionRange:s._textSpanToRange(e,n.spans[0]),tags:[],containerName:i};if(n.childItems&&n.childItems.length>0)for(var u=0,c=n.childItems;u<c.length;u++){var l=c[u];r(t,l,a.name)}t.push(a)},i=[],n.forEach((function(e){return r(i,e)})),[2,i])}}))}))},t}(h),C=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),F=Object.create(null);F[C.module]=o.eo.SymbolKind.Module,F[C.class]=o.eo.SymbolKind.Class,F[C.enum]=o.eo.SymbolKind.Enum,F[C.interface]=o.eo.SymbolKind.Interface,F[C.memberFunction]=o.eo.SymbolKind.Method,F[C.memberVariable]=o.eo.SymbolKind.Property,F[C.memberGetAccessor]=o.eo.SymbolKind.Property,F[C.memberSetAccessor]=o.eo.SymbolKind.Property,F[C.variable]=o.eo.SymbolKind.Variable,F[C.const]=o.eo.SymbolKind.Variable,F[C.localVariable]=o.eo.SymbolKind.Variable,F[C.variable]=o.eo.SymbolKind.Variable,F[C.function]=o.eo.SymbolKind.Function,F[C.localFunction]=o.eo.SymbolKind.Function;var I,P,N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:i.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(h),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return c(this,void 0,void 0,(function(){var r,i,o,s,a=this;return l(this,(function(u){switch(u.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return[4,u.sent().getFormattingEditsForRange(r.toString(),i,o,N._convertOptions(n))];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return a._convertTextChanges(e,t)}))]}}))}))},t}(N),A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return c(this,void 0,void 0,(function(){var i,o,s,a=this;return l(this,(function(u){switch(u.label){case 0:return i=e.uri,o=e.getOffsetAt(t),[4,this._worker(i)];case 1:return[4,u.sent().getFormattingEditsAfterKeystroke(i.toString(),o,n,N._convertOptions(r))];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return a._convertTextChanges(e,t)}))]}}))}))},t}(N),L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return c(this,void 0,void 0,(function(){var r,i,o,s,a,u,c=this;return l(this,(function(l){switch(l.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=N._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return[4,l.sent().getCodeFixesAtPosition(r.toString(),i,o,a,s)];case 2:return!(u=l.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:u.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return c._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,o=n.changes;i<o.length;i++)for(var s=0,a=o[i].textChanges;s<a.length;s++){var u=a[s];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.span),text:u.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(N),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return c(this,void 0,void 0,(function(){var r,i,s,a,u,c,p,f,d,h;return l(this,(function(l){switch(l.label){case 0:return r=e.uri,i=r.toString(),s=e.getOffsetAt(t),[4,this._worker(r)];case 1:return[4,(a=l.sent()).getRenameInfo(i,s,{allowRenameOfImportPath:!1})];case 2:if(!1===(u=l.sent()).canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(i,s,!1,!1,!1)];case 3:if(!(c=l.sent())||e.isDisposed())return[2];for(p=[],f=0,d=c;f<d.length;f++)h=d[f],p.push({resource:o.zn.parse(h.fileName),edit:{range:this._textSpanToRange(e,h.textSpan),text:n}});return[2,{edits:p}]}}))}))},t}(h);function T(e){P=R(e,"typescript")}function E(e){I=R(e,"javascript")}function K(){return new Promise((function(e,t){if(!I)return t("JavaScript not registered!");e(I)}))}function M(){return new Promise((function(e,t){if(!P)return t("TypeScript not registered!");e(P)}))}function R(e,t){var n=new s(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},i=new m(r);return o.eo.registerCompletionItemProvider(t,new b(r)),o.eo.registerSignatureHelpProvider(t,new y(r)),o.eo.registerHoverProvider(t,new _(r)),o.eo.registerDocumentHighlightProvider(t,new w(r)),o.eo.registerDefinitionProvider(t,new S(i,r)),o.eo.registerReferenceProvider(t,new x(i,r)),o.eo.registerDocumentSymbolProvider(t,new k(r)),o.eo.registerDocumentRangeFormattingEditProvider(t,new D(r)),o.eo.registerOnTypeFormattingEditProvider(t,new A(r)),o.eo.registerCodeActionProvider(t,new L(r)),o.eo.registerRenameProvider(t,new O(r)),new g(i,e,t,r),r}}}]);