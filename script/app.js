function getAllDigitSections() {
    let sections = document.querySelectorAll('.digit__section');
    return sections;
}

function showAvailableSectionsOfDigit(digit) {
    let sections = getAllDigitSections();

    sections.forEach((section) => {
        section.classList.remove('digit__section--active');
        if (section.classList.value.includes(digit)) {
            section.classList.add('digit__section--active');
        }
    });
}

let i = 0;
const interval = setInterval(() => {
    showAvailableSectionsOfDigit(i);
    i++;
    if (i > 9) {
        clearInterval(interval);
    }
}, 1000);


// setInterval(() => sections.forEach((section) => section.classList.add('digit__section--active')), 1000);
// sections.forEach((section) => section.classList.add('digit__section--active'));
