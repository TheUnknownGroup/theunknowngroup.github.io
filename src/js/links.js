document.addEventListener("DOMContentLoaded", () => {
    const tem = document.getElementById('temp');
    const new1 = document.getElementById('news');
    const link = document.getElementById('links');
    const type1 = document.getElementById('typel');
    const type2 = document.getElementById('typen');
    const type3 = document.getElementById('typet');
    const typ = document.getElementById('typ');

    if (tem) {
        tem.setAttribute('target', '_self');
        tem.setAttribute('class', 'zilla-slab-regular prevent-select');
        tem.addEventListener('click', () => {
            document.location = '../../navbar/tempconvert';
        });
    }

    if (new1) {
        new1.setAttribute('target', '_self');
        new1.setAttribute('class', 'zilla-slab-regular prevent-select');
        new1.addEventListener('click', () => {
            document.location = '../../navbar/news';
        });
    }

    if (link) {
        link.setAttribute('target', '_self');
        link.setAttribute('class', 'zilla-slab-regular prevent-select');
        link.addEventListener('click', () => {
            document.location = '../../navbar/links';
        });
    }

    if (type1) {
        type1.setAttribute('class', 'column div-pad-right div-pad-top div-fo');
    }

    if (type2) {
        type2.setAttribute('class', 'column div-pad-right div-pad-top div-fo');
    }

    if (type3) {
        type3.setAttribute('class', 'column div-pad-right div-pad-top div-fo');
    }

    if (typ) {
        typ.setAttribute('class', 'column div');
    }
});