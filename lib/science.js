function digits(n) {
    return Math.floor(Math.log(n)/Math.log(10) + 1);
}

function padLeft(word, pad, length) {
    var copy = word.slice(0);
    while (copy.length < length) {
        copy = pad + copy;
    }
    return copy.slice(0, length);
}

function padRight(word, pad, length) {
    var copy = word.slice(0);
    while (copy.length < length) {
        copy += pad;
    }
    return copy.slice(0, length);
}

function toScientificNotation(units) {
    var description = units.toString();
    var d = digits(units) - 1;
    var e = padLeft(d.toString(), '0', 2);
    var n = description[0] + '.' + description.slice(1);
    var m = padRight(n, '0', 8);

    return m + 'e+' + e;
}

module.exports = toScientificNotation;
