if (self.CavalryLogger) { CavalryLogger.start_js(["EqVQI"]); }

__d("MercuryParticipantTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={USER:"user",THREAD:"thread",EVENT:"event",PAGE:"page",FRIEND:"friend",FB4C:"fb4c",NON_FRIEND:"non_friend"};},null);
__d("PhotoResizeModeConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CONTAIN:"s",COVER:"p"};},null);
__d('ChatTypeaheadConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={USER_TYPE:'user',THREAD_TYPE:'thread',FRIEND_TYPE:'friend',NON_FRIEND_TYPE:'non_friend',FB4C_TYPE:'fb4c',PAGE_TYPE:'page',MEETING_ROOM_PAGE_TYPE:'meeting_room_page',COMMERCE_PAGE_TYPE:'commerce_page',HEADER_TYPE:'header'};f.exports=h;},null);
__d('MercuryIDs',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={isValid:function(i){if(!i||typeof i!=='string')return false;return (/^\w{3,12}:.+/.test(i));},isValidThreadID:function(i){if(!h.isValid(i))return false;var j=h.tokenize(i);switch(j.type){case 'user':case 'group':case 'thread':case 'root':case 'pending':return true;default:return false;}},tokenize:function(i){if(!i||!h.isValid(i))throw new Error('bad_id_format '+i);var j=i.indexOf(':');return {type:i.substr(0,j),value:i.substr(j+1)};},getUserIDFromParticipantID:function(i){if(!h.isValid(i))throw new Error('bad_id_format '+i);var j=h.tokenize(i),k=j.type,l=j.value;return k==='fbid'?l:null;},getParticipantIDFromUserID:function(i){if(isNaN(i))throw new Error('Not a user ID: '+i);return 'fbid:'+i;},getUserIDFromThreadID:function(i){if(!this.isCanonical(i))return null;return this.tokenize(i).value;},getThreadIDFromUserID:function(i){return 'user:'+i;},getThreadIDFromThreadFBID:function(i){return 'thread:'+i;},getThreadFBIDFromThreadID:function(i){return this.tokenize(i).value;},getThreadIDFromParticipantID:function(i){var j=this.getUserIDFromParticipantID(i);return j?this.getThreadIDFromUserID(j):null;},getParticipantIDFromFromThreadID:function(i){var j=this.getUserIDFromThreadID(i);return j?this.getParticipantIDFromUserID(j):null;},isCanonical:function(i){return this.isValid(i)&&this.tokenize(i).type==='user';},isGroupChat:function(i){return this.isValid(i)&&this.tokenize(i).type!=='user';},isLocalThread:function(i){return this.isValid(i)&&this.tokenize(i).type==='root';}};f.exports=h;},null);
__d('WebMessengerPermalinkConstants',['URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ARCHIVED_PATH:'/messages/archived',BASE_PATH:'/messages',PENDING_PATH:'/messages/pending',OTHER_PATH:'/messages/other',SPAM_PATH:'/messages/spam',COMPOSE_POSTFIX_PATH:'/new',SEARCH_POSTFIX_PATH:'/search',TID_POSTFIX_PARTIAL_PATH:'/conversation-',overriddenVanities:'(archived|other|pending|spam|new|search|conversation-.*)',getURIPathForThreadID:function(i,j){return (j||h.BASE_PATH)+h.TID_POSTFIX_PARTIAL_PATH+c('URI').encodeComponent(c('URI').encodeComponent(i));},getThreadIDFromURI:function(i){var j=i.getPath().match(h.BASE_PATH+'(/[^/]*)*'+h.TID_POSTFIX_PARTIAL_PATH+'([^/]+)');if(j){var k=c('URI').decodeComponent(c('URI').decodeComponent(j[2]));return k;}},getURIPathForIDOrVanity:function(i,j){if(i.match('^'+h.overriddenVanities+'$'))i='.'+i;return (j||h.BASE_PATH)+'/'+i;},getUserIDOrVanity:function(i){var j=i.match(h.BASE_PATH+'.*/([^/]+)/?$'),k=j&&j[1],l=h.overriddenVanities;if(!k||k.match('^'+l+'$')){return false;}else if(k.match('^\\.'+l+'$')){return k.substr(1);}else return k;}};f.exports=h;},null);
__d('ChatOpenTab',['csx','ChatTypeaheadConstants','ContextualThing','Event','MercuryIDs','MercuryParticipantTypes','Parent','URI','WorkFocusModeController','WebMessengerPermalinkConstants','curry','emptyFunction','goURI','ifRequired','requireWeak'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('WorkFocusModeController').WorkFocusMode,j=null;c('requireWeak')('ChatApp',function(u){return j=u;});function k(u,v){var w=u?new (c('URI'))(c('WebMessengerPermalinkConstants').getURIPathForThreadID(u)):new (c('URI'))(c('WebMessengerPermalinkConstants').BASE_PATH+c('WebMessengerPermalinkConstants').COMPOSE_POSTFIX_PATH);if(v)w.addQueryData({ref:v});c('ifRequired')('BusinessURI.brands',function(x){return c('goURI')(x(w));},function(){return c('goURI')(w);});}function l(u,v){var w=c('MercuryIDs').getThreadIDFromUserID(u);i&&i.addBypassFocusModeForThread(w);k(w,v);}function m(u,v,w){var x=c('MercuryIDs').getThreadIDFromUserID(v);i&&i.addBypassFocusModeForThread(x);l(v,w);}function n(u,v){var w=c('MercuryIDs').getThreadIDFromUserID(u);i&&i.addBypassFocusModeForThread(w);k(w,v);}function o(u,v){k(null,v);}function p(u,v,w,x){c('Event').listen(u,'click',function(y){if(t.canOpenTab()){x(v,w);return y.kill();}});}function q(u,v,w,x){c('Event').listen(u,'click',function(y){if(t.canOpenTab())x(v,w);});}function r(u,v,w,x){t.impl()._logChatOpenTabEvent(u,v,w,x);}function s(u){var v=c('ContextualThing').getContext(u);return v&&c('Parent').bySelector(v,"._3qw")!==null;}var t={canOpenTab:function(){return j&&!j.isHidden();},openEmptyTab:function(u,v,w){t.impl().openEmptyTab(u,v,w);},listenOpenEmptyTab:function(u,v){p(u,null,v,t.openEmptyTab);},openThread:function(u,v,w,x,y){t.impl().openThreadTab(u,v,w,x,y);},openClientTab:function(u,v,w,x,y){var z=t.impl();z.openClientTab(u,x,y);z._logChatOpenTabEvent(v,u,null,w);},listenOpenThread:function(u,v,w){p(u,v,w,t.openThread);},openUserTab:function(u,v,w){t.impl().openUserTab(u,v,w);},openPageTab:function(u,v,w){t.impl().openPageTab(u,v,w);return true;},listenOpenUserTab:function(u,v,w){if(!s(u))p(u,v,w,t.openUserTab);},listenOpenUserTabPersistentEvent:function(u,v,w){if(!s(u))q(u,v,w,t.openUserTab);},listenOpenPageTab:function(u,v,w,x){if(!s(u))p(u,v,x,c('curry')(t.openPageTab,w));},listenOpenPageTabPersistentEvent:function(u,v,w,x){if(!s(u))q(u,v,x,c('curry')(t.openPageTab,w));},openTabByType:function(u,v,w){if(v===c('ChatTypeaheadConstants').THREAD_TYPE){if(u){this.openThread(u,w);}else this.openEmptyTab(null,w);}else if(v===c('ChatTypeaheadConstants').MEETING_ROOM_PAGE_TYPE){var x=c('MercuryIDs').getUserIDFromThreadID(u);c('goURI')('/'+x);}else if(!v||v===c('MercuryParticipantTypes').FRIEND||v===c('ChatTypeaheadConstants').FRIEND_TYPE||v===c('ChatTypeaheadConstants').PAGE_TYPE||v===c('ChatTypeaheadConstants').USER_TYPE){if(c('MercuryIDs').isValidThreadID(u))u=c('MercuryIDs').getUserIDFromThreadID(u);this.openUserTab(u,w);}else this.openThread(u,w);},impl:function(){if(j&&j.isInitialized()&&!j.isHidden()&&j.chatOpenTabImpl){return j.chatOpenTabImpl;}else return {openClientTab:k,openUserTab:l,openEmptyTab:o,openThreadTab:n,openPageTab:m,_logChatOpenTabEvent:c('emptyFunction')};}};f.exports=t;},null);
__d('BanzaiNectar',['Banzai'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){return {log:function(k,l,m){var n={e:l,a:m};c('Banzai').post('nectar:'+k,n,j);}};}var i=h();i.create=h;f.exports=i;},null);
__d("arrayStableSort",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){return i.map(function(k,l){return {data:k,index:l};}).sort(function(k,l){return j(k.data,l.data)||k.index-l.index;}).map(function(k){return k.data;});}f.exports=h;},null);
__d('RangedCallbackManager',['CallbackManagerController','arrayStableSort','createObjectFrom'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager2=false;this.$RangedCallbackManager3=false;this.$RangedCallbackManager4={};this.$RangedCallbackManager5=new (c('CallbackManagerController'))(this.$RangedCallbackManager6.bind(this));this.$RangedCallbackManager7=i;this.$RangedCallbackManager8=j;this.$RangedCallbackManager9=k;}h.prototype.executeOrEnqueue=function(i,j,k,l,m){'use strict';return this.$RangedCallbackManager5.executeOrEnqueue({start:i,limit:j},k,{strict:!!l,skipOnStrictHandler:m});};h.prototype.unsubscribe=function(i){'use strict';this.$RangedCallbackManager5.unsubscribe(i);};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$RangedCallbackManager5.getRequest(i),k=[];if(j&&!this.$RangedCallbackManager2){var l=j.request,m=this.$RangedCallbackManager10(j.options),n=l.start+l.limit;for(var o=m.length;o<n;o++)k.push(o);}return k;};h.prototype.addResources=function(i){'use strict';i.forEach(function(j){if(!this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=true;this.$RangedCallbackManager1.push(j);this.$RangedCallbackManager3=null;}}.bind(this));this.resortResources();this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.addResourcesWithoutSorting=function(i,j){'use strict';var k=this.$RangedCallbackManager1.slice(0,j);k=k.concat(i);k=k.concat(this.$RangedCallbackManager1.slice(j));this.$RangedCallbackManager1=k;Object.assign(this.$RangedCallbackManager4,c('createObjectFrom')(i,true));this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.removeResources=function(i){'use strict';i.forEach(function(j){if(this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=false;var k=this.$RangedCallbackManager1.indexOf(j);if(k!=-1)this.$RangedCallbackManager1.splice(k,1);}}.bind(this));};h.prototype.removeAllResources=function(){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager4={};};h.prototype.resortResources=function(){'use strict';this.$RangedCallbackManager1=c('arrayStableSort')(this.$RangedCallbackManager1,function(i,j){return (this.$RangedCallbackManager8(this.$RangedCallbackManager7(i),this.$RangedCallbackManager7(j)));}.bind(this));};h.prototype.setReachedEndOfArray=function(){'use strict';if(!this.$RangedCallbackManager2){this.$RangedCallbackManager2=true;this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.hasReachedEndOfArray=function(){'use strict';return this.$RangedCallbackManager2;};h.prototype.setError=function(i){'use strict';if(this.$RangedCallbackManager3!==i){this.$RangedCallbackManager3=i;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.getError=function(i,j,k){'use strict';var l=this.$RangedCallbackManager10({strict:k});return i+j>l.length?this.$RangedCallbackManager3:null;};h.prototype.hasResource=function(i){'use strict';return this.$RangedCallbackManager4[i];};h.prototype.getResourceAtIndex=function(i){'use strict';return this.$RangedCallbackManager1[i];};h.prototype.getAllResources=function(){'use strict';return this.$RangedCallbackManager1.concat();};h.prototype.getCurrentArraySize=function(i){'use strict';return this.$RangedCallbackManager10(i).length;};h.prototype.$RangedCallbackManager10=function(i){'use strict';var j=this.$RangedCallbackManager1;if(i&&i.strict){var k=i.skipOnStrictHandler||this.$RangedCallbackManager9;if(k)j=j.filter(k);}return j;};h.prototype.$RangedCallbackManager6=function(i,j){'use strict';var k=this.$RangedCallbackManager10(j);if(!this.$RangedCallbackManager2&&!this.$RangedCallbackManager3&&i.start+i.limit>k.length){return false;}else{var l=k.slice(i.start,i.start+i.limit),m=i.start+i.limit>k.length?this.$RangedCallbackManager3:null;return [l,m];}};h.prototype.getElementsUntil=function(i){'use strict';var j=[];for(var k=0;k<this.$RangedCallbackManager1.length;k++){var l=this.$RangedCallbackManager7(this.$RangedCallbackManager1[k]);if(this.$RangedCallbackManager8(l,i)>0)break;j.push(this.$RangedCallbackManager1[k]);}return j;};f.exports=h;},null);
__d('EmoticonEmojiList',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={names:{':)':'slightsmile',':-)':'slightsmile',':]':'slightsmile','=)':'smile','(:':'slightsmile','(=':'smile',':(':'frown',':-(':'frown',':[':'frown','=(':'frown',')=':'frown',';-P':'winktongue',';P':'winktongue',';-p':'winktongue',';p':'winktongue',':poop:':'poop',':P':'tongue',':-P':'tongue',':-p':'tongue',':p':'tongue','=P':'tongue','=p':'tongue','=D':'grin',':-D':'grin',':D':'grin',':o':'gasp',':-O':'gasp',':O':'gasp',':-o':'gasp',';)':'wink',';-)':'wink','8-)':'glasses','8)':'glasses','B-)':'glasses','B)':'glasses','>:(':'grumpy','>:-(':'grumpy',':/':'unsure',':-/':'unsure',':\\':'unsure',':-\\':'unsure','=/':'unsure','=\\':'unsure',':\'(':'cry',':\'-(':'cry','3:)':'devil','3:-)':'devil','O:)':'angel','O:-)':'angel','0:)':'angel','0:-)':'angel',':*':'kiss',':-*':'kiss',';-*':'winkkiss',';*':'winkkiss','<3':'heart','&lt;3':'heart','\u2665':'heart','^_^':'kiki','^~^':'kiki','-_-':'expressionless',':-|':'squint',':|':'squint','>:o':'upset','>:O':'upset','>:-O':'upset','>:-o':'upset','>_<':'persevere','>.<':'persevere','<(")':'penguin','(y)':'like',':like:':'like','(Y)':'like','(n)':'dislike','(N)':'dislike'},emote2emojis:{slightsmile:'1f642',smile:'1f60a',frown:'1f61e',winktongue:'1f61c',poop:'1f4a9',tongue:'1f61b',grin:'1f603',gasp:'1f62e',wink:'1f609',glasses:'1f60e',grumpy:'1f620',unsure:'1f615',cry:'1f622',devil:'1f608',angel:'1f607',kiss:'1f617',winkkiss:'1f618',heart:'2764',kiki:'1f60a',expressionless:'1f611',squint:'1f610',upset:'1f620',persevere:'1f623',penguin:'1f427',like:'f0000',dislike:'1f44e'},symbols:{slightsmile:':)',smile:'=)',frown:':(',winktongue:';-P',poop:':poop:',tongue:':P',grin:'=D',gasp:':o',wink:';)',glasses:'8-)',grumpy:'>:(',unsure:':/',cry:':\'(',devil:'3:)',angel:'O:)',kiss:':*',winkkiss:';*',heart:'<3',kiki:'^_^',expressionless:'-_-',squint:':-|',upset:'>:o',persevere:'>_<',penguin:'<(")',like:'(y)',dislike:'(n)'},regexp:/(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/,noncapturingRegexp:/(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/};},null);
__d('ExplicitRegistrationDispatcherUtils',['ErrorUtils','FluxInternalConfig','emptyFunction','monitorCodeUse','setImmediate'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('emptyFunction'),i=false,j=c('emptyFunction');f.exports={guessStoreName:h,warn:j,inlineRequiresEnabled:i};},null);
__d('ExplicitRegistrationDispatcher',['Dispatcher_DEPRECATED','ExplicitRegistrationDispatcherUtils','setImmediate'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('Dispatcher_DEPRECATED'));i=h&&h.prototype;function j(k){var l=k.strict;i.constructor.call(this);this.$ExplicitRegistrationDispatcher4=l;this.$ExplicitRegistrationDispatcher1={};this.$ExplicitRegistrationDispatcher2={};this.$ExplicitRegistrationDispatcher3={};}j.prototype.explicitlyRegisterStore=function(k){var l=k.getDispatchToken(),m=this.$ExplicitRegistrationDispatcher2[l];this.$ExplicitRegistrationDispatcher3[m]=true;};j.prototype.explicitlyRegisterStores=function(k){k.forEach(function(l){return this.explicitlyRegisterStore(l);}.bind(this));};j.prototype.register=function(k,l){var m=this.__genID(l);this.$ExplicitRegistrationDispatcher1[m]=k;this.$ExplicitRegistrationDispatcher3[m]=false;var n=i.register.call(this,this.$ExplicitRegistrationDispatcher6.bind(this,m),m);this.$ExplicitRegistrationDispatcher2[n]=m;return n;};j.prototype.$ExplicitRegistrationDispatcher6=function(k,l){if(this.$ExplicitRegistrationDispatcher3[k]||!this.$ExplicitRegistrationDispatcher4)this.__invokeCallback(k,this.$ExplicitRegistrationDispatcher1[k],l);};f.exports=j;},null);
__d('BookmarkFeedSorter',['Run'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i={init:function(j){h=j;c('Run').onLeave(function(){h=null;});},setChecked:function(j){if(h)h.setValue(j);}};f.exports=i;},null);
__d('LitestandStream',['csx','cx','CSS','LitestandStoryInsertionStatus','ViewportBounds','getElementPosition','nullthrows'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k,l,m={init:function(n,o,p,q){j=p;k=n;l=q;},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return k;},getSectionID:function(){return j;},getStoryID:function(){return l;},isStory:function(n){return c('CSS').matchesSelector(n,"._5jmm");},canInsertNewerStories:function(){if(c('ViewportBounds').getTop()>c('getElementPosition')(m.getStreamRoot()).y)return false;return c('LitestandStoryInsertionStatus').canInsert();},getFeedStreamID:function(){return parseInt(c('nullthrows')(k).id.split('feed_stream_')[1],16)%1e+08;}};f.exports=m;},null);
__d('FBRTCSupport',['ChannelConstants','RTCConfig','UserAgent'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isSendWebrtcSupported:function(){return c('RTCConfig').SendNewVCGK;},isReceiveWebrtcSupported:function(){return c('RTCConfig').ReceiveNewVCGK;},isVideoInteropSupported:function(){return c('RTCConfig').VideoInteropGK;},isVideoCallBlockingSupported:function(){return c('RTCConfig').VideoCallBlockingGK;},isWebrtcSupported:function(){return (c('UserAgent').isBrowser('Chrome >= 28')||c('UserAgent').isBrowser('Firefox >= 25')||c('UserAgent').isBrowser('Opera >= 20'));},isCollabSupported:function(){return c('RTCConfig').CollabWhitelistedBrowserGK||c('UserAgent').isBrowser('Chrome >= 48');},isOSSupported:function(){return !c('UserAgent').isPlatform('Android')&&!c('UserAgent').isPlatform('iOS');},getCapabilities:function(){var i=0;if(this.isReceiveWebrtcSupported())i=c('ChannelConstants').CAPABILITY_VOIP_INTEROP;return i;}};f.exports=h;},null);
__d('AccessibilityLogger',['AsyncSignal','Cookie'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function(){var i=h.DEFAULT,j=c('Cookie').get(h.COOKIE);if(j){j=JSON.parse(j);for(var k in i)if(k in j)i[k]=j[k];}return i;},logKey:function(i,j){var k=h.getCookie();k[i]++;var l=Date.now();if(l-k[i+'-ts']>h.DECAY_MS){new (c('AsyncSignal'))('/ajax/accessibilitylogging',{eventName:j,times_pressed:k[i]}).send();k[i+'-ts']=l;k[i]=0;}c('Cookie').set(h.COOKIE,JSON.stringify(k));},logHCM:function(){h.logKey('hcm','hcm_users');},logSRKey:function(){h.logKey('sr','sr_users');},logJKKey:function(){h.logKey('jk','jk_users');},logFocusIn:function(){h.logKey('kb','kb_users');}};f.exports=h;},null);
__d("CSSClassTransition",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[];function i(){}Object.assign(i,{go:function(j,k,l,m){var n;for(var o=0;o<h.length;o++)if(h[o](j,k,l,m)===true)n=true;if(!n)j.className=k;},registerHandler:function(j){h.push(j);return {remove:function(){var k=h.indexOf(j);if(k>=0)h.splice(k,1);}};}});f.exports=i;},null);
__d('DocumentTitle',['Arbiter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=document.title,i=null,j=1500,k=[],l=0,m=null,n=false;function o(){if(k.length>0){if(!n){p(k[l].title);l=++l%k.length;}else q();}else{clearInterval(m);m=null;q();}}function p(s){document.title=s;n=true;}function q(){r.set(i||h,true);n=false;}var r={get:function(){return h;},set:function(s,t){document.title=s;if(!t){h=s;i=null;c('Arbiter').inform('update_title',s);}else i=s;},blink:function(s){var t={title:s};k.push(t);if(m===null)m=setInterval(o,j);return {stop:function(){var u=k.indexOf(t);if(u>=0){k.splice(u,1);if(l>u){l--;}else if(l==u&&l==k.length)l=0;}}};}};f.exports=r;},null);
__d('PopoverAsyncMenu',['Bootloader','Event','KeyStatus','PopoverMenu','VirtualCursorStatus','setImmediate'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j={},k=0;h=babelHelpers.inherits(l,c('PopoverMenu'));i=h&&h.prototype;function l(m,n,o,p,q,r){'use strict';i.constructor.call(this,m,n,null,q);this._endpoint=p;this._endpointData=r||{};this._loadingMenu=o;this._instanceId=k++;j[this._instanceId]=this;this._mouseoverListener=c('Event').listen(n,'mouseover',this.fetchMenu.bind(this));}l.prototype._onLayerInit=function(){'use strict';if(!this._menu&&this._loadingMenu)this.setMenu(this._loadingMenu);this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));this._triggerInfo={isKeyDown:c('KeyStatus').isKeyDown(),isVirtualCursorTriggered:c('VirtualCursorStatus').isVirtualCursorTriggered()};c('setImmediate')(function(){return this.fetchMenu();}.bind(this));};l.prototype._onPopoverHide=function(){'use strict';i._onPopoverHide.call(this);this._triggerInfo=null;};l.prototype.fetchMenu=function(){'use strict';if(this._fetched)return;c('Bootloader').loadModules(["AsyncRequest"],function(m){new m().setURI(this._endpoint).setData(Object.assign({pmid:this._instanceId},this._endpointData)).send();}.bind(this),'PopoverAsyncMenu');this._fetched=true;if(this._mouseoverListener){this._mouseoverListener.remove();this._mouseoverListener=null;}};l.prototype._setFocus=function(m){'use strict';var n=this._triggerInfo||{},o=n.isKeyDown,p=n.isVirtualCursorTriggered;this.setInitialFocus(m,o||p);this._triggerInfo=null;};l.setMenu=function(m,n){'use strict';var o=j[m];o.setMenu(n);o._setFocus(n);};l.getInstance=function(m){'use strict';return j[m];};l.getInstanceByTriggerElem=function(m){'use strict';var n=null;Object.keys(j).forEach(function(o){if(j[o]._triggerElem==m)n=j[o];});return n;};f.exports=l;},null);
__d('XHPTemplate',['DataStore','DOM','HTML','XHPTemplateProcessor'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('XHPTemplateProcessor').processor;function i(k){'use strict';if(h instanceof Function)k=h(k);this._model=k;}i.prototype.render=function(){'use strict';if(c('HTML').isHTML(this._model))this._model=c('DOM').setContent(document.createDocumentFragment(),this._model)[0];return this._model.cloneNode(true);};i.prototype.build=function(){'use strict';return new j(this.render());};i.getNode=function(k,l){'use strict';return i.getNodes(k)[l];};i.getNodes=function(k){'use strict';var l=c('DataStore').get(k,'XHPTemplate:nodes');if(!l){l={};var m=c('DOM').scry(k,'[data-jsid]');m.push(k);var n=m.length;while(n--){var o=m[n];l[o.getAttribute('data-jsid')]=o;o.removeAttribute('data-jsid');}c('DataStore').set(k,'XHPTemplate:nodes',l);}return l;};function j(k){'use strict';this._root=k;this._populateNodes();}j.prototype._populateNodes=function(){'use strict';this._nodes={};this._leaves={};var k=this._root.getElementsByTagName('*');for(var l=0,m=k.length;l<m;l++){var n=k[l],o=n.getAttribute('data-jsid');if(o){n.removeAttribute('data-jsid');this._nodes[o]=n;this._leaves[o]=!n.childNodes.length;}}};j.prototype.getRoot=function(){'use strict';return this._root;};j.prototype.getNode=function(k){'use strict';return this._nodes[k];};j.prototype.setNodeProperty=function(k,l,m){'use strict';this.getNode(k)[l]=m;return this;};j.prototype.setNodeContent=function(k,l){'use strict';if(!this._leaves[k])throw new Error("Can't setContent on non-leaf node: "+k);c('DOM').setContent(this.getNode(k),l);return this;};f.exports=i;},null);
__d('PopoverLoadingMenu',['cx','BehaviorsMixin','DOM','PopoverMenuInterface','joinClasses'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('PopoverMenuInterface'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this);this._config=l||{};this._theme=l.theme||{};}k.prototype.getRoot=function(){'use strict';if(!this._root){this._root=c('DOM').create('div',{className:c('joinClasses')("_54nq",this._config.className,this._theme.className)},c('DOM').create('div',{className:"_54ng"},c('DOM').create('div',{className:"_54nf _54af"},c('DOM').create('span',{className:"_54ag"}))));if(this._config.behaviors)this.enableBehaviors(this._config.behaviors);}return this._root;};Object.assign(k.prototype,c('BehaviorsMixin'),{_root:null});f.exports=k;},null);
__d("XFeedEgoImpressionLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/logging\/impression\/",{ego_id:{type:"Int",required:true},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true}});},null);
__d("XPlatformXOutableElementController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/async\/xoutelement\/",{type:{type:"Enum",required:true,enumType:0},fbid:{type:"Int",required:true}});},null);