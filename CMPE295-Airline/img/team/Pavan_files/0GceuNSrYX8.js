if (self.CavalryLogger) { CavalryLogger.start_js(["0Bxfz"]); }

__d('PagesMessengerThreadDialogLink.react',['AsyncDialog','AsyncRequest','Link.react','MessageThreadViewSource','PagesMessagingConst','ReactComponentWithPureRenderMixin','React','URI'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'PagesMessengerThreadDialogLink',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{threadID:h.string.isRequired,viewer:h.string.isRequired,folder:h.string},getInitialState:function(){return {permalinkURI:'#'};},componentDidMount:function(){this._getPermalinkURI(this.props);},componentWillReceiveProps:function(j){if(j.threadID!==this.props.threadID||j.folder!==this.props.folder)this._getPermalinkURI(j);},render:function(){return (c('React').createElement(c('Link.react'),{className:this.props.className,href:'#',onClick:this._handleClick,role:'button'},this.props.children));},_handleClick:function(j){j.preventDefault();c('AsyncDialog').send(new (c('AsyncRequest'))(this.state.permalinkURI).setRelativeTo(j.target));},_getPermalinkURI:function(j){this.setState(this.getInitialState());var k=j.threadID,l=j.viewer,m=j.folder;e(['MercuryThreadIDMap'],function(n){var o=n.getForFBID(l);o.getServerIDFromClientID(k,function(p){this.isMounted()&&this.setState({permalinkURI:new (c('URI'))(c('PagesMessagingConst').LOAD_MESSAGE_THREAD_URI).setQueryData({pageid:l,threadid:k,threadElementID:p,folder:m,source:c('MessageThreadViewSource').REFRESH_HIGHLANDER_JEWEL}).toString()});}.bind(this));}.bind(this));}});f.exports=i;},null);
__d('MercuryJewelCountControl',['Arbiter','MercuryDispatcher','MercuryThreadInformer','MercuryUnseenState','UserActivity','isInFocusMode'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';var j=c('MercuryDispatcher').get(),k=c('MercuryThreadInformer').get();this.$MercuryJewelCountControl2=c('MercuryUnseenState').get();this.render();j.subscribe('model-update-completed',function(l,m){this.$MercuryJewelCountControl3(false);}.bind(this));k.subscribe('unseen-updated',function(){return this.render();}.bind(this));this.$MercuryJewelCountControl1=i;this.$MercuryJewelCountControl1.subscribe('marked-seen',function(){this.$MercuryJewelCountControl3(true);}.bind(this));}h.prototype.render=function(){'use strict';var i=c('isInFocusMode')()?0:this.$MercuryJewelCountControl2.getUnseenCount();c('Arbiter').inform('jewel/count-updated',{jewel:'mercurymessages',count:i},c('Arbiter').BEHAVIOR_STATE);};h.prototype.$MercuryJewelCountControl3=function(i){'use strict';if(i||this.$MercuryJewelCountControl1.isOpen()&&c('UserActivity').isActive())this.$MercuryJewelCountControl2.markAsSeen();};h.constructStores=function(){'use strict';c('MercuryUnseenState').get();};f.exports=h;},null);
__d('P2PBannerStore',['invariant','EventEmitter','P2PActionConstants','P2PAPI','P2PDispatcher'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=void 0,l={},m=false,n=false;i=babelHelpers.inherits(o,c('EventEmitter'));j=i&&i.prototype;function o(){j.constructor.call(this);k=c('P2PDispatcher').register(this.onEventDispatched.bind(this));}o.prototype.onEventDispatched=function(p){var q=p.type,r=p.data;switch(q){case c('P2PActionConstants').BANNER_STATES_UPDATED:this.handleBannerStatesUpdated(r);this.emit('change');break;case c('P2PActionConstants').BANNER_DISMISSED:this.handleBannerDismissed(r);this.emit('change');break;case c('P2PActionConstants').BANNER_COMPLETED:this.handleBannerCompleted(r);this.emit('change');break;}};o.prototype.handleBannerStatesUpdated=function(p){m=true;l=p;};o.prototype.handleBannerDismissed=function(p){var q=this.getBannerState(p);q.hasBeenDismissed=true;};o.prototype.shouldShowBanner=function(p){var q=void 0;if(!n){c('P2PAPI').getBannerStates();n=true;return false;}if(!m)return false;q=this.getBannerState(p);return (q.eligible&&!q.hasBeenDismissed);};o.prototype.handleBannerCompleted=function(p){var q=this.getBannerState(p);q.eligible=false;};o.prototype.getBannerState=function(p){var q=l[p];!q?h(0):void 0;return q;};f.exports=new o();},null);
__d('P2PJewelBanner.react',['cx','fbt','ix','Image.react','Layout.react','P2PButton.react','React','TooltipLink.react','URI','XUIGrayText.react'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('Layout.react').FillColumn,l=c('Layout.react').Column,m=c('React').PropTypes,n=c('React').createClass({displayName:'P2PJewelBanner',propTypes:{bodyText:m.oneOfType([m.string,m.object]),isDismissable:m.bool,onClose:m.func,primaryActionConfig:m.shape({onClick:m.func,text:m.string.isRequired,uri:m.oneOfType([m.string,m.object])}).isRequired,secondaryActionConfig:m.shape({onClick:m.func.isRequired,text:m.string.isRequired}),titleText:m.string.isRequired},getDefaultProps:function(){return {isDismissable:false};},handleCloseClick:function(o){o.stopPropagation();if(this.props.onClose)this.props.onClose();},handleClick:function(){this.execPrimaryClick();},handlePrimaryClick:function(o){o.stopPropagation();this.execPrimaryClick();},execPrimaryClick:function(){if(this.props.primaryActionConfig.uri)new (c('URI'))(this.props.primaryActionConfig.uri).go();this.props.primaryActionConfig.onClick&&this.props.primaryActionConfig.onClick();},handleSecondaryActionClick:function(o){o.stopPropagation();this.props.secondaryActionConfig&&this.props.secondaryActionConfig.onClick&&this.props.secondaryActionConfig.onClick();},renderCloseButton:function(){return (c('React').createElement(c('TooltipLink.react'),{alignH:'center',className:"_47d8",href:'#',onClick:this.handleCloseClick,position:'above',tooltip:i._("Dismiss")},c('React').createElement(c('Image.react'),{className:"_47dg",height:7,src:j('/images/p2p/jewel-banner-close.png'),width:7})));},renderActions:function(){var o=this.props.primaryActionConfig,p=void 0,q=this.props.secondaryActionConfig;if(q)p=c('React').createElement(c('P2PButton.react'),{className:"_5d0t",href:'#',label:q.text,onClick:this.handleSecondaryActionClick,size:'large',target:'_blank',type:'primary'});return (c('React').createElement('div',null,p,c('React').createElement(c('P2PButton.react'),{className:"_5d0t",href:o.uri||'#',label:o.text,onClick:this.handlePrimaryClick,size:'large',target:'_blank',type:'primary',use:'confirm'})));},render:function(){var o=void 0;if(this.props.isDismissable)o=this.renderCloseButton();return (c('React').createElement('div',{className:"_5d0n",onClick:this.handleClick},o,c('React').createElement(c('Layout.react'),null,c('React').createElement(l,{className:"_400i"},c('React').createElement('div',{className:"_400j"},c('React').createElement(c('Image.react'),{className:"_5d0q",height:50,src:j('/images/p2p/jewel-banner-coin.png'),width:50}))),c('React').createElement(k,{className:"_47di"},c('React').createElement('div',{className:"_400j"},c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'dark',weight:'bold'},this.props.titleText),c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'light'},this.props.bodyText))),c('React').createElement(l,{className:"_400k"},c('React').createElement('div',{className:"_400j"},this.renderActions())))));}});f.exports=n;},null);
__d('P2PPendingPaymentRequestJewelBanner.react',['fbt','P2PJewelBanner.react','P2PPaymentRequest','P2PPaymentRequestActionHelper','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PPendingPaymentRequestJewelBanner',propTypes:{paymentRequest:i.instanceOf(c('P2PPaymentRequest')).isRequired},handleDeclineClick:function(){c('P2PPaymentRequestActionHelper').initDeclinePaymentRequestFlow(this.props.paymentRequest);},handlePayClick:function(){c('P2PPaymentRequestActionHelper').initPayForPaymentRequestFlow(this.props.paymentRequest,'banner');},renderBodyText:function(){var k=this.props.paymentRequest,l=k.memoText;if(!l)return null;return h._("For {What the user paid for}",[h.param('What the user paid for',l)]);},render:function(){var k=this.props.paymentRequest;return (c('React').createElement(c('P2PJewelBanner.react'),{bodyText:this.renderBodyText(),primaryActionConfig:{onClick:this.handlePayClick,text:h._("Pay")},secondaryActionConfig:{onClick:this.handleDeclineClick,text:h._("Decline")},titleText:h._("{requester_name} requested {amount}",[h.param('requester_name',k.requester.name),h.param('amount',k.amountWithSymbol)])}));}});f.exports=j;},null);
__d('P2PPendingPushFailJewelBanner.react',['fbt','P2PJewelBanner.react','P2PLinkConstants','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PPendingPushFailJewelBanner',propTypes:{transfer:i.object.isRequired},getActionText:function(){return h._("Learn More");},getBodyText:function(){var k=this.props.transfer;return h._("{currency}{amount} from {sender_name} couldn't be deposited using your debit card.",[h.param('currency',k.currency),h.param('amount',k.amount),h.param('sender_name',k.sender.name)]);},render:function(){return (c('React').createElement(c('P2PJewelBanner.react'),{bodyText:this.getBodyText(),primaryActionConfig:{text:this.getActionText(),uri:c('P2PLinkConstants').helpTransferPushFailURI},titleText:h._("Update Your Card")}));}});f.exports=j;},null);
__d('P2PTimeBasedAcceptMessage.react',['fbt','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PTimeBasedAcceptMessage',propTypes:{transfer:i.object.isRequired},render:function(){var k=this.props.transfer,l=k.creationTime*1000,m=1000*60*60*24,n=Date.now(),o=(n-l)/m,p=k.expirationTimestamp*1000-n,q=Math.round(Math.max(p/m,1)),r=void 0;if(o<=2){r=h._("Add a debit card and it'll go straight to your bank.");}else if(o<=4){r=h._("This money will be sent back in {days left} days. Add a debit card to accept it.",[h.param('days left',q)]);}else if(o<=5){r=h._({"day":"You have {days left} day to add a debit card before the money is sent back to {sender_name}.","days":"You have {days left} days to add a debit card before the money is sent back to {sender_name}."},[h.param('days left',q),h['enum'](q===1?'day':'days',{day:'day',days:'days'}),h.param('sender_name',k.sender.name)]);}else r=h._("You have 24 hours to add a debit card before the money is sent back to {sender_name}.",[h.param('sender_name',k.sender.name)]);return c('React').createElement('div',null,r);}});f.exports=j;},null);
__d('P2PPendingRecipientNUXJewelBanner.react',['fbt','P2PAcceptMoneyDialog.react','P2PActions','P2PCreditCardStore','P2PJewelBanner.react','P2PTimeBasedAcceptMessage.react','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PPendingRecipientNUXJewelBanner',propTypes:{transfer:i.object.isRequired},getInitialState:function(){return {creditCards:c('P2PCreditCardStore').getAll()};},creditCardStoreSub:null,componentDidMount:function(){this.creditCardStoreSub=c('P2PCreditCardStore').addListener('change',this.onCreditCardStoreChange);},componentWillUnmount:function(){if(this.creditCardStoreSub){this.creditCardStoreSub.remove();this.creditCardStoreSub=null;}},onCreditCardStoreChange:function(){var k={creditCards:c('P2PCreditCardStore').getAll()};if(this.isMounted())this.setState(k);},handleClick:function(){this.showAcceptMoneyDialog();},showAcceptMoneyDialog:function(){c('P2PActions').showDialog(c('P2PAcceptMoneyDialog.react'),{creditCards:this.state.creditCards,onClose:c('P2PActions').hideDialog,transfer:this.props.transfer});},renderTimeBasedMessage:function(){return (c('React').createElement(c('P2PTimeBasedAcceptMessage.react'),{transfer:this.props.transfer}));},render:function(){var k=this.props.transfer;if(!c('P2PCreditCardStore').isCreditCardsFetchComplete())return null;return (c('React').createElement(c('P2PJewelBanner.react'),{bodyText:this.renderTimeBasedMessage(),primaryActionConfig:{onClick:this.handleClick,text:h._("Add Card")},titleText:h._("Accept {currency}{amount} from {sender_name}.",[h.param('currency',k.currency),h.param('amount',k.amount),h.param('sender_name',k.sender.name)])}));}});f.exports=j;},null);
__d('P2PPendingRecipientVerificationJewelBanner.react',['fbt','P2PJewelBanner.react','P2PTransferParam','P2PVerificationFlowHelper','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PPendingRecipientVerificationJewelBanner',propTypes:{transfer:i.object.isRequired},handleClick:function(){c('P2PVerificationFlowHelper').startVerificationFlow(this.props.transfer[c('P2PTransferParam').TRANSFER_ID],false);},render:function(){return (c('React').createElement(c('P2PJewelBanner.react'),{bodyText:h._("To accept the money {sender_name} sent you, please confirm your information.",[h.param('sender_name',this.props.transfer.sender.name)]),primaryActionConfig:{onClick:this.handleClick,text:h._("Confirm Info")},titleText:h._("Please Confirm Your Info")}));}});f.exports=j;},null);
__d('P2PJewelBannerContainer.react',['cx','CurrentUser','P2PBannerStore','P2PPaymentRequestsStore','P2PPendingPaymentRequestJewelBanner.react','P2PPendingPushFailJewelBanner.react','P2PPendingRecipientNUXJewelBanner.react','P2PPendingRecipientVerificationJewelBanner.react','P2PTransferParam','P2PTransferStatus','P2PTransferStore','PureStoreBasedStateMixin','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'P2PJewelBannerContainer',mixins:[c('PureStoreBasedStateMixin')(c('P2PBannerStore'),c('P2PPaymentRequestsStore'),c('P2PTransferStore'))],statics:{calculateState:function(){var j=c('P2PTransferStore').getNUXTransfer(),k=c('P2PPaymentRequestsStore').getPendingPaymentRequest();return {paymentRequest:k,paymentRequestBannerShown:!!k,transfer:j,transferBannerShown:j&&j.receiver.id==c('CurrentUser').getID()};}},renderTransferBanner:function(){var j=this.state.transfer,k=j[c('P2PTransferParam').STATUS];switch(k){case c('P2PTransferStatus').PENDING_RECIPIENT_NUX:return (c('React').createElement(c('P2PPendingRecipientNUXJewelBanner.react'),{transfer:j}));case c('P2PTransferStatus').PENDING_RECIPIENT_VERIFICATION:return (c('React').createElement(c('P2PPendingRecipientVerificationJewelBanner.react'),{transfer:j}));case c('P2PTransferStatus').PENDING_PUSH_FAIL:return (c('React').createElement(c('P2PPendingPushFailJewelBanner.react'),{transfer:j}));}},renderPaymentRequestBanner:function(){return (c('React').createElement(c('P2PPendingPaymentRequestJewelBanner.react'),{paymentRequest:this.state.paymentRequest}));},render:function(){var j=void 0;if(this.state.transferBannerShown){j=this.renderTransferBanner();}else if(this.state.paymentRequestBannerShown)j=this.renderPaymentRequestBanner();return (c('React').createElement('div',{className:"_1xfk"},j));}});f.exports=i;},null);
__d('MercuryThreadlistContainer.react',['Bootloader','immutable','MercuryAPIArgsSource','MercuryFilters','MercuryThreadlistConstants','MessagingTag','P2PJewelBannerContainer.react','React','SubscriptionsHandler'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i='search',j=c('React').createClass({displayName:'MercuryThreadlistContainer',propTypes:{ChildClass:h.func.isRequired,folder:h.string.isRequired,showCount:h.bool,showPresence:h.bool,source:h.string,threadCount:h.number,viewer:h.string.isRequired},getDefaultProps:function(){return {source:c('MercuryAPIArgsSource').JEWEL};},getInitialState:function(){return {isLoading:true,isSearching:false,unreadMessageRequestThreads:[],threads:c('immutable').Map()};},componentDidMount:function(){c('Bootloader').loadModules(["MercuryOrderedThreadlist","MercuryThreadInformer","MercuryThreads"],function(k,l,m){this._threadlist=k.getForFBID(this.props.viewer);this._threads=m.getForFBID(this.props.viewer);this._informer=l.getForFBID(this.props.viewer);this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(this._informer.subscribe('threadlist-updated',function(n,o){this._updateThreads(this.props.folder,this.props.filter);}.bind(this)));this._handleFolderChange(this.props.folder,this.props.filter);}.bind(this),'MercuryThreadlistContainer.react');},componentWillReceiveProps:function(k){if(k.folder!==this.props.folder||k.filter!==this.props.filter)this._handleFolderChange(k.folder,k.filter);},componentWillUnmount:function(){this._cancelThreadsCallback();this._cancelThreadlistCallback();this._subscriptions&&this._subscriptions.release();},render:function(){var k=this.props,l=k.ChildClass,m=k.folder,n=k.filter,o=babelHelpers.objectWithoutProperties(k,['ChildClass','folder','filter']),p=this.state.isSearching?this.state.threads.get(i)||[]:this.state.threads.get(m)||[];return (c('React').createElement(l,babelHelpers['extends']({},o,{folder:m,isLoaded:!!this._threadlist&&this._threadlist.hasLoadedThreadlist(m,n),isLoading:this.state.isLoading,isSearching:this.state.isSearching,newMessageRequestThreads:this.state.unreadMessageRequestThreads,onLoadMoreRequest:this._loadMoreThreads,onQuery:this._handleQuery,onSearchResults:this._handleSearchResults,p2pJewelBannerContainer:this._renderP2PJewelBannerContainer(),threads:p})));},_renderP2PJewelBannerContainer:function(){return (c('React').createElement(c('P2PJewelBannerContainer.react'),null));},_handleFolderChange:function(k,l){if(k===c('MessagingTag').INBOX&&this.props.source!==c('MercuryAPIArgsSource').JEWEL)this._loadMessageRequestThreads();if(!this._hasInitialThreads(k,l)){this._loadThreads(k,l,this.props.threadCount||c('MercuryThreadlistConstants').JEWEL_THREAD_COUNT+3);}else if(this.state.isLoading){this.setState({isLoading:false},function(){this._updateThreads(k,l);}.bind(this));}else this._updateThreads(k,l);},_loadMessageRequestThreads:function(){this._threadlist.getFilteredThreadlist(c('MercuryThreadlistConstants').RECENT_THREAD_OFFSET,c('MercuryThreadlistConstants').MAX_UNREAD_COUNT,c('MessagingTag').PENDING,c('MercuryFilters').UNREAD,this._updateUnreadMessageRequestThreads,true,this.props.source);},_loadMoreThreads:function(){if(!this.state.isSearching&&!this.state.isLoading&&!this._threadlist.hasLoadedThreadlist(this.props.folder,this.props.filter))this._loadThreads(this.props.folder,this.props.filter,this._getThreadCount(this.props.folder)+c('MercuryThreadlistConstants').JEWEL_MORE_COUNT+1);},_loadThreads:function(k,l,m){if(!this._threadlist)return;this._cancelThreadlistCallback();this.setState({isLoading:true},function(){var n=this._threadlist.getFilteredThreadlist(c('MercuryThreadlistConstants').RECENT_THREAD_OFFSET,m,k,l||c('MercuryFilters').ALL,function(o){return this.setState({isLoading:false});}.bind(this),true,this.props.source);this._threadlistSub={subscriberID:n,folder:k,filter:l};}.bind(this));},_updateThreads:function(k,l,m){if(!this._threadlist||!this._threads)return;this._cancelThreadsCallback();var n=m||this._threadlist.getAvailableThreadlistNow(k,l);this._threadsSub=this._threads.getMultiThreadMeta(n,function(o){this.setState({threads:this.state.threads.set(k,n.map(function(p){return o[p];}))});}.bind(this));},_updateUnreadMessageRequestThreads:function(){if(!this._threadlist||!this._threads)return;var k=this._threadlist.getAvailableThreadlistNow(c('MessagingTag').PENDING,c('MercuryFilters').UNREAD);this._threads.getMultiThreadMeta(k,function(l){this.setState({unreadMessageRequestThreads:k.map(function(m){return l[m];})});}.bind(this));},_hasInitialThreads:function(k,l){return !!(this._threadlist&&(this._threadlist.getThreadCount(k,l)>=c('MercuryThreadlistConstants').JEWEL_THREAD_COUNT+3||this._threadlist.hasLoadedThreadlist(k,l)));},_getThreadCount:function(k){var l=this.state.threads.get(k);return l?l.length:0;},_cancelThreadsCallback:function(){this._threads&&this._threadsSub&&this._threads.unsubscribe(this._threadsSub);},_cancelThreadlistCallback:function(){this._threadlist&&this._threadlistSub&&this._threadlist.unsubscribe(this._threadlistSub.subscriberID,this._threadlistSub.folder,this._threadlistSub.filter);},_handleSearchResults:function(k,l){this.setState({isLoading:l,searchThreads:[]},function(){return this._updateThreads(i,c('MercuryFilters').ALL,k);}.bind(this));},_handleQuery:function(k){this.setState({isSearching:!!k});}});f.exports=j;},null);
__d('MercuryThreadlistRowContainer.react',['immutable','ImmutableObject','MercuryParticipants','React','StoreAndPropBasedStateMixin','shallowEqual'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'MercuryThreadlistRowContainer',mixins:[c('StoreAndPropBasedStateMixin')(c('MercuryParticipants'))],propTypes:{ChildClass:h.func.isRequired,thread:h.instanceOf(c('ImmutableObject')).isRequired,viewer:h.string.isRequired},statics:{calculateState:function(j){return {participants:c('immutable').Map(c('immutable').Seq(j.thread.participants).map(function(k){return [k,c('MercuryParticipants').getOrFetch(k)];}))};}},shouldComponentUpdate:function(j,k){return (!c('shallowEqual')(j,this.props)||!c('immutable').is(k.participants,this.state.participants));},render:function(){var j=this.props,k=j.ChildClass,l=babelHelpers.objectWithoutProperties(j,['ChildClass']);return (c('React').createElement(k,babelHelpers['extends']({},l,{participants:this.state.participants})));}});f.exports=i;},null);
__d('MercuryPresenceIndicator.react',['cx','fbt','Arbiter','AvailableListConstants','MercuryIDs','PresenceStatus','ReactComponentWithPureRenderMixin','React','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'MercuryPresenceIndicator',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{threadID:j.string.isRequired},componentDidMount:function(){this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(c('Arbiter').subscribe(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,function(){return this.forceUpdate();}.bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var l=this._getPresence();return (c('React').createElement('span',{className:this._getClasses(l)},c('React').createElement('span',{className:'accessible_elem'},this._getLabel(l))));},_getPresence:function(){if(!c('MercuryIDs').isCanonical(this.props.threadID)){return null;}else{var l=c('MercuryIDs').getUserIDFromThreadID(this.props.threadID);return c('PresenceStatus').get(l);}},_getClasses:function(l){return "presenceIndicator"+(c('MercuryIDs').isGroupChat(this.props.threadID)?' '+"groupThread":'')+(l==c('AvailableListConstants').ACTIVE?' '+"presenceActive":'');},_getLabel:function(l){switch(l){case c('AvailableListConstants').ACTIVE:return i._("Active");default:return null;}}});f.exports=k;},null);
__d('MercuryThreadPermalink.react',['HighlanderFinchGating','Link.react','PagesMessengerThreadDialogLink.react','ReactComponentWithPureRenderMixin','React','WebMessengerThreadPermalinks'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'MercuryThreadPermalink',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{threadID:h.string.isRequired,viewer:h.string.isRequired,folder:h.string,onClick:h.func},getInitialState:function(){return {permalinkURI:'#'};},componentDidMount:function(){this._getPermalinkURI(this.props);},componentWillReceiveProps:function(j){if(j.threadID!==this.props.threadID||j.folder!==this.props.folder)this._getPermalinkURI(j);},render:function(){if(c('HighlanderFinchGating').HIGHLANDER_FINCH_GATING)return (c('React').createElement(c('PagesMessengerThreadDialogLink.react'),{className:this.props.className,threadID:this.props.threadID,viewer:this.props.viewer,folder:this.props.folder},this.props.children));return (c('React').createElement(c('Link.react'),{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:'button'},this.props.children));},_getPermalinkURI:function(j){if(c('HighlanderFinchGating').HIGHLANDER_FINCH_GATING)return;this.setState(this.getInitialState());c('WebMessengerThreadPermalinks').getThreadURI(j.threadID,function(k){return this.isMounted()&&this.setState({permalinkURI:k});}.bind(this),j.folder);}});f.exports=i;},null);
__d('MercuryThreadReadToggle.react',['fbt','invariant','MercuryThreadActions','ReactComponentWithPureRenderMixin','React','ReadToggle.react'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'MercuryThreadReadToggle',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{threadID:j.string.isRequired,viewer:j.string.isRequired,unreadCount:j.number.isRequired},render:function(){!(this.props.unreadCount>=0)?i(0):void 0;return (c('React').createElement(c('ReadToggle.react'),{isRead:this.props.unreadCount===0,onClick:this._handleClick,readLabel:h._("Mark as Unread"),unreadLabel:h._("Mark as Read")}));},_handleClick:function(l){l.preventDefault();l.stopPropagation();var m=c('MercuryThreadActions').getForFBID(this.props.viewer);this.props.unreadCount>0?m.markRead(this.props.threadID):m.markUnread(this.props.threadID);}});f.exports=k;},null);
__d('MessagesJewelInlineThumbnail.react',['cx','MercuryAttachmentType','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'MessagesJewelInlineThumbnail',propTypes:{thread:i.object.isRequired},render:function(){var k=this._getPhotoAttachments();if(k.length===0)return c('React').createElement('span',null);var l=k[0].thumbnail_url;if(!l)return c('React').createElement('span',null);var m=c('React').createElement('span',{className:"_56hv"},c('React').createElement('i',{style:{backgroundImage:'url('+l+')'}}));if(k.length>1)m=c('React').createElement('span',null,c('React').createElement('span',{className:"_56hy"}),m);return m;},_getPhotoAttachments:function(){var k=this.props.thread;if(!k.snippet_attachments)return [];return k.snippet_attachments.filter(function(l){return l.attach_type===c('MercuryAttachmentType').PHOTO;});}});f.exports=j;},null);
__d('MessagesJewelThreadListRow.react',['cx','ImageBlock.react','immutable','ImmutableObject','MercuryPresenceIndicator.react','MercurySeenIndicator.react','MercuryThreadImage.react','MercuryThreadPermalink.react','MercuryThreadReadToggle.react','MercuryThreadSnippet.react','MercuryThreadTimestamp.react','MercuryThreadTitle.react','MessagesJewelInlineThumbnail.react','MNAdsMessageUtils','ReactComponentWithPureRenderMixin','React','UserAgent'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'MessagesJewelThreadListRow',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{onClick:i.func,participants:i.instanceOf(c('immutable').Map).isRequired,showPresence:i.bool,thread:i.instanceOf(c('ImmutableObject')).isRequired,viewer:i.string.isRequired,wasSeenByAll:i.bool},render:function(){var k=c('UserAgent').isBrowser('Chrome')&&!c('UserAgent').isPlatform('Windows')?c('React').createElement('div',{className:'author fixemoji'},this._renderThreadTitle(),this._renderPresenceIndicator()):c('React').createElement('div',{className:'author'},c('React').createElement('strong',null,this._renderThreadTitle()),this._renderPresenceIndicator()),l=c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},c('React').createElement('div',{className:"MercuryThreadImage _4qeb"},this._renderThreadImage()),c('React').createElement('div',{className:'content'},k,c('React').createElement('div',{className:'snippet preview'},this._renderThreadIndicator(),this._renderThreadSnippet()),c('React').createElement('div',{className:'time'},c('MNAdsMessageUtils').isAdsMessageRequest(this.props.thread)?c('MNAdsMessageUtils').renderAdsMessageRequestStatus():this._renderThreadTimeStamp())),c('React').createElement('div',null,c('React').createElement(c('MessagesJewelInlineThumbnail.react'),{thread:this.props.thread}),c('React').createElement('div',{className:'x_div'},this._renderThreadReadToggle())));return (c('React').createElement('li',{className:this.props.thread.unread_count>0?"jewelItemNew":''},c('React').createElement(c('MercuryThreadPermalink.react'),{className:'messagesContent',threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick},l)));},_renderPresenceIndicator:function(){if(!this.props.showPresence)return null;return (c('React').createElement(c('MercuryPresenceIndicator.react'),{threadID:this.props.thread.thread_id}));},_renderThreadImage:function(k){return (c('React').createElement(c('MercuryThreadImage.react'),{size:k,thread:this.props.thread,useBackground:true,viewer:this.props.viewer}));},_renderThreadTitle:function(){return (c('React').createElement(c('MercuryThreadTitle.react'),{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:true}));},_renderThreadSnippet:function(){return (c('React').createElement(c('MercuryThreadSnippet.react'),{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer}));},_renderThreadTimeStamp:function(){return (c('React').createElement(c('MercuryThreadTimestamp.react'),{time:this.props.thread.timestamp,title:this.props.thread.timestamp_absolute,text:this.props.thread.timestamp_relative}));},_renderThreadIndicator:function(){return (c('React').createElement(c('MercurySeenIndicator.react'),{thread:this.props.thread,viewer:this.props.viewer}));},_renderThreadReadToggle:function(){return (c('React').createElement(c('MercuryThreadReadToggle.react'),{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count}));}});f.exports=j;},null);
__d('MessagesJewelThreadlistRowContainer.react',['ChatOpenTab','ImmutableObject','MercuryDelayedRoger','MercuryThreadlistRowContainer.react','MessagesJewelThreadListRow.react','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('MercuryDelayedRoger').get(),i=c('React').PropTypes,j=c('React').createClass({displayName:'MessagesJewelThreadlistRowContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(h)],propTypes:{thread:i.instanceOf(c('ImmutableObject')).isRequired,viewer:i.string.isRequired},statics:{calculateState:function(k){return {wasSeenByAll:h.wasSeenByAll(k.thread.thread_id)};}},render:function(){return (c('React').createElement(c('MercuryThreadlistRowContainer.react'),{ChildClass:c('MessagesJewelThreadListRow.react'),onClick:this._handleClick,showPresence:c('ChatOpenTab').canOpenTab(),thread:this.props.thread,viewer:this.props.viewer,wasSeenByAll:this.state.wasSeenByAll}));},_handleClick:function(k){if(k.button===1||k.altKey||k.ctrlKey||k.metaKey||k.shiftKey)return;if(!c('ChatOpenTab').canOpenTab())return;k.preventDefault();c('ChatOpenTab').openThread(this.props.thread.thread_id,'jewel');}});f.exports=j;},null);
__d('MessagesJewelThreadList.react',['cx','fbt','BootloadedComponent.react','ImmutableObject','JewelConstants','JSResource','Link.react','MessagesJewelThreadlistRowContainer.react','MessagingTag','React','ScrollableArea.react','XUISpinner.react','debounce','getViewportDimensions','throttle'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=160,k=450,l=c('React').PropTypes,m=c('React').createClass({displayName:'MessagesJewelThreadList',propTypes:{isLoaded:l.bool,isLoading:l.bool,jewelRequestsUI:l.bool,onLoadMoreRequest:l.func,p2pJewelBannerContainer:l.element,threads:l.arrayOf(l.instanceOf(c('ImmutableObject'))).isRequired,viewer:l.string.isRequired},getInitialState:function(){return {height:this._calculateHeight()};},componentDidMount:function(){this._listener=Event.listen(window,'resize',c('debounce')(function(){this.setState({height:this._calculateHeight()});}.bind(this)));},componentWillUnmount:function(){this._listener.remove();},render:function(){return (c('React').createElement(c('ScrollableArea.react'),{className:"_2q3u",height:this.state.height,onScroll:c('throttle')(this._handleScroll,50),ref:'scrollable'},c('React').createElement('ul',{className:'jewelContent'},this.props.p2pJewelBannerContainer?c('React').createElement('li',null,this.props.p2pJewelBannerContainer):null,this._renderJewelRequestsUI(),this._renderJewelRequestsNUX(),this.props.threads.map(function(n){return (c('React').createElement(c('MessagesJewelThreadlistRowContainer.react'),{key:n.thread_id,thread:n,viewer:this.props.viewer}));}.bind(this))),this._renderLoadMoreLink()));},_calculateHeight:function(){return Math.min(c('JewelConstants').FLYOUT_MAX_HEIGHT||k,c('getViewportDimensions')().height-j);},_renderLoadMoreLink:function(){if(this.props.isLoaded){if(this.props.folder===c('MessagingTag').PENDING)return (c('React').createElement('div',{className:"_16bh _16bi"},c('React').createElement(c('Link.react'),{onClick:this._handleFilteredRequestsClick},i._("See filtered requests"))));return null;}if(this.props.isLoading)return (c('React').createElement(c('XUISpinner.react'),{className:"jewelLoading"}));return (c('React').createElement('div',{className:"_v8y"},c('React').createElement(c('Link.react'),{href:'#',onClick:this._handleLoadMoreClick},i._("Show Older"))));},_handleScroll:function(){if(this.props.isLoaded)return;var n=this.refs.scrollable.getArea();if(n.getScrollTop()+n.getClientHeight()>=n.getScrollHeight()-1)this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();},_handleLoadMoreClick:function(n){n.preventDefault();this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();},_renderJewelRequestsUI:function(){var n=this.props.newMessageRequestThreads;if(!this.props.jewelRequestsUI||this.props.folder===c('MessagingTag').PENDING||!n||n.length===0)return null;return (c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement('li',{style:{height:60}}),bootloadLoader:c('JSResource')('MessagesJewelMessageRequestsRow.react').__setRef('MessagesJewelThreadList.react'),onClick:this._handleMessageRequestsClick,threads:n,viewer:this.props.viewer}));},_renderJewelRequestsNUX:function(){if(!this.props.jewelRequestsUI||this.props.folder!==c('MessagingTag').PENDING)return null;return (c('React').createElement('li',{className:"_16bh _16bi"},i._("Open a request to get more info about who's messaging you."),c('React').createElement('br',null),i._("They won't know you've seen it until you accept.")));},_handleMessageRequestsClick:function(n){if(this.props.onMessageRequestsClick)this.props.onMessageRequestsClick(n);},_handleFilteredRequestsClick:function(n){if(this.props.onFilteredRequestsClick)this.props.onFilteredRequestsClick(n);}});f.exports=m;},null);
__d('MercuryJewelThreadlistControl',['csx','cx','fbt','ArbiterMixin','CurrentUser','CSS','DOM','Event','JSLogger','MercuryConfig','MercuryFilters','MercuryThreadlistConstants','MercuryThreadlistContainer.react','MessagesJewelThreadList.react','MessagingTag','WebMessengerPermalinkConstants','React','ReactDOM','MercuryThreadInformer','MercuryUnreadState'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('MercuryThreadInformer').get(),l=c('MercuryUnreadState').get(),m=c('JSLogger').create('mercury_jewel'),n=c('MessagingTag').PENDING,o=c('WebMessengerPermalinkConstants').PENDING_PATH,p='back_to_inbox';function q(u){var v=u.getFlyout();this._jewelController=u;this._threadlistContainer=c('DOM').find(v,"._3v_l");this._currentFolder=c('MessagingTag').INBOX;this._currentFilter=c('MercuryFilters').ALL;this._jewelTabLinks={};this._jewelTabCounts={};this._jewelTabLinks[c('MessagingTag').INBOX]=c('DOM').find(v,"._1sde");this._jewelTabCounts[c('MessagingTag').INBOX]=c('DOM').find(v,"._1sdg");c('Event').listen(this._jewelTabLinks[c('MessagingTag').INBOX],'click',r.bind(this,c('MessagingTag').INBOX,c('MercuryFilters').ALL));if(!c('MercuryConfig').JewelRequestsUI){this._jewelTabLinks[n]=c('DOM').find(v,"._1sdf");this._jewelTabCounts[n]=c('DOM').find(v,"._1sdh");c('Event').listen(this._jewelTabLinks[n],'click',r.bind(this,n,c('MercuryFilters').ALL));}else{this._jewelTabLinks[p]=c('DOM').find(v,"._34zq");c('Event').listen(this._jewelTabLinks[p],'click',r.bind(this,c('MessagingTag').INBOX,c('MercuryFilters').ALL));}this._markAllReadLink=c('DOM').find(v,"._1c1m");this._seeAllLink=c('DOM').find(v,'.seeMore');c('Event').listen(this._markAllReadLink,'click',function(w){l.markFolderAsRead(this._currentFolder);w.kill();}.bind(this));k.subscribe('unread-updated',s.bind(this));s.bind(this)();this.render();m.bump('opened_threadlist_'+this._currentFolder);}Object.assign(q.prototype,c('ArbiterMixin'));Object.assign(q.prototype,{render:function(){c('ReactDOM').render(c('React').createElement(c('MercuryThreadlistContainer.react'),{ChildClass:c('MessagesJewelThreadList.react'),viewer:c('CurrentUser').getID(),folder:this._currentFolder,filter:this._currentFilter,jewelRequestsUI:c('MercuryConfig').JewelRequestsUI,onMessageRequestsClick:this._handleMessageRequestsClick.bind(this),onFilteredRequestsClick:this._handleFilteredRequestsClick.bind(this)}),this._threadlistContainer);},_handleMessageRequestsClick:function(u){u.preventDefault();r.call(this,c('MessagingTag').PENDING,c('MercuryFilters').ALL);},_handleFilteredRequestsClick:function(u){u.preventDefault();r.call(this,c('MessagingTag').OTHER,c('MercuryFilters').ALL);}});function r(u,v){if(this._currentFolder!==u||this._currentFilter!==v){var w=this._currentFolder,x=u===c('MessagingTag').INBOX,y=u;m.bump('opened_threadlist_'+u);if(this._jewelTabLinks[y])c('CSS').addClass(this._jewelTabLinks[y],"_1sdd");if(this._jewelTabLinks[w])c('CSS').removeClass(this._jewelTabLinks[w],"_1sdd");this._currentFolder=u;this._currentFilter=v;if(x){this._seeAllLink.href=c('WebMessengerPermalinkConstants').BASE_PATH;}else this._seeAllLink.href=o;if(c('MercuryConfig').JewelRequestsUI){c('CSS').conditionShow(this._jewelTabLinks[c('MessagingTag').INBOX],x);c('CSS').conditionShow(this._jewelTabLinks[p],!x);}this.render();}}function s(){t.call(this,c('MessagingTag').INBOX);if(!c('MercuryConfig').JewelRequestsUI)t.call(this,n);}function t(u){var v;if(l.exceedsMaxCount(u)){v=c('MercuryThreadlistConstants').MAX_UNREAD_COUNT;}else v=l.getUnreadCount(u);var w=this._jewelTabCounts[u];if(!w)return;if(v>0){if(v==c('MercuryThreadlistConstants').MAX_UNREAD_COUNT)v+='+';c('DOM').setContent(w,j._("({unread_count})",[j.param('unread_count',v)]));}else c('DOM').setContent(w,'');}f.exports=q;},null);
__d('MercuryJewel',['MercuryChannelHandlerDEPRECATED','Arbiter','MercuryJewelCountControl','MercuryServerPayloadPreprocessor'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();c('MercuryChannelHandlerDEPRECATED').get().turnOn();var h=false;function i(j,k){'use strict';c('MercuryJewelCountControl').constructStores();c('MercuryServerPayloadPreprocessor').get().handleUpdate(k);this.$MercuryJewel1=new (c('MercuryJewelCountControl'))(j);if(j.getRoot()&&j.isOpen()){this.$MercuryJewel2(j);}else j.subscribeOnce('opened',this.$MercuryJewel2.bind(this,j));}i.prototype.$MercuryJewel2=function(j){'use strict';if(!h){e(['MercuryJewelThreadlistControl'],function(k){this.$MercuryJewel3=new k(j);}.bind(this));c('Arbiter').inform('mercury-jewel/opened',null,c('Arbiter').BEHAVIOR_STATE);h=true;}};f.exports=i;},null);