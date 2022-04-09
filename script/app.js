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

function displaySeconds(seconds) {
    let secondsStr = seconds + '';
    if (secondsStr.length === 1) {
        secondsStr = '0' + secondsStr;
    }
    displayNumberOnDigit(+secondsStr[0], 'seconds-high-digit');
    displayNumberOnDigit(+secondsStr[1], 'seconds-low-digit');
}

function start() {
    let i = 60;
    displaySeconds(i);
    const interval = setInterval(() => {
        displaySeconds(i);
        i--;
        if (i < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

start();


