function getAllSectionsOfDigit(digitId) {
    const digit = document.getElementById(digitId);
    const sections = digit.querySelectorAll('.digit__section');
    return sections;
}

function displayNumberOnDigit(number, digitId) {
    let sections = getAllSectionsOfDigit(digitId);

    sections.forEach((section) => {
        section.classList.remove('digit__section--active');
        if (section.classList.value.includes(number)) {
            section.classList.add('digit__section--active');
        }
    });
}

function getFirstDigitOfNumber(number) {
    let numberStr = ((number + '').length > 1) ? number + '' : '0' + number;
    return numberStr[0];
}

function getSecondDigitOfNumber(number) {
    let numberStr = ((number + '').length > 1) ? number + '' : '0' + number;
    return numberStr[1];
}

function displaySeconds(seconds) {
    displayNumberOnDigit(getFirstDigitOfNumber(seconds), 'seconds-high-digit');
    displayNumberOnDigit(getSecondDigitOfNumber(seconds), 'seconds-low-digit');
}

function displayMinutes(minutes) {
    displayNumberOnDigit(getFirstDigitOfNumber(minutes), 'minutes-high-digit');
    displayNumberOnDigit(getSecondDigitOfNumber(minutes), 'minutes-low-digit');
}

function displayHours(hours) {
    displayNumberOnDigit(getFirstDigitOfNumber(hours), 'hours-high-digit');
    displayNumberOnDigit(getSecondDigitOfNumber(hours), 'hours-low-digit');
}

function getSecondsPart(numberOfSeconds) {
    return numberOfSeconds % 60;
}

function getMinutesPart(numberOfSeconds) {
    return ((numberOfSeconds % 3600) - (numberOfSeconds % 60)) / 60;
}

function getHoursPart(numberOfSeconds) {
    return (numberOfSeconds - (numberOfSeconds % 3600)) / 3600;
}

const j = 7302;

console.log(getHoursPart(j));
console.log(getMinutesPart(j));
console.log(getSecondsPart(j));


function start() {
    let i = 12384;
    displayHours(getHoursPart(i));
    displayMinutes(getMinutesPart(i));
    displaySeconds(getSecondsPart(i));
    const interval = setInterval(
        () => {
            displayHours(getHoursPart(i));
            displayMinutes(getMinutesPart(i));
            displaySeconds(getSecondsPart(i));
            i--;
            if (i < 0) {
                clearInterval(interval);
            }
        }, 1000
    );
}

start();

