if (window.addEventListener){window.addEventListener('load', WindowLoad, false);} else if (window.attachEvent) {window.attachEvent('onload', WindowLoad);} function WindowLoad() {
    var h1 = document.getElementById('h1');

    h1.setAttribute('class', 'zilla-slab-regular')
}