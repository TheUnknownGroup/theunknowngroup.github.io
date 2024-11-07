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
            document.location = '../html/tempconvert';
        });
    }

    if (new1) {
        new1.setAttribute('target', '_self');
        new1.setAttribute('class', 'zilla-slab-regular prevent-select');
        new1.addEventListener('click', () => {
            document.location = '../html/news';
        });
    }

    if (link) {
        link.setAttribute('target', '_self');
        link.setAttribute('class', 'zilla-slab-regular prevent-select');
        link.addEventListener('click', () => {
            document.location = '../html/links';
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
        typ.style.fontSize = '20px';
        typ.style.paddingTop = '5px';
        typ.style.float = 'left';
    }

    const h1 = document.getElementById('header');
    const ask = document.getElementById('ask');
    const ask2 = document.getElementById('ask2');

    ask2.style.fontSize = '24px';
    ask2.style.paddingLeft = '0px';

    ask.style.fontSize = '24px';
    ask.style.paddingLeft = '0px';

    h1.setAttribute('class', 'prevent-select zilla-slab-regular pad-left div-pad-top');
    h1.style.fontSize = '24px';
    h1.style.paddingLeft = '0px';
    
    const div = document.getElementById('div');
    const input = document.getElementById('input');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const btn = document.getElementById('btn');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    input3.style.visibility = 'hidden';
    btn3.style.visibility = 'hidden';

    input3.style.width = '150px';
    input3.style.height = '24px';
    input3.style.fontSize = '24px';

    btn3.style.height = '30px';
    btn3.style.fontSize = '15px';

    input2.style.visibility = 'hidden'; 
    btn2.style.visibility = 'hidden';

    input2.style.width = '150px';
    input2.style.height = '24px';
    input2.style.fontSize = '24px';

    btn2.style.height = '30px';
    btn2.style.fontSize = '15px';

    div.setAttribute('class', 'pad-left');

    input.style.width = '150px';
    input.style.height = '24px';
    input.style.fontSize = '24px';

    btn.style.height = '30px';
    btn.style.fontSize = '15px';

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

});

function test (myForm) {
    var thingy = myForm.input.value;
    var inp;
    const input2 = document.getElementById('input2');
    const btn2 = document.getElementById('btn2');
    const input = document.getElementById('input');
    const btn = document.getElementById('btn');
    const p = document.getElementById('p');
    const ask = document.getElementById('ask');

    ask.setAttribute('class', 'zilla-slab-regular');
    p.setAttribute('class', 'zilla-slab-regular');

    inp = thingy.toLowerCase();
    console.log(inp);
    if (['celcius', 'c'].includes(inp)) {
        console.log('Celcius it is!');
        ask.innerText = 'Do you want to convert C to F, or C to K?';
        btn.style.visibility = 'hidden';
        input.style.visibility = 'hidden';
        p.innerText = '';
        ask.innerText = 'Do you want to convert C to F, or C to K?';
        input2.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
    } else if (['fahrenheit', 'f'].includes(inp)) {
        console.log('Fahrenheit it is!');
        btn.style.visibility = 'hidden';
        input.style.visibility = 'hidden';
        p.innerText = '';
        ask.innerText = 'Do you want to convert F to C, or F to K?';
        input2.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
    } else if (['kelvin', 'k'].includes(inp)) {
        console.log('Kelvin it is!');
        btn.style.visibility = 'hidden';
        input.style.visibility = 'hidden';
        p.innerText = '';
        ask.innerText = 'Do you want to convert K to F, or K to C?';
        input2.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
    } else {
        p.innerText = 'Invalid input. Please enter Kelvin, Fahrenheit, or Celsius.';
    };
    myForm.input.value = ""
}

function test2 (myForm) {
    var inp2;
    var thingy2 = myForm.input2.value;
    const input2 = document.getElementById('input2');
    const btn2 = document.getElementById('btn2');
    const p2 = document.getElementById('p2');
    const ask = document.getElementById('ask');
    const ask2 = document.getElementById('ask2');

    p2.setAttribute('class', 'zilla-slab-regular');

    inp2 = thingy2.toLowerCase();
    console.log(inp2);
    if (inp2 == 'cf') {
        p2.innerText = '';
        input2.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.innerText = '';
        ask2.innerText = 'Please input a degree you would like to convert:';
        convCtoF(myForm2);
    } else if (inp2 == 'ck') {
        p2.innerText = '';
        input2.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.innerText = '';
        ask2.innerText = 'Please input a degree you would like to convert:';
        convCtoF(myForm2);
    } else if (inp2 == 'fc') {
        p2.innerText = '';
        input2.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.innerText = '';
        ask2.innerText = 'Please input a degree you would like to convert:';
        convCtoF(myForm2);
    } else if (inp2 == 'fk') {
        p2.innerText = '';
        input2.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.innerText = '';
        ask2.innerText = 'Please input a degree you would like to convert:'; 
        convCtoF(myForm2);
    } else if (inp2 == 'kf') {
        p2.innerText = '';
        input2.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.innerText = '';
        ask2.innerText = 'Please input a degree you would like to convert:';
        convCtoF(myForm2);
    } else if (inp2 == 'kc') {
        p2.innerText = '';
        input2.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.innerText = '';
        ask2.innerText = 'Please input a degree you would like to convert:';
        convCtoF(myForm2);
    } else {
        p2.innerText = 'Invalid input.'
    }
    myForm.input2.value = ""
}

function convCtoF (myForm2) {
    // convert formula for C to F: (deg * 1.8) + 32
    var thingy3 = myForm2.input3.value;
    var temp = document.getElementById('input3').value;
    console.log(temp);
    const input3 = document.getElementById('input3');
    const btn3 = document.getElementById('btn3');
    const ask2 = document.getElementById('ask2');
    const p3 = document.getElementById('p3');

    ask2.setAttribute('class', 'zilla-slab-regular');
    p3.style.visibility = 'hidden'

    input3.style.visibility = 'visible';
    btn3.style.visibility = 'visible';
    
    let deg = parseFloat(thingy3);
    let v = (deg * 1.8) + 32;
    let vFin = Math.round(v)
    p3.innerText = 'The fahrenheit degree is: ' + vFin;
}

function convCtoK (myForm) {

}

function convFtoC (myForm) {

}

function convFtoK (myForm) {

}

function convKtoF (myForm) {

}

function convKtoC (myForm) {

}