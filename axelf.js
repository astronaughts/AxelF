var baudio  = require('baudio'),
    b       = baudio();

var melody = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,

    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,

    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,

    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,

    1400, 0, 0, 0,
    1700, 0, 0, 1400,
    0, 1400, 1900, 1900,
    1400, 0, 1250, 0,

    1400, 0, 0, 0,
    2100, 0, 0, 1400,
    0, 1400, 2250, 2250,
    2100, 0, 1700, 0,

    1400, 0, 2100, 0,
    2800, 0, 1400, 1250,
    0, 1250, 1050, 0,
    1600, 0, 1400, 1400,

    1400, 1400, 1400, 1400,
    1400, 1400, 1400, 1400,
    0, 0, 0, 0,
    0, 0, 0, 0,

    1400, 0, 0, 0,
    1700, 0, 0, 1400,
    0, 1400, 1900, 1900,
    1400, 0, 1250, 0,

    1400, 0, 0, 0,
    2100, 0, 0, 1400,
    0, 1400, 2250, 2250,
    2100, 0, 1700, 0,

    1400, 0, 2100, 0,
    2800, 0, 1400, 1250,
    0, 1250, 1050, 0,
    1600, 0, 1400, 1400,

    1400, 1400, 1400, 1400,
    1400, 1400, 1400, 1400,
    0, 0, 0, 0,
    0, 0, 0, 0,
];

var base = [
    700, 0, 0, 0,
    1400, 0, 0, 630,
    0, 1250, 520, 520,
    1050, 0, 630, 0,

    700, 0, 0, 0,
    1400, 0, 0, 0,
    0, 630, 1050, 1050,
    1250, 0, 1400, 0,  

    550, 0, 0, 0,
    1100, 0, 0, 630,
    0, 1250, 630, 630,
    630, 0, 700, 0,

    1400, 1400, 1400, 1400,
    0, 0, 0, 0,
    0, 1250, 1050, 0,
    950, 0, 850, 0,

    700, 0, 0, 0,
    1400, 0, 0, 630,
    0, 1250, 520, 520,
    1050, 0, 630, 0,

    700, 0, 0, 0,
    1400, 0, 0, 0,
    0, 630, 1050, 1050,
    1250, 0, 1400, 0,  

    550, 0, 0, 0,
    1100, 0, 0, 630,
    0, 1250, 630, 630,
    630, 0, 700, 0,

    1400, 1400, 1400, 1400,
    0, 0, 0, 0,
    0, 1250, 1050, 0,
    950, 0, 850, 0,

    700, 0, 0, 0,
    1400, 0, 0, 630,
    0, 1250, 520, 520,
    1050, 0, 630, 0,

    700, 0, 0, 0,
    1400, 0, 0, 0,
    0, 630, 1050, 1050,
    1250, 0, 1400, 0,  

    550, 0, 0, 0,
    1100, 0, 0, 630,
    0, 1250, 630, 630,
    630, 0, 700, 0,

    1400, 1400, 1400, 1400,
    0, 0, 0, 0,
    0, 1250, 1050, 0,
    950, 0, 850, 0,
];

// melody part
b.push(function (t, i) {
    var f = melody[Math.floor((t * 8) % melody.length)];
    return Math.tan(t * Math.PI * (f / 4));
});

// base part
b.push(function (t, i) { 
    var f = base[Math.floor((t * 8) % base.length)];
    return Math.tan(t * Math.PI * (f / 16));
});

b.play();