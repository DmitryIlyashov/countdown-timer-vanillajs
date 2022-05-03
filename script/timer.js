const Timer = (function() {
    const el = document.querySelector('.timer');
    let interval;
    let dotsFlashing;

	return {
		init() {
            this.render();
            this.event();
		},
        render() {
            const digits = el.querySelectorAll('.digit');

            digits.forEach(digit => {
                digit.innerHTML = `
                    <div class="digit__section-top">
                        <div class="digit__section">02356789</div>
                    </div>
                    <div class="digit__section-top-left">
                        <div class="digit__section digit__section--vertical">045689</div>
                    </div>
                    <div class="digit__section-top-right">
                        <div class="digit__section digit__section--vertical">01234789</div>
                    </div>
                    <div class="digit__section-center">
                        <div class="digit__section">2345689</div>
                    </div>
                    <div class="digit__section-bottom-left">
                        <div class="digit__section digit__section--vertical">0268</div>
                    </div>
                    <div class="digit__section-bottom-right">
                        <div class="digit__section digit__section--vertical">013456789</div>
                    </div>
                    <div class="digit__section-bottom">
                        <div class="digit__section">0235689</div>
                    </div>
                `;
            });        
        },
        event() {
            document.addEventListener('start', this.start.bind(this));
            document.addEventListener('stop', this.stop.bind(this));
        },
        start(e) {
            const hours = e.detail.hours;
            const minutes = e.detail.minutes;
            const seconds = e.detail.seconds;
            let i = hours * 3600 + minutes * 60 + seconds - 1;

            this.displayHours(hours);
            this.displayMinutes(minutes);
            this.displaySeconds(seconds);
        
            interval = setInterval(
                () => {
                    this.displayHours(this.getHoursPart(i));
                    this.displayMinutes(this.getMinutesPart(i));
                    this.displaySeconds(this.getSecondsPart(i));
        
                    i--;
        
                    if (i < 0) {
                        clearInterval(interval);
                    }
                }, 1000
            );
        
            dotsFlashing = setInterval(
                () => {
                    this.toggleAllDots();
        
                    if (i < 0) {
                        clearInterval(dotsFlashing);
                    }
                }, 500
            );
        },
        stop() {
            clearInterval(interval);
            clearInterval(dotsFlashing);
        },
        getSecondsPart(numberOfSeconds) {
            return numberOfSeconds % 60;
        },
        getMinutesPart(numberOfSeconds) {
            return ((numberOfSeconds % 3600) - (numberOfSeconds % 60)) / 60;
        },
        getHoursPart(numberOfSeconds) {
            return (numberOfSeconds - (numberOfSeconds % 3600)) / 3600;
        },
        toggleAllDots() {
            const dots = el.querySelectorAll('.dot');
            
            dots.forEach(dot => {
                if (dot.classList.value.includes('dot--active')) {
                    dot.classList.remove('dot--active');
                } else {
                    dot.classList.add('dot--active');
                } 
            });
        },
        displaySeconds(seconds) {
            this.displayNumberOnDigit(this.getFirstDigitOfNumber(seconds), '.seconds-high-digit');
            this.displayNumberOnDigit(this.getSecondDigitOfNumber(seconds), '.seconds-low-digit');
        },
        displayMinutes(minutes) {
            this.displayNumberOnDigit(this.getFirstDigitOfNumber(minutes), '.minutes-high-digit');
            this.displayNumberOnDigit(this.getSecondDigitOfNumber(minutes), '.minutes-low-digit');
        },
        displayHours(hours) {
            this.displayNumberOnDigit(this.getFirstDigitOfNumber(hours), '.hours-high-digit');
            this.displayNumberOnDigit(this.getSecondDigitOfNumber(hours), '.hours-low-digit');
        },
        getFirstDigitOfNumber(number) {
            let numberStr = ((number + '').length > 1) ? number + '' : '0' + number;
        
            return numberStr[0];
        },
        getSecondDigitOfNumber(number) {
            let numberStr = ((number + '').length > 1) ? number + '' : '0' + number;
        
            return numberStr[1];
        },
        displayNumberOnDigit(number, digitId) {
            let sections = this.getAllSectionsOfDigit(digitId);
        
            sections.forEach(section => {
                section.classList.remove('digit__section--active');
        
                if (section.innerText.includes(number)) {
                    section.classList.add('digit__section--active');
                }
            });
        },
        getAllSectionsOfDigit(digitId) {
            const digit = el.querySelector(digitId);
            const sections = digit.querySelectorAll('.digit__section');
        
            return sections;
        },
	};
})();

export default Timer;