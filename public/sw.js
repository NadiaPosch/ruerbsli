if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/CYwrCOGI5FC76bZBdLhF6/_buildManifest.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/CYwrCOGI5FC76bZBdLhF6/_ssgManifest.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/chunks/framework-92300432a1172ef1338b.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/chunks/main-1b0f1fd287f08bad6012.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/chunks/pages/_app-3f641f644e33f67e28e9.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/chunks/pages/_error-94ed2348718d59e1af9b.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/chunks/pages/index-f836dda61781996cff6a.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/chunks/pages/rezept/%5Bid%5D-c91fafdd9a3d45337aef.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/chunks/webpack-672781b4256b347cef75.js",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/css/a620993b41d9a4df9109.css",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/_next/static/media/chalkboard.303a07bd24a0043e077516c0ced92cee.jpg",revision:"CYwrCOGI5FC76bZBdLhF6"},{url:"/favicon.ico",revision:"4f2f3c4233534a3c4e99aa31b4d70219"},{url:"/icons/icon-192.png",revision:"5c6af7d1c6a1a9df12736e01fe8ab98e"},{url:"/icons/icon-512.png",revision:"d4237520a219707a6f4645bb16e70451"},{url:"/icons/icon.png",revision:"65eff3a0d5ac4d76e11a5596b5a98096"},{url:"/images/brown-bread.jpg",revision:"ef81bc7eeb0412967038a6fea090489c"},{url:"/images/chalkboard.jpg",revision:"98034e03720cdb4974905841b70272f3"},{url:"/images/chilli.jpg",revision:"4a934355ad9dd46a4dfdf241e103eaee"},{url:"/images/lachssauce.jpeg",revision:"cd0a6b4512d78afd77ecad896d04fc38"},{url:"/images/pancakes.jpg",revision:"43bedc83dfc8bf987ec6b48f727e8eb3"},{url:"/images/porridge.jpg",revision:"e7d2b25703c17a3899e1ba7a3650553f"},{url:"/images/quarkfladen.jpeg",revision:"d64ee4de538c66350299f9116ab9a5e1"},{url:"/images/waehe.jpg",revision:"aec9bbcb28ffe7308912047ca4cc0a8b"},{url:"/manifest.json",revision:"444f18e6bd6e16130f83ce290297665e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
