(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[9],{1120:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var n=e(58),i=e(106);var o=function(t){var r,e;function n(r){var e,n=(void 0===r?{}:r).supportedChainIds;return(e=t.call(this)||this).supportedChainIds=n,e}e=t,(r=n).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e;var o=n.prototype;return o.emitUpdate=function(t){this.emit(i.a.Update,t)},o.emitError=function(t){this.emit(i.a.Error,t)},o.emitDeactivate=function(){this.emit(i.a.Deactivate)},n}(n.EventEmitter)},1615:function(t,r,e){"use strict";e.r(r),e.d(r,"FortmaticConnector",(function(){return c}));var n=e(1120),i=e(85);var o={1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan"},c=function(t){var r,n;function c(r){var e,n=r.apiKey,c=r.chainId;return Object.keys(o).includes(c.toString())||Object(i.a)(!1),(e=t.call(this,{supportedChainIds:[c]})||this).apiKey=n,e.chainId=c,e}n=t,(r=c).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var a=c.prototype;return a.activate=function(){try{var t=function(){return Promise.resolve(r.fortmatic.getProvider().enable().then((function(t){return t[0]}))).then((function(t){return{provider:r.fortmatic.getProvider(),chainId:r.chainId,account:t}}))},r=this,n=function(){if(!r.fortmatic)return Promise.resolve(e.e(16).then(e.t.bind(null,1536,7)).then((function(t){var r;return null!=(r=null==t?void 0:t.default)?r:t}))).then((function(t){r.fortmatic=new t(r.apiKey,1===r.chainId||4===r.chainId?void 0:o[r.chainId])}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(i){return Promise.reject(i)}},a.getProvider=function(){try{return Promise.resolve(this.fortmatic.getProvider())}catch(t){return Promise.reject(t)}},a.getChainId=function(){try{return Promise.resolve(this.chainId)}catch(t){return Promise.reject(t)}},a.getAccount=function(){try{return Promise.resolve(this.fortmatic.getProvider().send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},a.deactivate=function(){},a.close=function(){try{var t=this;return Promise.resolve(t.fortmatic.user.logout()).then((function(){t.emitDeactivate()}))}catch(r){return Promise.reject(r)}},c}(n.a)}}]);
//# sourceMappingURL=9.781d25f9.chunk.js.map