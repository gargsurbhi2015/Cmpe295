if (self.CavalryLogger) { CavalryLogger.start_js(["bLS5t"]); }

__d('ReactComposerAYMTTip.react',['cx','fbt','ReactComposerMediaUploadStore','ReactComposerStatusStore','ReactComposerPropsAndStoreBasedStateMixin','ImageBlock.react','React'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'ReactComposerAYMTTip',mixins:[c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStatusStore'),c('ReactComposerMediaUploadStore'))],propTypes:{minLength:j.number.isRequired},statics:{calculateState:function(l,m){var n=c('ReactComposerStatusStore').getMessageText(l)||'',o=c('ReactComposerMediaUploadStore').getUploadsCount(l);return {showUpsell:n.length>m.minLength&&o>0,composerID:l,text:n};}},render:function(){if(!this.state.showUpsell)return null;return (c('React').createElement('div',{className:"_4xk0 _57d8"},c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},c('React').createElement('img',{src:'/images/ads/growth/promote-icon.png',className:"_4xk1"}),c('React').createElement('div',{className:"_4xk2"},i._("Boost this post to show it to more people.")))));}});f.exports=k;},null);
__d('ReactComposerSessionMetricsActions',['ReactComposerDispatcher','ReactComposerSessionMetricsActionTypes','ReactComposerSessionMetricsStore'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();c('ReactComposerSessionMetricsStore');var h={keystroke:function(i){c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerSessionMetricsActionTypes').KEYSTROKE});},paste:function(i){c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerSessionMetricsActionTypes').PASTE});}};f.exports=h;},null);