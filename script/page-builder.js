function buildDigitsHTML() {
    let digits = document.querySelectorAll('.digit');

    digits.forEach(digit => {
        digit.innerHTML = `
            <div class="digit__section-top">
                <div class="digit__section digit__section-available-02356789"></div>
            </div>
            <div class="digit__section-top-left">
                <div class="digit__section digit__section--vertical digit__section-available-045689"></div>
            </div>
            <div class="digit__section-top-right">
                <div class="digit__section digit__section--vertical digit__section-available-01234789"></div>
            </div>
            <div class="digit__section-center">
                <div class="digit__section digit__section-available-2345689"></div>
            </div>
            <div class="digit__section-bottom-left">
                <div class="digit__section digit__section--vertical digit__section-available-0268"></div>
            </div>
            <div class="digit__section-bottom-right">
                <div class="digit__section digit__section--vertical digit__section-available-013456789"></div>
            </div>
            <div class="digit__section-bottom">
                <div class="digit__section digit__section-available-0235689"></div>
            </div>
        `;
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

buildDigitsHTML();
fillHoursSelectList();
fillMinutesSelectList();
fillSecondsSelectList();
