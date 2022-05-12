const Timer = (function() {
    const el = document.querySelector('.timer');
    let timeInterval;
    let dotsInterval;


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
            const time = e.detail;

            this.setClock(time);
        },
        setClock(time) {
            const hoursHighDigit = el.querySelector('.hours-high-digit'),
                  hoursLowDigit = el.querySelector('.hours-low-digit'),
                  minutesHighDigit = el.querySelector('.minutes-high-digit'),
                  minutesLowDigit = el.querySelector('.minutes-low-digit'),
                  secondsHighDigit = el.querySelector('.seconds-high-digit'),
                  secondsLowDigit = el.querySelector('.seconds-low-digit');

            this.timeInterval = setInterval(updateClock.bind(this), 1000);
            this.dotsInterval = setInterval(this.toggleDots.bind(this), 500);
            
            updateClock.bind(this);

            function updateClock() {
                this.displayNumberOnDigit(this.getFirstDigitOfNumber(time.seconds), secondsHighDigit);
                this.displayNumberOnDigit(this.getSecondDigitOfNumber(time.seconds), secondsLowDigit);
                this.displayNumberOnDigit(this.getFirstDigitOfNumber(time.minutes), minutesHighDigit);
                this.displayNumberOnDigit(this.getSecondDigitOfNumber(time.minutes), minutesLowDigit);
                this.displayNumberOnDigit(this.getFirstDigitOfNumber(time.hours), hoursHighDigit);
                this.displayNumberOnDigit(this.getSecondDigitOfNumber(time.hours), hoursLowDigit);

                if (time.total <= 0) {
                    clearInterval(this.timeInterval);
                    clearInterval(this.dotsInterval);
                } else {
                    this.updateTime(time);
                }
            }
        },
        updateTime(time) {
            time.total--;
            time.hours = Math.floor(time.total / (60 * 60));
            time.minutes = Math.floor((time.total / 60) % 60);
            time.seconds = time.total % 60;
        },
        stop() {
            clearInterval(this.timeInterval);
            clearInterval(this.dotsInterval);
        },
        toggleDots() {
            const dots = el.querySelectorAll('.dot');
            
            dots.forEach(dot => {
                if (dot.classList.value.includes('dot--active')) {
                    dot.classList.remove('dot--active');
                } else {
                    dot.classList.add('dot--active');
                } 
            });
        },
        getFirstDigitOfNumber(number) {
            let numberStr = ((number + '').length > 1) ? number + '' : '0' + number;
        
            return numberStr[0];
        },
        getSecondDigitOfNumber(number) {
            let numberStr = ((number + '').length > 1) ? number + '' : '0' + number;
        
            return numberStr[1];
        },
        displayNumberOnDigit(number, digit) {
            let sections = digit.querySelectorAll('.digit__section');
        
            sections.forEach(section => {
                section.classList.remove('digit__section--active');
        
                if (section.innerText.includes(number)) {
                    section.classList.add('digit__section--active');
                }
            });
        },
	};
})();

export default Timer;