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

function getAllDots() {
    const dots = document.querySelectorAll('.dot');
    return dots;
}

function toggleAllDots() {
    const dots = getAllDots();
    dots.forEach((dot) => {
        if (dot.classList.value.includes('dot--active')) {
            dot.classList.remove('dot--active');
        } else {
            dot.classList.add('dot--active');
        } 
    });
}

function fillHoursSelectList() {
    const select = document.getElementById('hours');
    for (let i = 0; i < 100; i++) {
        const option = document.createElement("option");

        option.name = i;
        option.innerHTML = i;
        select.appendChild(option);
    }
}

function fillMinutesSelectList() {
    const select = document.getElementById('minutes');

    for (let i = 0; i < 25; i++) {
        const option = document.createElement('option');

        option.name = i;
        option.innerHTML = i;
        select.appendChild(option);
    }
 }

 function fillSecondsSelectList() {
    const select = document.getElementById('seconds');

    for (let i = 0; i < 60; i++) {
        const option = document.createElement('option');
        
        option.name = i;
        option.innerHTML = i;
        select.appendChild(option);
    }
 }

let interval;
let dotsFlashing;

function startTimer() {
    const hours = +document.getElementById('hours').value;
    const minutes = +document.getElementById('minutes').value;
    const seconds = +document.getElementById('seconds').value;
    let i = hours * 3600 + minutes * 60 + seconds - 1;

    displayHours(hours);
    displayMinutes(minutes);
    displaySeconds(seconds);

    interval = setInterval(
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

    dotsFlashing = setInterval(
        () => {
            toggleAllDots();

            if (i < 0) {
                clearInterval(dotsFlashing);
            }
        }, 500
    );
}

function stopTimer() {
    clearInterval(interval);
    clearInterval(dotsFlashing);
}

fillHoursSelectList();
fillMinutesSelectList();
fillSecondsSelectList();