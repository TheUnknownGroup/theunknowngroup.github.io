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

    ask.style.fontSize = '24px';
    ask.style.paddingLeft = '0px';

    h1.setAttribute('class', 'prevent-select zilla-slab-regular pad-left div-pad-top');
    h1.style.fontSize = '24px';
    h1.style.paddingLeft = '0px';
    
    const div = document.getElementById('div');
    const input = document.getElementById('input');
    const btn = document.getElementById('btn');
    const input4 = document.getElementById('input2');
    const btn2 = document.getElementById('btn2');

    input4.style.visibility = 'hidden'; 
    btn2.style.visibility = 'hidden';
    input4.style.width = '75px';
    input4.style.height = '24px';
    input4.style.fontSize = '24px';

    btn2.style.height = '30px';
    btn2.style.fontSize = '15px';

    div.setAttribute('class', 'pad-left');
    input.setAttribute('class','zilla-slab-regular');
    input.style.width = '75px';
    input.style.height = '24px';
    input.style.fontSize = '24px';

    btn.style.height = '30px';
    btn.style.fontSize = '15px';

    input.addEventListener('keydown', ({key}) => {
        if (key === "Enter") {
            document.getElementById('btn').click();
        }
    });

    input4.addEventListener('keydown', ({key}) => {
        if (key === "Enter") {
            document.getElementById('btn2').click();
        }
    });
});

var final; 

function test (myForm) {
    var thingy = myForm.input.value;
    var input1;
    const input4 = document.getElementById('input2');
    const btn2 = document.getElementById('btn2');
    const input3 = document.getElementById('input');
    const btn = document.getElementById('btn');
    const p = document.getElementById('p');
    const ask = document.getElementById('ask');

    ask.setAttribute('class', 'zilla-slab-regular');
    p.setAttribute('class', 'zilla-slab-regular');

    input1 = thingy.toLowerCase();
    console.log(input1);
    if (['celcius', 'c'].includes(input1)) {
        console.log('Celcius it is!');
        ask.innerText = 'Do you want to convert C to F, or C to K?';
        btn.style.visibility = 'hidden';
        input3.style.visibility = 'hidden';
        p.innerText = '';
        ask.innerText = 'Do you want to convert C to F, or C to K?';
        input4.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
    } else if (['fahrenheit', 'f'].includes(input1)) {
        console.log('Fahrenheit it is!');
        btn.style.visibility = 'hidden';
        input3.style.visibility = 'hidden';
        p.innerText = '';
        ask.innerText = 'Do you want to convert F to C, or F to K?';
        input4.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
    } else if (['kelvin', 'k'].includes(input1)) {
        console.log('Kelvin it is!');
        btn.style.visibility = 'hidden';
        input3.style.visibility = 'hidden';
        p.innerText = '';
        ask.innerText = 'Do you want to convert K to F, or K to C?';
        input4.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
    } else {
        p.innerText = 'Invalid input. Please enter Kelvin, Fahrenheit, or Celsius.';
    };
    myForm.input.value = ""
}

function test2 (myForm) {
    var input5;
    var thingy2 = myForm.input2.value;
    const input4 = document.getElementById('input2');
    const btn2 = document.getElementById('btn2');
    const p2 = document.getElementById('p2');
    const ask = document.getElementById('ask');

    p2.setAttribute('class', 'zilla-slab-regular');

    input5 = thingy2.toLowerCase();
    console.log(input5);
    if (['cf', 'ck'].includes(input5)) {
        p2.innerText = '';
        if (input5 == 'cf') {

        };
        input4.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.style.visibility = 'hidden';
    } else if (['fc', 'fk'].includes(input5)) {
        p2.innerText = '';
        input4.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.style.visibility = 'hidden';
    } else if (['kf', 'kc'].includes(input5)) {
        p2.innerText = '';
        input4.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        ask.style.visibility = 'hidden';
    } else {
        p2.innerText = 'Invalid input.'
    }   
}