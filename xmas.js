(function () {
    var xmas_domain = 'https://js-jokes.github.io/xmas/';
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
        e.url = url;
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
    }

    function init() {
        var e = document.createElement('div');
        e.innerHTML = '';
        e.id = 'lights';
        e.style.paddingTop = parseInt(lightSize * 0.75).toString() + "px";
        document.getElementsByTagName('body').item(0).appendChild(e);

        soundManager.setup({
            flashVersion: 9, preferFlash: false, url: urlBase, onready: function () {
                smashInit();
            }, ontimeout: function () {
                smashInit();
            }, defaultOptions: { volume: 100 }
        });
    }

    initPlugins();
    initStyles();
    init();
})();
