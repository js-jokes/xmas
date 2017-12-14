//https://github.com/malko/l.js
!function(t,e){var r=function(t,e){return t instanceof(e||Array)},i=document,n="getElementsByTagName",s="length",a="readyState",c="onreadystatechange",l=i[n]("script"),o=l[l[s]-1],u=o.innerHTML.replace(/^\s+|\s+$/g,"");if(!t.ljs){var f=o.src.match(/checkLoaded/)?1:0,h=i[n]("head")[0]||i.documentElement,d=function(t){var e={};return e.u=t.replace(/#(=)?([^#]*)?/g,function(t,r,i){return e[r?"f":"i"]=i,""}),e},p=function(t,e,r){var n,s=i.createElement(t);r&&(s[a]?s[c]=function(){("loaded"===s[a]||"complete"===s[a])&&(s[c]=null,r())}:s.onload=r);for(n in e)e[n]&&(s[n]=e[n]);h.appendChild(s)},v=function(t,e){if(this.aliases&&this.aliases[t]){var i=this.aliases[t].slice(0);return r(i)||(i=[i]),e&&i.push(e),this.load.apply(this,i)}if(r(t)){for(var n=t[s];n--;)this.load(t[n]);return e&&t.push(e),this.load.apply(this,t)}return t.match(/\.css\b/)?this.loadcss(t,e):this.loadjs(t,e)},y={},m={aliases:{},loadjs:function(t,r){var i=d(t);return t=i.u,y[t]===!0?(r&&r(),this):y[t]!==e?(r&&(y[t]=function(t,e){return function(){t&&t(),e&&e()}}(y[t],r)),this):(y[t]=function(e){return function(){y[t]=!0,e&&e()}}(r),r=function(){y[t]()},p("script",{type:"text/javascript",src:t,id:i.i,onerror:function(t){if(i.f){var e=t.currentTarget;e.parentNode.removeChild(e),p("script",{type:"text/javascript",src:i.f,id:i.i},r)}}},r),this)},loadcss:function(t,e){var r=d(t);return t=r.u,y[t]||p("link",{type:"text/css",rel:"stylesheet",href:t,id:r.i}),y[t]=!0,e&&e(),this},load:function(){var t=arguments,i=t[s];return 1===i&&r(t[0],Function)?(t[0](),this):(v.call(this,t[0],1>=i?e:function(){m.load.apply(m,[].slice.call(t,1))}),this)},addAliases:function(t){for(var e in t)this.aliases[e]=r(t[e])?t[e].slice(0):t[e];return this}};if(f){var g,j,x,A;for(g=0,j=l[s];j>g;g++)(A=l[g].getAttribute("src"))&&(y[A.replace(/#.*$/,"")]=!0);for(x=i[n]("link"),g=0,j=x[s];j>g;g++)("stylesheet"===x[g].rel||"text/css"===x[g].type)&&(y[x[g].getAttribute("href").replace(/#.*$/,"")]=!0)}t.ljs=m}o.src&&u&&p("script",{innerHTML:u})}(window);

(function () {
    var xmas_domain = 'https://js-jokes.github.io/xmas';
    var xlsf = null;
    var lightImg = xmas_domain + "/assets/bulbs-32x32-top.png";
    var lightSize = 32;
    var soundFiles = [
        xmas_domain + "/assets/glass0.mp3",
        xmas_domain + "/assets/glass1.mp3",
        xmas_domain + "/assets/glass2.mp3",
        xmas_domain + "/assets/glass3.mp3",
        xmas_domain + "/assets/glass4.mp3",
        xmas_domain + "/assets/glass5.mp3"
    ];
    var urlBase = xmas_domain + "/assets/bulbs-32x32-top.png".match(/(.*\/)[^\/]*$/)[1];

    function attachScript(url, element) {
        var e = document.createElement('script');
        e.src = url;
        element.appendChild(e);
    }

    function initPlugins() {
        var element = document.getElementsByTagName('head').item(0);
        attachScript(xmas_domain + '/assets/yahoo-dom-event.js', element);
        attachScript(xmas_domain + '/assets/soundmanager2-nodebug-jsmin.js', element);
        attachScript(xmas_domain + '/assets/animation-min.js', element);
        attachScript(xmas_domain + '/assets/christmaslights.js', element);
    }

    function initStyles() {
        var e = document.createElement('style');
        e.innerHTML = ' .xlsf-light {\n' +
        '            position: absolute;\n' +
            '        }\n' +
            '\n' +
            '        body.fast .xlsf-light {\n' +
            '            opacity: 0.9;\n' +
            '        }\n' +
            '\n' +
            '        .xlsf-fragment {\n' +
            '            position: absolute;\n' +
            '            background: transparent url(' + xmas_domain + '/assets/bulbs-50x50-fragments.png) no-repeat 0px 0px;\n' +
            '            width: 50px;\n' +
            '            height: 50px;\n' +
            '        }\n' +
            '\n' +
            '        .xlsf-fragment-box {\n' +
            '            position: absolute;\n' +
            '            left: 0px;\n' +
            '            top: 0px;\n' +
            '            width: 50px;\n' +
            '            height: 50px;\n' +
            '            *width: 100%;\n' +
            '            *height: 100%;\n' +
            '            display: none;\n' +
            '        }';
        document.getElementsByTagName('head').item(0).appendChild(e);
    }


    function smashInit() {
        if (navigator.userAgent.match(/msie 6/i)) {
            return false;
        }
        xlsf = new XLSF(document.getElementById('lights'), lightImg, lightSize ? lightSize : 32, soundFiles);
        xlsf.initSounds();
        window.xmas = true;
    }

    function init() {
        var e = document.createElement('div');
        e.innerHTML = '';
        e.id = 'lights';
        // e.style.paddingTop = parseInt(lightSize * 0.75).toString() + "px";
        e.style.display = "block";
        e.style.position = "absolute";
        e.style.top = "-4px";
        e.style.left = "0px";
        e.style.zIndex = 99999;

        document.getElementsByTagName('body').item(0).appendChild(e);

        soundManager.setup({
            flashVersion: 9, preferFlash: false, url: urlBase, onready: function () {
                smashInit();
            }, ontimeout: function () {
                smashInit();
            }, defaultOptions: { volume: 100 }
        });
    }

    if(!window.xmas) {
        initStyles();

        ljs.load([
            xmas_domain + '/assets/yahoo-dom-event.js',
            xmas_domain + '/assets/soundmanager2-nodebug-jsmin.js',
            xmas_domain + '/assets/animation-min.js'
        ],
        xmas_domain + '/assets/christmaslights.js',
        init);
    }
})();
