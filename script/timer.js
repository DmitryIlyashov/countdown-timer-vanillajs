const Timer = (function() {
    const el = document.querySelector('.timer');

	return {
		init: function() {
            this.render();
            this.event();
		},
        render: function() {
            const digits = el.querySelectorAll('.digit');

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
        },
        event: function() {
            document.addEventListener('start', this.start.bind(this));
            document.addEventListener('stop', this.stop.bind(this));
        },
        start: function() {
            console.log('OK');
        },
        stop: function() {
        },
	};
})();

export default Timer;