const simple = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

const ty = "ty";
const twenty = "twenty";
const thirty = "thirty";
const fifty = "fifty";
const forty = "forty";
const eighty = "eighty";
const hundred = "hundred";
const thousand = "thousand";

module.exports = function toReadable(number) {
    if (number <= 19) return simple[number];
    if (number >= 20 && number < 100)
        return two_simb(Math.floor(number / 10), number % 10);
    if (number >= 100)
        return three_simbs(
            Math.floor(number / 100),
            Math.floor((number % 100) / 10),
            (number % 100) % 10
        );
};

function three_simbs(a, b, c) {
    if (b == 0) {
        if (c == 0) return simple[a] + " " + hundred;
        else return simple[a] + " " + hundred + " " + simple[c];
    }
    if (b == 1) {
        return simple[a] + " " + hundred + " " + simple[Number(b + "" + c)];
    } else {
        return simple[a] + " " + hundred + " " + two_simb(b, c);
    }
}

function two_simb(a, b) {
    if (b == 0) {
        if (a == 2) return twenty;
        if (a == 3) return thirty;
        if (a == 4) return forty;
        if (a == 5) return fifty;
        if (a == 8) return eighty;
        else return simple[a] + ty;
    } else {
        if (a == 2) return twenty + " " + simple[b];
        if (a == 3) return thirty + " " + simple[b];
        if (a == 4) return forty + " " + simple[b];
        if (a == 5) return fifty + " " + simple[b];
        if (a == 8) return eighty + " " + simple[b];
        else return simple[a] + ty + " " + simple[b];
    }
}
