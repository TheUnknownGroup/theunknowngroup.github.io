if (window.addEventListener){window.addEventListener('load', WindowLoad, false);} else if (window.attachEvent) {window.attachEvent('onload', WindowLoad);} function WindowLoad() {
    var temp = document.getElementById('temp');
    var news = document.getElementById('news');
    var links = document.getElementById('links');
    var typel = document.getElementById('typel');
    var typen = document.getElementById('typen');
    var typet = document.getElementById('typet');
    var typ = document.getElementById('typ');
    var div = document.getElementById('div');    
    var q1 = document.getElementById('header');
    var q2A = document.getElementById('ask');
    var q3A = document.getElementById('ask2');
    var input = document.getElementById('input');
    var input2 = document.getElementById('input2');
    var input3 = document.getElementById('input3');
    var btn = document.getElementById('btn');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var para = document.getElementById('p');
    var para2 = document.getElementById('p2');
    var para3 = document.getElementById('p3');

    q1.setAttribute('class', 'prevent-select zilla-slab-regular pad-left div-pad-top');
    q1.style.fontSize = '24px';
    q1.style.paddingLeft = '0px';

    para.setAttribute('class', 'zilla-slab-regular');
    para2.setAttribute('class', 'zilla-slab-regular');
    para3.setAttribute('class', 'zilla-slab-regular');

    para3.style.fontSize = '20px';
    para3.style.fontWeight = 'bold';

    q2A.setAttribute('class', 'zilla-slab-regular');
    q2A.style.fontSize = '24px';
    q2A.style.paddingLeft = '0px';

    q3A.setAttribute('class', 'zilla-slab-regular');
    q3A.style.fontSize = '24px';
    q3A.style.paddingLeft = '0px';

    btn.style.height = '30px';
    btn.style.fontSize = '15px';

    btn2.style.height = '30px';
    btn2.style.fontSize = '15px';
    btn2.style.visibility = 'hidden';

    btn3.style.height = '30px';
    btn3.style.fontSize = '15px';
    btn3.style.visibility = 'hidden';
    
    input.style.width = '150px';
    input.style.height = '24px';
    input.style.fontSize = '24px';

    input2.style.width = '150px';
    input2.style.height = '24px';
    input2.style.fontSize = '24px';
    input2.style.visibility = 'hidden';

    input3.style.width = '150px';
    input3.style.height = '24px';
    input3.style.fontSize = '24px';
    input3.style.visibility = 'hidden';

    input.addEventListener('keydown', ({key}) => {
        if (key === "Enter") {
            document.getElementById('btn').click();
        }
    });
    input2.addEventListener('keydown', ({key}) => {
        if (key === "Enter") {
            document.getElementById('btn2').click();
        }
    });
    input3.addEventListener('keydown', ({key}) => {
        if (key === "Enter") {
            document.getElementById('btn3').click();
        }
    });

    
    temp.setAttribute('target', '_self');
    temp.setAttribute('class', 'zilla-slab-regular prevent-select');

    news.setAttribute('target', '_self');
    news.setAttribute('class', 'zilla-slab-regular prevent-select');

    links.setAttribute('target', '_self');
    links.setAttribute('class', 'zilla-slab-regular prevent-select');

    // Div Links
    typel.setAttribute('class', 'column div-pad-right div-pad-top div-fo');
    // Div News
    typen.setAttribute('class', 'column div-pad-right div-pad-top div-fo');
    // Div Temp
    typet.setAttribute('class', 'column div-pad-right div-pad-top div-fo');
    // Typ for the main link
    typ.setAttribute('class', 'column div');
    typ.style.fontSize = '20px';
    typ.style.paddingTop = '5px';
    typ.style.float = 'left';

    temp.addEventListener('click', () => {
        document.location = '../html/tempconvert'
    });
    news.addEventListener('click', () => {
        document.location = '../html/news'
    });
    links.addEventListener('click', () => {
        document.location = '../html/links'
    });
    
    div.setAttribute('class', 'pad-left')

    btn.addEventListener('click', () => {
        start(myForm)
    });
    btn2.addEventListener('click', () => {
        q2(myForm)
    });
};

var q1 = document.getElementById('header');
var q2A = document.getElementById('ask');
var q3A = document.getElementById('ask2');
var input = document.getElementById('input');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var para = document.getElementById('p');
var para2 = document.getElementById('p2');
var para3 = document.getElementById('p3');

function start(myForm) {
    var para = document.getElementById('p');
    var q1 = document.getElementById('header');
    var q2 = document.getElementById('ask');
    var input = document.getElementById('input');
    var input2 = document.getElementById('input2');
    var btn = document.getElementById('btn');
    var btn2 = document.getElementById('btn2');
    var inp = myForm.input.value;
    copyInp = inp.toLowerCase();
    console.log(copyInp);

    if (['celcius', 'c'].includes(copyInp)) {
        para.innerText = '';
        q1.style.visibility = 'hidden';
        input.style.visibility = 'hidden';
        btn.style.visibility = 'hidden';
        input2.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
        q2.innerText = 'Do you want to convert C to F, or C to K?';
    } else if (['fahrenheit', 'f'].includes(copyInp)) {
        para.innerText = '';
        q1.style.visibility = 'hidden';
        input.style.visibility = 'hidden';
        btn.style.visibility = 'hidden';
        input2.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
        q2.innerText = 'Do you want to convert F to C, or F to K?';
    } else if (['kelvin', 'k'].includes(copyInp)) {
        para.innerText = '';
        q1.style.visibility = 'hidden';
        input.style.visibility = 'hidden';
        btn.style.visibility = 'hidden';
        input2.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
        q2.innerText = 'Do you want to convert K to C, or K to F?';
    } else {
        para.innerText = 'Invalid input. Please enter Kelvin, Fahrenheit, or Celcius.';
    }

    myForm.input.value = "";
}

function q2(myForm) {
    var q2A = document.getElementById('ask');
    var q3A = document.getElementById('ask2');
    var input2 = document.getElementById('input2');
    var input3 = document.getElementById('input3');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var para2 = document.getElementById('p2');
    var inp = myForm.input2.value;
    copyInp = inp.toLowerCase();
    console.log(copyInp);

    if (copyInp == 'cf') {
        para2.innerText = '';
        q2A.innerText = '';
        q3A.innerText = 'Please input the degree number you would like to convert:';
        btn2.style.visibility = 'hidden';
        input2.style.visibility = 'hidden';
        input3.style.visibility = 'visible';
        btn3.style.visibility = 'visible';
        console.log('Converting C to F')
        convCtoF(myForm);
    } else if (copyInp == 'ck') {
        para2.innerText = '';
        q2A.innerText = '';
        q3A.innerText = 'Please input the degree number you would like to convert:';
        btn2.style.visibility = 'hidden';
        input2.style.visibility = 'hidden';
        input3.style.visibility = 'visible';
        btn3.style.visibility = 'visible';
        console.log('Converting C to K')
        convCtoK(myForm);
    } else if (copyInp == 'fc') {
        para2.innerText = '';
        q2A.innerText = '';
        q3A.innerText = 'Please input the degree number you would like to convert:';
        btn2.style.visibility = 'hidden';
        input2.style.visibility = 'hidden';
        input3.style.visibility = 'visible';
        btn3.style.visibility = 'visible';
        console.log('Converting F to C')
        convFtoC(myForm);
    } else if (copyInp == 'fk') {
        para2.innerText = '';
        q2A.innerText = '';
        q3A.innerText = 'Please input the degree number you would like to convert:';
        btn2.style.visibility = 'hidden';
        input2.style.visibility = 'hidden';
        input3.style.visibility = 'visible';
        btn3.style.visibility = 'visible';
        console.log('Converting F to K')
        convFtoK(myForm);
    } else if (copyInp == 'kc') {
        para2.innerText = '';
        q2A.innerText = '';
        q3A.innerText = 'Please input the degree number you would like to convert:';
        btn2.style.visibility = 'hidden';
        input2.style.visibility = 'hidden';
        input3.style.visibility = 'visible';
        btn3.style.visibility = 'visible';
        console.log('Converting K to C')
        convKtoC(myForm);
    } else if (copyInp == 'kf') {
        para2.innerText = '';
        q2A.innerText = '';
        q3A.innerText = 'Please input the degree number you would like to convert:';
        btn2.style.visibility = 'hidden';
        input2.style.visibility = 'hidden';
        input3.style.visibility = 'visible';
        btn3.style.visibility = 'visible';
        console.log('Converting K to F')
        convKtoF(myForm);
    } else {
        para2.innerText = 'Invalid input. Please put something similar to the following: CF, CK, FC, FK';
    }

    myForm.input2.value = "";
}

function convCtoF(myForm) {
    // convert formula for C to F: (deg * 1.8) + 32
    var inp = myForm.input3.value;
    var deg = parseFloat(inp);
    var btn3 = document.getElementById('btn3');
    var para3 = document.getElementById('p3');

    if (!isNaN(deg)) {
        var v = (deg * 1.8) + 32;
        var vFin = Math.round(v);
        para3.style.visibility = 'visible';
        para3.innerText = 'The tempurature from Celcius to Fahrenheit is: ' + vFin;
    } else {
        btn3.addEventListener('click', () => {
            convCtoF(myForm)
        });
    }
    myForm.input3.value = "";
}
function convCtoK(myForm) {
    // convert formula for C to K: deg + 273.15
    var inp = myForm.input3.value;
    var deg = parseFloat(inp);
    var btn3 = document.getElementById('btn3');
    var para3 = document.getElementById('p3');

    if (!isNaN(deg)) {
        var v = deg + 273.15;
        var vFin = Math.round(v);
        para3.style.visibility = 'visible';
        para3.innerText = 'The tempurature from Celcius to Kelvin is: ' + vFin;
    } else {
        btn3.addEventListener('click', () => {
            convCtoK(myForm)
        });
    }
    myForm.input3.value = "";
}
function convFtoC(myForm) {
    // convert formula for F to C: (deg - 32) / 1.8
    var inp = myForm.input3.value;
    var deg = parseFloat(inp);
    var btn3 = document.getElementById('btn3');
    var para3 = document.getElementById('p3');

    if (!isNaN(deg)) {
        var v = (deg - 32) / 1.8;
        var vFin = Math.round(v);
        para3.style.visibility = 'visible';
        para3.innerText = 'The tempurature from Fahrenheit to Celcius is: ' + vFin;
    } else {
        btn3.addEventListener('click', () => {
            convFtoC(myForm)
        });
    }
    myForm.input3.value = "";
}
function convFtoK(myForm) {
    // convert formula for F to K: (deg - 32) * 5/9 + 273.15
    var inp = myForm.input3.value;
    var deg = parseFloat(inp);
    var btn3 = document.getElementById('btn3');
    var para3 = document.getElementById('p3');

    if (!isNaN(deg)) {
        var v = (deg - 32) * 5/9 + 273.15;
        var vFin = Math.round(v);
        para3.style.visibility = 'visible';
        para3.innerText = 'The tempurature from Fahrenheit to Kelvin is: ' + vFin;
    } else {
        btn3.addEventListener('click', () => {
            convFtoK(myForm)
        });
    }
    myForm.input3.value = "";
}
function convKtoC(myForm) {
    // convert formula for K to C: deg - 273.15 
    var inp = myForm.input3.value;
    var deg = parseFloat(inp);
    var btn3 = document.getElementById('btn3');
    var para3 = document.getElementById('p3');

    if (!isNaN(deg)) {
        var v = deg - 273.15;
        var vFin = Math.round(v);
        para3.style.visibility = 'visible';
        para3.innerText = 'The tempurature from Kelvin to Celcius is: ' + vFin;
    } else {
        btn3.addEventListener('click', () => {
            convKtoC(myForm)
        });
    }
    myForm.input3.value = "";
}
function convKtoF(myForm) {
    // convert formula for K to F: (deg - 273.15) * 9/5 + 32
    var inp = myForm.input3.value;
    var deg = parseFloat(inp);
    var btn3 = document.getElementById('btn3');
    var para3 = document.getElementById('p3');

    if (!isNaN(deg)) {
        var v = (deg - 273.15) * 9/5 + 32;
        var vFin = Math.round(v);
        para3.style.visibility = 'visible';
        para3.innerText = 'The tempurature from Kelvin to Fahrenheit is: ' + vFin;
    } else {
        btn3.addEventListener('click', () => {
            convKtoF(myForm)
        });
    }
    myForm.input3.value = "";
}
